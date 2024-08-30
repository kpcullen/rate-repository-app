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
    paddingLeft: 8,
  },
  link: {
    paddingHorizontal: 6,
    marginRight: 24,
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

  console.log('USER', user)
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={styles.link}>
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        {!user ? (
          <Link to="/signin" style={styles.link}>
            <AppBarTab>Sign In</AppBarTab>
          </Link>
        ) : (
          <TouchableOpacity onPress={handleSignOut}>
            <AppBarTab>Sign Out</AppBarTab>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
