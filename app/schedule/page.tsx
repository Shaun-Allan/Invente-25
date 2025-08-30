import { getSchedule } from "@/lib/api";
import ScheduleCarouselClient from "./ScheduleCarouselClient"; // Note the new filename
import { Suspense } from "react";

// A simple loading component for a better user experience
function LoadingUI() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d051c]">
      <p className="text-2xl text-white font-michroma">Loading Schedule...</p>
    </div>
  );
}

export default async function SchedulePage() {
  // 1. Fetch data on the server
  const schedule = await getSchedule();

  // Handle case where no schedule is found
  if (!schedule) {
    return (
       <div className="flex min-h-screen items-center justify-center bg-[#0d051c]">
        <h1 className="text-3xl text-white font-michroma">Schedule Not Available</h1>
       </div>
    );
  }

  return (
    <Suspense fallback={<LoadingUI />}>
      {/* 2. Pass the fetched data as a prop to the client component */}
      <ScheduleCarouselClient schedule={schedule} />
    </Suspense>
  );
}