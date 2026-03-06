import React from "react";

export default function Services(){

const services = [
"Plumber",
"Tutor",
"Electrician",
"Cleaner"
];

return(

<div style={{padding:"40px"}}>

<h2>Available Services</h2>

<div style={{display:"flex",gap:"20px",marginTop:"20px"}}>

{services.map((service,i)=>(
<div key={i} style={card}>
<h3>{service}</h3>
<button style={btn}>Request Service</button>
</div>
))}

</div>

</div>
);
}

const card={
padding:"20px",
border:"1px solid #ddd",
borderRadius:"10px",
width:"180px",
textAlign:"center",
boxShadow:"0 5px 10px rgba(0,0,0,0.1)"
}

const btn={
marginTop:"10px",
padding:"8px",
background:"#4facfe",
color:"white",
border:"none",
borderRadius:"5px"
}