import React from "react";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.header = <div className="Header">
            <img src={require("./img/logo.png")} alt="Test Image"></img>
            <p>+34 631763324</p>
            <a>About us</a>
            <a>Login</a>
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