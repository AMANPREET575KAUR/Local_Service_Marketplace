import React from "react";

export default function ProviderDashboard(){

const user = JSON.parse(localStorage.getItem("user"));

const requests = [
{service:"Plumbing Fix"},
{service:"Pipe Leakage"},
{service:"Bathroom Tap Repair"}
];

return(

<div style={{padding:"40px"}}>

<h2>Provider Dashboard</h2>

<div style={profileCard}>

<h3>Name: {user.username}</h3>
<p>Service: {user.service}</p>
<p>Services Done This Month: 12</p>

</div>

<h3 style={{marginTop:"30px"}}>Service Requests</h3>

{requests.map((r,i)=>(
<div key={i} style={requestCard}>
{r.service}
<button style={acceptBtn}>Accept</button>
</div>
))}

</div>
);
}

const profileCard={
padding:"20px",
borderRadius:"10px",
background:"#f4f4f4",
width:"300px"
}

const requestCard={
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px",
border:"1px solid #ddd",
borderRadius:"8px",
marginTop:"10px",
width:"400px"
}

const acceptBtn={
padding:"6px 10px",
background:"#43e97b",
border:"none",
color:"white",
borderRadius:"5px"
}