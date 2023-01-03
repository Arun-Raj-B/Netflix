import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, originals, horror,comedy,romance,documentary } from "./url";
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentary} title="Documentary" isSmall />
    </div>
  );
}

export default App;
