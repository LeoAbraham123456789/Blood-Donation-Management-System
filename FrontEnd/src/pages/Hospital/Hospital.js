import React from 'react'
import './Hospital.css'
import Navbar from '../../navbar/Navigationbar'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const Hospital = () => {

	const [postData, setPostData] = useState({
		name: "",
		pass:"",
		district: "",
		contactnumber: "",
	})

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {

			const response = await fetch("http://localhost:5000/hospital/insert", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(postData)
			});
			console.log(JSON.stringify(postData))
		} catch (err) {
			console.log(err.message);
		}
	};


	return (
		<div>
			<Navbar />
			<div className="hos_maindiv">
				<Form className='hos_form' onSubmit={handleSubmit}>

					<h1 className='hos_heading1'>REGISTER HOSPITAL</h1><br></br>
					<Form.Group>
						<Form.Label>Name:    </Form.Label>
						<Form.Control
							className="hos_items"
							name="name"
							placeholder='Name'
							type="text"
							onChange={(e) =>
								setPostData({ ...postData, name: e.target.value })
							}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Password:    </Form.Label>
						<Form.Control
							className="hos_items"
							name="password"
							placeholder='password'
							type="text"
							onChange={(e) =>
								setPostData({ ...postData, pass: e.target.value })
							}
						/>
					</Form.Group>

					<Form.Group >
						<Form.Label>Contact Number :   </Form.Label>
						<Form.Control
							className="hos_items"
							name="contactnumber"
							placeholder='contact number'
							type="text"
							onChange={(e) =>
								setPostData({ ...postData, contactnumber: e.target.value })
							}
						/>
					</Form.Group>

					<Form.Group >
						<Form.Label>District :    </Form.Label>
						<Form.Control
							className="hos_items"
							placeholder='district'
							name="district"
							type="text"
							onChange={(e) => {
								setPostData({ ...postData, district: e.target.value })

							}

							}
						/>
					</Form.Group>

					<Button className="hos_btn" variant="primary" type="submit">
						Register
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default Hospital
