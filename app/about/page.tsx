import AboutClient from './AboutClient';
import { getPresidents } from '@/lib/api';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://ssnsnucinvente.com";

export default async function AboutPage() {
  const presidents = await getPresidents();
  return (
    <AboutClient presidents={presidents} strapiUrl={STRAPI_URL} />
  );
}
