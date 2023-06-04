import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'

// components
import Plantnum from '../components/Plantnum'

const Potnumname = () => {
  const [fetchError, setFetchError] = useState(null)
  const [plantdesc, setPlantdesc] = useState(null)

  const handleDelete = (id) => {
    setPlantdesc(prevPlantdesc => {
      return prevPlantdesc.filter(sm => sm.id !== id)
    })
  }

  useEffect(() => {
    const fetchPlants = async () => {
      const { data, error } = await supabase
        .from('plant_desc')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the plants pots details')
        setPlantdesc(null)
      }
      if (data) {
        setPlantdesc(data)
        setFetchError(null)
      }
    }

    fetchPlants()

  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {plantdesc && (
        <div className="smoothies">
          {/* order-by buttons */}
          <div className="smoothie-grid">
          <img src='/images/undraw_reminder_re_fe15.svg' className='img' alt='garden'/>

            {plantdesc.map(plant => (
              <Plantnum key={plant.id} plant={plant} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Potnumname