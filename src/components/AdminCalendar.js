import React, { useState, useMemo } from 'react';

const AdminCalendar = ({ appointments = [], onAppointmentClick, onDateClick }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState('month'); // 'month' or 'week'

    const monthNames = [
        'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
        'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'
    ];

    const dayNames = ['Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm', 'Dum'];

    const calendarData = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        
        // Start from Monday (1) instead of Sunday (0)
        const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
        
        const days = [];
        
        // Add previous month's days
        const prevMonth = new Date(year, month - 1, 0);
        for (let i = startDay - 1; i >= 0; i--) {
            days.push({
                date: prevMonth.getDate() - i,
                isCurrentMonth: false,
                fullDate: new Date(year, month - 1, prevMonth.getDate() - i)
            });
        }
        
        // Add current month's days
        for (let date = 1; date <= daysInMonth; date++) {
            days.push({
                date,
                isCurrentMonth: true,
                fullDate: new Date(year, month, date)
            });
        }
        
        // Add next month's days to fill the grid
        const remainingDays = 42 - days.length; // 6 weeks * 7 days
        for (let date = 1; date <= remainingDays; date++) {
            days.push({
                date,
                isCurrentMonth: false,
                fullDate: new Date(year, month + 1, date)
            });
        }
        
        return days;
    }, [currentDate]);

    const getAppointmentsForDate = (date) => {
        const dateStr = date.toISOString().split('T')[0];
        return appointments.filter(apt => apt.date === dateStr);
    };

    const navigateMonth = (direction) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() + direction);
            return newDate;
        });
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    const isToday = (date) => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed': return 'bg-green-500';
            case 'pending': return 'bg-yellow-500';
            case 'completed': return 'bg-blue-500';
            case 'cancelled': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    const renderMonthView = () => (
        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-gray-50 px-6 py-4 border-b">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <h2 className="text-xl font-bold text-gray-900">
                            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </h2>
                        <button
                            onClick={goToToday}
                            className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                        >
                            Astăzi
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setView(view === 'month' ? 'week' : 'month')}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                        >
                            {view === 'month' ? '📅 Săptămână' : '🗓️ Lună'}
                        </button>
                        <button
                            onClick={() => navigateMonth(-1)}
                            className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => navigateMonth(1)}
                            className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 bg-gray-100">
                {dayNames.map(day => (
                    <div key={day} className="p-3 text-center font-medium text-gray-600 border-r border-gray-200 last:border-r-0">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7">
                {calendarData.map((day, index) => {
                    const dayAppointments = getAppointmentsForDate(day.fullDate);
                    const isCurrentDay = isToday(day.fullDate);
                    
                    return (
                        <div
                            key={index}
                            onClick={() => onDateClick && onDateClick(day.fullDate)}
                            className={`min-h-24 p-2 border-r border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
                                !day.isCurrentMonth ? 'bg-gray-50 text-gray-400' : ''
                            } ${isCurrentDay ? 'bg-blue-50' : ''}`}
                        >
                            <div className={`font-medium mb-1 ${isCurrentDay ? 'text-blue-600' : ''}`}>
                                {day.date}
                            </div>
                            <div className="space-y-1">
                                {dayAppointments.slice(0, 3).map(apt => (
                                    <div
                                        key={apt.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onAppointmentClick && onAppointmentClick(apt);
                                        }}
                                        className={`text-xs px-2 py-1 rounded text-white truncate cursor-pointer hover:opacity-80 ${getStatusColor(apt.status)}`}
                                        title={`${apt.time} - ${apt.clientName} (${apt.type})`}
                                    >
                                        {apt.time} {apt.clientName}
                                    </div>
                                ))}
                                {dayAppointments.length > 3 && (
                                    <div className="text-xs text-gray-500 px-2">
                                        +{dayAppointments.length - 3} mai multe
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const renderWeekView = () => {
        // Get the start of the week (Monday)
        const startOfWeek = new Date(currentDate);
        const day = startOfWeek.getDay();
        const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
        startOfWeek.setDate(diff);

        const weekDays = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            weekDays.push(date);
        }

        const timeSlots = [
            '08:00', '09:00', '10:00', '11:00', '12:00', 
            '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
        ];

        return (
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                {/* Week Header */}
                <div className="bg-gray-50 px-6 py-4 border-b">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-900">
                            {weekDays[0].toLocaleDateString('ro-RO')} - {weekDays[6].toLocaleDateString('ro-RO')}
                        </h2>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setView('month')}
                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                            >
                                🗓️ Lună
                            </button>
                            <button
                                onClick={() => navigateMonth(-1)}
                                className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                ‹
                            </button>
                            <button
                                onClick={() => navigateMonth(1)}
                                className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>

                {/* Week days header */}
                <div className="grid grid-cols-8 bg-gray-100">
                    <div className="p-3 border-r border-gray-200"></div>
                    {weekDays.map((date, index) => (
                        <div key={index} className="p-3 text-center border-r border-gray-200 last:border-r-0">
                            <div className="font-medium text-gray-600">
                                {dayNames[index]}
                            </div>
                            <div className={`text-lg ${isToday(date) ? 'text-blue-600 font-bold' : ''}`}>
                                {date.getDate()}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Time slots */}
                <div className="grid grid-cols-8">
                    {timeSlots.map(time => (
                        <React.Fragment key={time}>
                            <div className="p-3 border-r border-b border-gray-200 bg-gray-50 font-medium text-gray-600">
                                {time}
                            </div>
                            {weekDays.map((date, dayIndex) => {
                                const dayAppointments = getAppointmentsForDate(date);
                                const timeAppointment = dayAppointments.find(apt => apt.time === time);
                                
                                return (
                                    <div
                                        key={`${time}-${dayIndex}`}
                                        onClick={() => onDateClick && onDateClick(date, time)}
                                        className="p-3 border-r border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors min-h-16"
                                    >
                                        {timeAppointment && (
                                            <div
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onAppointmentClick && onAppointmentClick(timeAppointment);
                                                }}
                                                className={`p-2 rounded text-white text-sm cursor-pointer hover:opacity-80 ${getStatusColor(timeAppointment.status)}`}
                                            >
                                                <div className="font-medium">{timeAppointment.clientName}</div>
                                                <div className="text-xs">{timeAppointment.type}</div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">Calendar programări</h3>
                <div className="flex items-center space-x-4">
                    {/* Legend */}
                    <div className="flex items-center space-x-3 text-xs">
                        <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-green-500 rounded"></div>
                            <span>Confirmat</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                            <span>În așteptare</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-blue-500 rounded"></div>
                            <span>Completat</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-red-500 rounded"></div>
                            <span>Anulat</span>
                        </div>
                    </div>
                </div>
            </div>

            {view === 'month' ? renderMonthView() : renderWeekView()}
        </div>
    );
};

export default AdminCalendar;
