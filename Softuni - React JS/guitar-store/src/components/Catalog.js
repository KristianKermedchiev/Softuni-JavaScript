// import '../styles/Catalog.css';
// import app from '../Utils/firebase'
// import { collection, getDocs,getFirestore } from "firebase/firestore";
// import React, { useState, useEffect } from "react";

// function Catalog() {

//     const [guitars, setGuitars] = useState([]);

//     const db = getFirestore(app);

//     useEffect(() => {
//         const fetchGuitars = async () => {
//           const guitarCollection = collection(db, "Guitars");
//           const guitarSnapshot = await getDocs(guitarCollection);
//           const guitarData = guitarSnapshot.docs.map((doc) => ({
//               id: doc.id,
//               ...doc.data(),
              
//           }));
//           setGuitars(guitarData);
//         };
    
//         fetchGuitars();
//       }, [db]);

//       return (
//         <div className="catalog-container">
//           {guitars.map((guitar) => (
//             <div className="catalog-item" key={guitar.id}>
//               <img src={guitar.imgUrl} alt={guitar.type}></img>
//               <h3>{guitar.model}</h3>
//             </div>
//           ))}
//         </div>
//       );
//     }

// export default Catalog;


// import '../styles/Catalog.css';
// import app from '../Utils/firebase'
// import { collection, getDocs, getFirestore, query, limit, startAfter } from "firebase/firestore";
// import { useState, useEffect } from "react";

// function Catalog() {
//   const [guitars, setGuitars] = useState([]);
//   const [lastDoc, setLastDoc] = useState(null);
//   const db = getFirestore(app);
//   const PAGE_SIZE = 4;

//   useEffect(() => {
//     const fetchGuitars = async () => {
//       const q = query(collection(db, "Guitars"), limit(PAGE_SIZE));
//       const guitarSnapshot = await getDocs(q);
//       const guitarData = guitarSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setGuitars(guitarData);
//       setLastDoc(guitarSnapshot.docs[guitarSnapshot.docs.length - 1]);
//     };

//     fetchGuitars();
//   }, [db]);

//   const handleNextPage = async () => {
//     const q = query(
//       collection(db, "Guitars"),
//       startAfter(lastDoc),
//       limit(PAGE_SIZE)
//     );
//     const guitarSnapshot = await getDocs(q);
//     const guitarData = guitarSnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setGuitars((prevState) => [...prevState, ...guitarData]);
//     setLastDoc(guitarSnapshot.docs[guitarSnapshot.docs.length - 1]);
//   };

//   const showNextPageButton = guitars.length >= PAGE_SIZE;

//   return (
//     <div className="catalog-container">
//       {guitars.map((guitar) => (
//         <div className="catalog-item" key={guitar.id}>
//           <img src={guitar.imgUrl} alt={guitar.type}></img>
//           <h3>{guitar.model}</h3>
//         </div>
//       ))}
//       {showNextPageButton && (
//         <button onClick={handleNextPage}>Load More</button>
//       )}
//     </div>
//   );
// }

// export default Catalog;



import '../styles/Catalog.css';
import app from '../Utils/firebase';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useState, useEffect } from "react";

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
            <img src={guitar.imgUrl} alt={guitar.type}></img>
            <h3>{guitar.model}</h3>
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