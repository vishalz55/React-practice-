
import './Schoolform.css'
import { useState } from 'react';
import baners from "../assets/baners.png";
import "./SchoolImageUpload.css"; // Import CSS

export default function Schoolform() {

   const [file, setFile] = useState(null);

//    let [mob,setMob] = useState("");
//    let [email,setEmail] = useState("");
   
    const handleFileChange = (e) => {
    setFile(e.target.files[0]);

    // validaet the form 

     if (!file) return;

  // Allowed file types
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    alert("Only JPG, PNG, and WebP files are allowed.");
    e.target.value = ""; // clear the input
    return;
  }

  // File size check (5MB = 5 * 1024 * 1024 bytes)
  if (file.size > 5 * 1024 * 1024) {
    alert("File size must not exceed 5MB.");
    e.target.value = "";
    return;
  }

  // ✅ If everything is fine, set file
  setFile(file);
      
  };




  return (
    <>
          <img src={baners} alt="Banner" style={{ width: "20%" ,borderRadius:"10px" }}  />  
          <h1>Add New School</h1>
          <p style={{fontSize:"large"}}>Fill in the details to register a new school</p>
          <form className='vishal'>

          <label htmlFor='sname'>School Name*</label>
          <input
          placeholder='Enter school name'
          type = 'text'
          id='sname'
          required
          ></input>

          <label htmlFor='addrename'>Address*</label>
          <input
          placeholder='Enter complete address'
          type = 'text'
          id='addrename'
          required
          ></input>

          <label htmlFor='city'>City*</label>
          <input
          placeholder='Enter city'
          type = 'text'
          id='city'
          required
          ></input>

          <label htmlFor='State'>State*</label>
          <input
          placeholder='Enter state'
          type = 'text'
          id='State'
          required
          ></input>

          <label htmlFor='number'>Contact Number*</label>
          <input
          placeholder='Enter phone number'
          type = 'text'
          id='number'
          onChange = {(e)=>setMob(e.target.value)}
          required
          pattern="^[6-9]\d{9}$"
          title="Enter a valid 10-digit mobile number starting with 6-9"
          ></input>

          <label htmlFor='Email'>Email Address*</label>
          <input
          placeholder='Enter email address'
          type = 'text'
          id='Email'
          required
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="Enter a valid email address"
          ></input>

        <div className="upload-container">
        <label className="upload-label">School Image</label>

       <div className="upload-box">
        <input
          type="file"
          accept="image/png, image/jpeg, image/webp"
          id="schoolImage"
          className="file-input"
          onChange={handleFileChange}
        />

        <label htmlFor="schoolImage" className="upload-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="upload-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12"
            />
          </svg>
          <p>Upload school image</p>
          <small>PNG, JPG, WebP up to 5MB</small>
          <span className="choose-btn">Choose Image</span>
        </label>
      </div>

      {file && <p className="file-info">Selected: {file.name}</p>}

       <br></br>  <br></br>
       <button type = "submit" className="my-button" style = {{ width: "500px",backgroundColor:"#ADD8E6"}} >Add School</button> 
    </div>
          </form>          
          
    </>
  )
}
