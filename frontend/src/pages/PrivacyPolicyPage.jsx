import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-secondary">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Légal</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Politique de
                        <br/>
                        <span className="text-primary italic">Confidentialité</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
                        Protection de vos données personnelles conformément à la loi guinéenne.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none text-gray-600">
                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                                    <span className="text-xl font-bold">01</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Protection des Données</h2>
                            </div>
                            <p className="leading-relaxed">
                                Conformément à la
                                <strong>Loi N° L/2016/037/AN relative à la cybersécurité et la protection des données à caractère personnel</strong>, Codeshestergn s'engage à protéger la vie privée de ses utilisateurs.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                                    <span className="text-xl font-bold">02</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Finalité du Traitement</h2>
                            </div>
                            <p className="leading-relaxed">
                                Les données collectées (nom, email, téléphone) sont exclusivement destinées à la gestion des inscriptions aux formations et à la réponse aux demandes de services. Ces données ne sont jamais partagées à des tiers sans votre consentement.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                                    <span className="text-xl font-bold">03</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Vos Droits</h2>
                            </div>
                            <p className="leading-relaxed">
                                L'utilisateur dispose d'un droit d'accès, de rectification et d'opposition au traitement de ses données personnelles. Ces droits peuvent être exercés par simple demande à
                                <a href="mailto:contact@codeshestergn.com" className="text-primary hover:underline font-bold">contact@codeshestergn.com</a>.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                                    <span className="text-xl font-bold">04</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Autorité de Régulation</h2>
                            </div>
                            <p className="leading-relaxed">
                                Tout traitement de données est effectué sous la supervision de l'Autorité nationale compétente en République de Guinée (Autorité de Protection des Données).
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 py-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500 mb-8">Plus d'informations sur vos données ?</p>
                    <a href="mailto:contact@codeshestergn.com" className="inline-flex items-center px-8 py-3 bg-secondary text-white font-bold rounded-xl hover:bg-primary transition-all shadow-lg">
                        Nous contacter par email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
