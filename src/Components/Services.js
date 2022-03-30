import React from 'react'

const Services = () => {
  return (
    <div className='nav' >
      <h3>Services</h3>
        <div className='nav-link'>
            <details>
              <summary>
                <h5>Cinematography</h5>
              </summary>
             
            </details>


            <details>
              <summary>
                <h5>Events</h5>
              </summary>
              <ul>
                <li>Parties</li>
                <li>Weddings</li>
                <li>Funerals</li>
              </ul>
            </details>
            <details>

              <summary>
                <h5>Music Videos</h5>
              </summary>
            </details>

            <details>
              <summary>
                <h5>Commercials</h5>
              </summary>
              <ul>
                <li>T.V. Commercials</li>
                <li>Social Media Commercials</li>
                <li>Youtube Commercials</li>
              </ul>
            </details>

            <details>
              <summary>
                <h5>Filming</h5>
             </summary>
             <ul>
               <li>Documentaries</li>
               <li>Series</li>
               <li>Short Movies</li>
               <li>Movies</li>
             </ul>
            </details>
        </div>
       
    </div>
  )
}

export default Services