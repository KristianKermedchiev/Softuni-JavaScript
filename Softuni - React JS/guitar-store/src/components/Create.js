import React, { useEffect, useState } from 'react';
import '../styles/Create.css';
import { collection, getFirestore, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import app from '../Utils/firebase'
import { useNavigate } from 'react-router-dom';
import styledComponents from 'styled-components';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { validateDescription, validateFretCount, validateImgUrl, validateModel, validatePrice, validateStringCount, validateType } from '../Utils/ProductValidator';

const StyledInput = styledComponents.input`
background-color: ${props => props.hasError ? 'transparent' : 'red'}
`;

function Create() {
    const navigate = useNavigate();
    const db = getFirestore(app);
    const [type, setTitle] = useState('');
    const [imgUrl, setimgUrl] = useState('');
    const [model, setModel] = useState('');
    const [fretCount, setfretCount] = useState('');
    const [stringCount, setstringCount] = useState('');
    const [price, setprice] = useState('');
    const [description, setDescription] = useState('');
    const [ownerId, setOwnerId] = useState('');

    // Validators
    const [isValidType, setIsValidType] = useState('');
    const [isValidImgUrl, seisValidImgUrl] = useState('');
    const [isValidModel, setisValidModel] = useState('');
    const [isValidFretCount, setisValidFretCount] = useState('');
    const [isValidStringCount, setisValidStringCount] = useState('');
    const [isValidPrice, setValidPrice] = useState('');
    const [isValidDescription, setValidDescription] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);


    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setOwnerId(user.uid);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const isTypeValid = validateType(type);
        setIsValidType(isTypeValid);
        const isImgUrlValid = validateImgUrl(imgUrl);
        seisValidImgUrl(isImgUrlValid);
        const isModelValid = validateModel(model);
        setisValidModel(isModelValid);
        const isFretValid = validateFretCount(fretCount);
        setisValidFretCount(isFretValid);
        const isTringValid = validateStringCount(stringCount);
        setisValidStringCount(isTringValid);
        const isPriceValid = validatePrice(price);
        setValidPrice(isPriceValid);
        const isDescriptionValid = validateDescription(description);
        setValidDescription(isDescriptionValid);

        setIsFormValid(
            isTypeValid &&
            isImgUrlValid &&
            isModelValid &&
            isFretValid &&
            isTringValid &&
            isPriceValid &&
            isDescriptionValid
        );

    }, [type,
        imgUrl,
        model,
        fretCount,
        stringCount,
        price,
        description])

        const handleSubmit = async (event) => {
            event.preventDefault();
          
            const guitarRef = await addDoc(collection(db, "Guitars"), {
              ownerId: ownerId,
              type: type,
              imgUrl: imgUrl,
              model: model,
              fretCount: fretCount,
              stringCount: stringCount,
              price: price,
              description: description,
              liked: [false]
            })

            const userRef = doc(db, "Users", ownerId);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
              const userData = userDoc.data();
              const updatedPosts = [...userData.posts, guitarRef.id];
              await updateDoc(userRef, { posts: updatedPosts });
            }
          
            navigate('/catalog');
          };

    return (
        <div className='create'>
            <div className='create-form-box'>
                <h2 className='create-h2'>Create an Offer</h2>
                <form onSubmit={handleSubmit} id="create" className="create-input-group">
                    <StyledInput hasError={isValidType} type="text" placeholder="Type: at least 3 characters." value={type} onChange={(e) => setTitle(e.target.value)} required className="create-input-field" />
                    <StyledInput hasError={isValidImgUrl} type="text" placeholder="Image Url: Please provide a valid url." value={imgUrl} onChange={(e) => setimgUrl(e.target.value)} required className="create-input-field" />
                    <StyledInput hasError={isValidModel} type="text" placeholder="Model: at least 5 characters." value={model} onChange={(e) => setModel(e.target.value)} required className="create-input-field" />
                    <StyledInput hasError={isValidFretCount} type="text" placeholder="Fret Count: between 12 and 30." value={fretCount} onChange={(e) => setfretCount(e.target.value)} required className="create-input-field" />
                    <StyledInput hasError={isValidStringCount} type="text" placeholder="String Count: between 4 and 30." value={stringCount} onChange={(e) => setstringCount(e.target.value)} required className="create-input-field" />
                    <StyledInput hasError={isValidPrice} type="text" placeholder="Price: between 1 and 100 000 in $." value={price} onChange={(e) => setprice(e.target.value)} required className="create-input-field" />
                    <StyledInput hasError={isValidDescription} type="text" placeholder="Description: at least 10 characters." value={description} onChange={(e) => setDescription(e.target.value)} required className="create-input-field-description" />
                    <button
                        type="submit"
                        className="create-submit-btn"
                        disabled={!isFormValid}
                    >Create Offer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;