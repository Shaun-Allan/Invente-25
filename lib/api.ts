import qs from "qs";

// --- Strapi General Interfaces (Unchanged) ---

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

const STRAPI_URL =
  process.env.STRAPI_API_URL ||
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1338";

// --- Core API Fetch Function (Unchanged) ---

async function fetchAPI<T>(
  path: string,
  urlParamsObject: Record<string, any> = {},
  options: RequestInit = {}
): Promise<T> {
  const mergedOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
    cache: "no-store",
  };

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ""
    }`;
  console.log(requestUrl)
  try {
    const response = await fetch(requestUrl, {
      ...mergedOptions,
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch ${requestUrl}: ${response.status} ${response.statusText}`
      );
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch from Strapi:`, error);
    // Return empty data structure instead of throwing
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 0,
          total: 0,
        },
      },
    } as T;
  }
}

// --- Type Definitions (Updated) ---

// REMOVED: Obsolete type aliases EventType, Department, Day, PrizeDetail.
export type SponsorType = "title" | "co-sponsor" | "department" | "hackathon" | "workshop" | "fintech" | "t-shirt";


export interface StrapiMedia {
  data?: {
    attributes: {
      url: string;
      alternativeText?: string;
    }
  }
}

export interface ScheduleItem {
  id: number;
  name: string;
  time: string;
  venue: string;
}

// NEW: Corresponds to the 'Day Schedule' component
export interface DaySchedule {
  id: number;
  titleImage: StrapiMedia;
  scheduleItems: ScheduleItem[];
}

// NEW: Corresponds to the 'Schedule' Single Type
export interface Schedule {
  day1: DaySchedule;
  day2: DaySchedule;
}


// UPDATED: Coordinator interface to match the new `components_event_coordinators` schema.
export interface Coordinator {
  name: string;
  contact: string; // Renamed from 'phone'
}

// UPDATED: Round interface to match the new `components_event_rounds` schema.
export interface Round {
  name: string;      // Renamed from 'title'
  details: string;   // Renamed from 'description'
  rules: any;        // Added 'rules' field (type: json)
  tieBreaker?: string; // Added optional 'tieBreaker' field
}
export interface PrizeDetail {
  id: number;
  amount: number;
  title: string;
}

// UPDATED: Event interface to match the new `events` collection schema.
// The main Event interface, updated to match the final schema
export interface Event {
  id: number;
  attributes: {
    name: string;
    department: string;
    domain: string;
    class: string;
    catchphrase?: string;
    teamSize: string;
    description: string;
    heads: Coordinator[];
    rounds: Round[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    day: 'Day 1' | 'Day 2' | 'Day 1 & 2';
    time: string;
    venue: string;
    prizes: PrizeDetail[];
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
    category: SponsorType;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}


export interface ScheduledEvent {
  id: number;
  title: string;
  time: string;
  venue: string;
}

export interface ScheduleDay {
  id: number;
  attributes: {
    day: 'Day 1' | 'Day 2';
    titleImage: {
      data?: {
        attributes: {
          url: string;
          alternativeText?: string;
        }
      }
    };
    events: ScheduledEvent[];
  }
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




// --- HACKATHON & WORKSHOP TYPES (NEW) ---

// Components used by Hackathon/Workshop
export interface Prize {
  id: number;
  label: string;
  value: string;
}

export interface MetaInfo {
  id: number;
  label: string;
  value: string;
}

// Dynamic Zone Component Interfaces
export interface TextSection {
  __component: "section.text-section";
  id: number;
  title: string;
  content: any; // Rich Text
}

export interface ScheduleDayItem {
  id: number;
  dayTitle: string;
  scheduleList: any; // Rich Text
}

export interface ScheduleSection {
  __component: "section.schedule-section";
  id: number;
  title: string;
  days: ScheduleDayItem[];
}

// Main Interface for the Hackathon/Workshop Collection Type
// --- HACKATHON-SPECIFIC TYPES (NEW) ---
export interface HackathonSponsor {
  id: number;
  name: string;
  logo: StrapiMedia;
  tier?: string;
}

export interface HackathonTrack {
  id: number;
  name: string;
  prizes: Prize[];
  description: string;
  sections: TextSection[];
  detailsPdf: StrapiMedia;
}

export interface Hackathon {
  id: number;
  attributes: {
    name: string;
    registrationFee: string;
    meta: MetaInfo[];
    description: string;
    generalInstructionsTitle?: string;
    generalInstructions?: any; // JSON
    schedule: any; // JSON
    sponsors: HackathonSponsor[];
    tracks: HackathonTrack[];
    coordinators: Coordinator[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
}


// --- WORKSHOP-SPECIFIC TYPES (NEW) ---
export interface Workshop {
  id: number;
  attributes: {
    title: string;
    registrationFee: string;
    description: string;
    prizes: Prize[];
    meta: MetaInfo[];
    generalInstructionsTitle?: string;
    generalInstructions?: any; // JSON
    sections: (TextSection | ScheduleSection)[]; // Dynamic Zone
    coordinators: Coordinator[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
}


export interface President {
  id: number;
  attributes: {
    name: string;
    department: string;
    photo: StrapiMedia;
    instagramHandle?: string;
    phone?: string;
    displayOrder?: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Hospitality {
  busRoutesUrl: string;
  accommodationContacts: Coordinator[];
  busRouteContacts: Coordinator[];
}

// --- Event Functions (Updated) ---

export async function getHospitalityInfo(): Promise<Hospitality | null> {
  try {
    const response = await fetchAPI<StrapiSingleResponse<Hospitality>>(
      "/hospitality",
      { populate: "*" }
    );
    return response.data?.attributes || null;
  } catch (error) {
    console.error("Failed to fetch hospitality info:", error);
    return null;
  }
}


// UPDATED: getEvents to filter by `department` and `domain` as strings.
// Find your getEvents function
export async function getEvents(filters?: {
  department?: string;
  domain?: string;
}): Promise<Event[]> {
  const params: any = {
    // 🛠️ THE FIX IS HERE 👇
    populate: "*", // Change "deep" to "*"
    sort: ["name:asc"],
  };

  // ... (rest of the function is unchanged)
  if (filters) {
    const filterParams: any = {};
    if (filters.department)
      filterParams.department = { $eq: filters.department };
    if (filters.domain) filterParams.domain = { $eq: filters.domain };
    if (Object.keys(filterParams).length > 0) {
      params.filters = filterParams;
    }
  }

  try {
    const response = await fetchAPI<
      StrapiCollectionResponse<Event["attributes"]>
    >("/events", params);

    return (
      response.data?.map((item) => ({
        id: item.id,
        attributes: item.attributes,
      })) || []
    );
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }
}
export async function getEventById(id: number): Promise<Event | null> {
  try {
    const response = await fetchAPI<StrapiSingleResponse<Event["attributes"]>>(
      `/events/${id}`,
      { populate: "deep" } // Using deep population
    );

    return {
      id: response.data.id,
      attributes: response.data.attributes,
    };
  } catch (error) {
    console.error(`Failed to fetch event with id ${id}:`, error);
    return null;
  }
}

// UPDATED: Function signature to accept `department` as a string.
export async function getEventsByDepartment(
  department: string
): Promise<Event[]> {
  return getEvents({ department });
}

// REMOVED: Obsolete functions getEventsByDay and getEventsByType.

// --- Sponsor Functions (Unchanged) ---

export async function getSponsors(type?: SponsorType): Promise<Sponsor[]> {
  const params: any = {
    populate: "*",
    sort: ["category:asc", "name:asc"], // sort by category and name
  };

  if (type) {
    params.filters = {
      category: { $eq: type },
    };
  }

  try {
    const response = await fetchAPI<StrapiCollectionResponse<Sponsor["attributes"]>>(
      "/sponsors",
      params
    );

    return (
      response.data?.map((item) => ({
        id: item.id,
        attributes: item.attributes,
      })) || []
    );
  } catch (error) {
    console.error("Failed to fetch sponsors:", error);
    return [];
  }
}

export async function getSponsorsByType(type: SponsorType): Promise<Sponsor[]> {
  return getSponsors(type);
}


export async function getSponsorById(id: number): Promise<Sponsor | null> {
  try {
    const response = await fetchAPI<
      StrapiSingleResponse<Sponsor["attributes"]>
    >(`/sponsors/${id}`, { populate: "*" });

    return {
      id: response.data.id,
      attributes: response.data.attributes,
    };
  } catch (error) {
    console.error(`Failed to fetch sponsor with id ${id}:`, error);
    return null;
  }
}



export async function getPresidents(): Promise<President[]> {
  const params = {
    populate: "*",
    sort: ["department:asc"],
  };

  try {
    const response = await fetchAPI<
      StrapiCollectionResponse<President["attributes"]>
    >("/presidents", params);

    return response.data?.map((item) => ({
      id: item.id,
      attributes: item.attributes,
    })) || [];
  } catch (error) {
    console.error("Failed to fetch presidents:", error);
    return [];
  }
}





// --- Schedule Functions (Unchanged, but note department is now a string) ---

export async function getSchedule(): Promise<Schedule | null> {
  try {
    const response = await fetchAPI<StrapiSingleResponse<Schedule>>(
      "/schedule",
      {
        // ✅ UPDATED: Use a specific populate object for nested content
        populate: {
          day1: {
            populate: "*",
          },
          day2: {
            populate: "*",
          },
        },
      }
    );

    if (!response.data) {
      return null;
    }

    return response.data.attributes;
  } catch (error) {
    console.error("Failed to fetch main schedule:", error);
    return null;
  }
}

export async function getHackathons(): Promise<Hackathon[]> {
  const params = {
    populate: {
      meta: '*',
      coordinators: '*',
      sponsors: {
        populate: 'logo',
      },
      tracks: {
        populate: {
          prizes: '*',
          sections: '*',
          detailsPdf: '*',
        },
      },
    },
    sort: ["name:asc"],
  };

  try {
    const response = await fetchAPI<StrapiCollectionResponse<Hackathon["attributes"]>>("/hackathons", params);
    return response.data?.map(item => ({ id: item.id, attributes: item.attributes })) || [];
  } catch (error) {
    console.error("Failed to fetch hackathons:", error);
    return [];
  }
}

/**
 * Fetches a single hackathon by its ID.
 */
export async function getHackathonById(id: number): Promise<Hackathon | null> {
  try {
    const response = await fetchAPI<StrapiSingleResponse<Hackathon["attributes"]>>(`/hackathons/${id}`, { populate: "deep" });
    return response.data ? { id: response.data.id, attributes: response.data.attributes } : null;
  } catch (error) {
    console.error(`Failed to fetch hackathon with id ${id}:`, error);
    return null;
  }
}

/**
 * Fetches all workshops with their related data.
 */
export async function getWorkshops(): Promise<Workshop[]> {
  const params = {
    populate: {
      meta: '*',
      prizes: '*',
      coordinators: '*',
      sections: {
        populate: {
          days: {
            populate: '*',
          },
        },
      },
    },
    sort: ["title:asc"],
  };

  try {
    const response = await fetchAPI<StrapiCollectionResponse<Workshop["attributes"]>>("/workshops", params);
    return response.data?.map(item => ({ id: item.id, attributes: item.attributes })) || [];
  } catch (error) {
    console.error("Failed to fetch workshops:", error);
    return [];
  }
}

/**
 * Fetches a single workshop by its ID.
 */
export async function getWorkshopById(id: number): Promise<Workshop | null> {
  try {
    const response = await fetchAPI<StrapiSingleResponse<Workshop["attributes"]>>(`/workshops/${id}`, { populate: "deep" });
    return response.data ? { id: response.data.id, attributes: response.data.attributes } : null;
  } catch (error) {
    console.error(`Failed to fetch workshop with id ${id}:`, error);
    return null;
  }
}




// --- Settings Functions (Unchanged) ---

export async function getSettings(): Promise<Settings | null> {
  try {
    const response = await fetchAPI<
      StrapiSingleResponse<Settings["attributes"]>
    >("/setting", { populate: "*" });

    if (!response.data) {
      return null;
    }

    return {
      id: response.data.id,
      attributes: response.data.attributes,
    };
  } catch (error) {
    console.error("Failed to fetch settings:", error);
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

// --- Combined Utility Functions (Updated) ---


export async function getAllData() {
  const [
    events,
    sponsors,
    schedule,
    settings,
    hackathons,
    workshops,
    presidents,
    hospitalityInfo, // Added
  ] = await Promise.all([
    getEvents(),
    getSponsors(),
    getSchedule(),
    getSettings(),
    getHackathons(),
    getWorkshops(),
    getPresidents(),
    getHospitalityInfo(), // Added
  ]);

  return {
    events,
    sponsors,
    schedule,
    settings,
    hackathons,
    workshops,
    presidents,
    hospitalityInfo, // Added
  };
}


export async function getDataForDepartment(department: string) {
  const [events, schedule] = await Promise.all([
    getEventsByDepartment(department),
    getSchedule(),
  ]);

  return {
    events,
    schedule,
  };
}
