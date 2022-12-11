import React from "react";
import { Link } from "react-router-dom";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.setmail = this.setmail.bind(this);
        this.setpass = this.setpass.bind(this);
        this.setname = this.setname.bind(this);
        this.setlname = this.setlname.bind(this);
        this.setbirth = this.setbirth.bind(this);
        this.caccount = this.caccount.bind(this);
        
        this.state = {
            mail: "",
            password: "",
            name: "",
            lastname:"",
            birthdate:"",

        };
    }
    setmail(event) {
        this.setState({ mail: event.target.value });
        console.log(this.state.mail);

    }
    setpass(event) {
        this.setState({ password: event.target.value });
        console.log(this.state.password);

    }
    setname(event) {
        this.setState({ name: event.target.value });
        console.log(this.state.name);

    }
    setlname(event) {
        this.setState({ lastname: event.target.value });
        console.log(this.state.lastname);

    }
    setbirth(event) {
        this.setState({ birthdate: event.target.value });
        console.log(this.state.birthdate);

    }
    caccount(event){
        this.users = JSON.parse(localStorage.getItem("users"));
        console.log(this.users);
        this.users.push({username:this.state.mail,
                         password:this.state.password,
                        name:this.state.name,
                        lastname:this.state.lastname,
                        birthdate:this.state.birthdate,
                        products:[]});
        console.log(this.users);
        localStorage.setItem("users",JSON.stringify(this.users));
        
    }
    homepage() {
        window.history.pushState("", "", "/");
        window.history.pushState("", "", "/");
        window.history.go(-1);
    }
    render() {
        return (
            <div className="registerBody">
                <div className="logedHeader">
                    <div className="logomenu">
                        <img src={require("./img/logo.png")}></img>
                        <i className="fa-solid fa-home" onClick={this.homepage}></i>
                    </div>
                </div>
                <div className="registerDiv">
                    <input placeholder="Email"  onChange={this.setmail} value={this.state.mail} ></input>
                    <input placeholder="Password" onChange={this.setpass} value={this.state.password} style={{type:"password"}} ></input>
                    <input placeholder="Name" onChange={this.setname} value={this.state.name} ></input>
                    <input placeholder="Lastname" onChange={this.setlname} value={this.state.lastname} ></input>
                    <input placeholder="Birthdate" onChange={this.setbirth} value={this.state.birthdate} ></input>

                    <button onClick={this.caccount}><i className="fa-solid fa-arrow-right"><p> Register!</p></i></button>
                </div>
            </div>
        );
    }
}