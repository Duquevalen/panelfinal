import React from "react";
import "./topbar.css"
import {NotificationsNone,Language,Settings} from '@mui/icons-material';


 function Topbar() {

    return (

      <div className="topbar">
         <div className="topbarWrapper">
         <div className="topLeft">
            <span className="logo">Duqueza🛍️</span>
         </div>
           <div className="topRight">
           <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconbag">2</span>
         </div>
           <div className="topbarIconContainer">
           <Language/>
        </div>
          <div className="topbarIconContainer">
          <Settings/>
        </div>
        <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" className="topAvatar"/>
        </div>
         </div>
      </div>
    )
    
 }
 export default Topbar