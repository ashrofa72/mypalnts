import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"

const Create = () => {
  const navigate = useNavigate()

  const [potnum, setPotnum] = useState()
  const [chemical, setChemical] = useState('')
  const [plantname, setPlantname] = useState('')
  const [chemicaldate, setChemicaldate] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!potnum || !chemical || !plantname || !chemicaldate) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data, error } = await supabase
      .from('plants')
      .insert([{ potnum, chemical, plantname,chemicaldate }])

    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      console.log(data)
      setFormError(null)
      navigate('/')
    }
  }

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="potnum">PotNum:</label>
        <input 
          type="number" 
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
          <option>سماد الاحماض الامينية</option>
          <option>سماد عالي الفسفور مع النيتروجين </option>
          <option>سماد عناصر صغرى مخلبية</option>
          <option>سماد عضوي من بقايا الحمام</option>

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


        <button>Create Plant Feeding</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Create