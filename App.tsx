import { StatusBar } from "expo-status-bar";
import RN from "./app/components/common/react-native";
import { COLORS } from "./app/constants/theme";
import { DashboardScreen } from "./app/screens/private";
// import { AppNavigation } from './app/navigation';

export default function App() {
  return (
    <RN.SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <DashboardScreen />
    </RN.SafeAreaView>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    marginTop: RN.Platform.OS === "android" ? RN.StatusBar.currentHeight : 0,
  },
});
