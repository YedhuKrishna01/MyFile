import React, { useState } from 'react';
import "./style.css";

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className='work'>
        <div className='calculator'>
            <div>
                <div className='inp'>
                    <input type="text" value={input} readOnly />
                </div>
                <div className='nums'>
                    <div>
                        <button onClick={() => handleButtonClick('7')}>7</button>
                        <button onClick={() => handleButtonClick('8')}>8</button>
                        <button onClick={() => handleButtonClick('9')}>9</button>
                        <button onClick={() => handleButtonClick('+')}>+</button>
                        
                    </div>
                    <div>
                        <button onClick={() => handleButtonClick('4')}>4</button>
                        <button onClick={() => handleButtonClick('5')}>5</button>
                        <button onClick={() => handleButtonClick('6')}>6</button>
                        <button onClick={() => handleButtonClick('-')}>-</button>
                    </div>
                    <div>
                        <button onClick={() => handleButtonClick('1')}>1</button>
                        <button onClick={() => handleButtonClick('2')}>2</button>
                        <button onClick={() => handleButtonClick('3')}>3</button>
                        <button onClick={() => handleButtonClick('*')}>*</button>
                    </div>
                    <div>
                        <button onClick={() => handleButtonClick('0')}>0</button>
                        <button onClick={() => handleButtonClick('.')}>.</button>
                        <button onClick={() => handleButtonClick('=')}>=</button>
                        <button onClick={() => handleButtonClick('/')}>/</button>
                    </div>
                    <div>
                        <button className='reset' onClick={() => handleButtonClick('C')}>C</button>
                    </div>
                </div>
                <div className='result'>
                    <p>Your Answer Is : {result}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Calculator;
