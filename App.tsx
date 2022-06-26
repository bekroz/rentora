import { StatusBar } from "expo-status-bar";
import RN from "./app/components/common/react-native";
import { COLORS } from "./app/theme";
import { Screens } from "./app/screens/private";

export default function App() {
  return (
    <RN.SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Screens.FeaturedList />
    </RN.SafeAreaView>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
});
