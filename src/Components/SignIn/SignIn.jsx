import SignInForm from './SignInForm'

const onSubmit = ({ username }) => {
  console.log(`Logging in ${username}...`)
}

const SignIn = () => {
  return <SignInForm onSubmit={onSubmit} />
}

export default SignIn
