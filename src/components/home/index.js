import React from 'react';
import StartPage from './start';
import Slider from './slider';
import ServiceHome from './service';
import MilestoneTimeline from './milestoneTimeline';
import OurStorySection from './ourStory';
function Home() {
  return (
    <div >
     <StartPage/>
     {/* <Slider/> */}
     <ServiceHome/>
     {/* <MilestoneTimeline/> */}
     <OurStorySection/>
    </div>
  );
}

export default Home;