import { Text, TextInput, View } from 'react-native'
import { useFormik } from 'formik'
import PrimaryButton from '../Styling/PrimaryButton'
import formStyles from '../Styling/formStyles'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner's username is required"),

  repositoryName: yup.string().required('Repository name is required'),

  rating: yup
    .number()
    .min(1, 'Rating must be at least ${min}')
    .max(100, 'Rating cannot exceed ${max}')
    .required('A rating is required')
    .positive()
    .integer(),

  text: yup.string().optional(),
})

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
}

const ReviewFormContainer = ({ onSubmit }) => {
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
          formik.errors.ownerName &&
            formik.touched.ownerName &&
            formStyles.inputError,
        ]}
        placeholder="Repository owner's username"
        value={formik.values.username}
        onChangeText={formik.handleChange('ownerName')}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={formStyles.errorMessage}>{formik.errors.ownerName}</Text>
      )}

      <TextInput
        style={[
          formStyles.inputBox,
          formik.errors.repositoryName &&
            formik.touched.repositoryName &&
            formStyles.inputError,
        ]}
        placeholder="Repository's name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={formStyles.errorMessage}>
          {formik.errors.repositoryName}
        </Text>
      )}

      <TextInput
        style={[
          formStyles.inputBox,
          formik.errors.rating &&
            formik.touched.rating &&
            formStyles.inputError,
        ]}
        secureTextEntry
        placeholder="rating"
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={formStyles.errorMessage}>{formik.errors.rating}</Text>
      )}

      <TextInput
        style={[
          formStyles.inputBox,
          formik.errors.text && formik.touched.text && formStyles.inputError,
        ]}
        multiline={true}
        textAlignVertical="top"
        numberOfLines={8}
        secureTextEntry
        placeholder="review"
        value={formik.values.review}
        onChangeText={formik.handleChange('text')}
      />
      {formik.touched.text && formik.errors.text && (
        <Text style={formStyles.errorMessage}>{formik.errors.text}</Text>
      )}

      <PrimaryButton onPress={formik.handleSubmit}>Submit review</PrimaryButton>
    </View>
  )
}

export default ReviewFormContainer
