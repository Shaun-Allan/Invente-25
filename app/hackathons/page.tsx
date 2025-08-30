import { getHackathonsAndWorkshops } from "@/lib/api"; // ✨ ADD getRegistrationUrl
import HackathonsClientView from "./HackathonsClientView";
import { Suspense } from "react";

const LoadingUI = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#0d051c]">
    <p className="text-2xl text-white font-michroma">Loading Events...</p>
  </div>
);

export default async function HackathonsPage() {
  // ✨ FETCH REGISTRATION URL ALONGSIDE EVENTS
  const [allMajorEvents, registrationUrl] = await Promise.all([
    getHackathonsAndWorkshops(),
    "/",
  ]);

  // Filter them into separate arrays
  const hackathons = allMajorEvents.filter(
    (event) => event.attributes.type === "Hackathon"
  );
  const workshops = allMajorEvents.filter(
    (event) => event.attributes.type === "Workshop"
  );

  return (
    <Suspense fallback={<LoadingUI />}>
      {/* ✨ PASS THE URL AS A PROP */}
      <HackathonsClientView 
        hackathons={hackathons} 
        workshops={workshops} 
        registrationUrl={registrationUrl}
      />
    </Suspense>
  );
}