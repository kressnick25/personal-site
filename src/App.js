import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import {WorkingOn} from "./WorkingOn";
import LiveDemos from "./LiveDemos";


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
