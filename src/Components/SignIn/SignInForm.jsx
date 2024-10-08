import { TextInput, View, Text } from 'react-native'
import { useFormik } from 'formik'
import PrimaryButton from '../Styling/PrimaryButton'
import formStyles from '../Styling/formStyles'
import * as yup from 'yup'

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
    <View style={formStyles.container}>
      <TextInput
        style={[
          formStyles.inputBox,
          formik.errors.username &&
            formik.touched.username &&
            formStyles.inputError,
        ]}
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={formStyles.errorMessage}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          formStyles.inputBox,
          formik.errors.password &&
            formik.touched.password &&
            formStyles.inputError,
        ]}
        secureTextEntry
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={formStyles.errorMessage}>{formik.errors.password}</Text>
      )}
      <PrimaryButton onPress={formik.handleSubmit}>Sign In</PrimaryButton>
    </View>
  )
}

export default SignInForm
