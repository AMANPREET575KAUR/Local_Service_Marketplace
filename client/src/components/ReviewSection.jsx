import React,{useState,useEffect} from "react";

function ReviewSection(){

const reviews=[

{
name:"Rahul",
text:"Booked a plumber in minutes. Amazing platform!",
img:"https://randomuser.me/api/portraits/men/32.jpg"
},

{
name:"Anjali",
text:"Found a great tutor for my brother.",
img:"https://randomuser.me/api/portraits/women/45.jpg"
},

{
name:"Amit",
text:"Very quick electrician service!",
img:"https://randomuser.me/api/portraits/men/50.jpg"
}

];

const [index,setIndex]=useState(0);

useEffect(()=>{

const interval=setInterval(()=>{

setIndex((prev)=>(prev+1)%reviews.length);

},3000);

return ()=>clearInterval(interval);

},[]);

const review=reviews[index];

return(

<section style={styles.section}>

<h2>User Reviews</h2>

<div style={styles.card}>

<img src={review.img} style={styles.image}/>

<p style={styles.text}>
"{review.text}"
</p>

<h4>{review.name}</h4>

</div>

</section>

);
}

export default ReviewSection;

const styles={

section:{
padding:"80px 10%",
textAlign:"center",
background:"#f5f7fb"
},

card:{
width:"420px",
margin:"40px auto",
padding:"30px",
background:"white",
borderRadius:"10px",
boxShadow:"0 10px 25px rgba(0,0,0,0.1)"
},

image:{
width:"80px",
height:"80px",
borderRadius:"50%",
marginBottom:"15px"
},

text:{
fontSize:"16px",
marginBottom:"10px"
}

};