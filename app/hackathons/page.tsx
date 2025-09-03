import { getHackathons, getWorkshops } from "@/lib/api";
import HackathonsClientView from "./HackathonsClientView";
import { Suspense } from "react";

const LoadingUI = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#0d051c]">
    <p className="text-2xl text-white font-michroma">Loading Events...</p>
  </div>
);

export default async function HackathonsPage() {
  // Fetch data from separate endpoints
  const [hackathons, workshops, registrationUrl] = await Promise.all([
    getHackathons(),
    getWorkshops(),
    "google.com",
  ]);

  // No filtering needed anymore
  return (
    <Suspense fallback={<LoadingUI />}>
      {/* Pass the separate data arrays and URL as props */}
      <HackathonsClientView 
        hackathons={hackathons} 
        workshops={workshops} 
        registrationUrl={registrationUrl}
      />
    </Suspense>
  );
}