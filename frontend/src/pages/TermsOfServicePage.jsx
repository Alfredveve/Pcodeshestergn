import React from 'react';

const TermsOfServicePage = () => {
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
                        Conditions Générales
                        <br/>
                        <span className="text-primary italic">d'Utilisation</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
                        Dernière mise à jour : 25 décembre 2025
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
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Objet</h2>
                            </div>
                            <p className="leading-relaxed">
                                Les présentes Conditions Générales d'Utilisation (CGU) encadrent l'accès et l'utilisation des services de
                                <strong>Codeshestergn</strong>, conformément aux dispositions de la
                                <strong>Loi L/2016/035/AN</strong>
                                sur les transactions électroniques en République de Guinée.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                                    <span className="text-xl font-bold">02</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Prestations de Services</h2>
                            </div>
                            <p className="leading-relaxed">
                                Codeshestergn fournit des services de conseil en informatique, développement de solutions digitales, maintenance et formation. Chaque prestation peut faire l'objet d'un contrat spécifique qui complète les présentes CGU.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                                    <span className="text-xl font-bold">03</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Responsabilité de l'Utilisateur</h2>
                            </div>
                            <p className="leading-relaxed">
                                L'utilisateur est responsable de la sécurité de son matériel et des données qu'il transmet. Codeshestergn ne peut être tenu pour responsable des dommages résultant d'une utilisation non conforme du site ou des services.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                                    <span className="text-xl font-bold">04</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Juridiction Compétente</h2>
                            </div>
                            <p className="leading-relaxed">
                                Tout litige relatif à l'interprétation ou à l'exécution des présentes CGU est soumis au droit guinéen. À défaut de résolution amiable, les
                                <strong>Tribunaux de Conakry</strong>
                                seront seuls compétents.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 py-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500 mb-8">Vous avez des questions sur nos conditions ?</p>
                    <a href="/contact" className="inline-flex items-center px-8 py-3 bg-secondary text-white font-bold rounded-xl hover:bg-primary transition-all shadow-lg">
                        Nous contacter
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
