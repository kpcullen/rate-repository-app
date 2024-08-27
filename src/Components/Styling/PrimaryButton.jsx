import { Pressable, StyleSheet, Text } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.textLight,
    fontSize: 20,
    fontWeight: 'bold',
  },
})

const PrimaryButton = ({ children, ...props }) => {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}

export default PrimaryButton
