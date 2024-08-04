import React from "react";
import { Header } from "./components/Header/Header";
import { CharactersList } from "./components/СharactersList/СharactersList";
import { Footer } from "./components/Footer/Footer";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <CharactersList/>
      </main>
      <Footer/>
    </>
  );
};

export default App;
