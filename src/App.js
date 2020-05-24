import React from 'react';
import Button from './components/Button';
const {useState} = React;
 
const App = () => {
  let count = 0;
  const incrementCount = (increment) =>{

  }
  return (
    <div>
      <Button increment={1} onClick={onClick}/>
      <Button increment={10} onClick={onClick}/>
      <Button increment={100} onClick={onClick}/>
      <Button increment={1000} onClick={onClick}/>
      <span>{count}</span>
    </div>
  );
}
 
export default App;