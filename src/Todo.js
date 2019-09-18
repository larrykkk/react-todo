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
  componentDidMount() {
    this.setState({
      items: JSON.parse(localStorage.getItem("reacct_todolist")) || []
    });
  }
  handleKeyUp = event => {
    if (event.key === "Enter") {
      this.onAddItem();
    }
  };
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
  onAddItem = () => {
    this.setState(state => {
      const items = [...state.items, state.value];
      localStorage.setItem("reacct_todolist", JSON.stringify(items));
      return {
        value: "",
        items
      };
    });
  };
  onDeleteItem(deleteItemIndex) {
    let new_items = this.state.items.filter((item, index) => {
      return deleteItemIndex !== index;
    });
    localStorage.setItem("reacct_todolist", JSON.stringify(new_items));
    this.setState({
      items: JSON.parse(localStorage.getItem("reacct_todolist"))
    });
  }

  render() {
    const listItems = this.state.items.map((item, index) => (
      <li key={index}>
        {item}
        <button
          onClick={() => this.onDeleteItem(index)}
          style={{ marginLeft: 10 + "px" }}
        >
          刪除
        </button>
      </li>
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
