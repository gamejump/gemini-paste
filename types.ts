
export interface Paste {
  id: string;
  content: string;
  title: string;
  syntax: string;
  createdAt: string; // ISO string
}

export interface SyntaxOption {
  value: string;
  label: string;
}

export enum AlertType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export interface AlertMessage {
  id: string;
  type: AlertType;
  message: string;
}