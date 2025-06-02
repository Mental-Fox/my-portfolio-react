// components/MainContent/MainContent.jsx
import React, { useContext } from 'react';
import Section from '../Section/Section';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import ProjectItem from '../ProjectItem/ProjectItem';
import EducationItem from '../EducationItem/EducationItem';
import CertificateItem from '../CertificateItem/CertificateItem';
import { FaUser, FaSplotch, FaInstalod, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import LanguageContext from '../../contexts/LanguageContext';

import './MainContent.css';

const MainContent = ({
    aboutText,
    experienceData,
    projectsData,
    educationData,
    certificatesData
}) => {

    const { data } = useContext(LanguageContext);
    const { ui } = data;
    return (
        <div className="main-content">
            <Section title={ui.about} icon={<FaUser size={18} />}>
                {aboutText.map((item, index) => (
                    <p key={index} className="main-content__about" style={{ marginBottom: '0.5rem' }}>
                        <strong>{item.title}:</strong> {item.content.split('\n').map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                                {line}
                                <br /> {/* Add line breaks for multi-line content */}
                            </React.Fragment>
                        ))}
                    </p>
                ))}
            </Section>

            <Section title={ui.education} icon={<FaGraduationCap size={18} />}>
                {educationData.map((edu, index) => (
                    <EducationItem key={index} {...edu} />
                ))}
            </Section>

            <Section title={ui.experience} icon={<FaBriefcase size={18} />}>
                {experienceData.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </Section>

            <Section title={ui.projects} icon={<FaInstalod size={18} />}>
                {projectsData.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </Section>

            <Section title={ui.certificates} icon={<FaSplotch size={18} />}>
                {certificatesData.map((cert, index) => (
                    <CertificateItem key={index} {...cert} />
                ))}
            </Section>
        </div>
    );
};

export default MainContent;