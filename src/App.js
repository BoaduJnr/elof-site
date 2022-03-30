
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
import image from "./Images/Ellof_background1.jpg"




const App = () =>{
  const year = document.getElementById("year")
  const d = new Date();
   year.innerText = d.getFullYear();

  return (
    <div className="container" style={{ backgroundImage:`url(${image})`}} >
      <Nav/>
     <Outlet/>
     <p id='copyright'>Copyright &copy;<span id='year'></span><br></br>
     <span>+233542352886</span>
     </p>

    </div>
  )
}

export default App;
