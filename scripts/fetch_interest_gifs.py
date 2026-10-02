"""Fetch curated thematic Tenor GIFs and record their source pages."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from PIL import Image, ImageDraw
import html
import io
import json
import re
import sys
import urllib.request

root = Path(__file__).resolve().parents[1]
destination = root / 'public' / 'interests'
sources = {
    'machine-learning': 'https://tenor.com/view/person-of-interest-poi-the-machine-neuron-activation-neural-network-gif-23102996',
    'coding': 'https://tenor.com/view/code-coding-programming-gif-11500074',
    'anime': 'https://tenor.com/view/berserk-guts-anime-gif-15388101',
    'workout': 'https://tenor.com/view/workout-gif-14118472',
    'tech': 'https://tenor.com/view/boston-dynamics-atlas-spot-ai-technology-gif-19889497',
    'music': 'https://tenor.com/view/cat-dance-cool-nodding-headphones-gif-16309365',
    'gaming': 'https://tenor.com/view/game-play-joystick-gif-14640047',
    'swimming': 'https://tenor.com/view/swimming-freestyle-swimming-gif-12885197',
}

def fetch(entry):
    name, page = entry
    source = urllib.request.urlopen(page, timeout=30).read().decode('utf-8')
    match = re.search(r'<meta[^>]+property="og:image"[^>]+content="([^"]+)"', source)
    url = html.unescape(match.group(1))
    if not url.startswith('https://media') or 'tenor.com/' not in url or not url.endswith('.gif'):
        raise ValueError(f'Unexpected media URL for {name}')
    data = urllib.request.urlopen(url, timeout=30).read()
    image = Image.open(io.BytesIO(data))
    if image.format != 'GIF' or image.n_frames < 2:
        raise ValueError(f'Not an animated GIF: {name}')
    (destination / f'{name}.gif').write_bytes(data)
    image.seek(image.n_frames // 3)
    image.convert('RGB').save(destination / f'{name}.png')
    print(f'{name}: {image.size}, {image.n_frames} frames, {len(data)} bytes')
    return name, {'source': page, 'media': url, 'frames': image.n_frames}

manifest_path = destination / 'sources.json'
manifest = json.loads(manifest_path.read_text(encoding='utf-8')) if manifest_path.exists() else {}
selected = [(name, page) for name, page in sources.items() if not sys.argv[1:] or name in sys.argv[1:]]
with ThreadPoolExecutor(max_workers=4) as pool:
    manifest.update(dict(pool.map(fetch, selected)))
(destination / 'sources.json').write_text(json.dumps(manifest, indent=2)+'\n', encoding='utf-8')
sheet = Image.new('RGB', (800, 440), '#12101d')
draw = ImageDraw.Draw(sheet)
for index, name in enumerate(sources):
    poster = Image.open(destination / f'{name}.png')
    poster.thumbnail((196, 188))
    x, y = (index % 4)*200, (index//4)*220
    sheet.paste(poster, (x+(196-poster.width)//2, y))
    draw.text((x+5, y+198), name, fill='white')
sheet.save(destination / 'preview.jpg')
