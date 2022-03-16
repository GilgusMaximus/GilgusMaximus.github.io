import React from "react";
import "./TopElement.css";
import logo from '../res/images/logo.png'
import SectionLine from "../SectionLine/SectionLine";

function TopElement() {
    return (
      <>
          <div className="base">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Luca Hohmann</h1>
            <h2 className="Info-Me">Studying M.Sc. Information Security, Privacy, <br className='breakh'></br>Web Technology, Gamification @ TUM</h2>
            <p className='Pre-Quote'>Why I want to work in my specialization areas:</p>
            <p className='Quote'>"All practically relevant problems are theoretically solved. [...]<br/>
              Nonetheless the practical state of IT-Security is disastrous"<br/>
              <span className='Quote-Author'> - Linus Neumann, CCC</span></p>
          </div>
          <SectionLine/>
        </>
    );
}

export default TopElement;