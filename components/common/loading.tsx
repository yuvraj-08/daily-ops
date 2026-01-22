import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Text } from "./text";

interface LoadingProps {
  size?: "small" | "large";
  message?: string;
  fullscreen?: boolean;
  style?: any;
}

interface SkeletonProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  style?: any;
}

export const Loading = ({
  size = "large",
  message,
  fullscreen = false,
  style,
}: LoadingProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const content = (
    <View className="gap-4 items-center justify-center">
      <ActivityIndicator size={size} color={colors.primary} />
      {message && (
        <Text color="muted" variant="body-sm">
          {message}
        </Text>
      )}
    </View>
  );

  if (fullscreen) {
    return (
      <View
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: colors.background, ...style }}
      >
        {content}
      </View>
    );
  }

  return (
    <View className="items-center justify-center py-8" style={style}>
      {content}
    </View>
  );
};

Loading.displayName = "Loading";

export const Skeleton = ({
  width = 320,
  height = 16,
  borderRadius = 4,
  style,
}: SkeletonProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View
      style={[
        {
          width,
          height,
          backgroundColor: colors.skeleton,
          borderRadius,
        },
        style,
      ]}
    />
  );
};

Skeleton.displayName = "Skeleton";
