import React, { useState } from 'react';
import NavBar from './NavBar.scss'
import SearchBox from '../searchbox/SearchBox';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <a href="#" className="burger-button" onClick={toggleNav}>
        &#9776;
      </a>
      <div className={`nav-items-container ${isNavOpen ? 'nav-items-container-open' : ''}`}>
        <ul className="navbar-nav">
          {/* nav items here */}
        </ul>
      </div>
    </nav>
  );
};

const LandingPage = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Perform the search here
    };
  
    return (
      <div className="landing-page">
        <nav className="navbar">
          <SearchBox onSearch={handleSearch} searchQuery={searchQuery} />
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'DevOps' ? 'active' : ''}`}
                onClick={() => setActiveTab('DevOps')} align="center">
              Contents
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'Git' ? 'active' : ''}`}
                onClick={() => setActiveTab('Git')}
              >
                Git
              </a>
            </li>
            <li className="nav-item">
              <a href="#"
                className={`nav-link ${activeTab === 'Docker' ? 'active' : ''}`}
                onClick={() => setActiveTab('Docker')}
              >
                Docker
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'Kubernetes' ? 'active' : ''}`}
                onClick={() => setActiveTab('Kubernetes')}
              >
                Kubernetes
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'Networking' ? 'active' : ''}`}
                onClick={() => setActiveTab('Networking')}
              >
                Networking
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'Linux' ? 'active' : ''}`}
                onClick={() => setActiveTab('Linux')}
              >
                Linux
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'YAML' ? 'active' : ''}`}
                onClick={() => setActiveTab('YAML')}
              >
                YAML
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'Bash' ? 'active' : ''}`}
                onClick={() => setActiveTab('Bash')}
              >
                Bash
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'Pods' ? 'active' : ''}`}
                onClick={() => setActiveTab('Pods')}
              >
                Pods
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'Microservices CI/CD' ? 'active' : ''}`}
                onClick={() => setActiveTab('Microservices CI/CD')}
              >
                Micro-Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'KubeScape' ? 'active' : ''}`}
                onClick={() => setActiveTab('KubeScape')}
              >
                KubeScape
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'Helm' ? 'active' : ''}`}
                onClick={() => setActiveTab('Helm')}
              >
                Helm
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'GitOps' ? 'active' : ''}`}
                onClick={() => setActiveTab('GitOps')}
              >
                GitOps
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'ArgoCD' ? 'active' : ''}`}
                onClick={() => setActiveTab('ArgoCD')}
              >
                ArgoCD
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeTab === 'Lens IDE' ? 'active' : ''}`}
                onClick={() => setActiveTab('Lens IDE')}
              >
                Lens IDE
              </a>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          {/* Content for each tab goes here */}
          {/* You can use a switch statement to render the appropriate content based on the activeTab state */}
          {/* For example: */}
          {/*
            switch (activeTab) {
              case 'home':
                return <HomeContent />;
              case 'about':
                return <AboutContent />;
              case 'services':
                return <ServicesContent />;
              case 'contact':
                return <ContactContent />;
              default:
                return null;
            }
          */}
        </main>
      </div>
    );
  };
  
  export default LandingPage;