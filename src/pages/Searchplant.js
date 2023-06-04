import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import supabase from '../config/supabaseClient'
import PlantCard from '../components/PlantCard'

function Searchplant() {
    
    const navigate = useNavigate()
    const [number,setNumber]=useState()
    const [fetchError, setFetchError] = useState(null)
  const [plants, setPlants] = useState(null)
    const SubmitSearch=async(e)=>{
        e.preventDefault();
        console.log(number)
        const { data, error } = await supabase
        .from('plants')
        .select()
        .eq('potnum', number)
        
        

      if (error) {
        navigate('/', { replace: true })
      }
    
      if (data) {
        setPlants(data)
        setFetchError(null)
        
      }
    
    }
  return (
    <div className="page home">
        <form>
        <input type='number' onChange={(e)=>setNumber(e.target.value)} value={number}/>
        <button onClick={SubmitSearch}>Search Plant</button>
        </form>
        {fetchError && (<p>{fetchError}</p>)}
      {plants && (
        <div className="smoothies">
          {/* order-by buttons */}
          <div className="smoothie-grid">
            {plants.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Searchplant