import React from "react";

import CV from "../../components/home/cv";
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
          <CV />
        </div>
      </div>
    </Screen>
  );
};

export default Home;
