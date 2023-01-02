import logo from '../Group 8.jpg'
import './navigationbar.scss'

function Navigationbar() {
  return (
    <div className="navbar">
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='right'>
        <div className='links'>
          <div className='home'>
            Home
          </div>
          <div className='home'>
            About
          </div>
          <div className='home'>
            Contact Us
          </div>
        </div>
        <button className='login'>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Navigationbar;                                                                                                             