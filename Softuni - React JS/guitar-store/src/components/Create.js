// import React, { useEffect, useState } from 'react';
// import '../styles/Create.css';
// import { collection, getFirestore, addDoc } from "firebase/firestore";
// import app from '../Utils/firebase'
// import { useNavigate } from 'react-router-dom';
// import styledComponents from 'styled-components';
// import validatePrice from '../Utils/ProductValidator';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const StyledInput = styledComponents.input`
// background-color: ${props => props.hasError ? 'transparent': 'red'}
// `;

// function Create() {
//     const navigate = useNavigate();
//     const db = getFirestore(app);
//     const [type, setTitle] = useState('');
//     const [imgUrl, setimgUrl] = useState('');
//     const [model, setModel] = useState('');
//     const [fretCount, setfretCount] = useState('');
//     const [stringCount, setstringCount] = useState('');
//     const [price, setprice] = useState('');
//     const [description, setDescription] = useState('');
//     const [ownerId, setOwnerId] = useState('');


//     const auth = getAuth(app);
//     onAuthStateChanged(auth, (user) => {
//         setOwnerId(user.uid);
//     });

//     // Validators
//     // const [isValidType, setIsValidType] = useState('');
//     // const [isValidImgUrl, seisValidImgUrl] = useState('');
//     // const [isValidModel, setisValidModel] = useState('');
//     // const [isValidFretCount, setisValidFretCount] = useState('');
//     // const [isValidStringCount, setisValidStringCount] = useState('');
//     const [isValidPrice, setValidPrice] = useState('');
//     // const [isValidDescription, setValidDescription] = useState('');

//     useEffect(() => {
//         //TODO add the other Validators and finalize below
//         const isPriceValid = validatePrice(price);
//         setValidPrice(isPriceValid);
//         // const isImgUrlValid = validateUrl;
//         // validatePrice(price);
//         // validatePrice(price);
//         // validatePrice(price);
//         // validatePrice(price);
//         // validatePrice(price);
//     }, [type,
//         imgUrl,
//         model,
//         fretCount,
//         stringCount,
//         price,
//         description])

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         await addDoc(collection(db, "Guitars"), {
//             ownerId: ownerId,
//             type: type,
//             imgUrl: imgUrl,
//             model: model,
//             fretCount: fretCount,
//             stringCount: stringCount,
//             price: price,
//             description: description
//         })
//         navigate('/catalog')
//     };

//     return (
//         <div className='create'>
//             <div className='create-form-box'>
//                 <h2>Create an Offer</h2>
//                 <form onSubmit={handleSubmit} id="create" className="input-group">
//                     <StyledInput hasError={true} type="text" placeholder="Type: e.g. Jackson/Les Paul" value={type} onChange={(e) => setTitle(e.target.value)} required className="input-field" />
//                     <StyledInput type="text" placeholder="Image Url:" value={imgUrl} onChange={(e) => setimgUrl(e.target.value)} required className="input-field" />
//                     <StyledInput hasError={true}type="text" placeholder="Model: e.g. flying V" value={model} onChange={(e) => setModel(e.target.value)} required className="input-field" />
//                     <StyledInput type="text" placeholder="Fret Count: e.g. 22/24" value={fretCount} onChange={(e) => setfretCount(e.target.value)} required className="input-field" />
//                     <StyledInput type="text" placeholder="String Count: e.g. 6/7/8" value={stringCount} onChange={(e) => setstringCount(e.target.value)} required className="input-field" />
//                     <StyledInput hasError={isValidPrice} type="text" placeholder="Price: in $" value={price} onChange={(e) => setprice(e.target.value)} required className="input-field" />
//                     <StyledInput type="text" placeholder="Description: e.g. Left handed, broken knob, etc." value={description} onChange={(e) => setDescription(e.target.value)} required className="input-field-description" />
//                     <button type="submit" className="submit-btn">Create Offer
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Create;




import React, { useEffect, useState } from 'react';
import '../styles/Create.css';
import { collection, getFirestore, addDoc } from "firebase/firestore";
import app from '../Utils/firebase'
import { useNavigate } from 'react-router-dom';
import styledComponents from 'styled-components';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const StyledInput = styledComponents.input`
background-color: ${props => props.hasError ? 'transparent': 'red'}
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

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setOwnerId(user.uid);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await addDoc(collection(db, "Guitars"), {
            ownerId: ownerId,
            type: type,
            imgUrl: imgUrl,
            model: model,
            fretCount: fretCount,
            stringCount: stringCount,
            price: price,
            description: description
        })
        navigate('/catalog')
    };

    return (
        <div className='create'>
            <div className='create-form-box'>
                <h2 className='create-h2'>Create an Offer</h2>
                <form onSubmit={handleSubmit} id="create" className="create-input-group">
                    <StyledInput type="text" placeholder="Type: e.g. Jackson/Les Paul" value={type} onChange={(e) => setTitle(e.target.value)} required className="create-input-field" />
                    <StyledInput type="text" placeholder="Image Url:" value={imgUrl} onChange={(e) => setimgUrl(e.target.value)} required className="create-input-field" />
                    <StyledInput type="text" placeholder="Model: e.g. flying V" value={model} onChange={(e) => setModel(e.target.value)} required className="create-input-field" />
                    <StyledInput type="text" placeholder="Fret Count: e.g. 22/24" value={fretCount} onChange={(e) => setfretCount(e.target.value)} required className="create-input-field" />
                    <StyledInput type="text" placeholder="String Count: e.g. 6/7/8" value={stringCount} onChange={(e) => setstringCount(e.target.value)} required className="create-input-field" />
                    <StyledInput type="text" placeholder="Price: in $" value={price} onChange={(e) => setprice(e.target.value)} required className="create-input-field" />
                    <StyledInput type="text" placeholder="Description: e.g. Left handed, broken knob, etc." value={description} onChange={(e) => setDescription(e.target.value)} required className="create-input-field-description" />
                    <button type="submit" className="create-submit-btn">Create Offer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;