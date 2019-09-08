import React from "react";
import logo from "./logo.svg";
// import './App.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    };
  }
  handleKeyUp = event => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      this.onAddItem();
    }
  };
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
  onAddItem = () => {
    this.setState(state => {
      const items = [...state.items, state.value];
      return {
        value: "",
        items
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item, index) => (
      <li key={index}>{item}</li>
    ));
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onKeyUp={this.handleKeyUp}
          onChange={this.onChangeValue}
        />
        <button onClick={this.onAddItem}>ok</button>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
export default Todo;
