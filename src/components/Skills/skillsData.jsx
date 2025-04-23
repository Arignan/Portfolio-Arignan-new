// src/skillsData.js
// Using react-icons, import the icons needed OR define icon names/classes if using another library
// Example using react-icons (install: npm install react-icons)
// You WILL need to find appropriate icons for each skill from react-icons (e.g., 'fa', 'si', 'bs', 'di', 'ai')
// The examples below are placeholders! You NEED to find real ones.

// Import example icon types - you'll need many more specific ones
import {
    FaChartLine, FaBrain, FaRobot, FaCogs, FaDatabase, FaCode, FaCodeBranch,
    FaComments, FaCamera, FaNetworkWired, FaPython, FaReact, FaGitAlt, FaDocker,
    FaCheck, FaSearch, FaUsers, FaLightbulb, FaQuoteRight, FaBook, FaClock, FaComment,FaAws, FaProjectDiagram,FaMicrochip,FaSyncAlt ,FaBug ,FaTools ,FaInfoCircle
  } from 'react-icons/fa';
  import { FaPeopleGroup } from "react-icons/fa6";

  import {
    SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiGooglecloud, SiMysql, SiPostgresql, SiJupyter,SiPandas, SiJavascript, SiNumpy, SiMongodb,SiPlotly
  } from 'react-icons/si';
  import { BsDatabaseFillCheck, BsSpeedometer2 } from "react-icons/bs";
  import { AiOutlineConsoleSql, AiOutlineCloudServer } from "react-icons/ai";
  import { DiVisualstudio } from "react-icons/di";
  import { GiBrainFreeze } from "react-icons/gi";
  import { HiOutlineLightBulb } from "react-icons/hi";

  import { LuChartScatter } from "react-icons/lu";
  import { VscAzure } from "react-icons/vsc";
  
  export const skillsData = {
    technical: [
      // --- Data Science / Analysis ---
      { name: "Statistical Analysis", icon: <FaChartLine /> },
      { name: "Data Analysis & Interpretation", icon: <FaSearch /> }, // Combined
      { name: "Data Wrangling and Cleaning", icon: <FaCogs /> }, // Using Cogs icon as example
      { name: "Feature Engineering", icon: <FaLightbulb /> }, // Example
      { name: "Exploratory Data Analysis (EDA)", icon: <FaSearch /> },
      { name: "Data Visualization", icon: <FaChartLine/> }, // Changed icon
      { name: "Dashboards Creation", icon: <BsSpeedometer2 /> },
      // --- ML / AI ---
      { name: "Machine Learning (ML)", icon: <FaRobot /> },
      { name: "Deep Learning (DL)", icon: <FaBrain /> },
      { name: "ML Algorithms", icon: <FaProjectDiagram /> },
      { name: "Predictive Modeling", icon: <FaChartLine /> },
      { name: "Natural Language Processing (NLP)", icon: <FaComments /> },
      { name: "Computer Vision", icon: <FaCamera /> },
      { name: "Neural Networks", icon: <FaNetworkWired /> },
      { name: "Artificial Intelligence (AI)", icon: <FaBrain /> },
      // --- Engineering / Deployment ---
      { name: "Model Deployment & Monitoring", icon: <AiOutlineCloudServer /> },
      { name: "Performance Optimization", icon: <BsSpeedometer2 /> },
      { name: "GPU Programming (Basic)", icon: <FaMicrochip/>}, // Updated Icon
      // --- Software Eng ---
      { name: "Software Engineering Principles", icon: <FaCodeBranch /> },
      { name: "System Design & Architecture", icon: <FaProjectDiagram /> },
      { name: "Agile Methodologies", icon: <FaSyncAlt /> }, // Updated Icon
      { name: "Testing & Debugging", icon: <FaBug/>}, // Updated Icon
      { name: "DevOps Principles (CI/CD)", icon: <FaTools /> } // Updated Icon
    ],
    tool: [
      { category: "Programming Languages", tools: [{ name: "Python", icon: <FaPython /> }, { name: "JavaScript (ES6+)", icon: <SiJavascript /> }, { name: "SQL", icon: <AiOutlineConsoleSql /> }, /*{ name: "R", icon: <FaRProject /> }, { name: "C++", icon: <SiCplusplus /> }*/] },
      { category: "Data Analysis/Wrangling", tools: [{ name: "Pandas", icon: <SiPandas /> }, { name: "NumPy", icon: <SiNumpy /> }, /*{ name: "Google Analytics", icon: <SiGoogleanalytics/> }*/] },
      { category: "ML/DL Frameworks", tools: [{ name: "Scikit-learn", icon: <SiScikitlearn /> }, { name: "TensorFlow", icon: <SiTensorflow /> }, { name: "PyTorch", icon: <SiPytorch /> }, /*{ name: "Keras", icon: <SiKeras /> }*/] },
      { category: "Data Visualization", tools: [{ name: "Matplotlib", icon: <LuChartScatter  /> }, { name: "Seaborn", icon: <SiNumpy /> }, { name: "Plotly", icon: <SiPlotly /> },/*{ name: "Tableau", icon: <SiTableau /> }, { name: "Power BI", icon: <SiPowerbi /> }*/] },
      { category: "Databases", tools: [{ name: "MySQL", icon: <SiMysql /> }, { name: "PostgreSQL", icon: <SiPostgresql /> }, { name: "MongoDB", icon: <SiMongodb /> } ] },
      { category: "Version Control", tools: [{ name: "Git & GitHub", icon: <FaGitAlt /> }] },
      { category: "Cloud Platforms", tools: [{ name: "AWS (S3, EC2, SageMaker)", icon: <FaAws /> }, { name: "Google Cloud (Basic)", icon: <SiGooglecloud /> }, { name: "Azure (Basic)", icon: <VscAzure  /> }] },
      { category: "Development & Deployment", tools: [{ name: "Docker", icon: <FaDocker /> }, { name: "VS Code", icon: <DiVisualstudio /> }, { name: "Jupyter Notebook/Lab", icon: <SiJupyter /> }, /* { name: "PyCharm", icon: <SiPycharm /> } */ ] },
      { category: "Computer Vision", tools: [{ name: "OpenCV", icon: <SiOpencv /> }] },
      // { category: "Spreadsheets", tools: [ { name: "Excel", icon: <SiMicrosoftexcel /> }, { name: "Google Sheets", icon: <SiGooglesheets /> }] }, // Decide if needed
    ],
    soft: [
      { name: "Problem-Solving", icon: <FaCogs /> },
      { name: "Critical Thinking", icon: <FaBrain /> },
      { name: "Communication", icon: <FaComment /> },
      { name: "Teamwork & Collaboration", icon: <FaUsers /> },
      { name: "Adaptability", icon: <FaSyncAlt/>},
      { name: "Self-Learning & Curiosity", icon: <FaSearch /> }, // Combined
      { name: "Time Management", icon: <FaClock /> },
      { name: "Attention to Detail", icon: <FaInfoCircle/> },
      { name: "Curiosity", icon: <GiBrainFreeze/> },
      { name: "Creativity", icon: <HiOutlineLightBulb /> },
      { name: "Leadership", icon: <FaPeopleGroup /> }
    ],
    other: [
       { name: "Project Management", icon: <FaProjectDiagram /> },
       { name: "Research & Innovation Mindset", icon: <FaLightbulb /> },
       // Add any other relevant skills
    ]
  };
  
  // --- Helper to import MANY icons dynamically if preferred (More advanced) ---
  // This reduces import boilerplate but adds complexity during build/lookup
  // Example: Store only icon names as strings in data, then use a lookup component.
  // import * as FaIcons from 'react-icons/fa';
  // import * as SiIcons from 'react-icons/si';
  // ... etc ...
  // const iconLibraries = { fa: FaIcons, si: SiIcons };
  // export const Icon = ({ lib, name }) => {
  //   const Library = iconLibraries[lib];
  //   const IconComponent = Library ? Library[name] : null;
  //   return IconComponent ? <IconComponent /> : null;
  // };
  // Then in data: { name: "Python", icon: { lib: 'fa', name: 'FaPython'} }
  // And in component: <Icon {...skill.icon} />
  // -- Sticking to direct import for simplicity now --