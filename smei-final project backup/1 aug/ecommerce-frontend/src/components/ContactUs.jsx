import React from "react";
function ContactUs() {
  return (
    <>
      {/* <div ><a style={{paddingTop:"300px"}}>Our Executives are available 24*7 !</a></div> */}
      <div className="container center" style={{width:"450px",paddingTop:"30px"}}><img src={'assets/contact.jpg'} style={{width:"450px",borderRadius:'25px'}} /></div>
      {/* <div style={{marginBottom:0,marginTop:15,marginLeft:200,marginRight:900, color: "white",fontSize:"45px",textShadow:'2px 1px #000000',paddingLeft:"80px",border: 'solid',borderRadius:"15px",borderColor:"black"}}>Contact Us</div> */}
      <br/>
      <div
        className="container center"
        style={{
          
          display: "grid",
          paddingLeft:70,
          paddingTop:70,
          paddingBottom:70,
          //justifyContent: "center",
          border: 'solid',
          borderRadius:"15px",
          background:'#313131',
        }}
      >
        
        <div style={{display:"grid"}}><p style={{ color: "white",textShadow:'1px 1px #000000'}}>
          <a style={{fontSize:"30px"}}>Feel free to reach out to us!</a>
          <br />
          <br />
          <div style={{float:'right'}}><img src={'contactus.jpg'} style={{}} /></div>
          <div>
          <div>
          <img src={'email2.png'} style={{width:'33px', paddingRight:'2px',paddingTop:"0px"}} />
          <a style={{fontSize:"22px",paddingTop:"2px"}}>Email-Id: suhani.isarka@gmail.com</a>
          </div>
          <br />
          <div>
          <img src={'address.png'} style={{width:'33px', paddingRight:'2px',paddingTop:"0px"}} />
          <a style={{fontSize:"22px",paddingTop:"2px"}}>Address: Building alpha, 3rd Floor, colorado street, Pune</a>
          </div>
          <br />
          <div>
          <img src={'landline2.png'} style={{width:'33px', paddingRight:'2px',paddingTop:"0px"}} />
          <a style={{fontSize:"22px",paddingTop:"2px"}}>Contact No: 7972728705</a>
          </div>
          <br />
          </div>
        </p></div>
        
      </div>
      <br/>
    </>
  );
}

export default ContactUs;