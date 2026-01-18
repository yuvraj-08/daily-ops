import { ThemedText } from "@/components/themed-text";

import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TasksScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ThemedText type="title">Tasks</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
