export type SchoolLevel = 'all' | 'elementary' | 'middle' | 'high';

export type LinkCategory = 
  | 'school' 
  | 'library' 
  | 'tools'
  | 'des-grade-1'
  | 'des-grade-2'
  | 'des-grade-3'
  | 'des-grade-4'
  | 'des-grade-5'
  | 'des-activities';

export interface SchoolLink {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'school' | 'library' | 'tools';
  levels: SchoolLevel[];
  iconName: string;
  badge?: string;
  badgeColor?: string;
  featured?: boolean;
  loginHelp?: string;
  color?: string; // Hex or tailwind color class
}

export interface CustomBookmark {
  id: string;
  title: string;
  url: string;
  iconName: string;
  category: string;
  createdAt: number;
}

export interface TaskItem {
  id: string;
  title: string;
  subject?: string;
  dueDate?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface BellPeriod {
  period: string;
  name: string;
  start: string; // "08:00" (24h)
  end: string;   // "08:52" (24h)
  displayStart: string; // "8:00 AM"
  displayEnd: string;   // "8:52 AM"
}

export interface ScheduleType {
  id: string;
  name: string;
  description: string;
  periods: BellPeriod[];
}

export interface DailyAnnouncement {
  id: string;
  title: string;
  date: string;
  content: string;
  tag: 'Spirit' | 'Athletics' | 'Academic' | 'Club' | 'Important';
  urgent?: boolean;
}
