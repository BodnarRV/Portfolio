import './global.scss';
import './i18n';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Header from './Components/Header/Header';
import PreviewSection from './Components/Main/PreviewSection/PreviewSection';
import Quote from './Components/Main/PreviewSection/Quote/Quote';
import Projects from './Components/Main/Projects/Projects';
import Skills from './Components/Main/Skills/Skills';
import AboutMe from './Components/Main/AboutMe/AboutMe';
import Contacts from './Components/Main/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import MyProjects from './Components/MyProjects/MyProjects';
import MyContacts from './Components/MyContacts/MyContacts';
import Aboutme from './Components/Aboutme/AboutmeFull';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<>
            <PreviewSection />
            <Quote />
            <Projects />
            <Skills />
            <AboutMe />
            <Contacts />
          </>}/>
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/about-me" element={<Aboutme />} />
          <Route path="/contacts" element={<MyContacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
