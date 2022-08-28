import React, { Component } from "react";
import firebase, { carsCollection, firebaseTimestamp } from "../utils/firebase";

class Form extends Component {
  state = {
    brand: "",
    colour: "",
    price: "",
    available: "",
  };

  // when component mounts, update data in db
  componentDidMount() {
    // object data
    // carsCollection.doc("fJMTkqNJx0IfuNcQf6Eb").update({
    //   "dealers.california": true,
    // });
    // update array data
    // carsCollection.doc("fJMTkqNJx0IfuNcQf6Eb").update({
    //   tags: firebase.firestore.FieldValue.arrayUnion("Awesome"),
    // });
    // remove array data
    // carsCollection.doc("fJMTkqNJx0IfuNcQf6Eb").update({
    //   tags: firebase.firestore.FieldValue.arrayRemove("Awesome"),
    // });
  }

  handleForm = (e) => {
    e.preventDefault();
    // console.log(this.state);

    // Edit in db by ID
    // carsCollection.doc("KXY8NyucuesKpdG2G2Pr").update({
    //   ...this.state,
    //   available: this.state.available === "true" ? true : false,
    //   price: parseInt(this.state.price),
    // });

    // add to the db
    carsCollection
      .add({
        ...this.state,
        available: this.state.available === "true" ? true : false,
        price: parseInt(this.state.price),
        createdAt: firebaseTimestamp(),
        dealers: {
          virginia: true,
          california: false,
          washington: false,
        },
        tags: ["Good", "Comfortable", "Expensive"],
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleForm(e)}>
          <div className="form-group">
            <label>Brand</label>
            <input
              type="text"
              className="form-control"
              name="brand"
              onChange={(e) => this.changeHandler(e)}
            ></input>
          </div>

          <div className="form-group">
            <label>Colour</label>
            <input
              type="text"
              className="form-control"
              name="colour"
              onChange={(e) => this.changeHandler(e)}
            ></input>
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              onChange={(e) => this.changeHandler(e)}
            ></input>
            <label>Available ? :</label>
            <select
              className="form-control"
              name="available"
              onChange={(e) => this.changeHandler(e)}
            >
              <option value="true">YES</option>
              <option value="false">NO</option>
            </select>{" "}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Form;
