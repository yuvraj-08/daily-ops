import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import {
    Dimensions,
    Modal as RNModal,
    ModalProps as RNModalProps,
    SafeAreaView,
    TouchableOpacity,
    View,
} from "react-native";
import { Text } from "./text";

interface ModalProps extends Omit<RNModalProps, "visible"> {
  visible: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  fullHeight?: boolean;
}

export const Modal = ({
  visible,
  onClose,
  title,
  subtitle,
  children,
  footer,
  fullHeight = false,
  ...props
}: ModalProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const screenHeight = Dimensions.get("window").height;

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      {...props}
    >
      <View className="flex-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <SafeAreaView
          className="flex-1 justify-end"
          style={{ flex: fullHeight ? 1 : undefined }}
        >
          <View
            className="rounded-t-3xl flex-1 overflow-hidden"
            style={{
              backgroundColor: colors.background,
              maxHeight: fullHeight ? screenHeight : undefined,
            }}
          >
            {/* Header */}
            <View
              className="flex-row items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: colors.border }}
            >
              {title && (
                <View className="flex-1">
                  <Text variant="h3" weight="bold">
                    {title}
                  </Text>
                  {subtitle && (
                    <Text variant="body-sm" color="muted">
                      {subtitle}
                    </Text>
                  )}
                </View>
              )}
              <TouchableOpacity
                onPress={onClose}
                className="w-8 h-8 items-center justify-center"
              >
                <Text variant="h2">×</Text>
              </TouchableOpacity>
            </View>

            {/* Content */}
            <View className="flex-1 px-6 py-6 overflow-y-auto">{children}</View>

            {/* Footer */}
            {footer && (
              <View
                className="px-6 py-4 border-t gap-3"
                style={{ borderColor: colors.border }}
              >
                {footer}
              </View>
            )}
          </View>
        </SafeAreaView>
      </View>
    </RNModal>
  );
};

Modal.displayName = "Modal";
