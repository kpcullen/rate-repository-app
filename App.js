import { StatusBar } from 'react-native'
import Main from './src/Components/Main'
import { NativeRouter } from 'react-router-native'

export default function App() {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
}
