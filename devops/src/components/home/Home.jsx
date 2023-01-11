import React, { useState } from 'react';
import Home from './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import Search from '../searchbox/SearchBox';
import { faLinux, faJenkins, faGitAlt, faGolang, faReact, faKubernetes, faDocker, faGithub } from '@fortawesome/free-brands-svg-icons'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform the search here
  };

  return (
    <div className="home-page">
      <div className="home-page-container">
      <NavBar style={{ position: 'fixed', top: 0 }}>
        <Search onSearch={handleSearch} />
      </NavBar>
        <div className="home-page-content">
          <h1 align='center'>DevOps</h1>
          <p align='center'>Contains all my learning related to DevOps tools and technologies</p>
          <div className="home-page-content-tab">
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>Git</h2>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Git" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Git/GitCommands" target="_blank" class="orange-text">Commands</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>Docker</h2>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Docker" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Docker/Commands" target="_blank" class="orange-text">Commands</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>Kubernetes</h2>
                <li><a href="" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="" target="_blank" class="orange-text">Commands</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>Networking</h2>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Kubernetes" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Kubernetes/commands" target="_blank" class="orange-text">Commands</a></li>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Kubernetes/scripts" target="_blank" class="orange-text">Scripts</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>Linux</h2>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Linux" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Linux" target="_blank" class="orange-text">Commands</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>YAML</h2>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/YAML" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/YAML" target="_blank" class="orange-text">Codes</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>BASH</h2>
                <li><a href="" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="" target="_blank" class="orange-text">Commands</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>Pods</h2>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Pods" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Pods" target="_blank" class="orange-text">Examples</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>MicroServices CI/CD</h2>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/microservices-ci-cd-example-main" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/microservices-ci-cd-example-main" target="_blank" class="orange-text">Examples</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>KubeScape</h2>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/KubeScape" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/KubeScape" target="_blank" class="orange-text">Commands</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>Helm</h2>
                <li><a href="" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="" target="_blank" class="orange-text">Commands</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>GitOps</h2>
                <li><a href="" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="" target="_blank" class="orange-text">Commands</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>Argo CD</h2>
                <li><a href="" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="" target="_blank" class="orange-text">Commands</a></li>
            </ul>
            <ul  class="bullet-points">
                <h2 align='left' style={{color: "white"}}>Lens IDE</h2>
                <li><a href="" target="_blank" class="orange-text">Notes</a></li>
                <li><a href="" target="_blank" class="orange-text">Commands</a></li>
            </ul>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
            <div className="face1">
            <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJenkins} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGolang} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faLinux} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
            </div>
        </div>

          
          <div className="github-icon">
            <a href="https://github.com/adityassharma-ss/DevOps" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default HomePage;

