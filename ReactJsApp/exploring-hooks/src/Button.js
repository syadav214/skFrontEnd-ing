import React, { useState, useEffect } from 'react';

export default function Button() {
  const [buttonText, setButtonText] = useState(false);
  const [data, setData] = useState([]);
  // If we wanted to store two different values in state, we would call useState() twice.

  const handleClick = () => setButtonText(!buttonText);
 
  // you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setData(data));
  },[]);

  return (
    <React.Fragment>
      <button onClick={handleClick}>{buttonText.toString()}</button>
      <ol>{data && data.map(el => <li key={el.id}>{el.title}</li>)}</ol>
    </React.Fragment>
  );
}
