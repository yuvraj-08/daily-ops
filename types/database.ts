// types/database.ts

export type Priority = "low" | "medium" | "high";
export type TaskStatus = "pending" | "completed";
export type Frequency = "daily";
export type ThemePreference = "light" | "dark" | "auto";

// User type
export interface User {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  timezone: string;
  created_at: string;
  updated_at: string;
}

// UserPreferences type
export interface NotificationSettings {
  daily_reminder_enabled: boolean;
  daily_reminder_time: string; // HH:mm format
  task_due_reminder_enabled: boolean;
  habit_reminder_enabled: boolean;
  sound_enabled: boolean;
  vibration_enabled: boolean;
}

export interface UserPreferences {
  id: string;
  user_id: string;
  notification_settings: NotificationSettings;
  theme_preference: ThemePreference;
  created_at: string;
  updated_at: string;
}

// Task type
export interface Task {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  due_date: string | null; // YYYY-MM-DD
  priority: Priority;
  status: TaskStatus;
  color_tag: string;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

// Task create/update DTOs
export interface CreateTaskInput {
  title: string;
  description?: string;
  due_date?: string | null;
  priority?: Priority;
  color_tag?: string;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
  due_date?: string | null;
  priority?: Priority;
  status?: TaskStatus;
  color_tag?: string;
}

// Habit type
export interface Habit {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  frequency: Frequency;
  color_tag: string;
  icon: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

// Habit create/update DTOs
export interface CreateHabitInput {
  name: string;
  description?: string;
  color_tag?: string;
  icon?: string;
}

export interface UpdateHabitInput {
  name?: string;
  description?: string;
  color_tag?: string;
  icon?: string;
  active?: boolean;
}

// HabitCompletion type
export interface HabitCompletion {
  id: string;
  habit_id: string;
  user_id: string;
  completed_date: string; // YYYY-MM-DD
  created_at: string;
}

// Habit with streak info (computed)
export interface HabitWithStreak extends Habit {
  completed_today: boolean;
  current_streak: number;
  completions: HabitCompletion[];
}

// API Response types
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  count: number;
  error: string | null;
}
