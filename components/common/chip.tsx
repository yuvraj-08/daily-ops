import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "./text";

interface ChipProps {
  label: string;
  variant?: "default" | "success" | "error" | "warning" | "info";
  size?: "sm" | "md";
  onPress?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: any;
}

export const Chip = React.forwardRef<View, ChipProps>(
  (
    {
      label,
      variant = "default",
      size = "md",
      onPress,
      disabled = false,
      icon,
      style,
    },
    ref,
  ) => {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"];

    const variantColorMap = {
      default: {
        bg: colors.background,
        text: colors.text,
        border: colors.border,
      },
      success: {
        bg: `${colors.success}20`,
        text: colors.success,
        border: colors.success,
      },
      error: {
        bg: `${colors.error}20`,
        text: colors.error,
        border: colors.error,
      },
      warning: {
        bg: `${colors.secondary}20`,
        text: colors.secondary,
        border: colors.secondary,
      },
      info: {
        bg: `${colors.primary}20`,
        text: colors.primary,
        border: colors.primary,
      },
    };

    const sizeStyles = {
      sm: "px-3 py-1",
      md: "px-4 py-2",
    };

    const variantStyle = variantColorMap[variant];
    const isClickable = onPress && !disabled;

    const chipContent = (
      <>
        {icon}
        <Text
          variant={size === "sm" ? "caption" : "body-sm"}
          style={{ color: variantStyle.text }}
        >
          {label}
        </Text>
      </>
    );

    if (isClickable) {
      return (
        <TouchableOpacity
          onPress={onPress}
          className={`flex-row items-center gap-2 rounded-full border ${sizeStyles[size]}`}
          style={[
            {
              backgroundColor: variantStyle.bg,
              borderColor: variantStyle.border,
              borderWidth: 1,
            },
            style,
          ]}
        >
          {chipContent}
        </TouchableOpacity>
      );
    }

    return (
      <View
        ref={ref}
        className={`flex-row items-center gap-2 rounded-full border ${sizeStyles[size]} ${
          disabled ? "opacity-50" : ""
        }`}
        style={[
          {
            backgroundColor: variantStyle.bg,
            borderColor: variantStyle.border,
            borderWidth: 1,
          },
          style,
        ]}
      >
        {chipContent}
      </View>
    );
  },
);

Chip.displayName = "Chip";
