import './App.css';
import Menu from "./components/menu/Menu";
import {Fragment} from "react";
import Header from "./components/header/Header";
import Hello from "./components/hello/Hello";
import Resume from "./components/resume/Resume";
import Project from "./components/project/Project";
import './css/main.css';
import './css/color.css';
import './css/monochrome.css';
import Contact from "./components/contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
     <Fragment>
         <Menu/>
         <Header/>
         <Hello/>
         <Resume/>
         <Project/>
         <Contact/>
     </Fragment>
  );
}

export default App;
