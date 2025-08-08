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

interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
}

interface StrapiCollectionResponse<T> {
  data: Array<{
    id: number;
    attributes: T;
  }>;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const STRAPI_URL = process.env.STRAPI_API_URL || process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1338';

async function fetchAPI<T>(
  path: string,
  urlParamsObject: Record<string, any> = {},
  options: RequestInit = {}
): Promise<T> {
  const mergedOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
    cache: 'no-store',
  };

  const queryString = new URLSearchParams(urlParamsObject).toString();
  const requestUrl = `${STRAPI_URL}/api${path}${
    queryString ? `?${queryString}` : ''
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

// Event Types
export type EventType = 'TECHNICAL' | 'NON_TECHNICAL' | 'HACKATHON' | 'WORKSHOP';
export type Department = 'SSN_CSE' | 'SNU_CSE' | 'IT' | 'ECE' | 'EEE' | 'MECH' | 'CHEM' | 'CIVIL' | 'BME' | 'COM';
export type Day = 'DAY_1' | 'DAY_2';
export type SponsorType = 'TITLE' | 'CO_SPONSOR' | 'DEPT' | 'HACKATHON_WORKSHOP' | 'FINTECH';

export interface PrizeDetail {
  amount: number;
  title: string;
}

export interface Round {
  title: string;
  description: string;
}

export interface Coordinator {
  name: string;
  phone: string;
}

export interface Event {
  id: number;
  attributes: {
    name: string;
    description: string;
    poster?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
    department: Department;
    type: EventType;
    prizeDetails: PrizeDetail[];
    day: Day;
    location: string;
    participantCount: string;
    rounds: Round[];
    coordinators: Coordinator[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Sponsor {
  id: number;
  attributes: {
    name: string;
    logo?: {
      data?: {
        attributes: {
          url: string;
          alternativeText?: string;
          width?: number;
          height?: number;
        };
      };
    };
    website: string;
    type: SponsorType;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ScheduleRound {
  roundName: string;
  timeRange: string;
  venue: string;
}

export interface ScheduleItem {
  eventName: string;
  subTitle?: string;
  location: string;
  timeRange: string;
  rounds: ScheduleRound[];
  highlightNotInDeptPremises: boolean;
  department: Department;
}

export interface Schedule {
  id: number;
  attributes: {
    DAY_1: ScheduleItem[];
    DAY_2: ScheduleItem[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Settings {
  id: number;
  attributes: {
    busRoutesUrl?: string;
    registrationUrl?: string;
    contactEmail?: string;
    contactPhone?: string;
    eventDate?: string;
    venue?: string;
    socialLinks?: Record<string, string>;
    createdAt: string;
    updatedAt: string;
  };
}

// Event Functions
export async function getEvents(filters?: {
  type?: EventType;
  department?: Department;
  day?: Day;
}): Promise<Event[]> {
  const params: any = {
    populate: '*',
    sort: 'day:asc,name:asc',
  };

  if (filters) {
    const filterParams: any = {};
    if (filters.type) filterParams.type = { $eq: filters.type };
    if (filters.department) filterParams.department = { $eq: filters.department };
    if (filters.day) filterParams.day = { $eq: filters.day };
    if (Object.keys(filterParams).length > 0) {
      params.filters = filterParams;
    }
  }

  const response = await fetchAPI<StrapiCollectionResponse<Event['attributes']>>(
    '/events',
    params
  );
  
  return response.data.map(item => ({
    id: item.id,
    attributes: item.attributes
  }));
}

export async function getEventById(id: number): Promise<Event | null> {
  try {
    const response = await fetchAPI<StrapiSingleResponse<Event['attributes']>>(
      `/events/${id}`,
      { populate: '*' }
    );
    
    return {
      id: response.data.id,
      attributes: response.data.attributes
    };
  } catch (error) {
    console.error(`Failed to fetch event with id ${id}:`, error);
    return null;
  }
}

export async function getEventsByDepartment(department: Department): Promise<Event[]> {
  return getEvents({ department });
}

export async function getEventsByDay(day: Day): Promise<Event[]> {
  return getEvents({ day });
}

export async function getEventsByType(type: EventType): Promise<Event[]> {
  return getEvents({ type });
}

// Sponsor Functions
export async function getSponsors(type?: SponsorType): Promise<Sponsor[]> {
  const params: any = {
    populate: '*',
    sort: 'type:asc,name:asc',
  };

  if (type) {
    params.filters = {
      type: { $eq: type }
    };
  }

  const response = await fetchAPI<StrapiCollectionResponse<Sponsor['attributes']>>(
    '/sponsors',
    params
  );
  
  return response.data.map(item => ({
    id: item.id,
    attributes: item.attributes
  }));
}

export async function getSponsorById(id: number): Promise<Sponsor | null> {
  try {
    const response = await fetchAPI<StrapiSingleResponse<Sponsor['attributes']>>(
      `/sponsors/${id}`,
      { populate: '*' }
    );
    
    return {
      id: response.data.id,
      attributes: response.data.attributes
    };
  } catch (error) {
    console.error(`Failed to fetch sponsor with id ${id}:`, error);
    return null;
  }
}

export async function getSponsorsByType(type: SponsorType): Promise<Sponsor[]> {
  return getSponsors(type);
}

// Schedule Functions
export async function getSchedule(): Promise<Schedule | null> {
  try {
    const response = await fetchAPI<StrapiSingleResponse<Schedule['attributes']>>(
      '/schedule',
      { populate: 'deep' }
    );
    
    return {
      id: response.data.id,
      attributes: response.data.attributes
    };
  } catch (error) {
    console.error('Failed to fetch schedule:', error);
    return null;
  }
}

export async function getScheduleByDay(day: 'DAY_1' | 'DAY_2'): Promise<ScheduleItem[]> {
  const schedule = await getSchedule();
  if (!schedule) return [];
  return schedule.attributes[day] || [];
}

export async function getScheduleByDepartment(department: Department): Promise<{
  DAY_1: ScheduleItem[];
  DAY_2: ScheduleItem[];
}> {
  const schedule = await getSchedule();
  if (!schedule) return { DAY_1: [], DAY_2: [] };

  return {
    DAY_1: schedule.attributes.DAY_1.filter(item => item.department === department),
    DAY_2: schedule.attributes.DAY_2.filter(item => item.department === department),
  };
}

// Settings Functions
export async function getSettings(): Promise<Settings | null> {
  try {
    const response = await fetchAPI<StrapiSingleResponse<Settings['attributes']>>(
      '/setting',
      { populate: '*' }
    );
    
    return {
      id: response.data.id,
      attributes: response.data.attributes
    };
  } catch (error) {
    console.error('Failed to fetch settings:', error);
    return null;
  }
}

export async function getBusRoutesUrl(): Promise<string | null> {
  const settings = await getSettings();
  return settings?.attributes.busRoutesUrl || null;
}

export async function getRegistrationUrl(): Promise<string | null> {
  const settings = await getSettings();
  return settings?.attributes.registrationUrl || null;
}

export async function getContactInfo(): Promise<{
  email?: string;
  phone?: string;
} | null> {
  const settings = await getSettings();
  if (!settings) return null;
  
  return {
    email: settings.attributes.contactEmail,
    phone: settings.attributes.contactPhone,
  };
}

// Combined utility functions
export async function getAllData() {
  const [events, sponsors, schedule, settings] = await Promise.all([
    getEvents(),
    getSponsors(),
    getSchedule(),
    getSettings(),
  ]);

  return {
    events,
    sponsors,
    schedule,
    settings,
  };
}

export async function getDataForDay(day: Day) {
  const [events, schedule] = await Promise.all([
    getEventsByDay(day),
    getScheduleByDay(day),
  ]);

  return {
    events,
    schedule,
  };
}

export async function getDataForDepartment(department: Department) {
  const [events, schedule] = await Promise.all([
    getEventsByDepartment(department),
    getScheduleByDepartment(department),
  ]);

  return {
    events,
    schedule,
  };
}