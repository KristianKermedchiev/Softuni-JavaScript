import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router from './components/Router';
import styled from 'styled-components';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from './Utils/firebase'
import Login from './components/Login';

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

const ContentWrapper = styled.div`
width: 100%;
height:86vh;
`;

  
function App() {
  const auth = getAuth(app);
  
  const [hasUser, setHasUser] = useState(false);

	onAuthStateChanged(auth, (authUser) => {
		if (!authUser) {  
      setHasUser(false);
		} else {
      setHasUser(true);
    }
  });
  
	return (
			<Wrapper>
				<Navbar />
        <ContentWrapper>
					{hasUser ? 
          <Router />:
          <Login />}
        </ContentWrapper>
				<Footer />
			</Wrapper>
	);
}

export default App;