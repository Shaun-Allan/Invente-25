import { getHospitalityInfo } from "@/lib/api";
import HospitalityClientView from "./HospitalityClientView"; // Note the new filename
import { Suspense } from "react";

const LoadingUI = () => (
    <div className="flex min-h-screen items-center justify-center bg-[#0d051c]">
        <p className="text-2xl text-white font-michroma">Loading Hospitality Info...</p>
    </div>
);

export default async function HospitalityPage() {
    // 1. Fetch data on the server
    const hospitalityInfo = await getHospitalityInfo();

    return (
        <Suspense fallback={<LoadingUI />}>
            {/* 2. Pass the fetched data as a prop */}
            <HospitalityClientView hospitalityInfo={hospitalityInfo} />
        </Suspense>
    );
}