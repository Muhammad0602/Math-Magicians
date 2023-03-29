export default function Calculator() {
  return (
    <div className="calc-grid">
      <div className="output">
        <div className="prev-operand">666+</div>
        <div className="cur-operand">232</div>
      </div>
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="do-math">÷</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="do-math">x</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="do-math">-</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="do-math">+</button>
      <button type="button" className="span-two">0</button>
      <button type="button">.</button>
      <button type="button" className="do-math">=</button>
    </div>
  );
}
