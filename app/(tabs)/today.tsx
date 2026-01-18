import { ThemedText } from "@/components/themed-text";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TodayScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ThemedText type="title">Today</ThemedText>
      <ThemedText>Your tasks and habits for today will appear here.</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
