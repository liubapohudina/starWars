import React from "react";
import { Header } from "./components/Header/Header";
import { Characters } from "./components/СharactersList/СharactersList";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Characters/>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
