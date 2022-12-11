import React from "react";
import { Link } from "react-router-dom";
import UserContext from "./usercontext";

export class ShopHistory extends React.Component {
    constructor(props) {
        super(props);
        this.history = [];
        this.products = JSON.parse(localStorage.getItem("products"));
        this.users = JSON.parse(localStorage.getItem("users"));
        this.state = { loaded: false };
        let elements = document.getElementsByClassName("menuLinks");

    }
    static contextType = UserContext;
    componentWillMount() {
        this.value = this.context;
        this.userdata = this.users.find(element => element.username === this.value.userData.User
            && element.password === this.value.userData.Pass
        )
        console.log(this.userdata.products);
        for (let i = 0; i < this.userdata.products.length; i++) {
            const element = this.userdata.products[i];
            this.history.push(<div className="pcard">
                <img src={element.img}></img>
                <div className="pElements">
                    <h1>{element.name}</h1>
                    <h2>{element.price}€</h2>
                    <h3>{element.date}</h3>
                </div>
            </div>);
            this.history.push(<hr></hr>);
        }
        this.setState({ loaded: true });

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
        if (!this.state.loaded) {
            return (
                <div className="loggedBody">
                    <div className="logedHeader">
                        <img src={require("./img/logo.png")}></img>
                        <i className="fa-solid fa-bars" onClick={this.toggleMenu}></i>
                    </div>
                    <div className="menuLinks">
                        <Link to="/ShopHistory"><button>ShopHistory</button></Link>
                        <Link to="/Camara"><button>Camara</button></Link>
                        <Link to="/"><button>Exit</button></Link>
                    </div>
                    <div className="historyDiv">
                        Loading
                    </div>
                </div>
            );
        }
        return (
            <div className="loggedBody">
                <div className="logedHeader">
                    <div className="logomenu">
                        <img src={require("./img/logo.png")}></img>
                        <i className="fa-solid fa-bars" onClick={this.toggleMenu}></i>
                    </div>
                    <div className="menuLinks" >
                        <Link to="/ShopHistory"><button>ShopHistory</button></Link>
                        <Link to="/Camara"><button>Camara</button></Link>
                        <Link to="/"><button>Exit</button></Link>
                    </div>
                </div>

                <div className="historyDiv">
                    <p>Shopping History</p>
                    {this.history}
                </div>
            </div>
        );
    }

}