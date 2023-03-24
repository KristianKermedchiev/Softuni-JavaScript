import React from 'react';
import '../styles/ContactUs.css'

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <h1 className='contact-us-h1'>Contact Us</h1>
      <div className='contactUs-container'>
        <div className='table-holder'>
          <table>
            <tbody>
              <tr>
                <th>Address:</th>
                <td>Sofia, Bulgaria 1000</td>
              </tr>
              <tr>
                <th>Phone:</th>
                <td>08865432198</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>elon.musk@abv.bg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='map-holder'>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed/v1/place?q=42.64074483181473, 23.371297331013057&key=AIzaSyCASIsDVvkeFxvhVQv7IAxax7wdKo_dO_Q"
            frameborder="0"
            style={{ border: '0', width: '100%', height: '100%' }}
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
