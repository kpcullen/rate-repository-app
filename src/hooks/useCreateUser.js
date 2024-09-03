import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'

const useCreateUser = () => {
  const [mutate] = useMutation(CREATE_USER)

  const createUser = async ({ username, password }) => {
    const user = { username, password }
    await mutate({ variables: { user } })
  }

  return createUser
}

export default useCreateUser
