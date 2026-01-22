/**
 * Comprehensive color system for light and dark modes.
 * Used by all UI components and screens.
 */

import { Platform } from "react-native";

// Base brand colors
const primaryColor = "#0a7ea4";
const successColor = "#10b981";
const errorColor = "#ef4444";
const warningColor = "#f59e0b";

// Light mode palette
const lightPalette = {
  // Primary colors
  primary: primaryColor,
  secondary: "#6366f1",

  // Status colors
  success: successColor,
  error: errorColor,
  warning: warningColor,
  info: primaryColor,

  // Text colors
  text: "#11181C",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
  textInverse: "#FFFFFF",
  muted: "#9CA3AF",

  // Background colors
  background: "#FFFFFF",
  backgroundSecondary: "#F9FAFB",

  // Component colors
  card: "#FFFFFF",
  border: "#E5E7EB",
  divider: "#F3F4F6",

  // Interactive
  icon: "#687076",
  tabIconDefault: "#687076",
  tabIconSelected: primaryColor,

  // Special
  skeleton: "#E5E7EB",
  overlay: "rgba(0, 0, 0, 0.5)",
  disabled: "#D1D5DB",
};

// Dark mode palette
const darkPalette = {
  // Primary colors
  primary: "#38bdf8",
  secondary: "#818cf8",

  // Status colors
  success: "#34d399",
  error: "#f87171",
  warning: "#fbbf24",
  info: "#38bdf8",

  // Text colors
  text: "#ECEDEE",
  textSecondary: "#D1D5DB",
  textMuted: "#9CA3AF",
  textInverse: "#11181C",
  muted: "#9CA3AF",

  // Background colors
  background: "#0F1419",
  backgroundSecondary: "#1A1F26",

  // Component colors
  card: "#1A1F26",
  border: "#374151",
  divider: "#2D3748",

  // Interactive
  icon: "#9BA1A6",
  tabIconDefault: "#9BA1A6",
  tabIconSelected: "#38bdf8",

  // Special
  skeleton: "#2D3748",
  overlay: "rgba(0, 0, 0, 0.8)",
  disabled: "#4B5563",
};

export const Colors = {
  light: lightPalette,
  dark: darkPalette,
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

/**
 * Color Palette Guide:
 *
 * Primary Colors:
 * - primary: Main action color (buttons, links, highlights)
 * - secondary: Alternate action color (secondary buttons)
 *
 * Status Colors:
 * - success: Completed, active state (green)
 * - error: Errors, destructive actions (red)
 * - warning: Warnings, pending (amber)
 * - info: Information, neutral (blue)
 *
 * Text Colors:
 * - text: Primary text (headings, body)
 * - textSecondary: Secondary text (subtitles)
 * - textMuted: Muted text (help text, disabled)
 * - textInverse: Text on colored backgrounds
 *
 * Background Colors:
 * - background: Main screen background
 * - backgroundSecondary: Secondary background (sections)
 *
 * Component Colors:
 * - card: Card/elevated surface background
 * - border: Border and divider lines
 * - divider: Light divider lines
 *
 * Interactive:
 * - icon: Default icon color
 * - tabIconDefault: Inactive tab icon
 * - tabIconSelected: Active tab icon
 *
 * Special:
 * - skeleton: Loading skeleton background
 * - overlay: Semi-transparent overlay
 * - disabled: Disabled element color
 */
