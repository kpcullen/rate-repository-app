import { StyleSheet, Text, View } from 'react-native'
import theme from '../../theme'
import SecondaryButton from '../Styling/SecondaryButton'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.colors.backgroundColor,
  },
  text: {
    color: theme.colors.primary,
    fontSize: 32,
    alignSelf: 'center',
    padding: 12,
    textAlign: 'center',
  },
})

const NoUserReviews = () => {
  const navigate = useNavigate()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have not reviewed any repos yet.</Text>
      <SecondaryButton
        usePrimary={true}
        onPress={() => navigate('/reviewform')}
      >
        Press here to start reviewing
      </SecondaryButton>
    </View>
  )
}

export default NoUserReviews
