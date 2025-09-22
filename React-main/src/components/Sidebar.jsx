import React from 'react'
import { useState } from 'react';
import { FaBars, FaImages, FaStore, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { GiNotebook } from "react-icons/gi";
import './Sidebar.css'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
 <>

  {/* div madhe na don tak yek tr h2 je kamala yeil sidebar heading ani dusri tyats asle list bhava smjk ka  */}
   <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>
  
     <div className={`sidebar ${isOpen ? "open" : "closed"}`}>



   <h2 className="sidebar-header">
          Apna College
        </h2>

  <ul className='sidebar-menu'>
    <li><FaImages className="icon" /> Gallery</li>
        <li><HiOutlineExternalLink className="icon" /> Shortcuts</li>
        <li><GiNotebook className="icon" /> Exhibits</li>
        <li><MdEvent className="icon" /> Events</li>
        <li><FaStore className="icon" /> Store</li>
        <li><FaPhone className="icon" /> Contact</li>
        <li><FaRegCommentDots className="icon" /> Feedback</li>
  </ul>


  </div>
  </>
  )
}

export default Sidebar
