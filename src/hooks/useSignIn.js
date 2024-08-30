import { useApolloClient, useMutation } from '@apollo/client'
import { AUTHENTICATE_USER } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const [mutate, result] = useMutation(AUTHENTICATE_USER)
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    const credentials = { username, password }
    const {
      data: {
        authenticate: { accessToken },
      },
    } = await mutate({ variables: { credentials } })
    authStorage.setAccessToken(accessToken)
    apolloClient.resetStore()
  }

  return [signIn, result]
}

export default useSignIn
