import React from 'react'
import Category from './Category'

function Handler({ p,cate}) {
  
  if(p.category===cate.toLowerCase()) return <Category p={p}/>
 
  if(cate==='All') return <Category p={p}/>

  
}

export default Handler