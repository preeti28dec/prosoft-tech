import React from "react";
import GrowWithUs from "./grow-with-us";
import JoinUsToWitness from "./Join-us-witness";
import StartCareers from "./careers-start";
import CurrentOpenings from './opening';
const Careers = () => {
  return (
    <div>
      <StartCareers />
      <CurrentOpenings />
      {/* <JoinUsToWitness /> */}
      <GrowWithUs />
    </div>
  );
};
export default Careers;
