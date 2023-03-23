import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import app from '../Utils/firebase';
import '../styles/Edit.css';

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [guitar, setGuitar] = useState(null);
    const [formData, setFormData] = useState({
        type: '',
        model: '',
        stringCount: '',
        fretCount: '',
        price: '',
        imgUrl: '',
        description: '',
    });

    useEffect(() => {
        const db = getFirestore(app);
        const guitarRef = doc(collection(db, 'Guitars'), id);

        getDoc(guitarRef)
            .then((doc) => {
                if (doc.exists()) {
                    setGuitar(doc.data());
                    setFormData(doc.data());
                } else {
                    console.log('No such document!');
                }
            })
            .catch((error) => {
                console.log('Error getting document:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const db = getFirestore(app);
        const guitarRef = doc(collection(db, 'Guitars'), id);

        try {
            await updateDoc(guitarRef, {
                type: formData.type,
                model: formData.model,
                stringCount: parseInt(formData.stringCount),
                fretCount: parseInt(formData.fretCount),
                price: parseFloat(formData.price),
                imgUrl: formData.imgUrl,
                description: formData.description,
            });

            console.log('Document successfully updated!');
            navigate(`/catalog/${id}`);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    if (!guitar) {
        return <div>Loading...</div>;
    }

    return (
        <div className="Edit">
            <div className='Edit-form-box'>
                <h2 className='edit-h2'>Edit Offer</h2>
                <form id='Edit' className='edit-input-group' onSubmit={handleSubmit}>



                    <input className="edit-input-field" type="text" id="type" name="type" value={formData.type} onChange={handleChange} />



                    <input className="edit-input-field" type="text" id="model" name="model" value={formData.model} onChange={handleChange} />


                    <input className="edit-input-field" type="text" id="stringCount" name="stringCount" value={formData.stringCount} onChange={handleChange} />

                    <input className="edit-input-field" type="text" id="fretCount" name="fretCount" value={formData.fretCount} onChange={handleChange} />

                    <input className="edit-input-field" type="text" id="price" name="price" value={formData.price} onChange={handleChange} />


                    <input className="edit-input-field" type="text" id="imgUrl" name="imgUrl" value={formData.imgUrl} onChange={handleChange} />

                    <input className="edit-input-field" id="description" name="description" value={formData.description} onChange={handleChange} />

                    <section className='buttons'>
                        <button type="submit" className="edit-btn" >Update</button>
                        <button type="button" className="cancel-btn" onClick={() => navigate(`/catalog/${id}`)}>Cancel</button>
                    </section>
                </form>
            </div>
        </div>
    );
}

export default Edit;