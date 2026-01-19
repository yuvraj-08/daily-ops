import { useAuth } from "@/hooks/useAuth";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function AuthLayout() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (isAuthenticated) {
    return <Redirect href="/(tabs)/today" />;
  }

  return <Slot />;
}
