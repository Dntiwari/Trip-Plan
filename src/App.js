
import './App.css';
import data from './data';
import Tour from './components/Tour';
import { useState } from 'react';



const App = () =>{
  const[tour,setTour]=useState(data);

  function removeTour(id){
    const newTours=tour.filter((tours)=>tours.id!==id);
    setTour(newTours);
  }

  if(tour.length===0){
    return(
      <div className="refresh">
        <h2>No Tours left</h2>
        <button className='btn-white' onClick={()=>setTour(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return(
    <div className='App'>
      <Tour tours={tour} removeTour={removeTour}/>
    </div>
  )
};

export default App;
