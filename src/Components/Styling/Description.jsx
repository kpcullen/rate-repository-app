import React from 'react'
import Text from './Text'

const Description = ({ style, ...props }) => {
  return (
    <Text fontSize="description" fontWeight="300" style={style} {...props} />
  )
}

export default Description
