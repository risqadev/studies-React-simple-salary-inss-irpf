import React, { Component } from 'react';
import css from './input.module.css';

export default class InputDisplay extends Component {
  render() {
    const { className, type, label, value } = this.props;

    return (
      <div>
        <label>
          {label}
          <input
            className={className}
            type={type}
            value={value}
            readOnly
          />
        </label>
      </div>
    )
  }
}
