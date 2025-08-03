import React, { useState, useEffect } from 'react';
import { blogPosts } from '../mockData';
import AdminCalendar from './AdminCalendar';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [blogList, setBlogList] = useState(blogPosts);
    const [appointments, setAppointments] = useState([]);
    const [therapyRequests, setTherapyRequests] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [stats, setStats] = useState({
        totalPosts: 0,
        pendingRequests: 0,
        upcomingAppointments: 0,
        thisMonthAppointments: 0
    });

    // Handler functions for blog management
    const handleEditBlog = (postId) => {
        alert(`Editare articol cu ID: ${postId}\n\nFuncționalitatea de editare va fi implementată în curând.`);
    };

    const handleDeleteBlog = (postId) => {
        if (window.confirm('Sigur doriți să ștergeți acest articol?')) {
            setBlogList(prev => prev.filter(post => post.id !== postId));
            alert('Articolul a fost șters cu succes!');
            updateStats();
        }
    };

    const [showAddBlogForm, setShowAddBlogForm] = useState(false);
    const [newBlogData, setNewBlogData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: 'Sănătate Mentală',
        tags: '',
        metaDescription: '',
        readingTime: 5
    });

    const blogCategories = [
        'Sănătate Mentală',
        'Anxietate', 
        'Relații',
        'Dezvoltare Personală',
        'Parentaj',
        'Terapie',
        'Autocunoaștere'
    ];

    const handleAddBlog = () => {
        setShowAddBlogForm(true);
    };

    const handleSaveBlog = () => {
        if (!newBlogData.title || !newBlogData.excerpt || !newBlogData.content) {
            alert('Titlul, excerpt-ul și conținutul sunt obligatorii!');
            return;
        }

        // Create slug from title
        const slug = newBlogData.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
            .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens
            .trim();

        const newBlog = {
            id: Math.max(...blogList.map(b => b.id), 0) + 1,
            slug: slug,
            title: newBlogData.title,
            excerpt: newBlogData.excerpt,
            content: newBlogData.content,
            category: newBlogData.category,
            tags: newBlogData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
            metaDescription: newBlogData.metaDescription || newBlogData.excerpt,
            readingTime: newBlogData.readingTime,
            publishDate: new Date().toISOString().split('T')[0],
            imageUrl: '/images/default-blog.jpg'
        };

        setBlogList(prev => [newBlog, ...prev]);
        
        // Reset form
        setNewBlogData({
            title: '',
            excerpt: '',
            content: '',
            category: 'Sănătate Mentală',
            tags: '',
            metaDescription: '',
            readingTime: 5
        });
        setShowAddBlogForm(false);
        
        alert('Articolul a fost adăugat cu succes!');
        updateStats();
    };

    const handleCancelAddBlog = () => {
        setShowAddBlogForm(false);
        setNewBlogData({
            title: '',
            excerpt: '',
            content: '',
            category: 'Sănătate Mentală',
            tags: '',
            metaDescription: '',
            readingTime: 5
        });
    };

    // Handler functions for appointments management
    // Advanced appointment management functions
    const handleEditAppointment = (appointmentId) => {
        const appointment = appointments.find(apt => apt.id === appointmentId);
        if (!appointment) return;

        const newDate = prompt(`Modificare programare pentru ${appointment.clientName}\n\nData actuală: ${appointment.date}\nIntroduceți noua dată (YYYY-MM-DD):`, appointment.date);
        if (!newDate || !newDate.trim()) return;

        const newTime = prompt(`Ora actuală: ${appointment.time}\nIntroduceți noua oră (HH:MM):`, appointment.time);
        if (!newTime || !newTime.trim()) return;

        const newNotes = prompt(`Note actuale: ${appointment.notes || ''}\nActualizați notele (opțional):`, appointment.notes || '');

        setAppointments(prev => prev.map(apt => 
            apt.id === appointmentId ? { 
                ...apt, 
                date: newDate.trim(),
                time: newTime.trim(),
                notes: newNotes?.trim() || apt.notes,
                status: 'confirmed'
            } : apt
        ));
        alert('Programarea a fost modificată și confirmată cu succes!');
        updateStats();
    };

    const handleRejectAppointment = (appointmentId) => {
        const appointment = appointments.find(apt => apt.id === appointmentId);
        if (!appointment) return;

        const reason = prompt(`Refuzare programare pentru ${appointment.clientName}\n\nMotivul refuzării (va fi comunicat clientului):`, 'Din păcate nu pot onora această programare în momentul solicitat.');
        if (!reason || !reason.trim()) return;

        if (window.confirm(`Sigur doriți să refuzați programarea pentru ${appointment.clientName}?`)) {
            setAppointments(prev => prev.map(apt => 
                apt.id === appointmentId ? { 
                    ...apt, 
                    status: 'rejected',
                    rejectionReason: reason.trim(),
                    rejectedAt: new Date().toISOString()
                } : apt
            ));
            alert('Programarea a fost refuzată. Clientul va fi notificat automat.');
            updateStats();
        }
    };

    const handleCancelAppointment = (appointmentId) => {
        const appointment = appointments.find(apt => apt.id === appointmentId);
        if (!appointment) return;

        if (window.confirm(`Sigur doriți să ștergeți definitiv programarea pentru ${appointment.clientName}?`)) {
            setAppointments(prev => prev.filter(apt => apt.id !== appointmentId));
            alert('Programarea a fost ștearsă cu succes!');
            updateStats();
        }
    };

    const handleConfirmAppointment = (appointmentId) => {
        const appointment = appointments.find(apt => apt.id === appointmentId);
        if (!appointment) return;

        setAppointments(prev => prev.map(apt => 
            apt.id === appointmentId ? { 
                ...apt, 
                status: 'confirmed',
                confirmedAt: new Date().toISOString()
            } : apt
        ));
        alert(`Programarea pentru ${appointment.clientName} a fost confirmată!`);
        updateStats();
    };

    const handleAddAppointment = () => {
        const clientName = prompt('Numele clientului:');
        const date = prompt('Data (YYYY-MM-DD):', '2025-08-05');
        const time = prompt('Ora (HH:MM):', '10:00');
        const type = prompt('Tipul ședinței:', 'Terapie individuală');
        
        if (clientName && date && time && type) {
            const newAppointment = {
                id: Date.now(),
                clientName: clientName.trim(),
                date: date.trim(),
                time: time.trim(),
                type: type.trim(),
                duration: '50 min',
                status: 'confirmed',
                notes: 'Programare adăugată manual'
            };
            setAppointments(prev => [...prev, newAppointment]);
            alert('Programarea a fost adăugată cu succes!');
            updateStats();
        }
    };

    // Handler functions for therapy requests
    const handleContactRequest = (requestId) => {
        const request = therapyRequests.find(req => req.id === requestId);
        if (window.confirm(`Contactare ${request.name}\n\nTelefon: ${request.phone}\nEmail: ${request.email}\n\nMarcați ca și contactat?`)) {
            setTherapyRequests(prev => prev.map(req => 
                req.id === requestId ? { ...req, status: 'contacted' } : req
            ));
            alert('Cererea a fost marcată ca și contactată!');
            updateStats();
        }
    };

    const handleScheduleRequest = (requestId) => {
        const request = therapyRequests.find(req => req.id === requestId);
        const date = prompt(`Programare pentru ${request.name}\n\nData (YYYY-MM-DD):`, '2025-08-05');
        const time = prompt('Ora (HH:MM):', '10:00');
        
        if (date && time) {
            const newAppointment = {
                id: Date.now(),
                clientName: request.name,
                date: date.trim(),
                time: time.trim(),
                type: request.type,
                duration: '50 min',
                status: 'confirmed',
                notes: `Programat din cererea #${requestId}`
            };
            setAppointments(prev => [...prev, newAppointment]);
            setTherapyRequests(prev => prev.map(req => 
                req.id === requestId ? { ...req, status: 'contacted' } : req
            ));
            alert('Programarea a fost creată cu succes!');
            updateStats();
        }
    };

    const handleAddNotes = (requestId) => {
        const request = therapyRequests.find(req => req.id === requestId);
        const notes = prompt(`Adăugare notițe pentru ${request.name}:`, '');
        if (notes && notes.trim()) {
            alert(`Notițe adăugate pentru ${request.name}:\n\n"${notes.trim()}"\n\nFuncționalitatea completă de notițe va fi implementată în curând.`);
        }
    };

    // Helper function to update stats
    const updateStats = () => {
        setTimeout(() => {
            setStats(prevStats => ({
                totalPosts: blogList.length,
                pendingRequests: therapyRequests.filter(r => r.status === 'pending').length,
                upcomingAppointments: appointments.filter(a => a.status === 'confirmed').length,
                thisMonthAppointments: appointments.length
            }));
        }, 100);
    };

    // Sample data initialization
    useEffect(() => {
        // Initialize with empty data - real data will come from backend
        setTherapyRequests([]);
        setAppointments([]);
        
        setStats({
            totalPosts: blogList.length,
            pendingRequests: 0,
            upcomingAppointments: 0,
            thisMonthAppointments: 0
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
                <button 
                    onClick={handleAddBlog}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    ➕ Articol nou
                </button>
            </div>

            {/* Add Blog Form */}
            {showAddBlogForm && (
                <div className="bg-white rounded-xl shadow-soft p-6 border border-blue-200">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-lg font-semibold text-gray-900">Adaugă Articol Nou</h4>
                        <button 
                            onClick={handleCancelAddBlog}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Titlu articol *
                            </label>
                            <input
                                type="text"
                                value={newBlogData.title}
                                onChange={(e) => setNewBlogData(prev => ({...prev, title: e.target.value}))}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Introduceti titlul articolului..."
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Categorie
                            </label>
                            <select
                                value={newBlogData.category}
                                onChange={(e) => setNewBlogData(prev => ({...prev, category: e.target.value}))}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {blogCategories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Timp de citit (minute)
                            </label>
                            <input
                                type="number"
                                min="1"
                                max="60"
                                value={newBlogData.readingTime}
                                onChange={(e) => setNewBlogData(prev => ({...prev, readingTime: parseInt(e.target.value) || 5}))}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Excerpt (descriere scurtă) *
                            </label>
                            <textarea
                                value={newBlogData.excerpt}
                                onChange={(e) => setNewBlogData(prev => ({...prev, excerpt: e.target.value}))}
                                rows={3}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Descrierea scurtă a articolului (150-200 caractere)..."
                            />
                        </div>
                        
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tags (separate prin virgulă)
                            </label>
                            <input
                                type="text"
                                value={newBlogData.tags}
                                onChange={(e) => setNewBlogData(prev => ({...prev, tags: e.target.value}))}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="anxietate, relaxare, mindfulness..."
                            />
                        </div>
                        
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Meta Description (SEO)
                            </label>
                            <textarea
                                value={newBlogData.metaDescription}
                                onChange={(e) => setNewBlogData(prev => ({...prev, metaDescription: e.target.value}))}
                                rows={2}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Descrierea pentru motoarele de căutare (opțional - se va folosi excerpt-ul dacă nu este completat)..."
                            />
                        </div>
                        
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Conținut articol * (HTML)
                            </label>
                            <textarea
                                value={newBlogData.content}
                                onChange={(e) => setNewBlogData(prev => ({...prev, content: e.target.value}))}
                                rows={12}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                                placeholder="Conținutul complet al articolului în format HTML..."
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Folosește HTML pentru formatare: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, etc.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            onClick={handleCancelAddBlog}
                            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                            Anulează
                        </button>
                        <button
                            onClick={handleSaveBlog}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Salvează Articol
                        </button>
                    </div>
                </div>
            )}
            
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
                                        {new Date(post.publishDate).toLocaleDateString('ro-RO')}
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
                                        <button 
                                            onClick={() => handleEditBlog(post.id)}
                                            className="text-blue-600 hover:text-blue-900 mr-3 font-medium"
                                        >
                                            Editează
                                        </button>
                                        <button 
                                            onClick={() => handleDeleteBlog(post.id)}
                                            className="text-red-600 hover:text-red-900 font-medium"
                                        >
                                            Șterge
                                        </button>
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
                <button 
                    onClick={handleAddAppointment}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
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
                                                : appointment.status === 'rejected'
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-orange-100 text-orange-800'
                                        }`}>
                                            {appointment.status === 'confirmed' ? 'Confirmat' : 
                                             appointment.status === 'rejected' ? 'Refuzat' : 'În așteptare'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex flex-wrap gap-2">
                                            {appointment.status === 'pending' && (
                                                <>
                                                    <button 
                                                        onClick={() => handleConfirmAppointment(appointment.id)}
                                                        className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
                                                        title="Confirmă programarea"
                                                    >
                                                        ✓ Confirmă
                                                    </button>
                                                    <button 
                                                        onClick={() => handleRejectAppointment(appointment.id)}
                                                        className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                                                        title="Refuză programarea"
                                                    >
                                                        ✗ Refuză
                                                    </button>
                                                </>
                                            )}
                                            <button 
                                                onClick={() => handleEditAppointment(appointment.id)}
                                                className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                                                title="Modifică data/ora"
                                            >
                                                📅 Modifică
                                            </button>
                                            <button 
                                                onClick={() => handleCancelAppointment(appointment.id)}
                                                className="bg-gray-500 text-white px-2 py-1 rounded text-xs hover:bg-gray-600"
                                                title="Șterge programarea"
                                            >
                                                🗑️ Șterge
                                            </button>
                                        </div>
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
                            <button 
                                onClick={() => handleContactRequest(request.id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                📞 Contactează
                            </button>
                            <button 
                                onClick={() => handleScheduleRequest(request.id)}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                            >
                                📅 Programează
                            </button>
                            <button 
                                onClick={() => handleAddNotes(request.id)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                            >
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
            const action = window.confirm(`Programare: ${appointment.clientName}\nData: ${new Date(appointment.date).toLocaleDateString('ro-RO')}\nOra: ${appointment.time}\nTip: ${appointment.type}\nStatus: ${appointment.status}\n\nDoriți să editați această programare?`);
            if (action) {
                handleEditAppointment(appointment.id);
            }
        };

        const handleDateClick = (date, time) => {
            const dateStr = date.toISOString().split('T')[0]; // Format YYYY-MM-DD
            const clientName = prompt('Numele clientului:');
            const appointmentTime = time || prompt('Ora (HH:MM):', '10:00');
            const type = prompt('Tipul ședinței:', 'Terapie individuală');
            
            if (clientName && appointmentTime && type) {
                const newAppointment = {
                    id: Date.now(),
                    clientName: clientName.trim(),
                    date: dateStr,
                    time: appointmentTime.trim(),
                    type: type.trim(),
                    duration: '50 min',
                    status: 'confirmed',
                    notes: 'Programare adăugată din calendar'
                };
                setAppointments(prev => [...prev, newAppointment]);
                alert('Programarea a fost adăugată cu succes!');
                updateStats();
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
                        <div className="flex items-center space-x-4">
                            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Panou de administrare</h1>
                            {/* Mobile menu button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden bg-slate-700 text-white p-3 rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
                            >
                                <span className="text-xl">☰</span>
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 hidden sm:block">Bună ziua, Oana!</span>
                            <button className="bg-red-500 text-white px-3 py-2 md:px-4 rounded-lg hover:bg-red-600 transition-colors text-sm md:text-base">
                                Deconectare
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white shadow-sm min-h-screen ${isMobileMenuOpen ? 'fixed z-50' : ''}`}>
                    <nav className="p-6">
                        <div className="space-y-2">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveTab(tab.id);
                                        setIsMobileMenuOpen(false);
                                    }}
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

                {/* Overlay for mobile */}
                {isMobileMenuOpen && (
                    <div 
                        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main className="flex-1 p-3 md:p-6 w-full">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
