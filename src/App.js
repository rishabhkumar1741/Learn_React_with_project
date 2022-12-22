import {useState} from 'react'
import Count from './Components/Count/Count';
function App() {
let [count,setcount]= useState(0);
let inc =()=>{
  setcount((pre)=>{
    return pre+1;
  })
  
}
let dec=(dec)=>{
  setcount((pre)=>{
    return pre-1;
  });
}


  return (<>

 <Count number={count} />
  <button onClick={inc}> inc</button>
  <button onClick={dec}> dec</button>
 

  </>
  );
}

export default App;
