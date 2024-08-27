import { StyleSheet } from 'react-native'
import Subheading from '../Styling/Subheading'

const styles = StyleSheet.create({
  text: {
    paddingVertical: 15,
  },
})

const AppBarTab = ({ children }) => {
  return (
    <Subheading color={'textLight'} fontWeight={'bold'} style={styles.text}>
      {children}
    </Subheading>
  )
}

export default AppBarTab
