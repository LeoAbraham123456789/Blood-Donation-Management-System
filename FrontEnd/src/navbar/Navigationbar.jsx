import logo from '../Group 8.jpg'
import './navigationbar.scss'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Login from '../login/Login';

function Navigationbar() {

  const navigate = useNavigate();
  function navigatelogin() {
    navigate('/login')
  }
  function navigatehome(){
    navigate('/');
  }
  function navigateaboutus(){
    navigate('/aboutus')
  } 
  return (
    <div className="navbar">
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='right'>
        <div className='links'>
          <Link to="/" className='link_home'>
          <div className='home'onClick={navigatehome}>
            Home
          </div>
          </Link>
          <div className='home' onClick={navigateaboutus}>
            About
          </div>
          <div className='home' onClick={navigateaboutus}>
            Contact Us
          </div>
        </div>
        <button className='login' onClick={navigatelogin}>
          Log In
        </button>
        {/* <Popup trigger={ <button className='login'>
          Log In
        </button>} 
     position="center">
      <Login/>
    </Popup> */}
      </div>
    </div>
  );
}

export default Navigationbar;
