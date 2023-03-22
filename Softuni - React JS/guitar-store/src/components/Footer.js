// import '../styles/Footer.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Wrapper = styled.footer`
    width: 100%;
    flex-grow: 1;
    background-color: #333; 
    height: 50px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    position: relative;
  
`
	
const Ul = styled.ul `
    list-style-type: none; 
    margin: 0; 
    padding: 0; 
	`
  
const Li = styled.li `
    display: inline-block; 
    margin: 0 10px; 
`

const Div = styled.div `
    color: #fff; 
    text-decoration: none; 
    font-size: 16px; 
    font-weight: bold; 
    text-transform: uppercase;
	cursor: pointer;
`


function Footer() {

	const navigate = useNavigate();

	const handleRouteChange = (routeName) => {
	  navigate(routeName);
	};

	return (
		<Wrapper>
			<Ul>
				<Li><Div onClick={() => handleRouteChange("/aboutUs")}>About Us</Div></Li>
				<Li><Div onClick={() => handleRouteChange("/contactUs")}>Contact Us</Div></Li>
			</Ul>
		</Wrapper>

	);
}

export default Footer;