import { Alert, Linking, StyleSheet, Text, View } from 'react-native'
import theme from '../../theme'
import Subheading from '../Styling/Subheading'
import Description from '../Styling/Description'
import { format } from 'date-fns'
import SecondaryButton from '../Styling/SecondaryButton'
import useDeleteReview from '../../hooks/useDeleteReview'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
  },
  ratingContainer: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 100,
  },
  ratingText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  textContainer: {
    flexShrink: 1,
    marginTop: 10,
    marginHorizontal: 15,
    rowGap: 5,
  },
  nameText: {
    fontWeight: 'bold',
  },
  userReviews: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

const ReviewItem = ({
  review,
  userReviews = false,
  userId = null,
  refetch,
}) => {
  const repoReview = review.node

  const date = format(repoReview.createdAt, 'dd.MM.yyyy')

  let url
  let deleteReview
  let handleDelete

  if (userReviews) {
    url = repoReview.repository.url

    deleteReview = useDeleteReview(userId)

    handleDelete = () => {
      Alert.alert(
        'Delete review',
        'Are you sure you want to delete this review?',
        [
          {
            text: 'Cancel',
            onPress: () => {},
          },
          {
            text: 'Delete',
            onPress: async () => {
              await deleteReview(repoReview.id)
              refetch()
            },
          },
        ]
      )
    }
  }

  const openUrl = async (url) => {
    await Linking.openURL(`${url}`)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{repoReview.rating}</Text>
        </View>
        <View style={styles.textContainer}>
          <Subheading>
            {userReviews
              ? repoReview.repository.fullName
              : repoReview.user.username}
          </Subheading>
          <Description>{date}</Description>
          <Text>{repoReview.text}</Text>
        </View>
      </View>
      {userReviews && (
        <View style={styles.userReviews}>
          <SecondaryButton onPress={() => openUrl(url)} usePrimary={true}>
            View repository
          </SecondaryButton>
          <SecondaryButton onPress={handleDelete}>Delete</SecondaryButton>
        </View>
      )}
    </>
  )
}

export default ReviewItem
