import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {useStateManager} from '../state manager/Context'

const Cursor= () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
const {cursorVariant,setCursorVarient}=useStateManager()
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x-16,
      y: mousePosition.y-16,

    },text:{
      height:100,width:100,x: mousePosition.x-16,
      y: mousePosition.y-16,
    }
 
  };

  return (
    <motion.div
      className='bg-gray-800 h-8 w-8 rounded-full fixed pointer-events-none' style={{zIndex:'9999'}}
      variants={variants}
      animate={cursorVariant}
    >
      
    </motion.div>
  );
};

export default Cursor;