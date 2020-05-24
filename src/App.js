import React from 'react';
import Button from './components/Button';
const {useState} = React;
 
const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = (increment) =>{
    setCount(count + increment)
  }
  return (
    <div>
      <Button increment={1} onClick={ incrementCount}/>
      <Button increment={10} onClick={ incrementCount}/>
      <Button increment={100} onClick={ incrementCount}/>
      <Button increment={1000} onClick={ incrementCount}/>
      <span>{count}</span>
    </div>
  );
}
 
export default App;