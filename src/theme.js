import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textLight: '#F5F5F5',
    primary: '#0366d6',
    backgroundColor: '#24292e',
    borderColor: '#e1e4e8',
    errorColor: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 18,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  button: {},
}

export default theme
