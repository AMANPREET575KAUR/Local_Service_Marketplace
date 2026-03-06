const ServiceCard = ({title}) => {

  return (

    <div
      style={{
        padding:"40px",
        background:"white",
        borderRadius:"12px",
        textAlign:"center",
        boxShadow:"0 5px 20px rgba(0,0,0,0.1)",
        transition:"0.3s"
      }}
    >

      <h3>{title}</h3>

      <p>Find professional {title} services.</p>

      <button
      style={{
        marginTop:"10px",
        padding:"8px 15px",
        border:"none",
        background:"#2563eb",
        color:"white",
        borderRadius:"6px"
      }}
      >
        Book
      </button>

    </div>
  );

};

export default ServiceCard;