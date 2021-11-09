import './App.css';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Main from './components/Main';
import Navbar from './components/Navbar';
import Enterprises from './components/Enterprises';
import Models from './components/Models';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Enterprises />
      <Models />
      <Footer />
    </div>
  );
}

export default App;
