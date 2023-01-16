import { useState } from 'react';
import { Link } from 'react-router-dom';
import './request.scss'
import Navigationbar from '../navbar/Navigationbar';

const Request = () => {
  const [bg, setBg] = useState("A+ve");
  const [place,setPlace]=useState("");
  console.log(bg);
  localStorage.setItem("Blood_Gp", bg);
  localStorage.setItem("Place",place);
  return (
    <div className='req_top'>
      <Navigationbar />
      <div className="req">
            <h1 className="title">REQUEST DONOR</h1>
    <div className="content">
        <form id="register" className="input-group-register">
            <label htmlFor="BloodGrp">Blood Group</label><br/>
            <select name="bloodgrp" id="bloodgrp" onChange={(e) => setBg(e.target.value)}>
              <option value="A+ve">A+ve</option>
              <option value="B+ve">B+ve</option>
              <option value="AB+ve">AB+ve</option>
              <option value="O+ve">O+ve</option>
              <option value="A-ve">A-ve</option>
              <option value="B-ve">B-ve</option>
              <option value="AB-ve">AB-ve</option>
              <option value="O-ve">O-ve</option>
            </select>
            <input
              type="text"
              className="input-field"
              placeholder="District"
              required
              onChange={(e)=>setPlace(e.target.value)}
            />
            <input
              type="text"
              className="input-field"
              placeholder="Place"
              required
            />
            
       </form>
       <Link to="/details">
              <button type="submit" className="requestdonor-btn">
                Request
              </button>
            </Link>
       </div>
      </div>
    </div>
  );
}
export default Request;
