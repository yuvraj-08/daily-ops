import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface TextProps extends RNTextProps {
  variant?: "h1" | "h2" | "h3" | "body" | "body-sm" | "label" | "caption";
  weight?: "light" | "normal" | "semibold" | "bold";
  color?: "primary" | "secondary" | "muted" | "error" | "success" | "default";
}

export const Text = React.forwardRef<RNText, TextProps>(
  (
    { variant = "body", weight = "normal", color = "default", style, ...props },
    ref,
  ) => {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"];

    const variantStyles = {
      h1: "text-3xl leading-10",
      h2: "text-2xl leading-8",
      h3: "text-xl leading-7",
      body: "text-base leading-6",
      "body-sm": "text-sm leading-5",
      label: "text-sm font-semibold leading-5",
      caption: "text-xs leading-4",
    };

    const weightStyles = {
      light: "font-light",
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
    };

    const colorMap = {
      primary: colors.primary,
      secondary: colors.secondary,
      muted: colors.muted,
      error: colors.error,
      success: colors.success,
      default: colors.text,
    };

    return (
      <RNText
        ref={ref}
        className={`${variantStyles[variant]} ${weightStyles[weight]}`}
        style={[{ color: colorMap[color] }, style]}
        {...props}
      />
    );
  },
);

Text.displayName = "Text";
