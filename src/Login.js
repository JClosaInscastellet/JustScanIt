import React from "react";
import { Navigate, Outlet } from "react-router";
import { RecieveDataFromLogin } from "./ShopHistory";
import UserContext from "./usercontext";


export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.setmail = this.setmail.bind(this);
        this.setpass = this.setpass.bind(this);
        this.canLogIn = this.canLogIn.bind(this);
        this.state = {
            mail: "",
            password: ""
        };
    }

    static contextType = UserContext;
    componentDidMount() {
        this.value = this.context;
        console.log(this.value.userData);

    }
    setmail(event) {
        this.setState({ mail: event.target.value });
        console.log(this.state.mail);

    }
    setpass(event) {
        this.setState({ password: event.target.value });
        console.log(this.state.password);

    }
    canLogIn(event) {
        console.log("Login attempt");
        let canLogIn = false;
        let users = localStorage.getItem("users");
        let usersParsed = JSON.parse(users);
        console.log(this.state.mail + " " + this.state.password);
        usersParsed.forEach(element => {
            if (element.username == this.state.mail && element.password == this.state.password) {
                canLogIn = true;
            }
            if (canLogIn) {
                this.value.setUserData(this.state.mail, this.state.password);
                console.log("Succeed");
                window.history.pushState("", "", "/ShopHistory");
                window.history.pushState("", "", "/ShopHistory");
                window.history.go(-1);
            }

        });


    }
    render() {
        return (

            <div className="overlayL">
                <div className="loginBody">
                    <div className="loginBox">
                        <input className="mail" placeholder="Email" value={this.state.mail} onChange={this.setmail}></input>
                        <input className="pass" placeholder="Password" value={this.state.password} onChange={this.setpass} style={{type:"password"}}></input>
                        <button onClick={this.canLogIn}><i className="fa-solid fa-arrow-right"><p> Log In!</p></i></button>
                    </div>
                </div>

                <div className="shapeL">&nbsp;</div>
            </div>



        );
    }
}

export class Layout {
    constructor() {

    }
    render() {
        return (<> <Outlet /></>);
    }

}