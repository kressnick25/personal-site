import React from 'react';
import '../styles/global.css';
import AboutMe from '../components/AboutMe';
import WorkingOn from "../components/WorkingOn";
//import LiveDemos from "./LiveDemos";


function App() {
     return (
    <div className="App">
        <AboutMe />
        <div className={"content"}>
                <WorkingOn />
	     	{/*<LiveDemos/>*/}
            </div>
    </div>
  );
}

export default App;
