import React from 'react';
import { workingHours } from '../data/smartLivingArticles';

const WorkingHours = () => {
  const days = {
    monday: 'Luni',
    tuesday: 'Marți', 
    wednesday: 'Miercuri',
    thursday: 'Joi',
    friday: 'Vineri',
    saturday: 'Sâmbătă',
    sunday: 'Duminică'
  };

  return (
    <div className="bg-gradient-to-br from-white to-soft-yellow rounded-3xl p-8 md:p-12 shadow-warm border border-sage-100 mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
          Program de Lucru
        </h2>
        <p className="text-xl text-sage-600 max-w-2xl mx-auto leading-relaxed">
          Sunt disponibilă pentru consultații în următorul program
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Schedule */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-sage-800 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            </svg>
            Program Săptămânal
          </h3>
          <div className="space-y-3">
            {Object.entries(workingHours.schedule).map(([day, schedule]) => (
              <div key={day} className="flex items-center justify-between py-2 border-b border-sage-100 last:border-0">
                <span className="font-medium text-sage-700">
                  {days[day]}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  schedule.available 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {schedule.available 
                    ? `${schedule.start} - ${schedule.end}`
                    : 'Închis'
                  }
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Notes */}
        <div className="space-y-6">
          <div className="bg-terracotta/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-sage-800 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Programări
            </h3>
            <p className="text-sage-700 text-sm leading-relaxed">
              {workingHours.note}
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.182 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Situații de Urgență
            </h3>
            <p className="text-red-700 text-sm leading-relaxed">
              {workingHours.emergencyNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
