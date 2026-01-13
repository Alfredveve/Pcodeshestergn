import { Link } from 'react-router-dom';

const AboutPage = () => {
    const stats = [
        { label: 'Années d\'expérience', value: '5+' },
        { label: 'Projets réalisés', value: '150+' },
        { label: 'Clients satisfaits', value: '100%' },
        { label: 'Experts', value: '10+' },
    ];

    const values = [
        {
            icon: 'fa-lightbulb',
            title: 'Innovation',
            description: 'Nous repoussons sans cesse les limites technologiques pour offrir des solutions d\'avant-garde.'
        },
        {
            icon: 'fa-shield-check',
            title: 'Fiabilité',
            description: 'La sécurité et la stabilité de vos systèmes sont notre priorité absolue.'
        },
        {
            icon: 'fa-users',
            title: 'Proximité',
            description: 'Une équipe locale à l\'écoute pour un accompagnement personnalisé et réactif.'
        },
        {
            icon: 'fa-rocket',
            title: 'Performance',
            description: 'Optimisation continue pour garantir la rapidité et l\'efficacité de vos outils.'
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Notre Identité</span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary mb-8">
                        L'excellence digitale <br/>
                        <span className="text-primary italic">au service de l'Afrique</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed mb-12">
                        Pcodeshestergn est né d'une vision simple : accompagner la transformation numérique de la Guinée avec des standards internationaux.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-secondary py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-4">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-16 h-1 bg-primary mb-8"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Notre Mission</h2>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                Dans un monde de plus en plus connecté, nous croyons que la technologie doit être un levier de croissance accessible à tous. Notre mission est de démocratiser l'accès aux outils numériques performants pour les entreprises guinéennes.
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed mb-8">
                                Que ce soit par le développement de logiciels sur mesure, la formation aux métiers du futur ou la maintenance de parc informatique, nous nous engageons à fournir une qualité de service irréprochable.
                            </p>
                            <Link to="/contact" className="inline-flex items-center text-primary font-bold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">
                                Rejoindre l'aventure <i className="fas fa-arrow-right ml-2"></i>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary opacity-20 transform rotate-3 rounded-[2rem]"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                alt="Équipe travaillant ensemble" 
                                className="relative rounded-[2rem] shadow-2xl w-full h-auto object-cover transform -rotate-3 hover:rotate-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary">Nos Valeurs</h2>
                        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Ce qui nous définit et guide chacune de nos actions.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((val, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6">
                                    <i className={`fas ${val.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{val.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {val.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-24 bg-secondary overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Prêt à transformer votre entreprise ?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-white hover:text-primary transition-all">
                            Contactez-nous
                        </Link>
                        <Link to="/services" className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                            Voir nos services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
