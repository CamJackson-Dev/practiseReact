import React, { Component } from "react";
import { firebaseLooper } from "../utils/tools";
import { carsCollection, employeeRef } from "../utils/firebase";
// import Form from "./forms";

class Cars extends Component {
  state = {
    cars: null,
  };

  getAllTheCars() {
    carsCollection
      //   .orderBy("price", "asc")
      .get()
      .then((snapshot) => {
        const cars = firebaseLooper(snapshot);
        this.setState({
          cars,
        });
        // console.log(cars);
      });
  }

  componentDidMount() {
    this.getAllTheCars();

    /// GET DOC BY ID
    // carsCollection.doc('LqJq2rMLk063JabFSLiy').get().then( snapshot =>{
    //     console.log(snapshot.data())
    // })

    // employeeRef.get().then((snapshot)=>{
    //    const employees = firebaseLooper(snapshot);
    //     console.log(employees);
    // })
  }

  handleCarData = (cars) =>
    cars
      ? cars.map((data, i) => (
          <tr key={i}>
            <th>{data.id}</th>
            <th>{data.brand}</th>
            <th>{data.colour}</th>
            <th>{data.price}</th>
          </tr>
        ))
      : null;

  render() {
    return (
      <>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Colour</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{this.handleCarData(this.state.cars)}</tbody>
        </table>
      </>
    );
  }
}

export default Cars;
