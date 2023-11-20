import React, { Component } from "react";
import "./index";
import Die from "./Die";

class Rolldice extends Component {
  // Face numbers passes as default props
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);

    // States
    this.state = {
      die1: "one",
      die2: "one",
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const { sides } = this.props;
    this.setState({
      // Changing state upon click
      die1: sides[Math.floor(Math.random() * sides.length)],
      die2: sides[Math.floor(Math.random() * sides.length)],
      rolling: true,
    });

    // Start timer of one sec when rolling start
    setTimeout(() => {
      // Set rolling to false again when time over
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    const handleBtn = this.state.rolling ? "Rolldice-rolling" : "";
    const { die1, die2, rolling } = this.state;
    return (
      <div className="Rolldice">
        <div className="Rolldice-container">
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <div className="Button-container">
          <button
            className={handleBtn}
            disabled={this.state.rolling}
            onClick={this.roll}
          >
            {this.state.rolling ? "Rolling" : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}

export default Rolldice;
