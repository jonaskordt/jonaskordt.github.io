import React from "react";

import CVCard from "../../components/home/cvCard";
import Header from "../../components/home/header";
import Summary from "../../components/home/summary";
import Screen from "../../components/screen";
import presets from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <Screen>
      <Header />
      <div className={presets.container}>
        <Summary />
        <div className={presets.cv_container}>
          <CVCard />
        </div>
      </div>
    </Screen>
  );
};

export default Home;
