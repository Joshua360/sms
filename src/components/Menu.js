

import React, { Component } from 'react';
import Avatar from './../images/avataaars.png';

export default class Menu extends Component {
  render() {
    return <div className='wrapper'>

            <aside>
                <div class="personal-info">
                    <img src={Avatar} alt=""/>
                    <p>welcome admin</p>
                </div>

                <div className="primary-menu">
                    <ul>
                        <li className=""><a href="/">Account info</a></li>
                        <li><a href="/teachers">Teachers</a></li>
                        <li><a href="/students">Students</a></li>
                        <li><a href="/login"><i class="fas fa-sign-out-alt"></i></a></li>
                    </ul>
                </div>

               
                </aside>



    </div>;
  }
}
