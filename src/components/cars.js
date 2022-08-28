import React, { Component } from "react";
import { firebaseLooper } from "../utils/tools";
import { carsCollection, employeeRef } from "../utils/firebase";
import Form from "./form";

class Cars extends Component {
  state = {
    cars: null,
    start: 0,
    end: 100,
  };

  getAllTheCars() {
    carsCollection
      //   .where("price", ">=", 100)
      .orderBy("price", "asc")
      .startAt(this.state.start) // Start listing items at Price of 3000
      .endAt(this.state.end)
      //.limit(3) // how many items to display
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
    // setTimeout(() => {
    //   carsCollection.doc("fJMTkqNJx0IfuNcQf6Eb").update({
    //     colour: "red",
    //   });
    // }, 3000);

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

  sortResults(values) {
    this.setState(
      {
        start: values[0],
        end: values[1],
      },
      () => {
        this.getAllTheCars();
      }
    );
  }

  render() {
    return (
      <>
        <button onClick={() => this.sortResults([0, 100])}>0-100</button>
        <button onClick={() => this.sortResults([100, 200])}>100-200</button>
        <button onClick={() => this.sortResults([200, 100000])}>
          200-100000
        </button>
        <button onClick={() => this.sortResults([0, 100000])}>All</button>

        <Form />

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

// carsCollection.doc("fJMTkqNJx0IfuNcQf6Eb").onSnapshot((doc) => {
//   console.log("Current Data", doc.data());
// });

carsCollection.onSnapshot((querySnapShot) => {
  console.log(querySnapShot.docChanges());
});

export default Cars;
