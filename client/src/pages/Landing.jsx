import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";

const Landing = () => {

const pageStyle = {
  background: "linear-gradient(to bottom, #f0f4ff, #ffffff, #f9fbff)",
  minHeight: "100vh"
};

return (
<div style={pageStyle}>

<Navbar/>

<Hero/>



{/* ABOUT SECTION */}
<div style={{
  padding:"80px 10%",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  gap:"40px"
}}>

<div style={{flex:1}}>
<h2 style={{fontSize:"36px",marginBottom:"20px"}}>About Us</h2>

<p style={{fontSize:"18px",lineHeight:"1.6"}}>
We connect skilled service providers like plumbers, tutors,
electricians and many more with users who need help quickly.
Our platform ensures trusted professionals and smooth service booking.
</p>

</div>

<div style={{
  flex:1,
  height:"300px",
  backgroundImage:"url(https://images.unsplash.com/photo-1556745757-8d76bdb6984b)",
  backgroundSize:"cover",
  backgroundPosition:"center",
  borderRadius:"20px"
}}>
</div>

</div>
<ServiceSection/>

<ReviewSection/>

<Footer/>

</div>
);
};

export default Landing;