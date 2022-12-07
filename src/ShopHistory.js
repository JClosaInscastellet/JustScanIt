import React from "react";
import { Link } from "react-router-dom";

export class ShopHistory extends React.Component {
    constructor(props) {
        super(props);
        /*
        this.history = <></>
        this.products = JSON.parse(localStorage.getItem("products"));
        this.users = JSON.parse(localStorage.getItem("users"));
        this.userHistory = null;
        for (let i = 0; i < this.users.length; i++) {
            
        }
         */

    }
    
    toggleMenu() {

        console.log("Menu");
        let elements = document.getElementsByClassName("menuLinks");
        console.log("Toggle");
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].style.display === 'none') {
                // then make it "flex"... 
                elements[i].style.display = 'flex';
            } else {
                // otherwise set display to "none"
                elements[i].style.display = 'none';
            }

        }


    }
    render() {
        return (
            <div className="loggedBody">
                <div className="logedHeader">
                    <img src={require("./img/logo.png")}></img>
                    <i className="fa-solid fa-bars" onClick={this.toggleMenu}></i>
                </div>
                <div className="menuLinks" style={{display:"none"}}>
                    <Link to="/ShopHistory"><button>ShopHistory</button></Link>
                    <Link to="/Camara"><button>Camara</button></Link>
                    <Link to="/"><button>Exit</button></Link>
                </div>
                <div className="historyDiv">
                {this.history}
                </div>
            </div>
        );
    }

}