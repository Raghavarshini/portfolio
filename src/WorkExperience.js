import React from 'react';
import ProjectCard from './ProjectCard';
import './WorkExperience.css';


const WorkExperience = () => {
  const projectData = [
    { title: 'Bitcoin Stats WebPage ', description: 'Data visualization using D3.js library was used to create charts from converted CSV files as the input resource from government databases to create a Webpage out of HTML and CSS to couple with the graphs generated as a resourceful site that promotes knowledge on Bitcoin stats today.', link: 'https://github.com/Raghavarshini/data-visualization-of-bitcoins' },
    { title: 'React Portfolio from scratch', description: 'My Portfolio Website developed using React, Javascript, HTML & CSS with extensive libraries and minimalistic animations, Gradient effects, Router paths, React Icons, keyframes and media queries. The website is resizable and responsive and is published in publicly accesible Domain ', link: 'https://github.com/Raghavarshini/portfolio' },
    { title: 'Decision Tree Salary Predictor', description: 'This model takes the Adult dataset and splits it to be trained inside a decision Tree that has been built from scratch using Python.The preprocessing is done using scikit libraries. However, the computational metrics of performance and speed are calculated without these libraries.It generates an Accuracy of 85%.', link: 'https://github.com/Raghavarshini/Adultincome-prediction-using-DecisionTreefromscratch/blob/main/Raghavarshini%20Ganesan%20Assignment%201%20datamining.ipynb' },
    { title: 'User Susceptibility to Clickbait Headlines', description: 'Regression Analysis through SPSS tool was conducted over respondents data through quantitative surveys to identify the extent to which "media dependence" based predominant factors such as affective, behavioral and cognitive effects affect users susceptibility to clickbait headlines. The Cognitive factors did not produce any effect. The Curiosity-Behavioral factor and Entertainment- Affective factor caused significant effect.' },
    { title: 'Sentiment Analysis- Chatgpt User Feedback', description: 'User feedbacks were captured and Sentiment analysis was done using various techniques where BERT gave the maximum accuracy - 96%', link: 'https://github.com/Raghavarshini/Sentiment-Analysis-Chat-GPT' },
    { title: 'Tableau Storyboard for Mask Mandates in SG ', description: 'Data visualization by streamline Storyboard analysis using Tableau to draw insights on current trends in Covid setup and hospitals and the enthralling crowded governement transportation which can be the highest place of susceptibility along with future predictions was made.' },
    { title: 'My Published Journal- RSU Enhancements in VANET', description: 'Introduction of GPRS in Road side units for faster transmission of data between vehicle sensors in the event of any accident thereby alerting other vehicles within a range along with a feature to transfer immediate help via automatic ambulance reach in the local zone exhibited using Vehicular adhoc networks.', link: 'https://ijarbest.com/journal/v7i1' },
    { title: 'Critical Inquiry- Usability Research for Prototype Website', description: 'The study conducted is based on Design Science Research Methodology (DSRM) involving six methodological implications within 4 stages which is elaborated by means of wireframe model images describing the web-app structure.The results indicate that the exposed adult learners find the developed web app useful and recommendable', link: 'https://www.dropbox.com/scl/fi/vudsk15s8yjmtvt3o2lmn/Report_LGP-04.pdf?rlkey=xt5r468h0vjdw9t84a6693uw2&st=df44qwka&dl=0' },
    { title: 'IOT Smart Campus- Intensive Study Using SDLC & Testing Techniques', description: 'A comprehensive Agile Analysis to implement the Smart campus was conducted with a series of tests to determine the Positive results. A comprehensive 8 step testing - regression, compatibility, reliability, scalability, security , performance & acceptance testing- was coprehended to be used', link: 'https://www.dropbox.com/scl/fi/miz5swmebk02sl6vjnvwf/Software-Engineering-Group-Assignment.pdf?rlkey=j41b2l8hopvz25r3cmfasqlyb&st=v9364uxx&dl=0' },
    { title: 'Associaltion rule Data Mining -Apriori Vs Bruteforce', description: 'A comprehensive comparison between Apriori and Bruteforce Algorithm was conducted using Kaggle dataset through 25 epochs. Result showed the better stability of Apriroi in Association Rule Mining Algorithm', link: 'https://www.dropbox.com/scl/fi/0g9ue3gyb89ckdfy3iu78/dma2-edited.pdf?rlkey=5w2pmak8yrmn9ks3a8nk4csdu&st=n9ztbawu&dl=0' },// Add more projects here
  ];

  return (
    <div className="projects-container">
      
      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}


    </div>
    
  );
};


export default WorkExperience;
