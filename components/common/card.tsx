import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { View, ViewProps } from "react-native";

interface CardProps extends ViewProps {
  variant?: "default" | "elevated" | "filled";
  padding?: "sm" | "md" | "lg";
}

export const Card = React.forwardRef<View, CardProps>(
  ({ variant = "default", padding = "md", style, children, ...props }, ref) => {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"];

    const paddingStyles = {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    };

    const variantStyles = {
      default: {
        backgroundColor: colors.card,
        borderColor: colors.border,
        borderWidth: 1,
      },
      elevated: {
        backgroundColor: colors.card,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      filled: {
        backgroundColor: colors.background,
        borderColor: colors.border,
        borderWidth: 1,
      },
    };

    return (
      <View
        ref={ref}
        className={`rounded-lg overflow-hidden ${paddingStyles[padding]}`}
        style={[variantStyles[variant], style]}
        {...props}
      >
        {children}
      </View>
    );
  },
);

Card.displayName = "Card";
