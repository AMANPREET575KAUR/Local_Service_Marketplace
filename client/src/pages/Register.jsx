import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("user");
const [service,setService] = useState("");

const handleRegister = () => {

const user = {
username,
email,
password,
role,
service
};

localStorage.setItem("user",JSON.stringify(user));

alert("Registration Successful");

navigate("/login");

};

return(

<div style={styles.container}>

<div style={styles.card}>

<h2>Create Account</h2>

<input
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
style={styles.input}
/>

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

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
style={styles.input}
>

<option value="user">User</option>
<option value="provider">Provider</option>

</select>

{role === "provider" && (

<select
value={service}
onChange={(e)=>setService(e.target.value)}
style={styles.input}
>

<option value="">Select Service</option>
<option value="Plumber">Plumber</option>
<option value="Tutor">Tutor</option>
<option value="Electrician">Electrician</option>
<option value="Cleaner">Cleaner</option>

</select>

)}

<button onClick={handleRegister} style={styles.button}>
Register
</button>

<button
onClick={()=>navigate("/login")}
style={styles.secondaryBtn}
>
Back to Login
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
width:"340px",
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