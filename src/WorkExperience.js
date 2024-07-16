import React from 'react';
import styled from 'styled-components';

const WorkExperienceSection = styled.section`
  background-color: black;
  color: gold;
  padding: 50px;
`;

const WorkExperience = () => {
  return (
    <WorkExperienceSection>
      <h2>Work Experience & Projects</h2>
      <p>List your work experience and showcase your projects.</p>
    </WorkExperienceSection>
  );
};

export default WorkExperience;
