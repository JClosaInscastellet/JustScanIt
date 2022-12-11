import logo from './logo.svg';
import "./header.css";
import "./MainBody.css";
import "./Login.css";
import "./ShopHistory.css"
import "./Loged.css"
import "./list.css"
import "./register.css"

import UserContext, { UserProvider } from './usercontext';
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
import { Register } from './Register';
function init() {
  let products = [
    {
      name: "Espaguetis Integrals 500gr ",
      price: "1.60",
      store: "Rito pls",
      img: "https://distribucioneslorri.com/39-large_default/spaghetti-500g.jpg"
    },
    {
      name: "Cactus Cactutidae Potatensi",
      price: "4.60",
      store: "Platoforo",
      img: "https://m.media-amazon.com/images/I/71676GXL3PL._AC_SX466_.jpg"
    },
    {
      name: "USB Kignstone 8GB",
      price: "2.50",
      store: "Kingstone",
      img: "https://hinelco.es/WebRoot/Store19/Shops/a53583f5-2f2f-4d6c-b056-235d326a7053/586A/C8E1/8281/DF78/29AF/0A48/3548/1E00/1456048_5.jpg"

    },
    {
      name: "Got Aigua 200ml",
      price: "0.30",
      store: "Carrefive",
      img: "https://www.ikea.com/in/en/images/products/dyrgrip-glass-clear-glass__0712419_pe728838_s5.jpg?f=s"

    },

  ]
  let usersToStore = [
    {
      username: "test",
      password: "1234",
      products: [{ name: products[0].name, price: products[0].price, img: products[0].img, date: "24/7/2022" },
      { name: products[1].name, price: products[1].price, img: products[1].img, date: "2  1/2/2022" },
      { name: products[1].name, price: products[1].price, img: products[1].img, date: "21/2/2022" },
      { name: products[2].name, price: products[2].price,img: products[2].img, date: "17/2/2022" },
      { name: products[2].name, price: products[2].price,img: products[2].img, date: "17/2/2022" },
      { name: products[2].name, price: products[2].price,img: products[2].img, date: "17/2/2022" },
      { name: products[3].name, price: products[3].price,img: products[3].img, date: "14/8/2022" }]
    },
    {
      username: "Anna",
      password: "1234",
      products: [{ name: products[0].name, price: products[0].price, img: products[0].img, date: "24/7/2022" }]
    },

  ];
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("users", JSON.stringify(usersToStore));

}

function App() {
  init();
  return (
    <div className="Root" >
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<><Header /><MainBody /></>} />
            <Route path="Login" element={<><Header /><Login /></>} />
            <Route path="ShopHistory" element={<ShopHistory />} />
            <Route path="Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>

  );
}

export default App;
