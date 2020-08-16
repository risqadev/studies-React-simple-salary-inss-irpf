import React, { Component } from 'react'

export default class InputDisplay extends Component {
  render() {
    const { type, label, value } = this.props;

    return (
      <div>
        <label>
          {label}
          <input
            type={type}
            value={value}
            readOnly
          />
        </label>
      </div>
    )
  }
}
