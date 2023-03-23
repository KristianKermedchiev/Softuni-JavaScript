import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Catalog from './Catalog';
import Register from './Register';
import Create from './Create';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Profile from './Profile';
import Details from './Details';
import Edit from './Edit';


function Router() {

	return (

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/create" element={<Create />} />
					<Route path="/aboutUs" element={<AboutUs />} />
					<Route path="/contactUs" element={<ContactUs />} />
					<Route path="/catalog/:id" element={<Details />} />
					<Route path="/catalog/:id/edit" element={<Edit />} />
				</Routes>
		
	);
}

export default Router;