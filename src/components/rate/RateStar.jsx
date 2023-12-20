import React from 'react'
// icons
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
const RateStar = ({rate}) => {
    const stars = Array.from({ length: 5 }, (element, index) => {
        let num = index + 0.5; 
    
        return (
          <span key={index} className="text-yellow-600 text-sm lg:text-lg">
            {rate >= index + 1 ? ( 
              <FaStar />
            ) : rate >= num ? (
              <FaStarHalfStroke />
            ) : (
              <FaRegStar />
            )}
          </span>
        );
      });

  return (
    <div className='flex'>{stars}</div>
  )
}

export default RateStar