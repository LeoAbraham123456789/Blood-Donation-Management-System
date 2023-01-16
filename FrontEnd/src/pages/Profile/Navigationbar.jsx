import logo from '../../Group 8.jpg'
import './navigationbar.scss'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navigationbar() {

  const navigate = useNavigate();
  function navigatelogout() {
    localStorage.clear();
    navigate('/');
  }
  function navigateaboutus(){
    navigate('/aboutus')
  }
  function navigatehome(){
    navigate('/logined');
  }
  return (
    <div className="navbar">
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='right'>
        <div className='links'>
          <Link to="/" className='link_home'>
          <div className='home' onClick={navigatehome}>
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
        <button className='login' onClick={navigatelogout}>
          Log Out
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
