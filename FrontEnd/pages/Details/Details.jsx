import React, { Fragment, useState } from 'react'
import { useEffect } from 'react';
import useFetch from './useFetch';

const Details=()=>{
    const [list, setList]=useState([]);
    // const bdgp={
    //     bdgp:localStorage.getItem("Blood_Gp")}
    const bdgp=localStorage.getItem("Blood_Gp")
    
    const { data, isLoading, error }= useFetch(`http://localhost:5000/select/`+bdgp);

    // console.log(data,isLoading,error)
    // console.log(typeof(data[0].name))
    list.push(data)
    console.log(data);
    console.log(list[1]);
    // useEffect(()=>{
    //     const getDetails=async()=>{
    //         try{
    //             console.log(bdgp)
    //             const response=await fetch(`http://localhost:5000/select/A+`);
    //             // console.log(response.json());
    //             const Data=response.json();
    //             // console.log(JSON.parse(Data))
                
    //             console.log(Data);

    //             // console.log(typeof(bdgp));
    //         }catch(err){
    //             console.error(err.message);
    //         }
    //     }
    //     getDetails();
    // },[]);
    return(
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Blood Group</th>
                        <th>District</th>
                        <th>Phone Number</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {!isLoading && list[1].map(li=>(
                        <tr>
                            <td>{li.name}</td>
                            <td>{li.bdgp}</td>
                            <td>{li.name}</td>
                            <td>{li.ph_num}</td>
                            <td>{li.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}
export default Details;