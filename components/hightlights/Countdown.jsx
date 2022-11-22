import React from 'react'

function Countdown({b}) {
  return (
    <div className='m-6 justify-self-center'>
   <iframe src={b?.embeded} allowtransparency="true" frameborder="0" width="244" height="82"></iframe>

    </div>
  )
}

export default Countdown