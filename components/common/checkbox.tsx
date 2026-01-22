import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { Text } from "./text";

interface CheckboxProps extends ViewProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Checkbox = React.forwardRef<View, CheckboxProps>(
  ({ checked, onChange, label, disabled = false, size = "md", style }, ref) => {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"];

    const sizeStyles = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    };

    return (
      <TouchableOpacity
        ref={ref as any}
        disabled={disabled}
        onPress={() => onChange(!checked)}
        className="flex-row items-center gap-3"
        style={[{ opacity: disabled ? 0.5 : 1 }, style]}
      >
        <View
          className={`rounded border-2 items-center justify-center ${sizeStyles[size]}`}
          style={{
            borderColor: checked ? colors.primary : colors.border,
            backgroundColor: checked ? colors.primary : "transparent",
          }}
        >
          {checked && <Text className="text-white font-bold text-lg">✓</Text>}
        </View>
        {label && (
          <Text variant="body" color="default">
            {label}
          </Text>
        )}
      </TouchableOpacity>
    );
  },
);

Checkbox.displayName = "Checkbox";
