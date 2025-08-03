import React, { useState } from 'react';
import { useSmartLivingSync, AddSmartLivingArticle } from '../hooks/useSmartLivingSync';

const SmartLivingSyncAdmin = () => {
  const {
    syncedArticles,
    isChecking,
    lastCheck,
    newArticlesCount,
    checkForNewArticles,
    startAutoSync,
    stopAutoSync,
    clearNewArticlesCount
  } = useSmartLivingSync();

  const [showAddForm, setShowAddForm] = useState(false);
  const [autoSyncInterval, setAutoSyncInterval] = useState(24);
  const [isAutoSyncActive, setIsAutoSyncActive] = useState(false);

  const handleStartAutoSync = () => {
    startAutoSync(autoSyncInterval);
    setIsAutoSyncActive(true);
  };

  const handleStopAutoSync = () => {
    stopAutoSync();
    setIsAutoSyncActive(false);
  };

  const handleArticleAdded = (article) => {
    console.log('New article added:', article);
    setShowAddForm(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            SmartLiving Sync Manager
          </h1>
          {newArticlesCount > 0 && (
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {newArticlesCount} articole noi
              </span>
              <button
                onClick={clearNewArticlesCount}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        <p className="text-gray-600">
          Gestionează sincronizarea automată a articolelor de pe SmartLiving.ro
        </p>
      </div>

      {/* Control Panel */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Manual Check */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Verificare Manuală
          </h2>
          
          <div className="space-y-4">
            <button
              onClick={checkForNewArticles}
              disabled={isChecking}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isChecking ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Se verifică...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Verifică Articole Noi
                </>
              )}
            </button>
            
            {lastCheck && (
              <p className="text-sm text-gray-600 text-center">
                Ultima verificare: {lastCheck.toLocaleString('ro-RO')}
              </p>
            )}
          </div>
        </div>

        {/* Auto Sync Settings */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Sincronizare Automată
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interval (ore)
              </label>
              <select
                value={autoSyncInterval}
                onChange={(e) => setAutoSyncInterval(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                disabled={isAutoSyncActive}
              >
                <option value={1}>1 oră</option>
                <option value={6}>6 ore</option>
                <option value={12}>12 ore</option>
                <option value={24}>24 ore</option>
                <option value={48}>48 ore</option>
              </select>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handleStartAutoSync}
                disabled={isAutoSyncActive}
                className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAutoSyncActive ? 'Activ' : 'Pornește'}
              </button>
              <button
                onClick={handleStopAutoSync}
                disabled={!isAutoSyncActive}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Oprește
              </button>
            </div>
            
            {isAutoSyncActive && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm text-green-700">
                    Sincronizare activă - verifică la {autoSyncInterval}h
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Manual Add Article */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Adaugă Articol Manual
          </h2>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            {showAddForm ? 'Ascunde' : 'Afișează'} Formular
          </button>
        </div>
        
        {showAddForm && (
          <AddSmartLivingArticle onArticleAdded={handleArticleAdded} />
        )}
      </div>

      {/* Synced Articles List */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Articole Sincronizate ({syncedArticles.length})
        </h2>
        
        {syncedArticles.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>Nu există articole sincronizate încă</p>
            <p className="text-sm">Folosește verificarea manuală sau sincronizarea automată</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {syncedArticles.map((article) => (
              <div key={article.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span>{article.publishDate}</span>
                      <span>{article.readingTime} min</span>
                    </div>
                  </div>
                  <a
                    href={article.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-blue-500 hover:text-blue-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">
          📋 Instrucțiuni de Utilizare
        </h3>
        <div className="space-y-2 text-sm text-yellow-700">
          <p><strong>Verificare Manuală:</strong> Apasă butonul pentru a verifica imediat articole noi pe SmartLiving</p>
          <p><strong>Sincronizare Automată:</strong> Setează intervalul și pornește pentru verificări regulate</p>
          <p><strong>Adăugare Manuală:</strong> Adaugă orice articol SmartLiving prin URL și detalii</p>
          <p><strong>Notificare:</strong> Vei primi notificări când sunt găsite articole noi</p>
        </div>
      </div>
    </div>
  );
};

export default SmartLivingSyncAdmin;
