import styled from 'styled-components';

export const Box = styled.div`

padding: 60px 70px;
background-image: linear-gradient(180deg, black, grey);
// background-repeat: no-repeat;
// background-position: center;
// background-size: cover;
// background-opacity:0.5;
  bottom: 0;
  width: 100%;
// Box.background{
// 	opacity: 0.5;
// }

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1000px;
margin: 0 auto;

`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(185px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));}
margin-bottom: 20px;
`;
export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: grey;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;