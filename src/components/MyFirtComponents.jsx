import React from 'react'
import { useState } from 'react'

export const MyFirtComponents = () => {

    const  [ counter, setConunter ] = useState(0);
  return (
    <div>
        <h3>El numero del contados es {counter}</h3>
        <button type='submit'  className='button-large' onClick={() => setConunter(counter + 1)}>
            Sumar contador</button>
    </div>
  )
}
