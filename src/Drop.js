import React from 'react'
import { useState } from 'react'

const Drop = () => {
    const states=['jharkhand','karnataka','goa','bihar']
    const cities={
        jharkhand:['bokaro','ranchi'],
        karnataka:['bangalore','mysuru'],
        goa:['panjim','candolim'],
        bihar:['purnea','patna']
    }

    const[selectedState,setSelectedState]=useState("");
  return (
    <div>
      {/**first dropdown */}
      Cascading dropdown:
      <select onChange={(e)=>setSelectedState(e.target.value)}>
        {
            states.map((state)=>{
                return <option>{state}</option>
            })
        }
        
      </select>
      {/**second dropdowns */}
      {
        selectedState &&(
            <select>
                {
                    cities[selectedState].map((city)=>{
                        return <option>{city}</option>
                    })
                }
            </select>
        )
      }
    </div>
  )
}

export default Drop
