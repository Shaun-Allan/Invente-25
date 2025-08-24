"use client";

import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Apply padding ONLY if not home ("/")
  const extraPadding = pathname !== "/" ? "pt-[88px]" : "";

  return <main className={extraPadding}>{children}</main>;
}
