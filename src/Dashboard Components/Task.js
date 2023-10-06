import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useDash } from '../contexts/Dashboardcontext'
const Task = ({task}) => {
const {deleteTasks}=useDash()  
const handleClick =(id)=>{
    deleteTasks(id)
}


  return (
    <div className='task'>
      <FaTimes style={{color:'red', marginLeft:'350px', cursor:'pointer'}} onClick={()=>handleClick(task.id)}></FaTimes>
      <h2 style={{textAlign:'center', margin:'30px', color:'green'}}>Vehicle Information</h2>
      <p style={{textAlign:'center'}}>--------------------------------------------------------------</p>
      <div className='receipt'>
      <h4>Full Name: </h4>{task.name}</div>
       <div className='receipt'><h4>Car Model: </h4>{task.carmodel}</div>
       <div className='receipt'> <h4>Price:</h4> {task.amount} Rs</div>
       <div className='receipt'> <h4>Phone Number:</h4> {task.phone} </div>
       <div className='receipt'> <h4>Images Selected:</h4> {task.images} </div>
       <div className='receipt'> <h4>Image URL: </h4>{task.uploadedImage}</div>
       <div className='receipt'> <h4>Saved at: </h4>{task.date}</div>
       
      
    </div>
  )
}

export default Task
