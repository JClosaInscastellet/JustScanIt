import logo from './logo.svg';
import "./header.css";
import "./MainBody.css";
import "./Login.css";
import "./ShopHistory.css"
import "./Loged.css"

import { Header } from "./Header.js";
import { MainBody } from './MainBody.js';
import { Layout, Login } from './Login.js';
import { ShopHistory } from './ShopHistory';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Switch
} from "react-router-dom";
function init() {
  let products = [
    {
      name: "Espaguetis 500gr",
      price: "1.60",
      store: "Rito pls"

    },
    {
      name: "Cactus Cactutidae Potatensi",
      price: "4.60",
      store: "Platoforo"

    },
    {
      name: "USB Kignstone 8GB",
      price: "2.50",
      store: "Kingstone"

    },
    {
      name: "Got Aigua 200ml",
      price: "0.30",
      store: "Carrefive"

    },
    
  ]
  let usersToStore = [
    {
      username: "test",
      password: "1234",
      products: [{ name: products[0].name, price: products[0].price, date: "24/7/28" }]
    }
  ];
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("users", JSON.stringify(usersToStore));

}

function App() {
  init();
  return (
    <div className="Root" >
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<><Header /><MainBody /></>} />
          <Route path="Login" element={<><Header /><Login /></>} />
          <Route path="ShopHistory" element={<ShopHistory />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
