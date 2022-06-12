import { DefaultTheme } from "@react-navigation/native";
import { theme } from "native-base";

const SimpleDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.colors.blueGray[50],
      card: theme.colors.orange[300],
      text: theme.colors.amber[50],
      border: theme.colors.amber[800]
    }
  }


  export default SimpleDefaultTheme