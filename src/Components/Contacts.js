import React from 'react'

const Contacts = () => {
  return (
    <section> 
        <h2>Contacts</h2>
        <ul>
            <li>
                <i className='fas fa-phone'></i> Call: {" "}
                <a href='+2330558119369.' type='tel'>+2330558119369</a>
            </li>
            <li>
                <i className='fas fa-globe'></i> email: {" "}
                <a href='kwamepaster@gmail.com'>kwamepaster@gmail.com</a>
            </li>
            <li>
                <i className='fas fa-twitter'></i> twitter: {" "}
                <a href='twitter.com/quame1_nana'>quame1_nana</a>
            </li>
            <li>
                <i className='fas fa-instagram'></i> instagram: {" "}
                <a href='www.instagram.com/quame1_nana'>quame1_nana</a>
            </li>
            <li>
                <i className='fas fa-snapchat'></i> snapchat: {" "}
                <a href='www.snapchat.com/quame1_nana'>quame1_nana</a>
            </li>
            
        </ul>
    </section>
  )
}

export default Contacts