import "./datatable.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import {Link} from "react-router-dom"
import { useState } from "react";
import useFetch from "../../../pages/Details/useFetch";

const Datatable = () => {
  const list1=[]
  const [list, setData]=useState([]);
  const { data, isLoading, error }= useFetch("http://localhost:5000/select");
  list.push(data);
  console.log(list[1]);
  // try {

  //   const response = await fetch("http://localhost:5000/select");
  //   const data = await response.json()

  //   list.push(data);
  //   console.log(list[0])

  // } catch (err) {
  //   console.log(err.message);
  // }
  const handleDelete=(id)=>{
    setData(list[0].filter(item=>item.id!==id))
  }

  const actionColumn=[
    {field:"action", headerName:"Action", width:150, renderCell:(params)=>{
      return(
        <div className="cellAction">
          <Link to="/users/test" style={{textDecoration: "none"}}>
          <div className="viewButton">View</div>
            </Link>
          <div className="deleteButton" onClick={()=>fetch("http://localhost:5000/delete/"+params.row.pass,{method:"DELETE"})}>Delete</div>
        </div>
      )
    }}
  ]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" style={{textDecoration: "none"}} className="link">
          Add New
        </Link>
      </div>
      {!isLoading&&
      <DataGrid 
        className="datagrid"
        rows={list[1]}
        columns={userColumns.concat(actionColumn)}
        getRowId={(row: any)=>row.pass}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />}
    </div>
  );
};

export default Datatable;