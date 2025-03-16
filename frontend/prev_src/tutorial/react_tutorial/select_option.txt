"use client"
import React,{ useState} from 'react';
import './style.css';

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optal-default-props-with-typescript-for-stateless-functiona

// https://stackoverflow.com/questions/
// 58114855/handling-select-opts-in-react-hooks

export default function SELECT_OPTION(){

  const [addrtype, setAddrtype] = useState<"Work"|"Home"|"school">("Work")
  const Add:("Work"|"Home"|"school")[] = ["Work", "Home", "school"]
  const handleAddrTypeChange = ((e: React.ChangeEvent<HTMLSelectElement >) => {
      if(typeof e.target.value === "number"){
          setAddrtype(Add[e.target.value])}
      }
  ) as (e:React.ChangeEvent<HTMLSelectElement>)=>void

  return (

   <><h1>{addrtype}</h1> < select
      onChange={e => handleAddrTypeChange(e)}
      className="browser-default custom-select" >
      {
        Add.map((address, key) => <option key={key} value={key}>{address}</option>)
      }
    </select ></>)
}
