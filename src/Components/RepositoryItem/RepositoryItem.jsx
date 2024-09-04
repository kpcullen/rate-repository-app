import { useParams } from 'react-router-native'
import RepositoryItemContainer from './RepositoryItemContainer'
import useRepository from '../../hooks/useRepository'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native'
import ReviewItem from '../Reviews/ReviewItem'

const RepositoryItem = () => {
  const { id } = useParams()
  const { repository, loading, fetchMore } = useRepository(id)

  if (loading)
    return (
      <View>
        <Text>Repository loading...</Text>
      </View>
    )
  const {
    reviews: { edges: reviews },
  } = repository

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <FlatList
      data={reviews}
      onEndReached={onEndReach}
      onEndReachedThreshold={100}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItemContainer item={repository} gitHub={true} />
      )}
    />
  )
}

export default RepositoryItem
