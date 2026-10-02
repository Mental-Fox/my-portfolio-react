"""Draw small original looping scenes for the portfolio's interests."""
from PIL import Image, ImageDraw
from pathlib import Path
import math

out = Path(__file__).resolve().parents[1] / 'public' / 'interests'
out.mkdir(exist_ok=True)
bg, ink, muted, bright = '#12101d', '#bca1ef', '#57456e', '#eee4ff'
themes = ['machine-learning', 'coding', 'anime', 'workout', 'tech', 'music', 'gaming', 'swimming']
for theme in themes:
    frames = []
    for frame in range(32):
        phase = frame / 32 * math.tau
        im = Image.new('RGB', (320, 180), bg)
        d = ImageDraw.Draw(im)
        for x in range(0, 320, 20):
            d.line((x, 0, x, 180), fill='#1c1729')
        for y in range(0, 180, 20):
            d.line((0, y, 320, y), fill='#1c1729')
        if theme == 'machine-learning':
            layers = [[(65,y) for y in (55,90,125)], [(160,y) for y in (35,70,105,140)], [(255,y) for y in (65,115)]]
            for a,b in zip(layers, layers[1:]):
                for start in a:
                    for end in b:
                        d.line((*start,*end), fill=muted)
                        t = (frame/32 + start[1]/180) % 1
                        x,y = start[0]+(end[0]-start[0])*t, start[1]+(end[1]-start[1])*t
                        d.ellipse((x-2,y-2,x+2,y+2),fill=bright)
            for layer in layers:
                for x,y in layer:
                    d.ellipse((x-7,y-7,x+7,y+7),fill=bg,outline=ink,width=2)
        elif theme == 'coding':
            d.rounded_rectangle((45,25,275,156),radius=9,fill=bg,outline=muted,width=2)
            for x in (60,72,84): d.ellipse((x,36,x+4,40), fill=ink)
            lines = ['def build_report():', '  data = collect()', '  clean = normalize(data)', '  return export(clean)']
            for n,line in enumerate(lines):
                y = 58+n*21
                d.text((60,y),line[:min(len(line),int(frame*3-n*14))] if frame*3>n*14 else '',fill=bright if n%2 else ink)
            if frame%16<8: d.rectangle((235,132,241,141),fill=ink)
        elif theme == 'anime':
            # A tiny original cat character with blinking eyes and drifting stars.
            bob = math.sin(phase)*3
            d.polygon([(109,85+bob),(109,43+bob),(142,65+bob),(176,65+bob),(210,43+bob),(210,87+bob)],fill=muted,outline=ink)
            d.rounded_rectangle((109,65+bob,210,140+bob),radius=30,fill=muted,outline=ink,width=2)
            for x in (137,182):
                if frame in (12,13,14): d.line((x-5,98+bob,x+5,98+bob),fill=bright,width=2)
                else: d.ellipse((x-4,91+bob,x+4,103+bob),fill=bright)
            d.polygon([(155,107+bob),(165,107+bob),(160,113+bob)],fill=ink)
            for x,y in [(65,65),(254,111),(244,37)]:
                s=4+math.sin(phase+x)*2
                d.line((x-s,y,x+s,y),fill=ink,width=2); d.line((x,y-s,x,y+s),fill=ink,width=2)
        elif theme == 'workout':
            y=85+math.sin(phase)*17
            d.line((89,y,231,y),fill=bright,width=6)
            for x in (89,231):
                d.rounded_rectangle((x-12,y-28,x+12,y+28),radius=4,fill=muted,outline=ink,width=2)
                d.rectangle((x-18,y-19,x-12,y+19),fill=ink)
            d.line((125,146,195,146),fill=muted,width=2)
        elif theme == 'tech':
            d.rounded_rectangle((121,51,199,129),radius=9,fill=muted,outline=ink,width=2)
            d.text((143,83),'CPU',fill=bright)
            for i in range(6):
                x=132+i*11
                d.line((x,36,x,51),fill=ink,width=2); d.line((x,129,x,144),fill=ink,width=2)
                y=62+i*11
                d.line((105,y,121,y),fill=ink,width=2); d.line((199,y,215,y),fill=ink,width=2)
            r=44+frame*1.5
            d.rounded_rectangle((160-r,90-r,160+r,90+r),radius=18,outline=muted,width=1)
        elif theme == 'music':
            for i in range(20):
                h=12+abs(math.sin(phase+i*.53))*65
                x=62+i*10
                d.rounded_rectangle((x,90-h/2,x+5,90+h/2),radius=2,fill=ink if i%3 else bright)
        elif theme == 'gaming':
            d.rounded_rectangle((86,57,234,127),radius=25,fill=muted,outline=ink,width=2)
            d.line((115,77,115,107),fill=bright,width=5); d.line((100,92,130,92),fill=bright,width=5)
            for n,(x,y) in enumerate([(207,78),(222,92),(207,106),(192,92)]):
                d.ellipse((x-5,y-5,x+5,y+5),fill=bright if frame//8==n else ink)
            d.ellipse((151,101,163,113),outline=ink,width=2)
        else:
            for n in range(4):
                pts=[(x,63+n*24+math.sin(x/27+phase+n)*6) for x in range(30,292,3)]
                d.line(pts,fill=ink if n==1 else muted,width=3)
            x=160+math.sin(phase)*25
            d.ellipse((x+20,62,x+36,78),fill=bright)
            d.line((x-19,87,x+17,77,x-2,53,x-22,65),fill=bright,width=4)
        frames.append(im)
    frames[20].save(out / f'{theme}.png')
    frames[0].save(out / f'{theme}.gif',save_all=True,append_images=frames[1:],duration=75,loop=0,optimize=True)
print('Created eight GIF loops and static posters.')
