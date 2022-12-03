import React from 'react'
//icon
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
function Footer() {
  return (
    <div className="footer ">
    <h4 className='text-center '>Marketify 2022 
    </h4 ><h6 className='text-center'>All Right Reserved</h6>
    <div className="icons flex ">
        <FacebookRoundedIcon className='footerIcon' />
        <EmailRoundedIcon className='footerIcon ' />
        
    </div>
  </div>
  )
}

export default Footer