import React from 'react';
import { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';

const Total = (props) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    console.log(12);
  }, [num2]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSum(num1 + num2);
  };

  return (
    <>
      <h3>{sum}</h3>
      <form>
        <Input
          type="number"
          value={num1}
          onChange={(event) => setNum1(+event.target.value)}
          placeholder={`First number`}
        />

        <Input
          type="number"
          value={num2}
          onChange={(event) => setNum2(+event.target.value)}
          placeholder={`Second number`}
        />

        <Button type="submit" onClick={handleSubmit}>
          Total
        </Button>
      </form>
    </>
  );
};

export default Total;
