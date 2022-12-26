import React, { useState } from 'react';
import Home from './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NavBar from '../navbar/NavBar';
import Search from '../searchbox/SearchBox';

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
          <p align='center'>Contains all my learning related to DevOps tools and tech.</p>
          <div className="home-page-content-tab">
            <ul>
                <h2 align='left'>Git</h2>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Git" target="_blank">Notes</a></li>
                <li><a href="https://github.com/adityassharma-ss/DevOps/tree/main/Git/GitCommands" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>Docker</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>Kubernetes</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>Networking</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>Linux</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>YAML</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>BASH</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>Pods</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>MicroServices CI/CD</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>KubeScape</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>Helm</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>GitOps</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>Argo CD</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
            <ul>
                <h2 align='left'>Lens IDE</h2>
                <li><a href="" target="_blank">Notes</a></li>
                <li><a href="" target="_blank">Commands</a></li>
            </ul>
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

