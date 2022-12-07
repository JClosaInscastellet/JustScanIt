import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.header = <div className="Header">
            <Link to="/"><img src={require("./img/logo.png")} alt="Test Image"></img></Link>
            <p>+34 631763324</p>
            <a className="anchor">About us</a>
            <Link to="/Login">
                <a className="anchor">Login</a>
            </Link>
            <button>Join us!</button>

        </div>
    }
    render() {
        console.log("Rendering Header");
        return (
            this.header
        )

    }
}