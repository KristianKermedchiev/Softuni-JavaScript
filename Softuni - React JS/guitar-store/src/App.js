import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styled from 'styled-components';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from './Utils/firebase'
import PrivateRouter from './components/PrivateRouter';
import PublicRouter from './components/PublicRouter';

const Wrapper = styled.div`
    background-color: #fff;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
    overflow-y: auto;
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
          <PrivateRouter />:
          <PublicRouter />}
        </ContentWrapper>
				<Footer />
			</Wrapper>
	);
}

export default App;