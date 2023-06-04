import React from 'react'
import { useState } from 'react'



const Info = () => {
    const [fetchError] = useState(null)
    const feeding=[
        {id:'1',name:'تسميد الهيومك آسيد مرة كل شهر او شهرين عن طريق الري'},
        {id:'2',name:'تسميد السماد المركب كل ثلاث اسابيع او شهر مرة'},
        {id:'3',name:'تسميد العناصر الصغرى مرة كل شهر'},
        {id:'4',name:'تسميد السماد العضوي مرة كل شهر'},
        
    ]
  return (
    <div className="page home">
       
      {fetchError && (<p>{fetchError}</p>)}
      {feeding && (
        <div className="smoothies">
          {/* order-by buttons */}
          <div className="smoothie-grid">
          <div>
        <img src='/images/undraw_blooming_re_2kc4 (2).svg' className="img" alt='flower'></img>
        </div>
            {feeding.map(plant => (
                <div className='smoothie-card '>
                    <h2 style={{color:'red'}}>{plant.id}</h2>
              <h3 style={{color:'blue'}}>{plant.name}</h3>
              </div>
            ))}
            
          </div>
        </div>
      )}
    </div>
  )
}

export default Info
