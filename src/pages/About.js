import React from 'react';
import MultipleBiryani from '../assets/multipleBiryani.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop'
      style={{ backgroundImage: `url(${MultipleBiryani})` }}>
      </div>
      <div className='aboutBottom'>
        <h1> ABOUT US </h1>
        <p> History of biryani dated back to 15th century, when it used to be a 
            wholesome meal easy for troops on the move. The word Biryani is derived 
            from the Persian word Birian, which means "fried before cooking" and Birinj, 
            the Persian word for rice. Biryani which was brought to India by Mughal emperor, 
            got further enhancement in their royal kitchen. 
            Seeing the unavailability of authentic biryani in Nepalese restaurant industry, 
            we made a commitment to address the issue. Biryani itself is a complex menu which need
            right cooking procedure and quality ingredients in making. After a yearlong research in 
            Mughal cuisine, especially in biryani, we started our trial kitchen where we pioneered 
            ultimate method of making biryani. To provide very authentic flavour of biryani we emulate 
            traditional method of cooking biryani in claypot (Haadi) over a charcoal flame.
            Classic Biryani is ideal destination for authentic 
            Biryani by world class chefs located at Kalopul, Kathmandu.
            EXPERIENCE ROYALTY!!!</p>
      </div>
    </div>
  )
}

export default About;
