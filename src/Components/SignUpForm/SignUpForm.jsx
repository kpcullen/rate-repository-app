import { useNavigate } from 'react-router-native'
import useCreateUser from '../../hooks/useCreateUser'
import useSignIn from '../../hooks/useSignIn'
import SignUpFormContainer from './SignUpFormContainer'

const SignUpForm = () => {
  const createUser = useCreateUser()
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    console.log(values)
    const { username, password } = values
    const user = { username, password }
    try {
      await createUser(user)
      await signIn(user)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return <SignUpFormContainer onSubmit={onSubmit} />
}

export default SignUpForm
