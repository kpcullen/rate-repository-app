import { FlatList } from 'react-native'
import useUserReviews from '../../hooks/useUserReviews'
import ReviewItem from './ReviewItem'
import NoUserReviews from '../Defaults/NoUserReviews'

const UserReviews = () => {
  const { data, userId, refetch } = useUserReviews()

  if (data.length === 0) return <NoUserReviews />

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ReviewItem
          review={item}
          userId={userId}
          userReviews={true}
          keyExtractor={(item) => item.id}
          refetch={refetch}
        />
      )}
    />
  )
}

export default UserReviews
