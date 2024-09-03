import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import AppBar from './AppBar/AppBar'
import SignIn from './SignIn/SignIn'
import RepositoryItem from './RepositoryItem/RepositoryItem'
import ReviewForm from './ReviewForm/ReviewForm'
import SignUpForm from './SignUpForm/SignUpForm'
import RepositoryList from './RepositoryList/RespositoryList.jsx'
import UserReviews from './Reviews/UserReviews.jsx'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/:id" element={<RepositoryItem />} />
        <Route path="/reviewform" element={<ReviewForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/myreviews" element={<UserReviews />} />
      </Routes>
    </View>
  )
}

export default Main
