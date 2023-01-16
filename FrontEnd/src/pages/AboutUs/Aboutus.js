import React from 'react'
import Table from 'react-bootstrap/Table'
import './Aboutus.css'
import Navbar from '../../navbar/Navigationbar'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image from './inst.jpg'

function Aboutus() {

	const navigate = useNavigate();
	function navigatesponsor() {
		navigate('/Sponsor')
	}
	return (

		<div>
			<Navbar />
			<div className='about_top'>
				<h1 className='heading1'>ABOUT US</h1>
				<div className='about_us'>
					<div className='about_images'>
						<img src={image1} className="image1" />
						<img src={image2} className="image2" />
					</div>
					<p className="para1">An initiative by <br></br> the team members (Anjitha, Aswathy,<br />Aswin, Leo, Manjunath, Navaneeth, Jagath, Nisham) from College of Engineering, Trivandrum<br></br>  <br></br></p><br></br><br></br>
				</div>
				
				<div className="parentdiv4">
					<button className='about_donate_btn' onClick={navigatesponsor}>DONATE</button>
					<div className='contact_top'>
					<h1 className='contact_text'>Contact Us:</h1>
					<div className='about_det'>
						<div className='contact_logo'>
							<img src={image} />
						</div>
						<div className='contact_det'>
							@artastic_creation<br />
							@aswathysabu8<br />
							@as_a_ash<br />
							@leos_era<br />
							@manjunath.roy.31<br />
							@navaneeth.madathil<br />
							@_jagathkrishna<br />
							@nisham_mp_
						</div>
					</div>
					</div>
				</div>
				{/* </div> */}
			</div>
		</div>
	)
}

export default Aboutus
