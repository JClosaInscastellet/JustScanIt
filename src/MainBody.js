import React from "react";
import { Link } from "react-router-dom";
export class MainBody extends React.Component {

    constructor(props) {
        super(props);
        this.setmail = this.setmail.bind(this);
        this.setpass = this.setpass.bind(this);
        this.canLogIn = this.canLogIn.bind(this);
        this.state = {
            mail: "",
            password: ""
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
                console.log("Succed");
                window.history.pushState("", "", "/ShopHistory");
                window.history.pushState("", "", "/ShopHistory");
                window.history.go(-1);


            }

        });


    }
    render() {
        return (
            <div>
            <div className="overlayMB">
                <div className="MainBody">
                    <h1>Join JustScanIt improve your income as a <br></br>seller and save time </h1>
                    <h2>We provide tools to automate the purchase, customers will only <br /> have to scan their own purchase and pay automatically from<br /> their mobile by themselves</h2>
                    <div><input type="text" className="cname" placeholder="Company Name"></input> <input className="cmail" type="text" placeholder="Email address"></input></div>
                </div>
                <div className="shape"> e</div>
            </div>
            <div className="overlayMBS">
                <div className="MainBodySmall">
                    
                    <div className="getcentered">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" className="uname" placeholder="Username" value={this.state.mail} onChange={this.setmail}></input>
                    </div>
                    <div className="line"></div>
                    <br />
                    <div className="getcentered">
                        <i className="fa-solid fa-lock"></i>
                        <input type="text" className="umail" placeholder="Password" value={this.state.password} onChange={this.setpass}></input>
                    </div>
                    <div className="line"></div>
                    <Link className="signLink" >
                        <button className="sign" onClick={this.canLogIn}>SignUp</button>
                    </Link>
                    <Link>
                        <button>Register</button>
                    </Link>

                </div>
                <div className="shape"> </div>

            </div>
        </div>
        )
    }
}
