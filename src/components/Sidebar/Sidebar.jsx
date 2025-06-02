import React, { useContext } from 'react';
import Section from '../Section/Section';
import ContactInfo from '../ContactInfo/ContactInfo';
import SkillsList from '../SkillsList/SkillsList';
import { FaHeart, FaGlobeAmericas, FaAddressBook, FaCode, FaTools } from 'react-icons/fa';
import LanguageContext from '../../contexts/LanguageContext';
import TagList from '../TagList/TagList';
import './Sidebar.css';

const Sidebar = ({ contactData, skillsData, languagesData, interestsData, toolsData }) => {
    const { data } = useContext(LanguageContext);
    const { ui } = data;

    return (
        <div className="sidebar">
            <Section title={ui.contacts} icon={<FaAddressBook />}>
                <ContactInfo contacts={contactData} />
            </Section>

            <Section title={ui.skills} icon={<FaCode />}>
                <SkillsList skills={skillsData} />
            </Section>

            <Section title={ui.tools} icon={<FaTools />}>
                <SkillsList skills={toolsData} />
            </Section>

            <Section title={ui.languages} icon={<FaGlobeAmericas />}>
                <SkillsList skills={languagesData} />
            </Section>

            <Section title={ui.interests} icon={<FaHeart />}>
                <TagList tags={interestsData} />
            </Section>


        </div>
    );
};

export default Sidebar;