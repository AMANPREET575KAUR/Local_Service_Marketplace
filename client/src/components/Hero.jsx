import React, { useState, useEffect } from "react";

const Hero = () => {

const images = [
"https://images.unsplash.com/photo-1521791136064-7986c2920216",
"https://images.unsplash.com/photo-1581578731548-c64695cc6952",
"https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
"https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
];

const [current, setCurrent] = useState(0);

useEffect(() => {

const interval = setInterval(() => {
setCurrent((prev) => (prev + 1) % images.length);
}, 4000);

return () => clearInterval(interval);

}, []);

return (

<div style={{
height:"90vh",
position:"relative",
overflow:"hidden",
display:"flex",
alignItems:"center",
justifyContent:"center",
textAlign:"center",
color:"white"
}}>

{/* BACKGROUND SLIDER */}

{images.map((img,index)=>(
<div
key={index}
style={{
backgroundImage:`url(${img})`,
backgroundSize:"cover",
backgroundPosition:"center",
position:"absolute",
top:0,
left:0,
width:"100%",
height:"100%",
opacity: current === index ? 1 : 0,
transition:"opacity 1.5s ease-in-out"
}}
/>
))}

{/* DARK OVERLAY */}

<div style={{
position:"absolute",
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.55)"
}}/>

{/* HERO CONTENT */}

<div style={{position:"relative",zIndex:2}}>

<h1 style={{
fontSize:"52px",
marginBottom:"20px"
}}>
Find Trusted Services Near You
</h1>

<p style={{
fontSize:"20px",
marginBottom:"30px"
}}>
Book plumbers, tutors, electricians and more instantly
</p>

<button style={{
padding:"14px 28px",
fontSize:"18px",
background:"#73aadb",
border:"none",
borderRadius:"8px",
color:"white",
cursor:"pointer"
}}>
Explore Services
</button>

</div>

</div>
);
};

export default Hero;