import React, { useContext} from "react";
import "./Main.css";
import { assets } from "../../Assets/assets";
import { Context } from "../../context/Context";

const Main = () => {

  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  
  return (
    
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
          {
            !showResult
            ?<>
            <div className="greet">
            <p>
              <span>hello, Devin</span>
            </p>
            <p>How can i help u</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest some beautiful places</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarise this concept </p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p> Brainstorm team bonding activities for our work</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Improve the redability of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
            </>
            :<div className="result">
              <div className="result-title">
              <img src={assets.user_icon}alt=""/>
              <p>{recentPrompt}</p>
              </div>
            <div className="result-data">
                <img src={assets.gemini_icon}alt=""/>
                {
                  loading
                  ?<div className="loader">
                  <div className="bounce"></div>
                  <div className="bounce"></div>
                  <div className="bounce"></div>
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
              </div>
          </div>
        }
          
       
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="enter a prompt here"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <button onClick={()=>onSent()}>
                <img src={assets.send_icon} alt="" />
              </button>
            </div>
          </div>
          <p className="bottom-info">
            gemini may display inaccurate info ,including people,so double check
          </p>
        </div>
        </div>
      </div>
      
  
  );
};
export default Main;