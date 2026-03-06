import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = () => {

const user = JSON.parse(localStorage.getItem("user"));

if(!user){
alert("No user registered");
return;
}

if(user.email === email && user.password === password){

if(user.role === "user"){
navigate("/services");
}

else{
navigate("/provider-dashboard");
}

}
else{
alert("Invalid credentials");
}

};

return(

<div style={styles.container}>

<div style={styles.card}>

<h2>Login</h2>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={styles.input}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={styles.input}
/>

<button onClick={handleLogin} style={styles.button}>
Login
</button>

<button
onClick={()=>navigate("/register")}
style={styles.secondaryBtn}
>
Create Account
</button>

</div>
</div>
);
}

const styles = {

container:{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(135deg,#4facfe,#00f2fe)"
},

card:{
background:"white",
padding:"40px",
borderRadius:"10px",
width:"320px",
textAlign:"center",
boxShadow:"0 10px 20px rgba(0,0,0,0.2)"
},

input:{
width:"100%",
padding:"10px",
margin:"10px 0",
borderRadius:"5px",
border:"1px solid #ccc"
},

button:{
width:"100%",
padding:"10px",
background:"#4facfe",
color:"white",
border:"none",
borderRadius:"5px",
marginTop:"10px",
cursor:"pointer"
},

secondaryBtn:{
marginTop:"10px",
background:"transparent",
border:"none",
color:"#4facfe",
cursor:"pointer"
}

};