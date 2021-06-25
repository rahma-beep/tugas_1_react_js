import React, { Component } from "react";
import MenuUtama from "./page/MenuUtama";
import MenuProduct from "./page/MenuProduct";
import MenuKontak from "./page/MenuKontak";
import MenuTentangKami from "./page/MenuTentangKami";


const Footer = () => {
  return (
    <div>
    <h2>Ini Halaman Untuk Footer</h2>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
      <h2>Ini Halaman Untuk Header</h2>
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      <Footer />
      </div>
    );
  }
}


export default App;
