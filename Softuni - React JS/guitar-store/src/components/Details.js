import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import app from '../Utils/firebase';
import '../styles/Details.css';

function Details() {
    const { id } = useParams();
    const [guitar, setGuitar] = useState(null);

    useEffect(() => {
        const db = getFirestore(app);
        const guitarRef = doc(collection(db, 'Guitars'), id);

        getDoc(guitarRef)
            .then((doc) => {
                if (doc.exists()) {
                    setGuitar(doc.data());
                } else {
                    console.log('No such document!');
                }
            })
            .catch((error) => {
                console.log('Error getting document:', error);
            });
    }, [id]);

    if (!guitar) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
          <h2>{guitar.model}</h2>
          <div className="guitar-details">
            <div className="guitar-image">
              <img src={guitar.imgUrl} alt={guitar.type} />
            </div>
            <div className="guitar-info">
              <p>Type: {guitar.type}</p>
              <p>Model: {guitar.model}</p>
              <p>Strings: {guitar.stringCount}</p>
              <p>Frets: {guitar.fretCount}</p>
              <p>Price: {guitar.price} $</p>
            </div>
          </div>
          <div className="guitar-description">
            <p className='guitar-description-p'>Description: {guitar.description}</p>
            <div className="guitar-buttons">
              <button>Edit Offer</button>
              <button>Delete Offer</button>
              <button>Rate</button>
              <button>Show Seller's Info</button>
            </div>
          </div>
        </div>
      );
}

export default Details;
