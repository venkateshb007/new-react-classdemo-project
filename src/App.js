import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

class App extends Component{
  render(){
    return<div>
      <Header />
      <Content />
      <Footer />
    </div>
  }

}

export default App;
