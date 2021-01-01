import React from 'react';
import UniversityBar from './UniversityBar'
import StateBar from './StateBar'
import CountBar from './CountBar';
function Home() {
  
  return (
    <div>
      <h1>DASHBOARD</h1>
      <CountBar></CountBar>
      <UniversityBar></UniversityBar>
      <StateBar></StateBar>
    </div>
  );
}
export default Home;