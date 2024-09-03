// import { FlatList, View, StyleSheet, Pressable } from 'react-native'
// import { useNavigate } from 'react-router-native'
// import RepositoryItem from '../RepositoryItem/RepositoryItemContainer'
// // import { Button, Menu, Divider, PaperProvider } from 'react-native-paper'
// // import { Menu } from 'react-native-paper'
// import RepositoryOrderMenu from './RepositoryOrderMenu'

// const styles = StyleSheet.create({
//   separator: {
//     height: 10,
//   },
// })

// export const RepositoryListContainer = ({ repositories, setOrder, order }) => {
//   const navigate = useNavigate()
//   const ItemSeparator = () => <View style={styles.separator} />

//   const repositoryNodes = repositories
//     ? repositories.edges.map((edge) => edge.node)
//     : []

//   return (
//     <FlatList
//       data={repositoryNodes}
//       ListHeaderComponent={
//         <RepositoryOrderMenu setOrder={setOrder} order={order} />
//       }
//       ItemSeparatorComponent={ItemSeparator}
//       renderItem={({ item }) => (
//         <Pressable onPress={() => navigate(`/${item.id}`)}>
//           <RepositoryItem
//             item={item}
//             gitHub={false}
//             keyExtractor={(item) => item.id}
//           />
//         </Pressable>
//       )}
//     />
//   )
// }

// export default RepositoryListContainer

import React, { useCallback } from 'react'
import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import RepositoryItem from '../RepositoryItem/RepositoryItemContainer'
import RepositoryOrderMenu from './RepositoryOrderMenu'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const MemoizedRepositoryOrderMenu = React.memo(
  ({ setOrder, value, setKeyword }) => (
    <RepositoryOrderMenu
      setOrder={setOrder}
      value={value}
      setKeyword={setKeyword}
    />
  )
)

MemoizedRepositoryOrderMenu.displayName = 'MemoizedRepositoryOrderMenu'

const RepositoryListContainer = ({
  repositories,
  setOrder,
  value,
  setKeyword,
}) => {
  const navigate = useNavigate()

  const repositoryOrderMenu = useCallback(
    () => (
      <MemoizedRepositoryOrderMenu
        setOrder={setOrder}
        value={value}
        setKeyword={setKeyword}
      />
    ),
    [value]
  )

  const ItemSeparator = () => <View style={styles.separator} />

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ListHeaderComponent={repositoryOrderMenu}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/${item.id}`)}>
          <RepositoryItem
            item={item}
            gitHub={false}
            keyExtractor={(item) => item.id}
          />
        </Pressable>
      )}
    />
  )
}

export default RepositoryListContainer
