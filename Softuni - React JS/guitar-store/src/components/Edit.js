import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import app from '../Utils/firebase';
import '../styles/Edit.css';
import { validateImgUrl } from '../Utils/ProductValidator';

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
    const [formErrors, setFormErrors] = useState({});


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

    const errors = {};

   
    if (!formData.type || formData.type.length < 3) {
        errors.type = 'Type is required';
    }

    if (!formData.model || formData.type.length < 5) {
        errors.model = 'Model is required';
    }

    if (!formData.stringCount || isNaN(formData.stringCount) || Number(formData.stringCount) < 4 || Number(formData.stringCount) > 30) {
        errors.stringCount = 'String count is required and must be a number';
    }

    if (!formData.fretCount || isNaN(formData.fretCount) || Number(formData.fretCount) < 12 || Number(formData.fretCount) > 30) {
        errors.fretCount = 'Fret count is required and must be a number';
    }

    if (!formData.price || isNaN(formData.price|| Number(formData.price) < 1 || Number(formData.price) > 100000)) {
        errors.price = 'Price is required and must be a number';
    }

    const result = validateImgUrl(formData.imgUrl);

    if (!formData.imgUrl || !result) {
        errors.imgUrl = 'Image URL is required';
        
    }

    if (!formData.description || formData.description.length < 10 || formData.description.length > 50) {
        errors.description = 'Description is required';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
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
                <input className="create-input-field" type="text" id="type" name="type" placeholder='Type: at least 3 characters.' value={formData.type} onChange={handleChange} />
                    {formErrors.type && <div className="error">{formErrors.type}</div>}
                
                    <input className="create-input-field" type="text" id="imgUrl" name="imgUrl" placeholder='Image Url: Please provide a valid url.' value={formData.imgUrl} onChange={handleChange} />
                    {formErrors.imgUrl && <div className="error">{formErrors.imgUrl}</div>}

                    <input className="create-input-field" type="text" id="model" name="model"placeholder='Model: at least 5 characters.'  value={formData.model} onChange={handleChange} />
                    {formErrors.model && <div className="error">{formErrors.model}</div>}

                    <input className="create-input-field" type="text" id="fretCount" name="fretCount" placeholder='Fret Count: between 12 and 30.' value={formData.fretCount} onChange={handleChange} />
                    {formErrors.fretCount && <div className="error">{formErrors.fretCount}</div>}

                    <input className="create-input-field" type="text" id="stringCount" name="stringCount" placeholder='String Count: between 4 and 30.' value={formData.stringCount} onChange={handleChange} />
                    {formErrors.stringCount && <div className="error">{formErrors.stringCount}</div>}

                    <input className="create-input-field" type="text" id="price" name="price" placeholder='Price: between 1 and 100 000 in $.' value={formData.price} onChange={handleChange} />
                    {formErrors.price && <div className="error">{formErrors.price}</div>}

                    <input className="create-input-field" type="text" id="description" name="description" placeholder='Description: between 10 and 50 charaters.' value={formData.description} onChange={handleChange} />
                    {formErrors.description && <div className="error">{formErrors.description}</div>}

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