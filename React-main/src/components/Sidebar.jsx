// import './Sidebar.css'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaPlus } from "react-icons/fa6";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { useState } from 'react';
// import { HiUserCircle } from "react-icons/hi2";
// import { FaGraduationCap } from "react-icons/fa";
// function Sidebar() {

//         const [isOpen, setIsOpen] = useState(true);


//   return (
//     <>
//        <button className="hamburger"  onClick={() => setIsOpen(!isOpen)}>
//           <GiHamburgerMenu />
//        </button> 
//         <div className={`sidebar ${isOpen ? "open" : "closed"}`}>

     
//         <h2 className="sidebar-header">
//          <FaGraduationCap />
//          Edumanager
//         </h2>
//         <p>School Management system</p>

       



//         <ul className='sidebar-menu'>
//            <li><FaPlus />Add School</li>
//            <li><RxHamburgerMenu />All Schools</li>
//         </ul>


//         <div className='Footer'>
//          <HiUserCircle />
//          <h3>Admin User</h3> 
//          <p>Manage your schools</p>
//         </div>
       
//   </div>
//     </>
//   )
// }

// export default Sidebar
// import './Sidebar.css'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaPlus, FaGraduationCap } from "react-icons/fa";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { useState } from 'react';

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//         <GiHamburgerMenu />
//       </button> 

//       <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//         {/* Header */}
//         <h2 className="sidebar-header">
//           <div className="logo-box">
//             <FaGraduationCap className="logo-icon" />
//           </div>
//           <div>
//             <div className="title">EduManager</div>
//             <div className="subtitle">School Management System</div>
//           </div>
//         </h2>

//         {/* Navigation */}
//         <div className="nav-title">NAVIGATION</div>
//         <ul className="sidebar-menu">
//           <li className="active">
//             <FaPlus className="icon" />
//             <div>
//               <div className="menu-title">Add School</div>
//               <div className="menu-subtitle">Register new school</div>
//             </div>
//           </li>
//           <li>
//             <RxHamburgerMenu className="icon" />
//             <div>
//               <div className="menu-title">All Schools</div>
//               <div className="menu-subtitle">View school directory</div>
//             </div>
//           </li>
//         </ul>

//         {/* Footer */}
//         <div className="footer">
//           <div className="avatar">A</div>
//           <div>
//             <h3 className="user">Admin User</h3>
//             <p className="user-sub">Manage your schools</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Sidebar;

import './Sidebar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus, FaGraduationCap } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button (only visible when sidebar is closed) */}
      {!isOpen && (
        <button className="hamburger" onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu />
        </button>
      )}

      {/* Overlay (click to close) */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {/* Header */}
        <h2 className="sidebar-header">
          <div className="logo-box">
            <FaGraduationCap className="logo-icon" />
          </div>
          <div>
            <div className="title">EduManager</div>
            <div className="subtitle">School Management System</div>
          </div>
        </h2>

        {/* Navigation */}
        <div className="nav-title">NAVIGATION</div>
        <ul className="sidebar-menu">
          <li className="active">
            <FaPlus className="icon" />
            <div>
              <div className="menu-title">Add School</div>
              <div className="menu-subtitle">Register new school</div>
            </div>
          </li>
          <li>
            <RxHamburgerMenu className="icon" />
            <div>
              <div className="menu-title">All Schools</div>
              <div className="menu-subtitle">View school directory</div>
            </div>
          </li>
        </ul>

        {/* Footer */}
        <div className="footer">
          <div className="avatar">A</div>
          <div>
            <h3 className="user">Admin User</h3>
            <p className="user-sub">Manage your schools</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
