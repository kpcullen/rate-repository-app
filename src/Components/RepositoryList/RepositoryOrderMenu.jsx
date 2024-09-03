import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Menu,
  Modal,
  Portal,
  Text,
  Searchbar,
  IconButton,
} from 'react-native-paper'

import theme from '../../theme'
import paperColors from '../../utils/paperColorScheme'

const styles = StyleSheet.create({
  anchor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.textLight,
    fontWeight: 'normal',
    fontSize: 22,
    paddingBottom: 22,
    paddingHorizontal: 16,
  },
  container: {
    backgroundColor: theme.colors.textLight,
  },
  text: {
    fontSize: 22,
  },
  portal: {
    marginHorizontal: 50,
  },
  searchBar: {
    marginHorizontal: 14,
    marginTop: 22,
    marginBottom: 20,
    borderRadius: 8,
    height: 72,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    backgroundColor: theme.colors.textLight,
  },
  searchBarInput: {
    padding: 20,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 20,
    padding: 50,
  },
})

const searchTheme = {
  colors: paperColors,
}

const RepositoryOrderMenu = ({ setOrder, value, setKeyword }) => {
  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        mode="view"
        showDivider={false}
        theme={searchTheme}
        placeholder="Keyword search"
        onChangeText={setKeyword}
        inputStyle={styles.searchBarInput}
      />

      <Menu
        visible={visible}
        mode="elevated"
        showDivider={false}
        anchor={
          <View style={styles.anchor} onPress={openMenu}>
            <Text style={styles.text}>
              {value ? `${value}` : 'Order by...'}
            </Text>
            <IconButton
              icon="chevron-down"
              size={38}
              onPress={openMenu}
              style={styles.iconButton}
            />
          </View>
        }
      >
        <Portal style={styles.portal}>
          <Modal visible={visible} onDismiss={closeMenu}>
            <View style={[styles.container, styles.portal]}>
              <Menu.Item disabled={true} title="Select an item..." />
              <Menu.Item
                onPress={() => setOrder('Latest repositories')}
                title="Latest repositories"
              />
              <Menu.Item
                onPress={() => setOrder('Oldest repositories')}
                title="Oldest repositories"
              />
              <Menu.Item
                onPress={() => setOrder('Highest rated')}
                title="Highest rated"
              />
              <Menu.Item
                onPress={() => setOrder('Lowest rated')}
                title="Lowest rated"
              />
              <Menu.Item onPress={() => setOrder('reset')} title="Reset" />
            </View>
          </Modal>
        </Portal>
      </Menu>
    </View>
  )
}

export default RepositoryOrderMenu
