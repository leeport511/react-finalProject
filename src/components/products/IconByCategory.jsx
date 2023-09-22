import React from 'react'

const IconByCategory = ({category}) => {
  return (
    <img src={`../../assets/images/${category}.png`} alt={category}  className="w-10 xl:w-12"/>
  )
}

export default IconByCategory