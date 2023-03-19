import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Catalog from './Catalog';
import Register from './Register';
import Create from './Create';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Profile from './Profile';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
height:86vh;
`;

function Router() {
	return (
		<Wrapper>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/create" element={<Create />} />
					<Route path="/AboutUs" element={<AboutUs />} />
					<Route path="/ContactUs" element={<ContactUs />} />
				</Routes>
		</Wrapper>
	);
}

export default Router;