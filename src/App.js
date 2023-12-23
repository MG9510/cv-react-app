import React, {useEffect} from 'react';

import Summary from './components/c0_Summary';
import WorkExp from './components/c1_WorkExp';
import WorkAchievements from './components/c2_WorkAchv';
import Education from './components/c3_Education';
import Certifications from './components/c4_Certifications';

import './css/App.css';

function App() {

  useEffect(() => {document.body.style.zoom = "85%";}, [])

  return (
    <div className="App">
      <Summary />
      <div className='flex-elem main-content'>
        <div className="accordion" id="mainContent">
          <WorkExp />
          <WorkAchievements />
          <Education />
          <Certifications />
        </div>
      </div>      
    </div>
  );
}

export default App;
