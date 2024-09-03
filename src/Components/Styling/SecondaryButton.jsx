import { Pressable, StyleSheet, Text } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
})

const SecondaryButton = ({ children, usePrimary, ...props }) => {
  const backgroundColor = usePrimary
    ? theme.colors.primary
    : theme.colors.errorColor
  return (
    <Pressable style={[styles.button, { backgroundColor }]} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}

export default SecondaryButton
