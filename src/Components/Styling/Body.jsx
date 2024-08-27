import Text from './Text'

const Body = ({ style, ...props }) => {
  return <Text fontSize="heading" fontWeight="bold" style={style} {...props} />
}

export default Body
