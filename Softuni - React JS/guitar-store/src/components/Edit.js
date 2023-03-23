// import React, { useState } from 'react';
// import '../styles/Edit.css';
// import { collection, getFirestore, addDoc  } from "firebase/firestore";
// import app from '../Utils/firebase'
// import { useNavigate } from 'react-router-dom';

// function Edit() {
//   const navigate = useNavigate();

//   const db = getFirestore(app);
//     const [type, setTitle] = useState('');
//     const [imgUrl, setimgUrl] = useState('');
//     const [model, setModel] = useState('');
//     const [fretCount, setfretCount] = useState('');
//     const [stringCount, setstringCount] = useState('');
//     const [price, setprice] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = async (event) => {
//       event.preventDefault();

//       await addDoc(collection(db, "Guitars"),{

//         type: type,
//         imgUrl: imgUrl,
//         model: model,
//         fretCount: fretCount,
//         stringCount: stringCount,
//         price: price,
//         description: description
//       })
//       navigate('/catalog')
//     };

//     return (
//         <div className='Edit'>
//           <div className='Edit-form-box'>
//             <h2>Edit Offer</h2>
//             <form onSubmit={handleSubmit} id="Edit" className="input-group">
//             <input type="text" placeholder="Type: e.g. Jackson/Les Paul" value={type} onChange={(e) => setTitle(e.target.value)} required className="input-field"/>
//             <input type="text" placeholder="Image Url:" value={imgUrl} onChange={(e) => setimgUrl(e.target.value)} required className="input-field"/>
//             <input type="text" placeholder="Model: e.g. flying V" value={model} onChange={(e) => setModel(e.target.value)} required className="input-field"/>
//             <input type="text" placeholder="Fret Count: e.g. 22/24" value={fretCount} onChange={(e) => setfretCount(e.target.value)} required  className="input-field"/>
//             <input type="text" placeholder="String Count: e.g. 6/7/8" value={stringCount} onChange={(e) => setstringCount(e.target.value)} required  className="input-field"/>
//             <input type="text" placeholder="Price: in $" value={price} onChange={(e) => setprice(e.target.value)} required  className="input-field"/>
//             <input type="text" placeholder="Description: e.g. Left handed, broken knob, etc." value={description} onChange={(e) => setDescription(e.target.value)} required  className="input-field-description"/>
//               <button type="submit" className="submit-btn">Edit Offer
//               </button>
//             </form>
//           </div>
//         </div>
//       );
// }

// export default Edit;



// import React, { useState } from 'react';
// import '../styles/Edit.css';
// import { collection, getFirestore, addDoc  } from "firebase/firestore";
// import app from '../Utils/firebase'
// import { useNavigate } from 'react-router-dom';

// function Edit() {
//   const navigate = useNavigate();

//   const db = getFirestore(app);
//   const [type, setType] = useState('');
//   const [imgUrl, setImgUrl] = useState('');
//   const [model, setModel] = useState('');
//   const [fretCount, setFretCount] = useState('');
//   const [stringCount, setStringCount] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     await addDoc(collection(db, "Guitars"), {
//       type: type,
//       imgUrl: imgUrl,
//       model: model,
//       fretCount: fretCount,
//       stringCount: stringCount,
//       price: price,
//       description: description
//     });

//     navigate('/catalog');
//   };

//   return (
//     <div className='Edit'>
//       <div className='Edit-form-box'>
//         <h2>Edit Offer</h2>
//         <form onSubmit={handleSubmit} id="Edit" className="input-group">
//           <input type="text" placeholder="Type: e.g. Jackson/Les Paul" value={type} onChange={(e) => setType(e.target.value)} required className="input-field"/>
//           <input type="text" placeholder="Image Url:" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required className="input-field"/>
//           <input type="text" placeholder="Model: e.g. flying V" value={model} onChange={(e) => setModel(e.target.value)} required className="input-field"/>
//           <input type="text" placeholder="Frets:" value={fretCount} onChange={(e) => setFretCount(e.target.value)} required className="input-field"/>
//           <input type="text" placeholder="Strings:" value={stringCount} onChange={(e) => setStringCount(e.target.value)} required className="input-field"/>
//           <input type="text" placeholder="Price:" value={price} onChange={(e) => setPrice(e.target.value)} required className="input-field"/>
//           <textarea placeholder="Description:" value={description} onChange={(e) => setDescription(e.target.value)} required className="input-field"/>
//           <button type="submit" className="submit-btn">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Edit;

// import React, { useState, useEffect } from 'react';
// import { collection, doc, updateDoc, getFirestore, getDoc } from 'firebase/firestore';
// import { useNavigate, useParams } from 'react-router-dom';
// import app from '../Utils/firebase';
// import '../styles/Edit.css';

// function Edit(props) {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [guitar, setGuitar] = useState(null);

//     useEffect(() => {
//         const db = getFirestore(app);
//         const guitarRef = doc(collection(db, 'Guitars'), id);

//         getDoc(guitarRef)
//             .then((doc) => {
//                 if (doc.exists()) {
//                     setGuitar(doc.data());
//                 } else {
//                     console.log('No such document!');
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error getting document:', error);
//             });
//     }, [id]);



//     const [type, setType] = useState(guitar.type);
//     const [model, setModel] = useState(guitar.model);
//     const [stringCount, setStringCount] = useState(guitar.stringCount);
//     const [fretCount, setFretCount] = useState(guitar.fretCount);
//     const [price, setPrice] = useState(guitar.price);
//     const [imgUrl, setImgUrl] = useState(guitar.imgUrl);
//     const [description, setDescription] = useState(guitar.description);

//     if (!guitar) {
//         return <div>Loading...</div>;
//     };


//   const handleTypeChange = (e) => setType(e.target.value);
//   const handleModelChange = (e) => setModel(e.target.value);
//   const handleStringCountChange = (e) => setStringCount(e.target.value);
//   const handleFretCountChange = (e) => setFretCount(e.target.value);
//   const handlePriceChange = (e) => setPrice(e.target.value);
//   const handleImgUrlChange = (e) => setImgUrl(e.target.value);
//   const handleDescriptionChange = (e) => setDescription(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const db = getFirestore(app);
//     const guitarRef = doc(collection(db, 'Guitars'), id);

//     try {
//       await updateDoc(guitarRef, {
//         type,
//         model,
//         stringCount,
//         fretCount,
//         price,
//         imgUrl,
//         description,
//       });
//       console.log('Document successfully updated!');
//       navigate(`/catalog/${id}`);
//     } catch (error) {
//       console.error('Error updating document: ', error);
//     }
//   };

//   return (

//     <div className="edit-container">
//       <h2>Edit Offer</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="type">Type:</label>
//           <input type="text" id="type" value={type} onChange={handleTypeChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="model">Model:</label>
//           <input type="text" id="model" value={model} onChange={handleModelChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="stringCount">Strings:</label>
//           <input type="number" id="stringCount" value={stringCount} onChange={handleStringCountChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="fretCount">Frets:</label>
//           <input type="number" id="fretCount" value={fretCount} onChange={handleFretCountChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="price">Price:</label>
//           <input type="number" id="price" value={price} onChange={handlePriceChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="imgUrl">Image URL</label>
//           <input type="text" id="imgUrl" value={imgUrl} onChange={handleImgUrlChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
//         </div>
//         </form>
//     </div>
//     )
//   }

//   export default Edit;


// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { collection, doc, setDoc, getFirestore } from 'firebase/firestore';
// import app from '../Utils/firebase';
// import '../styles/Edit.css';

// function Edit() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [guitar, setGuitar] = useState(location.state.guitar);
//     const [errorMsg, setErrorMsg] = useState('');

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setGuitar({ ...guitar, [name]: value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const db = getFirestore(app);
//         const guitarRef = doc(collection(db, 'Guitars'), guitar.id);
//         try {
//             await setDoc(guitarRef, guitar);
//             console.log('Document successfully updated!');
//             navigate(`/catalog/${guitar.id}`);
//         } catch (error) {
//             console.error('Error updating document: ', error);
//             setErrorMsg('Error updating document. Please try again later.');
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className='edit-title'>Edit Guitar Offer</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="edit-form">
//                     <div className="edit-image">
//                         <img src={guitar.imgUrl} alt={guitar.type} />
//                     </div>
//                     <div className="edit-info">
//                         <div className="edit-input">
//                             <label htmlFor="type">Type:</label>
//                             <input type="text" name="type" value={guitar.type} onChange={handleInputChange} required />
//                         </div>
//                         <div className="edit-input">
//                             <label htmlFor="model">Model:</label>
//                             <input type="text" name="model" value={guitar.model} onChange={handleInputChange} required />
//                         </div>
//                         <div className="edit-input">
//                             <label htmlFor="stringCount">Strings:</label>
//                             <input type="number" name="stringCount" value={guitar.stringCount} onChange={handleInputChange} required />
//                         </div>
//                         <div className="edit-input">
//                             <label htmlFor="fretCount">Frets:</label>
//                             <input type="number" name="fretCount" value={guitar.fretCount} onChange={handleInputChange} required />
//                         </div>
//                         <div className="edit-input">
//                             <label htmlFor="price">Price:</label>
//                             <input type="number" name="price" value={guitar.price} onChange={handleInputChange} required />
//                         </div>
//                         <div className="edit-input">
//                             <label htmlFor="description">Description:</label>
//                             <textarea name="description" value={guitar.description} onChange={handleInputChange} required />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="edit-buttons">
//                     <button type="submit">Save Changes</button>
//                     <Link to={`/catalog/${guitar.id}`}><button>Cancel</button></Link>
//                 </div>
//                 {errorMsg && <p className='edit-error'>{errorMsg}</p>}
//             </form>
//         </div>
//     );
// }

// export default Edit;


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
            <h2>Edit Offer</h2>
            <form id='Edit' className='input-group' onSubmit={handleSubmit}>

                
                {/* <input type="text" placeholder="Type: e.g. Jackson/Les Paul" value={type} onChange={(e) => setTitle(e.target.value)} required className="input-field"/> */}
                    {/* <label htmlFor="type">Type:</label> */}
                    <input className="input-field" type="text" id="type" name="type" value={formData.type} onChange={handleChange} />
                

                    {/* <label htmlFor="model">Model:</label> */}
                    <input className="input-field" type="text" id="model" name="model" value={formData.model} onChange={handleChange} />

                    {/* <label htmlFor="stringCount">String Count:</label> */}
                    <input className="input-field" type="text" id="stringCount" name="stringCount" value={formData.stringCount} onChange={handleChange} />

                    {/* <label htmlFor="fretCount">Fret Count:</label> */}
                    <input className="input-field"type="text" id="fretCount" name="fretCount" value={formData.fretCount} onChange={handleChange} />

                    {/* <label htmlFor="price">Price:</label> */}
                    <input className="input-field" type="text" id="price" name="price" value={formData.price} onChange={handleChange} />
                

                    {/* <label htmlFor="imgUrl">Image URL:</label> */}
                    <input className="input-field" type="text" id="imgUrl" name="imgUrl" value={formData.imgUrl} onChange={handleChange} />

                    {/* <label htmlFor="description">Description:</label> */}
                    <input className="input-field" id="description" name="description" value={formData.description} onChange={handleChange} />

                    <container className='buttons'>
                    <button type="submit" className="submit-btn" >Update</button>
                    <button type="button" className="cancel-btn" onClick={() => navigate(`/catalog/${id}`)}>Cancel</button>
                    </container>
            </form>
            </div>
        </div>
    );
}

export default Edit;

    //         <div className='Edit'>
    //           <div className='Edit-form-box'>
    //             <h2>Edit Offer</h2>
    //             <form onSubmit={handleSubmit} id="Edit" className="input-group">
    //             <input type="text" placeholder="Type: e.g. Jackson/Les Paul" value={type} onChange={(e) => setTitle(e.target.value)} required className="input-field"/>
    //             <input type="text" placeholder="Image Url:" value={imgUrl} onChange={(e) => setimgUrl(e.target.value)} required className="input-field"/>
    //             <input type="text" placeholder="Model: e.g. flying V" value={model} onChange={(e) => setModel(e.target.value)} required className="input-field"/>
    //             <input type="text" placeholder="Fret Count: e.g. 22/24" value={fretCount} onChange={(e) => setfretCount(e.target.value)} required  className="input-field"/>
    //             <input type="text" placeholder="String Count: e.g. 6/7/8" value={stringCount} onChange={(e) => setstringCount(e.target.value)} required  className="input-field"/>
    //             <input type="text" placeholder="Price: in $" value={price} onChange={(e) => setprice(e.target.value)} required  className="input-field"/>
    //             <input type="text" placeholder="Description: e.g. Left handed, broken knob, etc." value={description} onChange={(e) => setDescription(e.target.value)} required  className="input-field-description"/>
    //               <button type="submit" className="submit-btn">Edit Offer
    //               </button>
    //             </form>
    //           </div>
    //         </div>
    //       );
    // }