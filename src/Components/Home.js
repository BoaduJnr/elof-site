import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
        <h4>Welcome To Elofs_Made !</h4>
        <p> Elofs_made is founded by Elisha Owusu Fordjour. Our services include shooting commercials, Films, Music Videos and events. Our core objective is to provide quality products that meets standard and expectations. We have packages for everyone, who wishes to work with us
        </p>
        <Link to="/AboutUs">
          <button className='btn'>Read More ....</button>
          </Link>
    </section>
  );
}

export default Home