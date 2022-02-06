import React, { Component } from 'react';

export default class Account extends Component {
  render() {
    return (
            <div className="main">
                <h1 id="account-title">My Account</h1>

               <div className="basic-info">
                   <h1>Basic Info</h1>
                   <hr className="hr"/>
                <form >
                    <div className="one">
                        <label for="fname">First Name</label>
                        <input  type="text" name="fname" /> 
                    </div>

                    <div className="two">
                        <label for="lname">Last Name</label>
                        <input  type="text" name="lname"/>
                    </div>

                    <div className="three">
                        <label for="company">Password</label>
                        <input  type="password" name="company"/>
                    </div>

                    <div className="three">
                        <label for="company">Confirm Password</label>
                        <input  type="password" name="company"/>
                    </div>
                    <br />
                    <input type="submit" value="Update account info" />

            
                </form>



               </div>
            </div>
            
    
    );
  }
}
