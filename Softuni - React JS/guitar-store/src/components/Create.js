import React, { useState } from 'react';
import '../styles/Create.css';


function Create() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // handle form submission
    }

  
    
    return (
        <div className='create'>
          <div className='create-form-box'>
            <h2>Create an Offer</h2>
            <form onSubmit={handleSubmit} id="create" className="input-group">
            <input type="text" placeholder="Type: e.g. Electric/Acoustic" value={title} onChange={(e) => setTitle(e.target.value)} required className="input-field"/>
            <input type="text" placeholder="Model: e.g. Jackson/Les Paul" value={title} onChange={(e) => setTitle(e.target.value)} required className="input-field"/>
            <input type="text" placeholder="Fret Count: e.g. 22/24" value={price} onChange={(e) => setPrice(e.target.value)} required  className="input-field"/>
            <input type="text" placeholder="String Count: e.g. 6/7/8" value={location} onChange={(e) => setLocation(e.target.value)} required  className="input-field"/>
            <input type="text" placeholder="Price: in $" value={startDate} onChange={(e) => setStartDate(e.target.value)} required  className="input-field"/>
            <input type="text" placeholder="Description: e.g. Left handed, broken knob, etc." value={description} onChange={(e) => setDescription(e.target.value)} required  className="input-field-description"/>
              <button type="submit" className="submit-btn">Create Offer
              </button>
            </form>
          </div>
        </div>
      );
}

export default Create;

