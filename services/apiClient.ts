export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://barisaler-pran-api.onrender.com/api/v1";

export interface ApiResponse<T = any> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: any;
}

export const DEFAULT_ADMIN_TOKEN =
  process.env.NEXT_PUBLIC_ADMIN_TOKEN ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhZGYwNjRlZWRiY2UxOTcyNzhhY2U2YSIsImVtYWlsIjoiZWRpdG9yQGJhcmlzYWxlcnByYW4uY29tIiwicm9sZSI6IlN1cGVyX0FkbWluIiwiaWF0IjoxNzkzMDAxMDM5LCJleHAiOjE4MjQ1MzcwMzl9.xjWYuNNGAZHVzjuqMLPZaBttbdCEPPv3SokhrVu_bCw";

export function getAuthToken(): string | null {
  if (typeof window !== "undefined") {
    const local =
      localStorage.getItem("token") ||
      localStorage.getItem("jwt_token") ||
      localStorage.getItem("auth_token");
    if (local) return local;
  }
  return DEFAULT_ADMIN_TOKEN;
}

export function setAuthToken(token: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", token);
}

export function removeAuthToken(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
  localStorage.removeItem("jwt_token");
  localStorage.removeItem("auth_token");
}

export async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T> | null> {
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  const token = getAuthToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token && !headers["Authorization"]) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (!res.ok) {
      const errorJson = await res.json().catch(() => null);
      console.warn(`API [${options.method || "GET"}] ${endpoint} failed (${res.status}):`, errorJson || res.statusText);
      return errorJson || { statusCode: res.status, success: false, message: res.statusText, data: null as any };
    }

    const data: ApiResponse<T> = await res.json();
    return data;
  } catch (error: any) {
    console.warn(`API [${options.method || "GET"}] ${endpoint} network error:`, error.message);
    return null;
  }
}

export const api = {
  get: <T = any>(endpoint: string, options?: RequestInit) =>
    apiRequest<T>(endpoint, { method: "GET", next: { revalidate: 30 }, ...options }),
  
  post: <T = any>(endpoint: string, body?: any, options?: RequestInit) => {
    const payload =
      body && typeof body === "object" && !Array.isArray(body) && !("body" in body)
        ? { ...body, body }
        : body;
    return apiRequest<T>(endpoint, {
      method: "POST",
      body: payload ? JSON.stringify(payload) : undefined,
      ...options,
    });
  },

  patch: <T = any>(endpoint: string, body?: any, options?: RequestInit) => {
    const payload =
      body && typeof body === "object" && !Array.isArray(body) && !("body" in body)
        ? { ...body, body }
        : body;
    return apiRequest<T>(endpoint, {
      method: "PATCH",
      body: payload ? JSON.stringify(payload) : undefined,
      ...options,
    });
  },

  delete: <T = any>(endpoint: string, options?: RequestInit) =>
    apiRequest<T>(endpoint, { method: "DELETE", ...options }),

  upload: async <T = any>(endpoint: string, formData: FormData): Promise<ApiResponse<T> | null> => {
    const url = endpoint.startsWith("http")
      ? endpoint
      : `${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

    const token = getAuthToken();
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers,
        body: formData,
      });
      return await res.json();
    } catch (err: any) {
      console.warn(`API upload ${endpoint} network error:`, err.message);
      return null;
    }
  },
};
