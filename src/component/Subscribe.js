import React, { useState } from 'react';
import "../css/Suscribe.css";

const Suscribe = () => {

  return (
    
    <div className="contact-form-container p-5">
    <div>
        <h4>Want more Bootstrap themes, templates, and UI tools?</h4>
        <p className='para'>Subscribe to get updated when new Bootstrap related products arrive!</p>
    </div>
      <form  className="contact-form mt-4">
      <form class="example" action="action_page.php">
  <input type="text" placeholder="Email Address..." name="search"/>
  <button type="submit">Subscribe!</button>
</form>
      </form>
      <div className='mt-3'>
        <i>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</i>
      </div>
    </div>
  );
};

export default Suscribe;
