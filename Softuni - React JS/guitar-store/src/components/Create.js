import React, { useState } from 'react';
import '../styles/Create.css';
import { collection, getFirestore, addDoc  } from "firebase/firestore";
import app from '../Utils/firebase'
import { useNavigate } from 'react-router-dom';

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
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      await addDoc(collection(db, "Guitars"),{

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
            <h2>Create an Offer</h2>
            <form onSubmit={handleSubmit} id="create" className="input-group">
            <input type="text" placeholder="Type: e.g. Jackson/Les Paul" value={type} onChange={(e) => setTitle(e.target.value)} required className="input-field"/>
            <input type="text" placeholder="Image Url:" value={imgUrl} onChange={(e) => setimgUrl(e.target.value)} required className="input-field"/>
            <input type="text" placeholder="Model: e.g. flying V" value={model} onChange={(e) => setModel(e.target.value)} required className="input-field"/>
            <input type="text" placeholder="Fret Count: e.g. 22/24" value={fretCount} onChange={(e) => setfretCount(e.target.value)} required  className="input-field"/>
            <input type="text" placeholder="String Count: e.g. 6/7/8" value={stringCount} onChange={(e) => setstringCount(e.target.value)} required  className="input-field"/>
            <input type="text" placeholder="Price: in $" value={price} onChange={(e) => setprice(e.target.value)} required  className="input-field"/>
            <input type="text" placeholder="Description: e.g. Left handed, broken knob, etc." value={description} onChange={(e) => setDescription(e.target.value)} required  className="input-field-description"/>
              <button type="submit" className="submit-btn">Create Offer
              </button>
            </form>
          </div>
        </div>
      );
}

export default Create;

