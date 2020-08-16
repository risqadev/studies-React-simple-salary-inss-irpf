import React, { Component } from 'react';
import InputSalary from './components/inputs/InputSalary';
import InputDisplay from './components/inputs/InputDisplay';
import PercentBar from './components/percentbar/PercentBar';
import { calculateSalaryFrom } from './helpers/salary';
import { formatBRL } from './helpers/currencyFormatter';
import css from './components/inputs/input.module.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 3900,
    }
  }

  handleSalaryChange = (newSalary) => {
    this.setState({
      fullSalary: newSalary,
    });
  }

  render() {
    const { fullSalary } = this.state;

    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = calculateSalaryFrom(fullSalary);

    const percentageINSS = discountINSS / fullSalary;
    const percentageIRPF = discountIRPF / fullSalary;
    const percentageNetSalary = netSalary / fullSalary;

    return (
      <div className="container">
        <h1 className="center">React Salário</h1>

        <InputSalary
          type="number"
          label="Salário bruto"
          value={fullSalary}
          step={50}
          onChangeSalary={this.handleSalaryChange}
        />

        <div className={css.flexRow}>

          <InputDisplay
            className={css.inputBase}
            type="text"
            label="Base INSS"
            value={formatBRL(baseINSS)}
          />

          <InputDisplay
            className={css.inputDiscountINSS}
            type="text"
            label="Desconto INSS"
            value={`${formatBRL(discountINSS)} (${(percentageINSS * 100).toFixed(2)}%)`}
          />

          <InputDisplay
            className={css.inputBase}
            type="text"
            label="Base IRPF"
            value={formatBRL(baseIRPF)}
          />

          <InputDisplay
            className={css.inputDiscountIRPF}
            type="text"
            label="Desconto IRPF"
            value={`${formatBRL(discountIRPF)} (${(percentageIRPF * 100).toFixed(2)}%)`}
          />

        </div>

        <InputDisplay
          className={css.inputNetSalary}
          type="text"
          label="Salário líquido"
          value={`${formatBRL(netSalary)} (${(percentageNetSalary * 100).toFixed(2)}%)`}
        />

        <PercentBar inss={percentageINSS} irpf={percentageIRPF} netSalary={percentageNetSalary} />

      </div>
    );
  }
}
