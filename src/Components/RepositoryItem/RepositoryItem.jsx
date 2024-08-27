import { Image, StyleSheet, Text, View } from 'react-native'
import Subheading from '../Styling/Subheading'
import theme from '../../theme'
import { formatNumberToK } from '../../helpers'
import StatBox from './StatBox'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 8,
    borderBottomWidth: 10,
    borderBottomColor: theme.colors.borderColor,
    rowGap: 12,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 4,
    gap: 10,
  },
  imageContainer: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    fontWeight: '300',
    fontSize: 14,
  },
  language: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 4,
  },
  languageText: {
    color: theme.colors.textLight,
    fontWeight: '600',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingBottom: 4,
  },
})

const RepositoryItem = ({ item }) => {
  const {
    ownerAvatarUrl,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    reviewCount,
    ratingAverage,
  } = item

  console.log(reviewCount)
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: `${ownerAvatarUrl}` }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Subheading color="primary">{fullName}</Subheading>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.language}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <StatBox label={'Stars'}>{formatNumberToK(stargazersCount)}</StatBox>
        <StatBox label={'Forks'}>{formatNumberToK(forksCount)}</StatBox>
        <StatBox label={'Reviews'}>{reviewCount}</StatBox>
        <StatBox label={'Rating'}>{ratingAverage}</StatBox>
      </View>
    </View>
  )
}

export default RepositoryItem
