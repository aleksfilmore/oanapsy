import React, { useState, useEffect } from 'react';
import { blogPosts } from '../mockData';
import AdminCalendar from './AdminCalendar';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [blogList] = useState(blogPosts);
    const [appointments, setAppointments] = useState([]);
    const [therapyRequests, setTherapyRequests] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [stats, setStats] = useState({
        totalPosts: 0,
        pendingRequests: 0,
        upcomingAppointments: 0,
        thisMonthAppointments: 0
    });

    // Sample data initialization
    useEffect(() => {
        // Sample therapy requests
        const sampleRequests = [
            {
                id: 1,
                name: 'Maria Popescu',
                email: 'maria.popescu@email.com',
                phone: '0721234567',
                type: 'Terapie individuală',
                urgency: 'Normal',
                message: 'Doresc să încep terapia pentru anxietate și atacuri de panică.',
                date: '2025-08-01',
                status: 'pending'
            },
            {
                id: 2,
                name: 'Alexandru și Ana Ionescu',
                email: 'alex.ionescu@email.com',
                phone: '0734567890',
                type: 'Terapie de cuplu',
                urgency: 'Urgent',
                message: 'Avem probleme grave de comunicare și conflicte frecvente.',
                date: '2025-08-02',
                status: 'contacted'
            },
            {
                id: 3,
                name: 'Cristina Dumitrescu',
                email: 'cristina.d@email.com',
                phone: '0745678901',
                type: 'Terapie individuală',
                urgency: 'Normal',
                message: 'Trec printr-o perioadă dificilă după despărțire.',
                date: '2025-08-03',
                status: 'pending'
            }
        ];

        // Sample appointments
        const sampleAppointments = [
            {
                id: 1,
                clientName: 'Maria Popescu',
                date: '2025-08-05',
                time: '10:00',
                type: 'Terapie individuală',
                duration: '50 min',
                status: 'confirmed',
                notes: 'Prima ședință - evaluare inițială'
            },
            {
                id: 2,
                clientName: 'Alexandru și Ana Ionescu',
                date: '2025-08-05',
                time: '14:00',
                type: 'Terapie de cuplu',
                duration: '80 min',
                status: 'confirmed',
                notes: 'Ședința a 3-a - lucru pe comunicare'
            },
            {
                id: 3,
                clientName: 'Mihai Georgescu',
                date: '2025-08-06',
                time: '11:00',
                type: 'Terapie individuală',
                duration: '50 min',
                status: 'pending',
                notes: 'Ședința a 5-a - progres în gestionarea anxietății'
            }
        ];

        setTherapyRequests(sampleRequests);
        setAppointments(sampleAppointments);
        
        setStats({
            totalPosts: blogList.length,
            pendingRequests: sampleRequests.filter(r => r.status === 'pending').length,
            upcomingAppointments: sampleAppointments.filter(a => a.status === 'confirmed').length,
            thisMonthAppointments: sampleAppointments.length
        });
    }, [blogList.length]);

    const tabs = [
        { id: 'overview', name: 'Prezentare generală', icon: '📊' },
        { id: 'blog', name: 'Articole blog', icon: '📝' },
        { id: 'appointments', name: 'Programări', icon: '📅' },
        { id: 'requests', name: 'Cereri terapie', icon: '💬' },
        { id: 'calendar', name: 'Calendar', icon: '🗓️' }
    ];

    const StatCard = ({ title, value, icon, color = 'bg-blue-500' }) => (
        <div className="bg-white rounded-xl p-6 shadow-soft">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-600 text-sm font-medium">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
                </div>
                <div className={`${color} rounded-lg p-3 text-white text-xl`}>
                    {icon}
                </div>
            </div>
        </div>
    );

    const renderOverview = () => (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total articole blog"
                    value={stats.totalPosts}
                    icon="📝"
                    color="bg-blue-500"
                />
                <StatCard
                    title="Cereri în așteptare"
                    value={stats.pendingRequests}
                    icon="⏳"
                    color="bg-orange-500"
                />
                <StatCard
                    title="Programări confirmate"
                    value={stats.upcomingAppointments}
                    icon="✅"
                    color="bg-green-500"
                />
                <StatCard
                    title="Programări luna aceasta"
                    value={stats.thisMonthAppointments}
                    icon="📅"
                    color="bg-purple-500"
                />
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Cereri recente</h3>
                    <div className="space-y-3">
                        {therapyRequests.slice(0, 3).map(request => (
                            <div key={request.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">{request.name}</p>
                                    <p className="text-sm text-gray-600">{request.type}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    request.status === 'pending' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                                }`}>
                                    {request.status === 'pending' ? 'În așteptare' : 'Contactat'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Programări astăzi</h3>
                    <div className="space-y-3">
                        {appointments.filter(apt => apt.date === '2025-08-05').map(appointment => (
                            <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">{appointment.clientName}</p>
                                    <p className="text-sm text-gray-600">{appointment.time} - {appointment.type}</p>
                                </div>
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                    {appointment.duration}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderBlogManagement = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">Gestionare articole blog</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    ➕ Articol nou
                </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Titlu
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Data publicării
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Categorii
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Timp de citit
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Acțiuni
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {blogList.map(post => (
                                <tr key={post.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                                        <div className="text-sm text-gray-500">{post.excerpt.substring(0, 60)}...</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        {new Date(post.publishedAt).toLocaleDateString('ro-RO')}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {post.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        {post.readingTime} min
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <button className="text-blue-600 hover:text-blue-900 mr-3">Editează</button>
                                        <button className="text-red-600 hover:text-red-900">Șterge</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderAppointments = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">Gestionare programări</h3>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    ➕ Programare nouă
                </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Client
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Data & ora
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tip ședință
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Acțiuni
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {appointments.map(appointment => (
                                <tr key={appointment.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">{appointment.clientName}</div>
                                        <div className="text-sm text-gray-500">{appointment.notes}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        <div>{new Date(appointment.date).toLocaleDateString('ro-RO')}</div>
                                        <div className="text-gray-500">{appointment.time}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">{appointment.type}</div>
                                        <div className="text-sm text-gray-500">{appointment.duration}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            appointment.status === 'confirmed' 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-orange-100 text-orange-800'
                                        }`}>
                                            {appointment.status === 'confirmed' ? 'Confirmat' : 'În așteptare'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <button className="text-blue-600 hover:text-blue-900 mr-3">Editează</button>
                                        <button className="text-red-600 hover:text-red-900">Anulează</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderTherapyRequests = () => (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Cereri pentru terapie</h3>
            
            <div className="grid gap-6">
                {therapyRequests.map(request => (
                    <div key={request.id} className="bg-white rounded-xl p-6 shadow-soft">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">{request.name}</h4>
                                <p className="text-gray-600">{request.email} • {request.phone}</p>
                            </div>
                            <div className="flex gap-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    request.urgency === 'Urgent' 
                                        ? 'bg-red-100 text-red-800' 
                                        : 'bg-blue-100 text-blue-800'
                                }`}>
                                    {request.urgency}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    request.status === 'pending' 
                                        ? 'bg-orange-100 text-orange-800' 
                                        : 'bg-green-100 text-green-800'
                                }`}>
                                    {request.status === 'pending' ? 'În așteptare' : 'Contactat'}
                                </span>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <p className="text-sm text-gray-600 mb-2">
                                <strong>Tip terapie:</strong> {request.type}
                            </p>
                            <p className="text-sm text-gray-600 mb-2">
                                <strong>Data cererii:</strong> {new Date(request.date).toLocaleDateString('ro-RO')}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Mesaj:</strong> {request.message}
                            </p>
                        </div>
                        
                        <div className="flex gap-3">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                📞 Contactează
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                                📅 Programează
                            </button>
                            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                                📝 Notițe
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderCalendar = () => {
        const handleAppointmentClick = (appointment) => {
            alert(`Programare: ${appointment.clientName}\nOra: ${appointment.time}\nTipul: ${appointment.type}\nStatus: ${appointment.status}`);
        };

        const handleDateClick = (date, time) => {
            const dateStr = date.toLocaleDateString('ro-RO');
            if (time) {
                alert(`Clicați pentru a adăuga o programare pe ${dateStr} la ora ${time}`);
            } else {
                alert(`Clicați pentru a adăuga o programare pe ${dateStr}`);
            }
        };

        return (
            <AdminCalendar
                appointments={appointments}
                onAppointmentClick={handleAppointmentClick}
                onDateClick={handleDateClick}
            />
        );
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return renderOverview();
            case 'blog':
                return renderBlogManagement();
            case 'appointments':
                return renderAppointments();
            case 'requests':
                return renderTherapyRequests();
            case 'calendar':
                return renderCalendar();
            default:
                return renderOverview();
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-900">Panou de administrare</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600">Bună ziua, Oana!</span>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                                Deconectare
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-sm min-h-screen">
                    <nav className="p-6">
                        <div className="space-y-2">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                        activeTab === tab.id
                                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    <span className="text-lg">{tab.icon}</span>
                                    <span className="font-medium">{tab.name}</span>
                                </button>
                            ))}
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
