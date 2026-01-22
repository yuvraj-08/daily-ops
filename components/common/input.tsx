import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import {
    Platform,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native";
import { Text } from "./text";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ label, error, rightIcon, onRightIconPress, style, ...props }, ref) => {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"];

    return (
      <View className="w-full gap-2">
        {label && (
          <Text variant="label" color="default">
            {label}
          </Text>
        )}
        <View
          className="flex-row items-center rounded-lg border-2 overflow-hidden"
          style={{
            borderColor: error ? colors.error : colors.border,
            backgroundColor: colors.background,
          }}
        >
          <TextInput
            ref={ref}
            className="flex-1 px-4 py-3 text-base"
            placeholderTextColor={colors.muted}
            style={[
              {
                color: colors.text,
                fontFamily: Platform.select({
                  ios: "System",
                  android: "Roboto",
                }),
              },
              style,
            ]}
            {...props}
          />
          {rightIcon && (
            <TouchableOpacity
              onPress={onRightIconPress}
              className="px-3 py-3"
              disabled={!onRightIconPress}
            >
              {rightIcon}
            </TouchableOpacity>
          )}
        </View>
        {error && (
          <Text variant="caption" color="error">
            {error}
          </Text>
        )}
      </View>
    );
  },
);

Input.displayName = "Input";
