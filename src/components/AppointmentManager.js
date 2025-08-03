import React, { useState } from 'react';

const AppointmentManager = ({ onSave, onCancel, existingAppointment = null }) => {
    const [appointment, setAppointment] = useState({
        clientName: existingAppointment?.clientName || '',
        email: existingAppointment?.email || '',
        phone: existingAppointment?.phone || '',
        date: existingAppointment?.date || '',
        time: existingAppointment?.time || '',
        type: existingAppointment?.type || 'Terapie individuală',
        duration: existingAppointment?.duration || '50 min',
        status: existingAppointment?.status || 'pending',
        notes: existingAppointment?.notes || '',
        reminderSent: existingAppointment?.reminderSent || false,
        sessionNumber: existingAppointment?.sessionNumber || 1
    });

    const appointmentTypes = [
        { value: 'Terapie individuală', duration: '50 min', price: '250 lei' },
        { value: 'Terapie de cuplu', duration: '80 min', price: '350 lei' },
        { value: 'Consultație inițială', duration: '60 min', price: '250 lei' },
        { value: 'Ședință online', duration: '50 min', price: '250 lei' },
        { value: 'Reevaluare', duration: '60 min', price: '250 lei' }
    ];

    const timeSlots = [
        '08:00', '09:00', '10:00', '11:00', '12:00', 
        '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
    ];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setAppointment(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleTypeChange = (e) => {
        const selectedType = appointmentTypes.find(type => type.value === e.target.value);
        setAppointment(prev => ({
            ...prev,
            type: e.target.value,
            duration: selectedType?.duration || '50 min'
        }));
    };

    const handleSave = () => {
        const formattedAppointment = {
            ...appointment,
            id: existingAppointment?.id || Date.now()
        };
        onSave(formattedAppointment);
    };

    const sendReminder = () => {
        // In a real app, this would send an email/SMS
        alert(`Reminder trimis către ${appointment.clientName} la ${appointment.email}`);
        setAppointment(prev => ({ ...prev, reminderSent: true }));
    };

    const selectedType = appointmentTypes.find(type => type.value === appointment.type);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold text-gray-900">
                        {existingAppointment ? 'Editează programarea' : 'Programare nouă'}
                    </h2>
                    <button
                        onClick={onCancel}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                        ✕ Închide
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* Client Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Informații client</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nume complet *
                                </label>
                                <input
                                    type="text"
                                    name="clientName"
                                    value={appointment.clientName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Nume și prenume client"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={appointment.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="email@exemplu.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Telefon
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={appointment.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="07XXXXXXXX"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Numărul ședinței
                                </label>
                                <input
                                    type="number"
                                    name="sessionNumber"
                                    value={appointment.sessionNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    min="1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Appointment Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalii programare</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Data *
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={appointment.date}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Ora *
                                </label>
                                <select
                                    name="time"
                                    value={appointment.time}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                >
                                    <option value="">Selectează ora</option>
                                    {timeSlots.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tip ședință *
                                </label>
                                <select
                                    name="type"
                                    value={appointment.type}
                                    onChange={handleTypeChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                >
                                    {appointmentTypes.map(type => (
                                        <option key={type.value} value={type.value}>
                                            {type.value}
                                        </option>
                                    ))}
                                </select>
                                {selectedType && (
                                    <p className="text-sm text-gray-600 mt-1">
                                        Durată: {selectedType.duration} • Preț: {selectedType.price}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    value={appointment.status}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="pending">În așteptare</option>
                                    <option value="confirmed">Confirmat</option>
                                    <option value="completed">Completat</option>
                                    <option value="cancelled">Anulat</option>
                                    <option value="no-show">Nu s-a prezentat</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Notițe
                        </label>
                        <textarea
                            name="notes"
                            value={appointment.notes}
                            onChange={handleInputChange}
                            rows="3"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Notițe despre client sau ședință..."
                        />
                    </div>

                    {/* Reminder Options */}
                    {existingAppointment && (
                        <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium text-blue-900">Reminder</h4>
                                    <p className="text-sm text-blue-700">
                                        {appointment.reminderSent 
                                            ? '✅ Reminder trimis'
                                            : 'Trimite reminder cu 24h înainte'}
                                    </p>
                                </div>
                                {!appointment.reminderSent && (
                                    <button
                                        onClick={sendReminder}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                    >
                                        📧 Trimite acum
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-4 pt-4 border-t">
                        <button
                            onClick={onCancel}
                            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                        >
                            Anulează
                        </button>
                        {existingAppointment && (
                            <button
                                onClick={sendReminder}
                                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                📧 Trimite reminder
                            </button>
                        )}
                        <button
                            onClick={handleSave}
                            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        >
                            💾 Salvează
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentManager;
