import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'

// components
import PlantCard from '../components/PlantCard'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [plants, setPlants] = useState(null)

  const handleDelete = (id) => {
    setPlants(prevPlants => {
      return prevPlants.filter(sm => sm.id !== id)
    })
  }

  useEffect(() => {
    const fetchPlants = async () => {
      const { data, error } = await supabase
        .from('plants')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the plants')
        setPlants(null)
      }
      if (data) {
        setPlants(data)
        setFetchError(null)
      }
    }

    fetchPlants()

  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {plants && (
        <div className="smoothies">
          {/* order-by buttons */}
          <div className="smoothie-grid">
            <img src='/images/undraw_environment_iaus (1).svg' className='img' alt='garden'/>
            {plants.map(plant => (
              <PlantCard key={plant.id} plant={plant} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home