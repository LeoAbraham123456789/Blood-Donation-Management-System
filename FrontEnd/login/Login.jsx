 import img from '../Log in & Save Lives..png'
 import './login.scss'
 function Login(){
        return (
            <div className='login'>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Login Page </title>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
                <style dangerouslySetInnerHTML={{ __html: "\n        body {\n            font-family: 'Poppins';\n        }\n    " }} />
                <style dangerouslySetInnerHTML={{ __html: "   \n\nbutton {   \n       background-color: #FF3838;   \n       width: 100%;  \n        color: whitesmoke;   \n        padding: 15px;   \n        margin: 10px 0px;   \n        border: none;   \n        cursor: pointer;   \n         }  \n\n form {   \n        border: 3px solid #f1f1f1; \n    }   \n input[type=text], input[type=password] {   \n        width: 100%;   \n        margin: 8px 0;  \n        padding: 12px 20px;   \n        display: inline-block;   \n        border: 2px orangered;   \n        box-sizing: border-box;   \n    }  \n button:hover {   \n        opacity: 0.7;   \n    }   \n  .cancelbtn {   \n        width: auto;   \n        padding: 10px 18px;  \n        margin: 10px 5px;  \n    }   \n        \n     \n .container { \n        padding: 50px;   \n        background-color: antiquewhite;\n          \n    }   \n" }} />
             
                    <img className='image' src={img} />
                    <form>
                        <div className="container">
                        <label>Username</label>
                        <input type="text" placeholder="Enter Username" name="username" required />
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" name="password" required />
                        <input type="checkbox" id="check" defaultChecked="checked" />
                        <label for="check" class="checkbox-label">Remember Me</label>
                        <button type="submit">Login</button>
                        
                        {/* <button type="button" className="cancelbtn"> Cancel</button> */}
                        <br/>
                        <div className='forgot_pass'>Forgot <a href="#"> password? </a></div>
                        <br />
                        <div className='or'>OR</div>
                        <hr></hr>
                        <br />
                        <button type="submit">Sign in with Google</button>
                        <br />
                        <br />
                        <label>Don't have an account?</label>
                        <a href="#"> Sign Up
                        </a></div><a href="#">
                </a></form><a href="#">
                </a></div >
      );
    }
  export default Login;