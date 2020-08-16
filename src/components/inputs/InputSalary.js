import React, { Component } from 'react'

export default class InputSalary extends Component {
  handleInputChange = (event) => {
    const newSalary = event.target.value;

    this.props.onChangeSalary(newSalary);
  }

  render() {
    const { type, label, value } = this.props;

    return (
      <div>
        <label>
          {label}
          <input
            type={type}
            value={value}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
    )
  }
}
