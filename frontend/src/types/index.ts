export interface ConfigurationData {
  success: boolean;
  data: string[][];
  message?: string;
}

export interface UpdateResponse {
  success: boolean;
  message: string;
}

export interface ApiError {
  success: false;
  message: string;
  error?: string;
} 