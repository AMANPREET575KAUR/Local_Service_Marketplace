import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

const [dark,setDark] = useState(false)

const toggleMode = () =>{
document.body.style.background = dark ? "white" : "#111"
document.body.style.color = dark ? "black" : "white"
setDark(!dark)
}

return (

<div style={{
display:"flex",
justifyContent:"space-between",
padding:"15px 50px",
background:"#75bfda",
color:"white"
}}>

<div style={{display:"flex",alignItems:"center"}}>

<div style={{
width:"40px",
height:"40px",
background:"white",
borderRadius:"6px",
marginRight:"10px"
}}/>

<h2>ServiceHub</h2>

</div>

<div>

<Link to="/" style={navLink}>Home</Link>
<Link to="/ServiceSection" style={navLink}>Services</Link>
<Link to="/About" style={navLink}>About</Link>

<Link to="/login">
<button style={btn}>Login</button>
</Link>

<Link to="/register">
<button style={btn}>Register</button>
</Link>

<button onClick={toggleMode} style={btn}>
Toggle Mode
</button>

</div>

</div>
)
}

const navLink = {
margin:"0 15px",
color:"white",
textDecoration:"none"
}

const btn = {
marginLeft:"10px",
padding:"6px 15px",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}

export default Navbar