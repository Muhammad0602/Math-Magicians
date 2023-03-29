
// const buttons = [ 
//   'AC','+/-','%','÷','7','8','9','x','4','5','6','-','1','2','3','+','0','.','=',
// ]

// function Display() {
//     return (
//        buttons.map(item => <button>{item}</button>)
//     )
// }

export default function Calculator() {
    return (
        <div className="calc-grid">
            <div className="output">
                <div className="prev-operand">666+</div>
                <div className="cur-operand">232</div>
            </div>
            {/* <Display /> */}
            <button>AC</button>
            <button>+/-</button>
            <button>%</button>
            <button className="do-math">÷</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="do-math">x</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="do-math">-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="do-math">+</button>
            <button className="span-two">0</button>
            <button>.</button>
            <button className="do-math">=</button>
        </div>
    )
}