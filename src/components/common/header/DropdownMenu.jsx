import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
 const [isDropdownVisible, setDropdownVisible] = useState(false);
 const [isShow, setShow] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="dropdown-menu">
      <ul>
        <li onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>Menu 1
            {isDropdownVisible && <div className="windows"> <ul><Link to="/solutions/sdp">Windows Solution</Link></ul></div>}

        </li>
        <li  onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>Menu 2
        {isShow && 
        <div className="aws">
              <ul>
              <Link to="/solutions/aws">AWS</Link>
              <a>Cloud Migration</a>
              </ul>
        </div>
      }
            
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
