import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import { Link, useNavigate } from 'react-router-native'
import { ScrollView } from 'react-native'
import useUser from '../../hooks/useUser'
import useAuthStorage from '../../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundColor,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 6,
  },
  link: {
    paddingHorizontal: 6,
    marginRight: 18,
  },
})

const AppBar = () => {
  const { user } = useUser()
  const authStorage = useAuthStorage()
  const navigate = useNavigate()
  const apolloClient = useApolloClient()

  const handleSignOut = async () => {
    try {
      await authStorage.removeAccessToken()
      apolloClient.resetStore()
      navigate('/signin')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={styles.link}>
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        {user && (
          <>
            <Link to="/reviewform" style={styles.link}>
              <AppBarTab>Review form</AppBarTab>
            </Link>
            <Link to="/myreviews" style={styles.link}>
              <AppBarTab>My reviews</AppBarTab>
            </Link>
          </>
        )}
        {!user ? (
          <>
            <Link to="/signin" style={styles.link}>
              <AppBarTab>Sign In</AppBarTab>
            </Link>

            <Link to="/signup" style={styles.link}>
              <AppBarTab>Sign Up</AppBarTab>
            </Link>
          </>
        ) : (
          <TouchableOpacity onPress={handleSignOut} style={styles.link}>
            <AppBarTab>Sign Out</AppBarTab>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
