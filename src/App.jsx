import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";
//in context api what we do is we make a portal from one parent to another chaild with out propdrilling what we get is it is syntactic sugar
//by this we can achive the better syntax . context api is not useful for making rendering to performant
//there is the problem in context api so what we do here is state management by redux and recoil

function App() {
  //first we need to wrap up the component which is going to use the count and set count
  return (
    <div>
      <RecoilRoot>
        <Count />  
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom); //this is the function which is equivalent of count in [count,setCount]
  
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector); 
  // const count=useRecoilValue(countAtom);
  // const isEven = useMemo(()=>{
  //   return count%2==0;
  // },[count]) // it ats the same way
  

  return <div>
    {isEven ? "It is even " : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);//this is the function which is equivalent of setCount in [count,setCount]
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
