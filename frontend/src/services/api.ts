const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function testBackend() {
  const response = await fetch(API_URL);
  return response.json();
}

/* ---------------------------------------------------------
   RESOURCES API
--------------------------------------------------------- */

export type ApiResource = {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  type: string;
  icon: string | null;
  icon_style: string | null;
  path: string | null;
  available: boolean;
  created_at: string;
};

export type ResourceInput = Partial<
  Omit<ApiResource, "id" | "created_at" | "slug">
> & { slug?: string };

function authHeaders(): Record<string, string> {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function handle<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data as T;
}

// GET /api/resources  (with optional search + category)
export async function getResources(
  params: { search?: string; category?: string } = {},
  signal?: AbortSignal,
): Promise<ApiResource[]> {
  const query = new URLSearchParams();
  if (params.search?.trim()) query.set("search", params.search.trim());
  if (params.category && params.category !== "All")
    query.set("category", params.category);

  const qs = query.toString();
  const response = await fetch(
    `${API_URL}/api/resources${qs ? `?${qs}` : ""}`,
    { signal },
  );
  const data = await handle<{ resources: ApiResource[] }>(response);
  return data.resources;
}

// GET /api/resources/:id
export async function getResourceById(id: number): Promise<ApiResource> {
  const response = await fetch(`${API_URL}/api/resources/${id}`);
  const data = await handle<{ resource: ApiResource }>(response);
  return data.resource;
}

// POST /api/resources
export async function createResource(
  input: ResourceInput & { title: string; description: string; category: string },
): Promise<ApiResource> {
  const response = await fetch(`${API_URL}/api/resources`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(input),
  });
  const data = await handle<{ resource: ApiResource }>(response);
  return data.resource;
}

// PUT /api/resources/:id
export async function updateResource(
  id: number,
  input: ResourceInput,
): Promise<ApiResource> {
  const response = await fetch(`${API_URL}/api/resources/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(input),
  });
  const data = await handle<{ resource: ApiResource }>(response);
  return data.resource;
}

// DELETE /api/resources/:id
export async function deleteResource(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/api/resources/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  await handle<{ message: string }>(response);
}
