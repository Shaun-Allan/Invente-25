"use client";
import React from 'react';
import FloppyDiskCard from './FloppyDiskCard';

/**
 * EventsGrid component for displaying a grid of event cards
 * @param {Object} props - Component props
 * @param {Array} props.events - Array of event objects
 * @param {Function} props.onEventClick - Callback function when an event is clicked
 */
const EventsGrid = ({ events, onEventClick }) => {
  return (
    <div className="w-[90%] md:w-[85%] lg:w-[75%] px-4 rounded-xl relative mb-24 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {events.length > 0 ? (
          events.map((event) => (
            <FloppyDiskCard 
              key={event.id} 
              event={event} 
              onClick={onEventClick}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-2xl font-baskerville">No events found. Try a different search.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsGrid;
