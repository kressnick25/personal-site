import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import {WorkingOn} from "./WorkingOn";
import LiveDemos from "./LiveDemos";
import ContactMe from "./ContactMe";
import background from './_img/background.jpg';


function App() {
  return (
    <div className="App">
        <AboutMe />
        <div className={"content"}>
                <WorkingOn />
                <LiveDemos/>
            </div>
    </div>
  );
}

export default App;
