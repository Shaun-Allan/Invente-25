import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getEvents, Event } from '@/lib/api'; // ✨ ADD getRegistrationUrl
import DepartmentEventsClientView from './DepartmentEventsClientView';
import { unstable_noStore as noStore } from 'next/cache';

// Correctly map URL slugs to the simple API department names.
const mapSlugToApiDept = (slug: string): string => {
  const map: { [key: string]: string } = {
    'cse': 'CSE',
    'snuc-cse': 'SNU_CSE',
    'it': 'IT',
    'ece': 'ECE',
    'eee': 'EEE',
    'bme': 'BME',
    'chem': 'CHEM',
    'civil': 'CIVIL',
    'mech': 'MECH',
    'com': 'COM',
  };
  return map[slug.toLowerCase()] || slug.toUpperCase();
};

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-16 h-16 border-4 border-dashed animate-spin border-purple-400"></div>
    </div>
  );
}

// Updated interface for Next.js 15
interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function EventsPage({ searchParams }: PageProps) {
  // Force dynamic rendering and add error handling.
  noStore();

  let departmentData: { technical: Event[], nonTechnical: Event[] } = {
    technical: [],
    nonTechnical: [],
  };
  let deptSlug: string | undefined = undefined;

  try {
    // Await the searchParams Promise
    const params = await searchParams;
    deptSlug = params['dept'] as string | undefined;

    if (!deptSlug) {
      notFound();
    }

    const apiDept = mapSlugToApiDept(deptSlug);
    
    // ✨ FETCH BOTH EVENTS AND REGISTRATION URL CONCURRENTLY
    const [allEvents, registrationUrl] = await Promise.all([
        getEvents({ department: apiDept }),
        "/"
    ]);

    allEvents.forEach(event => {
      // Corrected: use `domain` field
      const domain = event.attributes.class?.toLowerCase();
      if (domain === 'technical') {
        departmentData.technical.push(event);
      } else if (domain === 'non-technical') {
        departmentData.nonTechnical.push(event);
      }
    });

    return (
        <Suspense fallback={<LoadingSpinner />}>
          {/* ✨ PASS REGISTRATION URL AS A PROP */}
          <DepartmentEventsClientView 
            departmentData={departmentData} 
            deptSlug={deptSlug}
            registrationUrl={registrationUrl}
          />
        </Suspense>
      );

  } catch (error) {
    console.error("🔴 An error occurred while fetching events on the server:", error);
    if (!deptSlug) {
        return notFound();
    }
    // Render page without registration button on error
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <DepartmentEventsClientView 
                departmentData={departmentData} 
                deptSlug={deptSlug}
                registrationUrl={null}
            />
        </Suspense>
    );
  }
}