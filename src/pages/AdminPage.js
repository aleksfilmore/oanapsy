import React, { useState } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import SEO from '../components/SEO';

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [loginError, setLoginError] = useState('');

    // Simple authentication (in production, this should be handled by a backend)
    const handleLogin = (e) => {
        e.preventDefault();
        
        // Demo credentials
        if (loginData.username === 'oana.tenea' && loginData.password === 'admin2025') {
            setIsAuthenticated(true);
            setLoginError('');
        } else {
            setLoginError('Date de autentificare incorecte. Încercați din nou.');
        }
    };

    const handleInputChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const LoginForm = () => (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">
            <SEO 
                title="Administrare - Oana Tenea Psihoterapeut"
                description="Panou de administrare pentru gestionarea site-ului și programărilor."
                noIndex={true}
            />
            
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Panou de administrare</h1>
                    <p className="text-gray-600 mt-2">Conectați-vă pentru a accesa panoul de control</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                            Nume utilizator
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={loginData.username}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Introduceți numele de utilizator"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Parolă
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Introduceți parola"
                            required
                        />
                    </div>

                    {loginError && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <p className="text-red-800 text-sm">{loginError}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium"
                    >
                        Conectare
                    </button>
                </form>

                {/* Demo credentials info */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-blue-900 mb-2">Date de test:</h3>
                    <p className="text-sm text-blue-700">
                        <strong>Username:</strong> oana.tenea<br />
                        <strong>Password:</strong> admin2025
                    </p>
                </div>
            </div>
        </div>
    );

    if (!isAuthenticated) {
        return <LoginForm />;
    }

    return (
        <>
            <SEO 
                title="Dashboard - Oana Tenea Psihoterapeut"
                description="Panou de administrare pentru gestionarea articolelor, programărilor și cererilor de terapie."
                noIndex={true}
            />
            <AdminDashboard />
        </>
    );
};

export default AdminPage;
