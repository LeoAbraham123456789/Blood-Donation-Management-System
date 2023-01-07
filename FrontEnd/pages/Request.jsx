import './request.scss'

const Request=()=>{
return(
<div>
    <section className="main">
    <center>
      <h1 className="title">REQUEST DONOR</h1>
    </center>
  </section>
  {/* <div class ="full page">
          <a href='request_donor.html'> REQUEST DONOR</a>
      </div> */}
  <form id="register" className="input-group-register">
    <center>
      {/* <input type='text'class='input-field'placeholder='Blood group' required>    */}
      <label htmlFor="BloodGrp">Blood Group</label>
      <select name="bloodgrp" id="bloodgrp">
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
      />
      <input
        type="text"
        className="input-field"
        placeholder="Place"
        required
      />
      <button type="submit" className="requestdonor-btn">
        Request Donor
      </button>
    </center>
  </form>
</div>
);
    }
    export default Request;
