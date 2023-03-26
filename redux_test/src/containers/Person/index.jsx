import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPersonAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value * 1;
    const personObj = { id: nanoid(6), name, age };
    this.props.addPersonAction(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    const { personArr } = this.props;
    return (
      <div>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="input name"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="input age"
        />
        <button onClick={this.addPerson}>Add</button>
        <ul>
          {personArr.map((p) => (
            <li key={p.id}>
              {p.name}---{p.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ personArr: state.personArr }), 
  {addPersonAction}
)(Person);
