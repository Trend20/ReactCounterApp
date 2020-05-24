import React from 'react';
import Button from './components/Button';
 
const App = () => {
  let count = 0;
  return (
    <div>
      <Button increment={1}/>
      <Button increment={10}/>
      <Button increment={100}/>
      <Button increment={1000}/>
      <span>{count}</span>
    </div>
  );
}
 
export default App;