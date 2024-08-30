import { useQuery } from '@apollo/client'
import { GET_USER } from '../graphql/queries'

const useUser = () => {
  const { data, loading, error } = useQuery(GET_USER)
  return { user: data?.me?.username || null, loading, error }
}

export default useUser
