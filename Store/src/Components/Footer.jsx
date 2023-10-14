import Logo from "../assets/Images/logo.png"

const Footer = () => {
  return (
    <>
    <hr/>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <img style={{width:"5%"}} src={Logo }/>
        <p style={{color:"#757575",fontSize:"small"}}> Copy Right @2023</p>
        </div>
    
    
    </>
      
    
  )
}

export default Footer
