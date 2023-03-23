import app from '../Utils/firebase';
import { collection, doc, deleteDoc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from './Spinner';
import '../styles/Details.css';
import '../styles/Spinner.css';


function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [guitar, setGuitar] = useState(null);
    const [loading, setLoading] = useState(true);


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
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    const handleDelete = async () => {
        const db = getFirestore(app);
        const guitarRef = doc(collection(db, 'Guitars'), id);
        


        try {
            await deleteDoc(guitarRef);
            console.log('Document successfully deleted!');
            navigate('/catalog');
        } catch (error) {
            console.error('Error removing document: ', error);
        }
    };

    if (loading || !guitar) {
        return <Spinner />;
    }

    return (
        <div className="container">
            <h2 className='model'>{guitar.model}</h2>
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
                <Link to={{ pathname: `/catalog/` }}>
                            <button>Back</button>
                        </Link>
                    <button>Rate</button>
                    <button>Show Seller's Info</button>
                    {guitar && (
                        <Link to={{ pathname: `/catalog/${id}/edit`,  guitar }} key={guitar.id}>
                            <button>Edit Offer</button>
                        </Link>
                    )}
                    <button onClick={handleDelete}>Delete Offer</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Details;


