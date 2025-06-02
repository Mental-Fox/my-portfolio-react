import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from '../../components/MainContent/MainContent';
import LanguageContext from '../../contexts/LanguageContext';
import './ResumePage.css';

const ResumePage = () => {
    const { data } = useContext(LanguageContext);

    const {
        personalInfo,
        contactData,
        skillsData,
        toolsData,
        languagesData,
        interestsData,
        aboutText,
        experienceData,
        projectsData,
        educationData,
        certificatesData,
    } = data;

    return (
        <div className="resume-page">
            <Header
                name={personalInfo.name}
                title={personalInfo.title}
                avatar={personalInfo.avatar}
            />

            <div className="resume-page__content">
                <Sidebar
                    contactData={contactData}
                    skillsData={skillsData}
                    toolsData={toolsData}
                    languagesData={languagesData}
                    interestsData={interestsData}
                />

                <MainContent
                    aboutText={aboutText}
                    experienceData={experienceData}
                    projectsData={projectsData}
                    educationData={educationData}
                    certificatesData={certificatesData}
                />
            </div>
        </div>
    );
};

export default ResumePage;