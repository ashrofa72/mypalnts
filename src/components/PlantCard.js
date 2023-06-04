import {Link} from 'react-router-dom'
import supabase from "../config/supabaseClient"

import formatDistanceToNow from 'date-fns/formatDistanceToNow' 

const PlantCard = ({ plant, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('plants')
      .delete()
      .eq('id', plant.id)
    
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
      onDelete(plant.id)
    }
  }
    return (
      <div className="smoothie-card">
        <h3>{plant.plantname}</h3>
        <p>{plant.chemical}</p>
        <p>{plant.chemicaldate}</p>
        <p style={{direction:"ltr"}}>{formatDistanceToNow(new Date(plant.chemicaldate),{addSuffix:true})}</p>
        <div className="rating">{plant.potnum}</div>
        <div className="buttons">
        <Link to={"/" + plant.id}>
          <i className="material-icons">edit</i>
        </Link>
        <div className='smoothie-card2'>
        <i className="material-icons" onClick={handleDelete}>delete</i>
        </div>
      </div>

      </div>
    )
  }
  
  export default PlantCard