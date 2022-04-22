import React from 'react';
import Tabs from "./components/Tabs";
import "./App.css";
import { MyMap, MyMapCity, MyMapSchool, MyMapVacation } from './components/MyMaps';

function App() {
  return (
    <div className="container">
      <h1>Auf Marios Spuren</h1>
      <Tabs>
        <div label="Zuhause">
          <MyMap lat="53.551086" long="9.993682" height="500" anchorLat="" anchorLong="" />
        </div>
        <div label="Schule">
          <MyMapSchool />
        </div>
        <div label="Schönster Strandurlaub">
          <MyMapVacation />
        </div>
        <div label="Lieblingsstadt in Europa">
          <MyMapCity />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
