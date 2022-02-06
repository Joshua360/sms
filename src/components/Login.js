import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class Login extends Component {
  render() {
    return (

        <div className="wrapper form-area">
            <form  className="login-form">
                <div className="login-form">
                    <h1> Admin Login</h1>
                    <hr className="hr" />
                    
                    <div className="form-group">
                        <label for="username">
                            Username
                        </label>
                        <input type="text" name="username" id="username" placeholder="username" />
                    </div>

                    <div className="form-group">
                        <label for="password">
                            Password
                        </label>
                        <input type="password" name="password" id="password" placeholder="*******" />
                        
                    </div>
                </div>
                    <button id="login">Login</button>
            </form>
        </div>
    );
  }
}
