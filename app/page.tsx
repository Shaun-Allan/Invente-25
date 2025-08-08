import { getEvents, getSponsors, getSchedule, getSettings } from '@/lib/api';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const [events, sponsors, schedule, settings] = await Promise.all([
    getEvents(),
    getSponsors(),
    getSchedule(),
    getSettings(),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Invente 2025</h1>
        <p className="text-xl text-gray-600">
          Tech Festival • {settings?.attributes.venue || 'SSN College of Engineering'}
        </p>
        {settings?.attributes.eventDate && (
          <p className="text-lg text-gray-500 mt-2">
            {new Date(settings.attributes.eventDate).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
      </header>

      {/* Quick Links */}
      {settings && (settings.attributes.busRoutesUrl || settings.attributes.registrationUrl) && (
        <div className="mb-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="flex gap-4 flex-wrap">
            {settings.attributes.registrationUrl && (
              <a
                href={settings.attributes.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Register Now
              </a>
            )}
            {settings.attributes.busRoutesUrl && (
              <a
                href={settings.attributes.busRoutesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Bus Routes
              </a>
            )}
          </div>
        </div>
      )}

      {/* Events Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Events</h2>
        
        {/* Day 1 Events */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Day 1</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((event) => event.attributes.day === 'DAY_1')
              .map((event) => (
                <div
                  key={event.id}
                  className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">{event.attributes.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      event.attributes.type === 'TECHNICAL' ? 'bg-purple-100 text-purple-700' :
                      event.attributes.type === 'WORKSHOP' ? 'bg-green-100 text-green-700' :
                      event.attributes.type === 'HACKATHON' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {event.attributes.type}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-3">
                    {event.attributes.department} • {event.attributes.location}
                  </p>
                  
                  <p className="text-gray-700 mb-3 line-clamp-3">
                    {event.attributes.description}
                  </p>
                  
                  <div className="text-sm text-gray-600">
                    <p className="mb-1">👥 {event.attributes.participantCount}</p>
                    {event.attributes.prizeDetails && event.attributes.prizeDetails.length > 0 && (
                      <p className="font-medium text-green-600">
                        🏆 Prizes worth ₹{event.attributes.prizeDetails.reduce((sum, prize) => sum + prize.amount, 0).toLocaleString()}
                      </p>
                    )}
                  </div>

                  {event.attributes.rounds && event.attributes.rounds.length > 0 && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-sm font-medium text-gray-600">
                        {event.attributes.rounds.length} Round{event.attributes.rounds.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Day 2 Events */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Day 2</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((event) => event.attributes.day === 'DAY_2')
              .map((event) => (
                <div
                  key={event.id}
                  className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">{event.attributes.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      event.attributes.type === 'TECHNICAL' ? 'bg-purple-100 text-purple-700' :
                      event.attributes.type === 'WORKSHOP' ? 'bg-green-100 text-green-700' :
                      event.attributes.type === 'HACKATHON' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {event.attributes.type}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-3">
                    {event.attributes.department} • {event.attributes.location}
                  </p>
                  
                  <p className="text-gray-700 mb-3 line-clamp-3">
                    {event.attributes.description}
                  </p>
                  
                  <div className="text-sm text-gray-600">
                    <p className="mb-1">👥 {event.attributes.participantCount}</p>
                    {event.attributes.prizeDetails && event.attributes.prizeDetails.length > 0 && (
                      <p className="font-medium text-green-600">
                        🏆 Prizes worth ₹{event.attributes.prizeDetails.reduce((sum, prize) => sum + prize.amount, 0).toLocaleString()}
                      </p>
                    )}
                  </div>

                  {event.attributes.rounds && event.attributes.rounds.length > 0 && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-sm font-medium text-gray-600">
                        {event.attributes.rounds.length} Round{event.attributes.rounds.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      {sponsors.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Sponsors</h2>
          
          {/* Title Sponsors */}
          {sponsors.filter(s => s.attributes.type === 'TITLE').length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gold">Title Sponsors</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sponsors
                  .filter(s => s.attributes.type === 'TITLE')
                  .map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.attributes.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center"
                    >
                      {sponsor.attributes.logo?.data && (
                        <img
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1338'}${sponsor.attributes.logo.data.attributes.url}`}
                          alt={sponsor.attributes.name}
                          className="h-20 object-contain mb-3"
                        />
                      )}
                      <h4 className="text-lg font-semibold">{sponsor.attributes.name}</h4>
                    </a>
                  ))}
              </div>
            </div>
          )}

          {/* Other Sponsors */}
          <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6">
            {sponsors
              .filter(s => s.attributes.type !== 'TITLE')
              .map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.attributes.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col items-center"
                >
                  {sponsor.attributes.logo?.data && (
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1338'}${sponsor.attributes.logo.data.attributes.url}`}
                      alt={sponsor.attributes.name}
                      className="h-12 object-contain mb-2"
                    />
                  )}
                  <p className="text-sm text-center">{sponsor.attributes.name}</p>
                </a>
              ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      {settings && (settings.attributes.contactEmail || settings.attributes.contactPhone) && (
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="flex gap-6 flex-wrap">
            {settings.attributes.contactEmail && (
              <a
                href={`mailto:${settings.attributes.contactEmail}`}
                className="text-blue-600 hover:underline"
              >
                📧 {settings.attributes.contactEmail}
              </a>
            )}
            {settings.attributes.contactPhone && (
              <a
                href={`tel:${settings.attributes.contactPhone}`}
                className="text-blue-600 hover:underline"
              >
                📱 {settings.attributes.contactPhone}
              </a>
            )}
          </div>
        </section>
      )}

      <footer className="mt-16 pt-8 border-t text-center text-gray-500">
        <p>
          Next.js (Port 3005) ↔ Strapi CMS (Port 1338) ↔ PostgreSQL (Port 5433)
        </p>
        <p className="mt-2 text-sm">
          Events: {events.length} • Sponsors: {sponsors.length}
        </p>
      </footer>
    </div>
  );
}