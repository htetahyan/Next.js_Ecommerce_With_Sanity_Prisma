import React from 'react'
import ReactLoading from 'react-loading';
function FetchLoader() {
  return (
    <div className='absolute h-screen w-screen grid Fetchloader'>
    <ReactLoading type='bars' color='white' height={'20%'} width={'20%'} className='justify-self-center align-self-center loadingcomponents'/>
    </div>
  )
}

export default FetchLoader