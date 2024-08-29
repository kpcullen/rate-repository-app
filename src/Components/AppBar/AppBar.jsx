import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import theme from '../../theme'
import AppBarTab from './AppBarTab'
import { Link } from 'react-router-native'
import { ScrollView } from 'react-native'

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={styles.link}>
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        <Link to="/signin" style={styles.link}>
          <AppBarTab>Sign In</AppBarTab>
        </Link>
      </ScrollView>
    </View>
  )
}

export default AppBar
