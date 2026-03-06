import React from "react";

function Footer(){

return(

<footer style={styles.footer}>

<h3>Service Marketplace</h3>

<p>Connecting users with trusted service providers</p>

<p style={{marginTop:"15px"}}>
© 2026 Service Marketplace
</p>

</footer>

);
}

export default Footer;

const styles={

footer:{
background:"#75bfda",
color:"white",
padding:"40px",
textAlign:"center"
}

};