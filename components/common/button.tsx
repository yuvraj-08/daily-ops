import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { Text } from "./text";

interface ButtonProps {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "error" | "success";
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onPress: () => void | Promise<void>;
  style?: any;
}

export const Button = React.forwardRef<View, ButtonProps>(
  (
    {
      variant = "solid",
      size = "md",
      color = "primary",
      isLoading = false,
      disabled = false,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"];

    const colorMap = {
      primary: colors.primary,
      secondary: colors.secondary,
      error: colors.error,
      success: colors.success,
    };

    const sizeStyles = {
      sm: "px-3 py-2 min-h-8",
      md: "px-4 py-3 min-h-10",
      lg: "px-6 py-4 min-h-12",
    };

    const sizeTextVariants = {
      sm: "body-sm" as const,
      md: "body" as const,
      lg: "body" as const,
    };

    const textColor = variant === "solid" ? "#fff" : colorMap[color];

    return (
      <TouchableOpacity
        disabled={disabled || isLoading}
        className={`rounded-lg flex-row items-center justify-center ${sizeStyles[size]} ${
          disabled || isLoading ? "opacity-50" : ""
        }`}
        style={[
          {
            backgroundColor:
              variant === "solid" ? colorMap[color] : "transparent",
            borderColor: variant === "outline" ? colorMap[color] : undefined,
            borderWidth: variant === "outline" ? 2 : 0,
          },
          style,
        ]}
        {...props}
      >
        {isLoading ? (
          <ActivityIndicator color={textColor} size="small" />
        ) : typeof children === "string" ? (
          <Text
            variant={sizeTextVariants[size]}
            weight="semibold"
            style={{ color: textColor }}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </TouchableOpacity>
    );
  },
);

Button.displayName = "Button";
