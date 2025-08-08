interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function fetchAPI<T>(
  path: string,
  urlParamsObject: Record<string, any> = {},
  options: RequestInit = {}
): Promise<StrapiResponse<T>> {
  const mergedOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
    cache: 'no-store'
  };

  const queryString = new URLSearchParams(urlParamsObject).toString();
  const strapiUrl = process.env.STRAPI_API_URL || process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1338';
  const requestUrl = `${strapiUrl}/api${path}${
    queryString ? `?${queryString}` : ""
  }`;

  try {
    const response = await fetch(requestUrl, mergedOptions);
    
    if (!response.ok) {
      console.error(`Failed to fetch ${requestUrl}: ${response.status} ${response.statusText}`);
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch from Strapi:`, error);
    throw error;
  }
}

export async function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1338"}${path}`;
}