import React, { Component } from 'react';
import InputSalary from './components/inputs/InputSalary';
import InputDisplay from './components/inputs/InputDisplay';
import { calculateSalaryFrom } from './helpers/salary';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salary: 0,
      baseINSS: 0,
      discountINSS: 0,
      baseIRPF: 0,
      discountIRPF: 0,
      netSalary: 0,
    }

  }

  handleSalaryChange = (newSalary) => {
    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = calculateSalaryFrom(newSalary);

    this.setState({
      salary: newSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    });

  }

  render() {
    const { salary, baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = this.state;

    return (
      <div className="container">
        <h1>React Salário</h1>

        <InputSalary
          type="number"
          label="Salário bruto"
          value={salary}
          onChangeSalary={this.handleSalaryChange}
        />

        <InputDisplay
          type="text"
          label="Base INSS"
          value={baseINSS}
        />

        <InputDisplay
          type="text"
          label="Desconto INSS"
          value={discountINSS}
        />

        <InputDisplay
          type="text"
          label="Base IRPF"
          value={baseIRPF}
        />

        <InputDisplay
          type="text"
          label="Desconto IRPF"
          value={discountIRPF}
        />

        <InputDisplay
          type="text"
          label="Salário líquido"
          value={netSalary}
        />

      </div>
    );
  }
}
