import React, { useState } from 'react';

function Inputs() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    let ageStatement =
      parseInt(age) >= 18 ? 'You are over 18.' : 'You are under 18.';
    setResult(`Your name is ${name} and your age is ${age}. ${ageStatement}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {result && <p>{result}</p>}
    </div>
  );
}

export default Inputs;
