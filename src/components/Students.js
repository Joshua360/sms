import React, { Component } from 'react';


export default class Students extends Component {
  render() {
    return (


        <div>


            <div className="main wrapped">
                <table className="table">
                    <thead>

                      <tr>
                        <th colspan="6">Our Students</th>
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
                        <td>Tywin</td>
                        <td>Lanister</td>
                        <td>wins@gmail.com</td>
                       <td> <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>
                       <td> <button  data-bs-toggle="modal" data-bs-target="#editStudent" className="btn btn-primary"><i className="far fa-edit"></i></button></td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Tyrion</td>
                        <td>Lanister</td>
                        <td>smart@gmail.com</td>
                        <td> <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>
                        <td> <button  data-bs-toggle="modal" data-bs-target="#editStudent" className="btn btn-primary"><i className="far fa-edit"></i></button></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td >Jaimme</td>
                        <td >Lannister</td>
                        <td>lannister@gmail.com</td>
                        <td> <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>
                        <td> <button  data-bs-toggle="modal" data-bs-target="#editStudent" className="btn btn-primary"><i className="far fa-edit"></i></button></td>
                      </tr>
                    </tbody>
                  </table>

                  <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Student</button>
         </div>
    </div>






    );
  }
}
