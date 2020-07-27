import React from 'react';

import MainMenu from "../components/Menu/MainMenu";
import MainJumbotron from "../components/Jumbotron/MainJumbotron";
import MainAbout from "../components/About/MainAbout";
import MainBlog from "../components/Blog/MainBlog";
import MainGuru from "../components/Guru/MainGuru";
import MainPaket from "../components/Paket/MainPaket";


function App() {
  return (
    <>
      <MainMenu />
      <MainJumbotron />
      <MainAbout />
      <MainBlog />
      <MainPaket />
    </>
  );
}

export default App;
