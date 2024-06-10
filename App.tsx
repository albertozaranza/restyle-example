import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";

import { theme } from "./src/theme";

import Home from "./src/screens/Home";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded && <Home />}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
