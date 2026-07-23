import React from 'react';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEO 
        title={t('privacy.seo_title')}
        description={t('privacy.seo_desc')}
      />
      
      <div className="animate-fade-in bg-gradient-to-br from-soft-yellow to-golden-honey/20 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              {t('privacy.header.title')}
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed mb-8">
              {t('privacy.header.subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-warm-orange mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-warm p-8 md:p-12 border border-sage-100">
            
            {/* Introducere */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                {t('privacy.intro.title')}
              </h2>
              <div className="prose prose-lg max-w-none text-sage-700 leading-relaxed">
                <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.intro.p1') }} />
                <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.intro.p2') }} />
                <div className="bg-sage-50 border-l-4 border-terracotta p-4 rounded-r-lg">
                  <p className="text-sm font-medium text-sage-800 mb-2">{t('privacy.intro.date')}</p>
                  <p className="text-sm text-sage-600">{t('privacy.intro.applies')}</p>
                </div>
              </div>
            </section>

            {/* Date colectate */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                {t('privacy.data_collected.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage-50 p-6 rounded-xl border border-sage-100">
                  <h3 className="text-lg font-semibold text-sage-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {t('privacy.data_collected.id_title')}
                  </h3>
                  <ul className="text-sage-700 space-y-2">
                    {t('privacy.data_collected.id_list', { returnObjects: true }).map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-terracotta/5 p-6 rounded-xl border border-terracotta/20">
                  <h3 className="text-lg font-semibold text-sage-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('privacy.data_collected.clinical_title')}
                  </h3>
                  <ul className="text-sage-700 space-y-2">
                    {t('privacy.data_collected.clinical_list', { returnObjects: true }).map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Scopul procesării */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                {t('privacy.purpose.title')}
              </h2>
              <div className="space-y-4">
                {t('privacy.purpose.items', { returnObjects: true }).map((item, i) => (
                  <div key={i} className="bg-white border border-sage-200 p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-sage-800 mb-3">{item.title}</h3>
                    <p className="text-sage-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Baza legală */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                {t('privacy.legal_basis.title')}
              </h2>
              <div className="bg-gradient-to-r from-sage-50 to-terracotta/5 p-6 rounded-xl border border-sage-200">
                <div className="space-y-4">
                  {t('privacy.legal_basis.items', { returnObjects: true }).map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-6 h-6 bg-terracotta rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sage-800">{item.title}</h3>
                        <p className="text-sage-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Securitatea datelor */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                {t('privacy.security.title')}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {t('privacy.security.items', { returnObjects: true }).map((item, i) => (
                  <div key={i} className="text-center p-6 bg-sage-50 rounded-xl border border-sage-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={i === 0 ? "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" : i === 1 ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-sage-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-sage-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Drepturile GDPR */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                {t('privacy.rights.title')}
              </h2>
              <div className="space-y-4">
                {t('privacy.rights.items', { returnObjects: true }).map((right, index) => (
                  <div key={index} className="bg-white border border-sage-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">{right.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-sage-800 mb-2">{right.title}</h3>
                        <p className="text-sage-600">{right.description || right.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Perioada de păstrare */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                {t('privacy.retention.title')}
              </h2>
              <div className="bg-gradient-to-r from-sage-50 to-terracotta/5 p-6 rounded-xl border border-sage-200">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-terracotta mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-sage-800">{t('privacy.retention.active')} </span>
                    <span className="text-sage-600 ml-2">{t('privacy.retention.active_desc')}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-terracotta mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-sage-800">{t('privacy.retention.archived')} </span>
                    <span className="text-sage-600 ml-2">{t('privacy.retention.archived_desc')}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-terracotta mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-sage-800">{t('privacy.retention.contact')} </span>
                    <span className="text-sage-600 ml-2">{t('privacy.retention.contact_desc')}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact și reclamații */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
                {t('privacy.contact.title')}
              </h2>
              <div className="bg-gradient-to-r from-terracotta/5 to-warm-orange/5 p-8 rounded-xl border border-terracotta/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-sage-800 mb-4">{t('privacy.contact.gdpr_title')}</h3>
                    <div className="space-y-2 text-sage-700">
                      <p><strong>Email:</strong> {t('privacy.contact.email')}</p>
                      <p><strong>Adresa:</strong> {t('privacy.contact.address')}</p>
                      <p><strong>Timp de răspuns:</strong> {t('privacy.contact.response_time')}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-sage-800 mb-4">{t('privacy.contact.auth_title')}</h3>
                    <div className="space-y-2 text-sage-700">
                      <p><strong>{t('privacy.contact.auth_name')}</strong> {t('privacy.contact.auth_desc')}</p>
                      <p><strong>{t('privacy.contact.auth_website')}</strong></p>
                      <p>{t('privacy.contact.auth_complaint')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer note */}
            <div className="bg-sage-50 border border-sage-200 p-6 rounded-xl text-center">
              <p className="text-sm text-sage-600 mb-2">
                <strong>{t('privacy.footer.priority')}</strong>
              </p>
              <p className="text-xs text-sage-500">
                {t('privacy.footer.updates')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
