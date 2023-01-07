import logo from '../Group 8.jpg'
import './navigationbar.scss'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navigationbar() {

  const navigate = useNavigate();
  function navigatelogin() {
    navigate('/login')
  }
  return (
    <div className="navbar">
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='right'>
        <div className='links'>
          <Link to="/">
          <div className='home'>
            Home
          </div>
          </Link>
          <div className='home'>
            About
          </div>
          <div className='home'>
            Contact Us
          </div>
        </div>
        <button className='login' onClick={navigatelogin}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Navigationbar;
