import img from '../Log in & Save Lives..png'
import './login.scss'
import GoogleIcon from '@mui/icons-material/Google';

import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
function Login() {
  const list = [];
  const Username={username:""};
  var alert = "true";
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = async (event) => {

    event.preventDefault();
    try {

      const response = await fetch("http://localhost:5000/check/" + name);
      const data = await response.json()

      list.push(data);
      console.log(list[0][0].name)

    } catch (err) {
      console.log(err.message);
    }
    list[0].map(li => {
      if (li.pass === pass)
      {
        Username.username=li.name;
        return (
          alert = "false"
        );
      }
    }
    )
    if (alert === "true") {
      window.alert("Wrong Username or Password");
    }
    else {
      localStorage.setItem("Username",Username.username)
      try {

      const response =  fetch("http://localhost:5000/log_insert",{
        method:"POST",
				headers:{"Content-Type":"application/json"},
				body: JSON.stringify(Username)
      });
  
      } catch (err) {
        console.log(err.message);
      }
      window.location.assign("/logined")
    }
    //  console.log(status);
  };
  return (
    <div className='login'>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title> Login Page </title>
      <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: "\n        body {\n            font-family: 'Poppins';\n        }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "   \n\nbutton {   \n       background-color: #FF3838;   \n         color: whitesmoke;   \n          border: none;   \n        cursor: pointer;   \n         }  \n\n form {   \n        border: 3px solid #f1f1f1; \n    }   \n input[type=text], input[type=password] {   \n        width: 100%;   \n        margin: 8px 0;  \n        padding: 12px 20px;   \n        display: inline-block;   \n        border: 2px orangered;   \n        box-sizing: border-box;   \n    }  \n button:hover {   \n        opacity: 0.7;   \n    }   \n  .cancelbtn {   \n        width: auto;   \n        padding: 10px 18px;  \n        margin: 10px 5px;  \n    }   \n        \n     \n .container { \n        padding: 50px;   \n        background-color: antiquewhite;\n          \n    }   \n" }} />

      <img className='image' src={img} />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label>Username</label>
          <input type="text" placeholder="Enter Username" name="username" required onChange={(e) => setName(e.target.value)} />
          <label>Password</label>

          <input type="password" placeholder="Enter Password" name="password" required onChange={(e) => setPass(e.target.value)} />
          <input type="checkbox" id="check" defaultChecked="checked" />
          <label for="check" class="checkbox-label">Remember Me</label>
          <center>
          <button className='log_login_btn' type="submit">Login</button>
          </center>
          {/* <button type="button" className="cancelbtn"> Cancel</button> */}
          <br />
          <div className='forgot_pass'>Forgot <a href="#"> password? </a></div>
          <br />
          <div className='or'>OR</div>
          <hr></hr>
          <br />
          <div className='log_google'>
            <div className="logo_div">
            <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU' alt='' />
            </div>
            <div>Sign in with Google</div>
          </div>
          <br />
          <br />
          <label>Don't have an account?</label>
          <a href="/hospital"> Sign Up as Hospital
          </a></div><a href="#">
        </a></form><a href="#">
      </a>
    </div >
  );
}
export default Login;