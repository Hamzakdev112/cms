import React, { useEffect, useState } from 'react'
import './index.css'
import data from './data.json'
import styled from 'styled-components'
import axios from 'axios'


const H1 = styled.h1`
  color: ${(props)=>props.color};
  font-size: ${(props)=>props.size};
  text-align: ${(props)=>props.position};
`


const App = () => {
const [newData, setnewData] = useState(data.name)
const [name, setName] = useState(data.name)
const [color, setColor] = useState(data.color)
const [position ,setPosition] = useState(data.position)
const [size ,setSize] = useState(data.size)
const handleClick = async(value)=>{
   await axios.put('/', {
    color,
    position,
    size,
    name
  })
  const {data} = await axios.get('/awesome')
    setnewData(data)
  
}
useEffect(()=>{
  const func =async ()=>{
    const {data} = await axios.get('/awesome')
    setnewData(data)
  }
  func()
},[])
console.log(newData)
  return (
    <div >
     <H1
     color={newData.color}
     size={newData.size}
     position={newData.position}
     
     > {newData.name}</H1>
     <div className='flex flex-col w-[400px] gap-3'>
     <input defaultValue={newData?.name} onChange={(e)=>setName(e.target.value)} className='border-[1px] border-black' type="text" />
     <button onClick={handleClick}>Change Name</button>
     <input defaultValue={newData?.color} onChange={(e)=>setColor(e.target.value)} className='border-[1px] border-black' type="text" />
     <button onClick={handleClick}>Change Color</button>
     <input defaultValue={newData?.position} onChange={(e)=>setPosition(e.target.value)} className='border-[1px] border-black' type="text" />
     <button onClick={handleClick}>Change Position</button>
     <input defaultValue={newData?.size} onChange={(e)=>setSize(e.target.value)} className='border-[1px] border-black' type="text" />
     <button onClick={handleClick}>Change Size</button>
     </div>
    </div>
  )
}

export default App