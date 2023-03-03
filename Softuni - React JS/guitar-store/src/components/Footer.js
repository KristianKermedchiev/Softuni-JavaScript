import '../styles/Footer.css';
import styled from 'styled-components';


const Wrapper = styled.footer`
    width: 100%;
    flex-grow: 1;
  `;

function Footer() {
	return (
		<Wrapper>
			<ul>
				<li><a href="/">About Us</a></li>
				<li><a href="/">Contact Us</a></li>
			</ul>
		</Wrapper>

	);
}

export default Footer;