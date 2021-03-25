import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import './App.css';
import Urunler from "./components/Urunler"



class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Content />
        <Urunler />
        <Urunler />
        <Urunler />
        <Urunler />
        <Urunler />
      </div>
    )
  }
}
export default App;
