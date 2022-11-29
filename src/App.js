import logo from './logo.svg';
import "./header.css";
import "./MainBody.css";

import { Header } from "./Header.js";
import { MainBody } from './MainBody.js';

function App() {
  return (
    <div className="Root">
      <Header />
      <MainBody/>
    </div>
  );
}

export default App;
