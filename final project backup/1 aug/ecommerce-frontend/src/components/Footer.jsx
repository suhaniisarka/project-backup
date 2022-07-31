import React from "react";
import { Link } from "react-router-dom";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
//style={{backgroundImage:'url("assets/group.jpg")',backgroundRepeat:'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'}}
const Footer = () => {
return (
	<Box >
	<div style={{width:'50%',margin:'auto'}}><p style={{border:"solid",textAlign:'center',color:"white",fontSize:"30px",borderRadius:'20px'}}>Online Vehicle Portal - CarEazy</p></div>
	<br/><br/>
	<Container>
		<Row>
		<Column>
		<Heading><Link to="/AboutUs" style={{ color: "white"}}>About Us</Link></Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">About Team</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Buy Car</FooterLink>
			<FooterLink href="#">Sell Car</FooterLink>
			<FooterLink href="#">Delivery</FooterLink>
			
		</Column>
		<Column>
		
			<Heading><Link to="/ContactUs" style={{ color: "white"}}>Contact Us</Link></Heading>
			<FooterLink href="#">Nagpur</FooterLink>
			<FooterLink href="#">Gujrat</FooterLink>
			<FooterLink href="#">Pune</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;