import React from "react";

import CVCard from "../../components/home/cvCard";
import Header from "../../components/home/header";
import Heading from "../../components/home/heading";
import Summary from "../../components/home/summary";
import Screen from "../../components/screen";
import presets from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <Screen>
      <Header />
      <div className={presets.upper_container}>
        <Summary />
        <div className={presets.cv_container}>
          <CVCard />
        </div>
      </div>
      <div className={presets.lower_container}>
        <div>
          <Heading text="Projects" />
        </div>
        <div>
          <p>Projects coming soon...</p>
        </div>
      </div>
    </Screen>
  );
};

export default Home;
