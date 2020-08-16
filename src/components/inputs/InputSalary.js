import React, { Component } from 'react';

export default class InputSalary extends Component {
  handleInputChange = (event) => {
    const newSalary = event.target.value;

    this.props.onChangeSalary(newSalary);
  }

  render() {
    const { type, label, value, step } = this.props;

    return (
      <div>
        <label>
          {label}
          <input
            type={type}
            value={value}
            step={step}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
    )
  }
}
