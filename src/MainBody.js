import React from "react";

export class MainBody extends React.Component {
    constructor(props) {
        super(props)
        this.body = <div>
            <div className="MainBody">
                <h1>Join JustScanIt improve your income as a <br></br>seller and save time </h1>
                <h2>We provide tools to automate the purchase, customers will only <br /> have to scan their own purchase and pay automatically from<br /> their mobile by themselves</h2>
                <div><input type="text" className="cname" placeholder="Company Name"></input> <input className="cmail" type="text" placeholder="Email address"></input></div>
            </div>
            <div className="MainBodySmall">
                <div>
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className="uname" placeholder="Username"></input>
                </div>
                <div className="line"></div>
                <br/>
                <div>
                    <i className="fa-solid fa-lock"></i>
                    <input type="text" className="umail" placeholder="Password"></input>
                </div>
                <div className="line"></div>
                <div className="shape">
                    <button>Login</button>
                    <br></br>
                    <button>Register</button>
                </div>
            </div>
        </div>
    }
    render() {
        return (
            this.body
        )
    }
}