import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router from './components/Router';
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #fff;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
    // Shows vertical scrollbar only when needed
    overflow-y: auto;
    // Dont shift content to side when vertical scrollbar shows/hides
    margin-right: calc(-1 * (100vw - 100%)) !important;
  `;
  
function App() {
	return (
			<Wrapper>
				<Navbar />
					<Router />
				<Footer />
			</Wrapper>
	);
}

export default App;