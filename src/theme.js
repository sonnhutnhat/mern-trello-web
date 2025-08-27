import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
import { teal, deepOrange, cyan, orange} from '@mui/material/colors'
// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[500]
        },
        secondary: {
          main: deepOrange[500]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: cyan[500]
        },
        secondary: {
          main: orange[500]
        }
      }
    }
  }
})

export default theme