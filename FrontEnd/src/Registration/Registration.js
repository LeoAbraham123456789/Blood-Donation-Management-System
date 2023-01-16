import React from 'react'
import './Registration.css'
import Navbar from '../navbar/Navigationbar'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import { useState } from "react";
const Registration = () => {

	const [postData, setPostData] = useState({
		name: "",
		pass: "",
		age: "",
		bdgp: "",
		ph_num: "",
		hght: "",
		wght: "",
		last_don: "",
		status: ""
	})

	const [bloodgroup, setBloodgroup] = useState("")
	const [status, setStatus] = useState("")

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {

			const response = await fetch("http://localhost:5000/insert", {
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
			<div className="maindiv">
				<Form className='reg_form' onSubmit={handleSubmit}>

					<h1 className='heading1'>DONOR REGISTRATION</h1>
					<Form.Group className="mb-3">
						<Form.Label>Name: </Form.Label>
						<Form.Control
							className='reg_items'
							name="name"
							type="text"
							placeholder="Name / Organization"
							onChange={(e) =>
								setPostData({ ...postData, name: e.target.value })
							}
						/>
					</Form.Group>





					<Form.Group className="mb-3">
						<Form.Label>Password: </Form.Label>
						<br></br>
						<Form.Control
							className='reg_items'

							name="password"
							type="password"
							placeholder="Password"
							onChange={(e) => {
								setPostData({ ...postData, pass: e.target.value })

							}

							}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Age: </Form.Label>
						<Form.Control
							className='reg_items'

							name="age"
							type="number"
							placeholder="age"
							onChange={(e) =>
								setPostData({ ...postData, age: e.target.value })
							}
						/>
					</Form.Group>
					<TextField
						className="dropdown"
						select
						value={bloodgroup}
						label="Blood Group"
						onChange={(e) => {
							setBloodgroup(e.target.value)
							setPostData({ ...postData, bdgp: bloodgroup })
						}
						}
					>
						<MenuItem key="O+ve" value="O+ve">O+ve</MenuItem>
						<MenuItem key="A+ve" value="A+ve">A+ve</MenuItem>
						<MenuItem key="B+ve" value="B+ve">B+ve</MenuItem>
						<MenuItem key="AB+ve" value="AB+ve">AB+ve</MenuItem>
						<MenuItem key="O-ve" value="O-ve">O-ve</MenuItem>
						<MenuItem key="A-ve" value="A-ve">A-ve</MenuItem>
						<MenuItem key="B-ve" value="B-ve">B-ve</MenuItem>
						<MenuItem key="AB-ve" value="AB-ve">AB-ve</MenuItem>
					</TextField><br></br>
					<Form.Group className="mb-3">
						<Form.Label>Contact Number : </Form.Label>
						<Form.Control
							name="contactnumber"
							className='reg_items'

							type="text"
							placeholder="Contact Number"
							onChange={(e) =>
								setPostData({ ...postData, ph_num: e.target.value })
							}
						/><br/>

						<Form.Group className="mb-3">
							<Form.Label>District :    </Form.Label>
							<Form.Control

								className='reg_items'

								name="district"
								type="text"
								placeholder="district"
								onChange={(e) => {
									setPostData({ ...postData, district: e.target.value })

								}

								}
							/>
						</Form.Group>

					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Height: </Form.Label>
						<Form.Control
							className='reg_items'

							name="height"
							type="text"
							placeholder="height"
							onChange={(e) =>
								setPostData({ ...postData, hght: e.target.value })
							}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Weight: </Form.Label>
						<Form.Control
							className='reg_items'

							name="weight"
							type="text"
							placeholder="weight"
							onChange={(e) =>
								setPostData({ ...postData, wght: e.target.value })
							}
						/>
					</Form.Group>
					<TextField
						className="dropdown"
						label="Last Donation"
						type="date"
						defaultValue=""
						InputLabelProps={{
							shrink: true,
						}}
						onChange={(e) =>
							setPostData({ ...postData, last_don: e.target.value })
						}
					></TextField><br></br>
					<TextField
						className="dropdown"
						select
						label="status"
						value={status}
						onChange={(e) => {
							setStatus(e.target.value)
							setPostData({ ...postData, status: e.target.value })
						}
						}
					>
						<MenuItem key="success" value="success">Available</MenuItem>
						<MenuItem key="failed" value="failed">Unavailable</MenuItem>
					</TextField><br></br>

					<Button className="reg_btn" variant="primary" type="submit">
						Sign Up
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default Registration
