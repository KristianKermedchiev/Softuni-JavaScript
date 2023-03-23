import '../styles/Catalog.css';
import app from '../Utils/firebase';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Catalog() {
  const [guitars, setGuitars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const db = getFirestore(app);

  useEffect(() => {
    const fetchGuitars = async () => {
      const guitarCollection = collection(db, "Guitars");
      const guitarSnapshot = await getDocs(guitarCollection);
      const guitarData = guitarSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGuitars(guitarData);
    };

    fetchGuitars();
  }, [db]);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(guitars.length / 4)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * 4;
  const visibleGuitars = guitars.slice(startIndex, startIndex + 4);

  return (
    <div>
      <div className="catalog-container">
        {visibleGuitars.map((guitar) => (
          
          <div className="catalog-item" key={guitar.id}>
             <Link to={`/catalog/${guitar.id}`} key={guitar.id}>
            <img src={guitar.imgUrl} alt={guitar.type}></img>
            <h3>{guitar.model}</h3>
            </Link>
          </div>
          
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousClick} disabled={currentPage === 1}>
          Previous
        </button>
        <p>Current Page: {currentPage}</p>
        <button
          onClick={handleNextClick}
          disabled={currentPage === Math.ceil(guitars.length / 4)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Catalog;