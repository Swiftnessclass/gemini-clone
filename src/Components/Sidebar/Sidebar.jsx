import React,{useContext, useState} from "react";
import './Sidebar.css';
import {assets} from '../../Assets/assets'
import { Context } from "../../context/Context";
 const Sidebar=()=>{
  const[extended,setExtended]=useState(false)    
 const{onSent,prevPrompt,setRecentPrompt}=useContext(Context)

 const loadRecent=async(prompt)=>{
  setRecentPrompt(prompt)
  await onSent(prompt)

 }
  return(
<div className="Sidebar">                           
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)}  className="menu"src={assets.menu_icon} alt=""/>
        <div className="new-chat">
        <img src={assets.plus_icon}alt=""/>
       {extended? <p>New chat</p>:null}
        </div>
        {extended
        ?
        <div className="recent">
        <p className="recent-title">recent</p>
        {prevPrompt.map((item,index)=>{
          return(
            <div onClick={()=>loadRecent(item)}   className="recent-entry" key={index}>
          <img src={assets.message_icon}alt=""/>
          <p>{item.slice(0,15)}...</p>
        </div>

          )

        }) }
        
      </div>
      :null
      }
    </div>
    <div className="bottom">
      <div className="bottom-item recent-entry">
        <img src={assets.question_icon}alt=""/>
       {extended?<p>help</p>:null} 
      </div>

      <div className="bottom-item recent-entry">
        <img src={assets.history_icon}alt=""/>
       {extended?<p>activity</p>:null} 
      </div>

      <div className="bottom-item recent-entry">
        <img src={assets.setting_icon}alt=""/>
        {extended?<p>settings</p>:null}
      </div>

    </div>
    

    </div>
  )
 }
 export default Sidebar;