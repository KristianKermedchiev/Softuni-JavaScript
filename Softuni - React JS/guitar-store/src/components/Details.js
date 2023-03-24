import app from '../Utils/firebase';
import { collection, doc, deleteDoc, getDoc, getFirestore, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from './Spinner';
import '../styles/Details.css';
import '../styles/Spinner.css';
import { getAuth } from 'firebase/auth';


function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [guitar, setGuitar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [owner, setOwner] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    //GET Guitar
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

    // GET Owner
    useEffect(() => {
        if (guitar) {
            const db = getFirestore(app);
            const ownerRef = doc(collection(db, 'Users'), guitar.ownerId);

            getDoc(ownerRef)
                .then((doc) => {
                    if (doc.exists()) {
                        setOwner(doc.data());
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
        }
    }, [guitar]);

    //GET Current User

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);


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
        if (owner) {
            await deleteGuitar(id, owner.owner.id, db);
        }
    };

    async function deleteGuitar(guitarId, ownerId, db) {
        const ownerRef = doc(collection(db, 'Users'), ownerId);

        try {
            await updateDoc(ownerRef, {
                posts: arrayRemove(guitarId),
            });
            console.log('Guitar removed from owner successfully!');

        } catch (error) {
            console.error('Error removing guitar from owner: ', error);
        }
    }

    async function likeHandler() {
        const db = getFirestore(app);
        const guitarRef = doc(collection(db, 'Guitars'), id);
        const userRef = doc(collection(db, 'Users'), currentUser.uid);

        try {
            const guitarDoc = await getDoc(guitarRef);

            if (guitarDoc.exists()) {
                const liked = guitarDoc.data().liked;
                const newLiked = !liked;

                await updateDoc(guitarRef, { liked: newLiked });
                setGuitar({ ...guitar, liked: newLiked });

                if (newLiked) {
                    await updateDoc(userRef, { likes: arrayUnion(id) });
                } else {
                    await updateDoc(userRef, { likes: arrayRemove(id) });
                }
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error liking guitar: ', error);
        }
    }


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
                {currentUser ?
                    <div>
                        {currentUser.uid !== guitar.ownerId ?
                            <div className="guitar-buttons">
                                <Link to={{ pathname: `/catalog/` }}>
                                    <button>Back</button>
                                </Link>

                                {guitar.liked
                                    ? <button onClick={likeHandler}>
                                        Dislike
                                    </button>
                                    : <button onClick={likeHandler}>
                                        Like
                                    </button>
                                }
                                <button>Show Seller's Info</button>
                            </div>
                            : <div className="guitar-buttons">
                                <Link to={{ pathname: `/catalog/` }}>
                                    <button>Back</button>
                                </Link>

                                <Link to={{ pathname: `/catalog/${id}/edit`, guitar }} key={guitar.id}>
                                    <button>Edit Offer</button>
                                </Link>
                                <button onClick={handleDelete}>Delete Offer</button>
                            </div>
                        }
                    </div>
                    : null
                }

            </div>
        </div>
    );

};

export default Details;