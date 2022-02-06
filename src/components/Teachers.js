
import React, { Component } from 'react';
import TeacherModal from './TeacherModal';

export default class Teachers extends Component {
  render() {
    return (


        <div className="main wrapped">
        <table className="table">
            <thead>

              <tr>
                <th colspan="6">Our Teachers</th>
              </tr>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>


                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Snow</td>
                <td>jonsnow@gmail.com</td>
               <td> <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>
               <td> <button  data-bs-toggle="modal" data-bs-target="#editStudent" className="btn btn-primary"><i className="far fa-edit"></i></button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Theon</td>
                <td>Greyjoy</td>
                <td>Greyjoy@gmail.com</td>
                <td> <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>
                <td> <button  data-bs-toggle="modal" data-bs-target="#editStudent" className="btn btn-primary"><i className="far fa-edit"></i></button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td >Sansa</td>
                <td >Stark</td>
                <td>stark@gmail.com</td>
                <td> <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>
                <td> <button  data-bs-toggle="modal" data-bs-target="#editStudent" className="btn btn-primary"><i className="far fa-edit"></i></button></td>
              </tr>
            </tbody>
          </table>

          <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Teacher</button>

          <TeacherModal />

       </div>
    );
  }
}
