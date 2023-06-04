import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import supabase from "../config/supabaseClient"

const Update = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [potnum, setPotnum] = useState()
  const [chemical, setChemical] = useState('')
  const [plantname, setPlantname] = useState('')
  const [chemicaldate, setChemicaldate] = useState('')
  const [formError, setFormError] = useState(null)

  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!potnum || !chemical || !plantname || !chemicaldate){
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data, error } = await supabase
      .from('plants')
      .update({ potnum, chemical, plantname,chemicaldate })
      .eq('id', id)

    if (error) {
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      setFormError(null)
      navigate('/')
    }
  }

  useEffect(() => {
    const fetchPlants = async () => {
      const { data, error } = await supabase
        .from('plants')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        navigate('/', { replace: true })
      }
      if (data) {
        setPotnum(data.potnum)
        setChemical(data.chemical)
        setPlantname(data.plantname)
        setChemicaldate(data.chemicaldate)
      }
    }

    fetchPlants()
  }, [id, navigate])

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="potnum">PotNum:</label>
        <input 
          type="text" 
          id="potnum"
          value={potnum}
          onChange={(e) => setPotnum(e.target.value)}
        />
        <label htmlFor="chemical">Chemical:</label>
        <select id="chemical" value={chemical} onChange={(e) => setChemical(e.target.value)}>
          <option>اختار السماد المناسب</option>
          <option>سماد متعادل مع عناصر صغرى</option>
          <option>سماد هيومك اسيد</option>
          <option>سماد نترات الكالسيوم</option>
          <option>سماد عالي النيتروجين</option>
          <option>سماد عالي البوتاسيوم</option>
        </select>
        
        <label htmlFor="plantname">PlantName:</label>
        <input 
          type="text"
          id="plantname"
          value={plantname}
          onChange={(e) => setPlantname(e.target.value)}
        />
        <label htmlFor="chemicaldate">PlantDate:</label>
        <input 
          type="date"
          id="chemicaldate"
          value={chemicaldate}
          onChange={(e) => setChemicaldate(e.target.value)}
        />


        <button>Update Plant Feeding</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Update