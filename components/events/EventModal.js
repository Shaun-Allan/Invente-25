"use client";
import React from 'react';
import Image from 'next/image';

/**
 * EventModal component for displaying detailed event information
 * @param {Object} props - Component props
 * @param {Object} props.event - Event object containing event details
 * @param {Array} props.categories - Array of category objects for department colors
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {Function} props.onClose - Callback function when modal is closed
 */
const EventModal = ({ event, categories, isOpen, onClose }) => {
  if (!isOpen || !event) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" 
      onClick={onClose}
    >
      <div 
        className="bg-[#fff9e6] rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] relative" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-[#606060] hover:text-[#888888]"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div 
          className="mt-4 pr-4 overflow-y-auto max-h-[calc(80vh-8rem)] modal-content" 
          style={{ 
            scrollbarWidth: 'thin', 
            scrollbarColor: `${categories.find(cat => cat.name === event.department)?.color || '#C04A51'} rgb(229, 231, 235)`,
            borderRadius: '10px'
          }}
        >
          <div className="mb-6">
              <h3 className="font-sancreek text-3xl text-[#C04A51] mb-2">Event Name</h3>
              <p className="font-baskerville text-lg text-[#000000]">{event.name}</p>
          </div>

          <div className="mb-6">
              <h3 className="font-sancreek text-3xl text-[#C04A51] mb-2">Description</h3>
                {event.description && (
                  <p className="font-baskerville text-lg text-[#000000]">{event.description}</p>
                )}
          </div>

          <div className="mb-6">
              <h3 className="font-sancreek text-3xl text-[#C04A51] mb-2">Department</h3>
              <p className="font-baskerville text-lg text-[#000000]">{event.department}</p>
          </div>

          <div className="mb-6">
              <h3 className="font-sancreek text-3xl text-[#C04A51] mb-2">Date</h3>
              <p className="font-baskerville text-lg text-[#000000]">{event.date}</p>
          </div>

          <div className="mb-6">
              <h3 className="font-sancreek text-3xl text-[#C04A51] mb-2">Registration Fee</h3>
                {event.registrationFee && (
                  <p className="font-baskerville text-lg text-[#000000]">{event.registrationFee}</p>
                )}
          </div>

          <div className="mb-6">
              <h3 className="font-sancreek text-3xl text-[#C04A51] mb-2">PoCs</h3>
              <ol className="list-decimal pl-6">
                  {event.pocs && event.pocs.map((poc, index) => (
                    <li key={index} className="font-baskerville text-lg text-[#000000] mb-1">{poc}</li>
                  ))}
              </ol>
          </div>

          <div className="mb-6">
              <h3 className="font-sancreek text-3xl text-[#C04A51] mb-2">Rules</h3>
              <ol className="list-decimal pl-6">
                  {event.rules && event.rules.map((rule, index) => (
                    <li key={index} className="font-baskerville text-lg text-[#000000] mb-1">{rule}</li>
                  ))}
              </ol>
          </div>

          <div className="mb-6">
              <h3 className="font-sancreek text-3xl text-[#C04A51] mb-2">Department Description</h3>
                {event.departmentDescription && (
                  <p className="font-baskerville text-lg text-[#000000]">{event.departmentDescription}</p>
                )}
          </div>

          
        </div>
        
        {/* <div className="mt-6 flex justify-center border-t pt-4">
          <a 
            className="bg-[#FDA80B] text-[#ffffff] font-sancreek py-3 px-8 rounded-xl hover:bg-[#FF9100] transition-colors duration-300 transform hover:scale-105 active:scale-95"
            href={`/register/${event.name.replace(/\s+/g, '')}`}
          >
            Register Now
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default EventModal;
