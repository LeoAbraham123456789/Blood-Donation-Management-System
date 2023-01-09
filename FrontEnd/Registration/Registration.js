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
		try{
	
			const response=await fetch("http://localhost:5000/insert",{
				method:"POST",
				headers:{"Content-Type":"application/json"},
				body: JSON.stringify(postData)
		});
		console.log(JSON.stringify(postData))
		}catch(err)
		{
			console.log(err.message);
		}
	};


	return (
		<div>
			<Navbar />
			<Form onSubmit={handleSubmit}>

				<h1 className='heading1'>DONOR REGISTRATION</h1>
				<Form.Group className="mb-3">
					<Form.Label></Form.Label>
					<Form.Control
						name="name"
						type="text"
						placeholder="Name / Organization"
						onChange={(e) =>
							setPostData({ ...postData, name: e.target.value })
						}
					/>
				</Form.Group>





				<Form.Group className="mb-3">
					<Form.Label></Form.Label>
					<br></br>
					<Form.Control
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
					<Form.Label></Form.Label>
					<Form.Control
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
				</TextField>
				<Form.Group className="mb-3">
					<Form.Label></Form.Label>
					<Form.Control
						name="contactnumber"
						type="text"
						placeholder="Contact Number"
						onChange={(e) =>
							setPostData({ ...postData, ph_num: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label></Form.Label>
					<Form.Control
						name="height"
						type="text"
						placeholder="height"
						onChange={(e) =>
							setPostData({ ...postData, hght: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label></Form.Label>
					<Form.Control
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
					<MenuItem key="success" value="success">Success</MenuItem>
					<MenuItem key="failed" value="failed">Failed</MenuItem>
				</TextField>

				<Button className="btn" variant="primary" type="submit">
					Sign Up
				</Button>
			</Form>
		</div>
	)
}

export default Registration
