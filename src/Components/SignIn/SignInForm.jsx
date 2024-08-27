import { TextInput, View, StyleSheet, Text } from 'react-native'
import { useFormik } from 'formik'
import theme from '../../theme'
import PrimaryButton from '../Styling/PrimaryButton'
import * as yup from 'yup'

const styles = StyleSheet.create({
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username name must be at least 5 characters')
    .required('Username is required'),

  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
})

const initialValues = {
  username: '',
  password: '',
}

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.inputBox,
          formik.errors.username &&
            formik.touched.username &&
            styles.inputError,
        ]}
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorMessage}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          styles.inputBox,
          formik.errors.password &&
            formik.touched.password &&
            styles.inputError,
        ]}
        secureTextEntry
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorMessage}>{formik.errors.password}</Text>
      )}
      <PrimaryButton onPress={formik.handleSubmit}>Sign In</PrimaryButton>
      {/* <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable> */}
    </View>
  )
}

export default SignInForm
