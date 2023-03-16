import React, { useState } from 'react';
import '../styles/Create.css';


function Create() {

    const [type, setTitle] = useState('');
    const [model, setModel] = useState('');
    const [fretCount, setfretCount] = useState('');
    const [stringCount, setstringCount] = useState('');
    const [price, setprice] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // handle form submission
    };

    return (
        <div className='create'>
          <div className='create-form-box'>
            <h2>Create an Offer</h2>
            <form onSubmit={handleSubmit} id="create" className="input-group">
            <input type="text" placeholder="Type: e.g. Electric/Acoustic" value={type} onChange={(e) => setTitle(e.target.value)} required className="input-field"/>
            <input type="text" placeholder="Model: e.g. Jackson/Les Paul" value={model} onChange={(e) => setModel(e.target.value)} required className="input-field"/>
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

