import { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

export default function Calculator() {
  const [itemValue, setItemValue] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  function Result(buttonName) {
    const res = calculate(itemValue, buttonName);
    setItemValue({
      total: res.total,
      next: res.next,
      operation: res.operation,
    });
  }

  return (
    <div className="calc-page">
      <h1>Lets do some Math!</h1>
      <div className="calc-grid">
        <div className="output">
          <div className="prev-operand">
            {itemValue.total}
            {' '}
            {itemValue.operation}
          </div>
          <div className="cur-operand">{itemValue.next}</div>
        </div>
        <button type="button" onClick={() => Result('AC')}>AC</button>
        <button type="button" onClick={() => Result('+/-')}>+/-</button>
        <button type="button" onClick={() => Result('%')}>%</button>
        <button type="button" onClick={() => Result('÷')} className="do-math">÷</button>
        <button type="button" onClick={() => Result('7')}>7</button>
        <button type="button" onClick={() => Result('8')}>8</button>
        <button type="button" onClick={() => Result('9')}>9</button>
        <button type="button" onClick={() => Result('x')} className="do-math">x</button>
        <button type="button" onClick={() => Result('4')}>4</button>
        <button type="button" onClick={() => Result('5')}>5</button>
        <button type="button" onClick={() => Result('6')}>6</button>
        <button type="button" onClick={() => Result('-')} className="do-math">-</button>
        <button type="button" onClick={() => Result('1')}>1</button>
        <button type="button" onClick={() => Result('2')}>2</button>
        <button type="button" onClick={() => Result('3')}>3</button>
        <button type="button" onClick={() => Result('+')} className="do-math">+</button>
        <button type="button" onClick={() => Result('0')} className="span-two">0</button>
        <button type="button" onClick={() => Result('.')}>.</button>
        <button type="button" onClick={() => Result('=')} className="do-math">=</button>
      </div>
    </div>
  );
}
