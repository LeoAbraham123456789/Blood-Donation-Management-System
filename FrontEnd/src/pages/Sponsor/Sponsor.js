import React from 'react'
import './Sponsor.css'
import Navbar from '../../navbar/Navigationbar'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const Sponsor = () => {

	const [postData, setPostData] = useState({
		name: "",
		district: "",
		contactnumber: "",
		amount: ""
	})

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {

			const response = await fetch("http://localhost:5000/sponsor/insert", {
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
			<div className="spo_maindiv">
				<Form onSubmit={handleSubmit}>

					<h1 className='spo_heading1'>SPONSOR</h1><br></br>
					<Form.Group>
						<Form.Label>Name:    </Form.Label>
						<Form.Control
							className="spo_items"
							name="name"
							placeholder='Name'
							type="text"
							onChange={(e) =>
								setPostData({ ...postData, name: e.target.value })
							}
						/>
					</Form.Group>

					<Form.Group className="spo_mb-3">
						<Form.Label>Contact Number :   </Form.Label>
						<Form.Control
							className="spo_items"
							name="contactnumber"
							placeholder='contact number'
							type="text"
							onChange={(e) =>
								setPostData({ ...postData, contactnumber: e.target.value })
							}
						/>
					</Form.Group>

					<Form.Group className="spo_mb-3">
						<Form.Label>District :    </Form.Label>
						<Form.Control
							className="spo_items"
							placeholder='district'
							name="district"
							type="text"
							onChange={(e) => {
								setPostData({ ...postData, district: e.target.value })

							}

							}
						/>
					</Form.Group>

					<Form.Group className="spo_mb-3">
						<Form.Label>Amount :    </Form.Label>
						<Form.Control
							className="spo_items"
							name="amount"
							placeholder='amount'
							type="text"
							onChange={(e) => {
								setPostData({ ...postData, amount: e.target.value })

							}

							}
						/>
					</Form.Group>

					<Button className="spo_btn" variant="primary" type="submit">
						Donate
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default Sponsor
