import { StyleSheet } from 'react-native'
import theme from '../../theme'

const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 14,
    padding: 12,
  },
  inputBox: {
    paddingHorizontal: 10,
    borderColor: 'black',

    borderWidth: 1,
    borderRadius: 5,
    height: 50,
  },
  inputError: {
    borderColor: theme.colors.errorColor,
  },
  errorMessage: {
    color: theme.colors.errorColor,
    fontSize: 16,
  },
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

export default formStyles
