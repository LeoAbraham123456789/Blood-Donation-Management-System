import React, { useEffect } from 'react'
import './Profile.css'
import Navbar from "./Navigationbar"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import { useState } from "react";
import useFetch from '../Details/useFetch';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const navigate=useNavigate();
	const api = axios.create({ baseURL: "http://localhost:5000" });
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const name = localStorage.getItem("Username")
	console.log(typeof (name))
	const list = [];
	const [postData, setPostData] = useState({
		name: "",
		pass: "",
		age: "",
		bloodgroup: "",
		contactnumber: "",
		place: "",
		height: "",
		weight: "",
		date: "",
		status: ""
	})
	useEffect(() => {
		// const { data, isLoading, error }= useFetch(`http://localhost:5000/check/`+name);
		fetch("http://localhost:5000/check/" + name)
			.then(res => {
				if (!res.ok) {
					throw Error("Not able to fetch from the given end point");
				}
				return res.json();
			})
			.then(data => {
				setData(data);

				setPostData({
					name: data[0].name,
					pass: data[0].pass,
					age: data[0].age,
					bdgp: data[0].bdgp,
					ph_num: data[0].ph_num,
					place: data[0].place,
					hght: data[0].hght,
					wght: data[0].wght,
					last_don: data[0].last_don,
					status: data[0].status
				})
				setLoading(false);
				setError(false)
				list.push(data);

			})
			.catch(err => {
				console.log(err)
			})
		// const response =  fetch("http://localhost:5000/check/"+name);
		//   const data = response;
		// !isLoading && list.push(data);
		console.log(postData);
		console.log(data)
		console.log(list)
		!isLoading && console.log(data[0].name)


		// if(!isLoading){

	}, []);

	const [bloodgroup, setBloodgroup] = useState("")
	const [status, setStatus] = useState("")

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	await fetch("http://localhost:5000/edit",{
	// 		method: "POST",
	// 		headers:{"Content-Type":"application/json"},
	// 		body: JSON.stringify(data[0])
	// 	})
	// };
	function navigateAdmin(){
		navigate('/admin');
	}

	return (
		<div className='pro_top'>
			<Navbar />
			{!isLoading &&
				<div className="pro_maindiv">
					<Form className='pro_form'>

						<h1 className='pro_heading1'>PROFILE</h1>
						<div className='pro_inner'>
						<Form.Group>
							<Form.Label className='pro_labels'>Name:    </Form.Label>
							<Form.Control
								className="pro_det"
								defaultValue={data[0].name}
								name="name"
								type="text"
								onChange={(e) => {
									setPostData({ ...postData, name: e.target.value })
									console.log(postData)
								}
								}
							/>
						</Form.Group>






						<Form.Group>
							<Form.Label>Age :   </Form.Label>
							<Form.Control
								className="pro_det"
								name="age"
								type="number"
								defaultValue={data[0].age}
								onChange={(e) =>
									setPostData({ ...postData, age: e.target.value })
								}
							/>
						</Form.Group>
						{/* <TextField
						className="pro_dropdown"
						select
						value={bloodgroup}
						label="Blood Group"
						defaultValue={data[0].bdgp}
						onChange={(e) => {
							setBloodgroup(e.target.value)
							setPostData({ ...postData, bloodgroup: bloodgroup })
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
					</TextField> */}
						<Form.Group>
							<Form.Label>Blood Group:</Form.Label>
							<Form.Control
								className="pro_det" defaultValue={data[0].bdgp}
								name="date"
								type="text"
								onChange={(e) =>
									setPostData({ ...postData, bdgp: e.target.value })
								}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Contact Number :   </Form.Label>
							<Form.Control
								className="pro_det" name="contactnumber"
								type="text"
								defaultValue={data[0].ph_num}
								onChange={(e) =>
									setPostData({ ...postData, ph_num: e.target.value })
								}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>District :    </Form.Label>
							<Form.Control
								className="pro_det" name="district"
								type="text"
								defaultValue={data[0].place}
								onChange={(e) => {
									setPostData({ ...postData, place: e.target.value })

								}

								}
							/>
						</Form.Group>


						<Form.Group>
							<Form.Label>Height :    </Form.Label>
							<Form.Control
								className="pro_det" name="height"
								type="text"
								defaultValue={data[0].hght}
								onChange={(e) =>
									setPostData({ ...postData, hght: e.target.value })
								}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Weight :    </Form.Label>
							<Form.Control
								className="pro_det" defaultValue={data[0].wght}
								name="weight"
								type="text"
								onChange={(e) =>
									setPostData({ ...postData, wght: e.target.value })
								}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Date :    </Form.Label>
							<Form.Control
								className="pro_det" defaultValue={data[0].last_don}
								name="date"
								type="text"
								onChange={(e) =>
									setPostData({ ...postData, last_don: e.target.value })
								}
							/>
						</Form.Group>
						{/* <TextField
						className="pro_dropdown"
						label="Last Donation"
						type="date"
						defaultValue={data[0].last_don}
						InputLabelProps={{
							shrink: true,
						}}
						onChange={(e) =>
							setPostData({ ...postData, date: e.target.value })
						}
					/><br></br> */}
						{/* <TextField
						className="pro_dropdown"
						select
						label="Status"
						value={status}
						defaultValue={data[0].status}
						onChange={(e) => {
							setStatus(e.target.value)
							setPostData({ ...postData, status: status })
						}
						}
					>
						<MenuItem key="success" value="success">Available</MenuItem>
						<MenuItem key="failed" value="failed">Unavailable</MenuItem>
					</TextField> */}
						<Form.Group>
							<Form.Label>Status :    </Form.Label>
							<Form.Control
								className="pro_det" defaultValue={data[0].status}
								name="date"
								type="text"
								onChange={(e) =>
									setPostData({ ...postData, status: e.target.value })
								}
							/>
						</Form.Group>
						</div>
						<div className='buttons'>
						<Button type='buttom' className="pro_btn" variant="primary" onClick={() => {
							const Data = JSON.stringify(postData);
							api.put("/edit", postData).then((response) => {
								console.log("HELLO")
							});
							// fetch("http://localhost:5000/edit",{
							// 	method: "PUT",
							// 	headers:{"Content-Type":"application/json"},
							// 	body: JSON.stringify(postData)
							// })
						}}>
							Edit
						</Button>
						<Button className='pro_btn' onClick={navigateAdmin}>Admin Panel</Button>
						</div>
					</Form>
				</div>
			}
		</div>
	)
}

export default Profile
