import { useParams } from 'react-router-native'
import RepositoryItemContainer from './RepositoryItemContainer'
import useRepository from '../../hooks/useRepository'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native'
import ReviewItem from '../Reviews/ReviewItem'

const RepositoryItem = () => {
  const { id } = useParams()
  const { repository, loading } = useRepository(id)

  if (loading)
    return (
      <View>
        <Text>Repository loading...</Text>
      </View>
    )
  const {
    reviews: { edges: reviews },
  } = repository

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItemContainer item={repository} gitHub={true} />
      )}
    />
  )
}

export default RepositoryItem
