import React from 'react';

const LegalNoticePage = () => {
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
                        Mentions
                        <br/>
                        <span className="text-primary italic">Légales</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
                        Informations obligatoires concernant l’éditeur du site.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Présentation du site</h2>
                            </div>
                            <p className="leading-relaxed">
                                En vertu de la
                                <strong>Loi L/2016/035/AN relative aux transactions électroniques</strong>
                                en République de Guinée, il est précisé aux utilisateurs du site Codeshestergn l'identité des différents intervenants :
                            </p>
                            <ul className="list-none p-0 mt-4 space-y-2">
                                <li>
                                    <strong className="text-secondary">Propriétaire :</strong>
                                    Codeshestergn</li>
                                <li>
                                    <strong className="text-secondary">Adresse :</strong>
                                    Kagbélén, Conakry, Guinée</li>
                                <li>
                                    <strong className="text-secondary">Téléphone :</strong>
                                    +224 620 83 35 02</li>
                                <li>
                                    <strong className="text-secondary">Email :</strong>
                                    contact@codeshestergn.com</li>
                                <li>
                                    <strong className="text-secondary">Responsable publication :</strong>
                                    La Direction de Codeshestergn</li>
                                <li>
                                    <strong className="text-secondary">Hébergeur :</strong>
                                    PythonAnywhere (Division d’Anaconda Inc.)</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                                    <span className="text-xl font-bold">02</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Cadre Juridique</h2>
                            </div>
                            <p className="leading-relaxed mb-4">
                                Le présent site est régi par la législation guinéenne, notamment :
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>La Loi L/2016/035/AN relative aux transactions électroniques.</li>
                                <li>La Loi L/2016/037/AN relative à la cybersécurité et la protection des données à caractère personnel.</li>
                                <li>La Loi L/2015/018/AN relative aux télécommunications et aux technologies de l'information.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                                    <span className="text-xl font-bold">03</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary m-0">Propriété Intellectuelle</h2>
                            </div>
                            <p className="leading-relaxed">
                                Codeshestergn est propriétaire des droits de propriété intellectuelle sur tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes). Toute reproduction ou adaptation est interdite sauf autorisation écrite préalable.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 py-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500 mb-8">Besoin de plus de précision juridique ?</p>
                    <a href="mailto:contact@codeshestergn.com" className="inline-flex items-center px-8 py-3 bg-secondary text-white font-bold rounded-xl hover:bg-primary transition-all shadow-lg">
                        Envoyer un message
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LegalNoticePage;
