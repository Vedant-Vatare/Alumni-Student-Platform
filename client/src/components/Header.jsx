import React from "react";
import platformLogo from '../assets/platform-logo.jpg';

export default function Header(){
  return (
    <header>
      <div className="header-platform-info">
        <div className="header-logo">
          <img src={platformLogo}/>
        </div>
        <h3>Campus Connect</h3>
      </div>
      <div className="account-links">
        <button>
          <a href="./login" target="_blank">
            Login
          </a>
        </button>
        <button>
          <a href="./signup" target="_blank">
            Signup
          </a>
        </button>
      </div>
    </header>
  );
};

// export default Header;
