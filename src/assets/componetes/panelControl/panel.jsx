import React from "react";
import Sidebar from "../sidebar/sidebar"
import Topbar from "../topbar/topbar"
import"./panel.css"


function Panel() {

  return (
    <>
      
        <Topbar/>
        <div className="container">
          <Sidebar/>
        </div>

    </>
  )
}

export default Panel;