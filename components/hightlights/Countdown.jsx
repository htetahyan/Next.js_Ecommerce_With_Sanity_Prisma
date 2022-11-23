import React from 'react'
import parse from 'html-react-parser';
function Countdown({b}) {

  return (
    <div className='m-6 justify-self-center'>
      {parse(b?.embeded)}


    </div>
  )
}

export default Countdown