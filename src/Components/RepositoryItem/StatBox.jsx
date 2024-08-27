import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

const styles = StyleSheet.create({
  statBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 4,
  },
  statNum: {
    fontWeight: '600',
  },
})

const StatBox = ({ label, children }) => {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statNum}>{children}</Text>
      <Text>{label}</Text>
    </View>
  )
}

export default StatBox
