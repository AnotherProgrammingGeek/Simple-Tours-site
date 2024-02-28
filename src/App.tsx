import { useEffect, useState } from 'react';
import './App.css';
import Loading from './componentes/Loading';
import Tours from './componentes/Tours';
type ToursType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}[]
const url = "https://course-api.com/react-tours-project"
export default function App() {
  const [loading, setLoading] = useState(true)
  const[tours, setTours] = useState<ToursType | []>([]);

  const removeTour = (id : string) : void =>{
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }
  
  const fetchTours = async () =>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours)      
    }catch(error){
      setLoading(false)
      console.log(error);
      
    }
  }
  useEffect(()=> {
    fetchTours()
  },[])

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    ) 
  }
  if(tours.length === 0){
    return(
      <main>
        <h2 className='noTours'>No more tours</h2>
        <button className='refresh-btn' onClick={fetchTours}> Refresh </button>
      </main>
    )
  }
  
  return (
    <main>
      <Tours tours = {tours} removeTour = {removeTour}/>
    </main>
  );
}
