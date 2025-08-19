"use client";
import React, { useState, useEffect } from 'react';

import PageHeader from '@/components/events/PageHeader';
import CategoryFilter from '@/components/events/CategoryFilter';
import SearchBar from '@/components/events/SearchBar';
import EventsGrid from '@/components/events/EventsGrid';
import EventModal from '@/components/events/EventModal';
import Footer from '@/components/events/Footer';

import { eventCategories, centralEvents } from '@/data/eventData';

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All Departments");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(centralEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  
  useEffect(() => {
    let filtered = centralEvents;
    
    if (activeCategory !== "All Departments") {
      filtered = filtered.filter(event => event.department === activeCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (event.department && event.department.toLowerCase().includes(searchTerm.toLowerCase())) ||
        event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.date.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredEvents(filtered);
  }, [activeCategory, searchTerm]);

  const handleEventClick = (event) => {
    console.log("Event clicked:", event.name);
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-hidden min-h-screen w-full" 
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.9'
        }}>
        <PageHeader />

        <div className="w-full flex-1 justify-center items-center flex flex-col">
          {/* Category Filter Buttons */}
          <CategoryFilter 
            categories={eventCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Search Bar */}
          <SearchBar 
            value={searchTerm}
            onChange={setSearchTerm}
          />

          {/* Events Grid */}
          <EventsGrid 
            events={filteredEvents}
            onEventClick={handleEventClick}
          />
        </div>

        {/* Event Details Modal */}
        <EventModal 
          event={selectedEvent}
          categories={eventCategories}
          isOpen={showModal}
          onClose={handleCloseModal}
        />
      </div>
      
      {/* Footer*/}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}
