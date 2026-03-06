import React from "react";

function About(){

return(

<section style={styles.section}>

<div style={styles.container}>

<div style={styles.text}>

<h2>About Our Platform</h2>

<p>
Our marketplace connects users with trusted service providers like
plumbers, tutors and electricians. Instead of searching everywhere,
you can book services quickly and safely in one place.
</p>

<p>
Providers receive verified requests and can grow their business
through our platform.
</p>

</div>

<img
src="https://images.unsplash.com/photo-1552664730-d307ca884978"
style={styles.image}
/>

</div>

</section>

);
}

export default About;

const styles={

section:{
padding:"80px 10%"
},

container:{
display:"flex",
alignItems:"center",
gap:"50px",
flexWrap:"wrap"
},

text:{
flex:1,
fontSize:"18px",
lineHeight:"1.6",
animation:"fadeUp 1s ease"
},

image:{
flex:1,
width:"100%",
borderRadius:"10px",
boxShadow:"0 10px 20px rgba(0,0,0,0.1)"
}

};