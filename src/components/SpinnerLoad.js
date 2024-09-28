import React from 'react'
import loading from './loading.gif'
const SpinnerLoad = ()=>{
    return (
      <div className='spin'>
        <img src={loading} alt='loading'/>
      </div>
    )
  }
  export default SpinnerLoad
