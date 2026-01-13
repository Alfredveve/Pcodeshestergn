import { useState, useEffect } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

const MaintenancePage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get('maintenance-categories/');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching maintenance categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
                    <img 
                        src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                        alt="Background Tech" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="px-4 py-2 rounded-full bg-primary/20 text-primary-light border border-primary/30 font-bold tracking-wider uppercase text-xs mb-6 inline-block backdrop-blur-sm">
                        Expertise Technique
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Maintenance & <span className="text-primary">Réparation</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed mb-10">
                        HP, Epson, Canon ou PC portable : nous redonnons vie à votre matériel avec une expertise certifiée et une rapidité d'exécution inégalée.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#services" className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-white hover:text-primary transition-all">
                            Voir nos solutions
                        </a>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary">Notre Processus d'Intervention</h2>
                        <p className="mt-4 text-gray-500">Un service clair et transparent en 4 étapes simples.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                        {[
                            { step: '01', title: 'Diagnostic', icon: 'fa-stethoscope', desc: 'Analyse complète de la panne sur site ou en atelier.' },
                            { step: '02', title: 'Devis', icon: 'fa-file-invoice-dollar', desc: 'Proposition chiffrée transparente et sans engagement.' },
                            { step: '03', title: 'Réparation', icon: 'fa-tools', desc: 'Intervention par nos experts avec des pièces certifiées.' },
                            { step: '04', title: 'Restitution', icon: 'fa-check-circle', desc: 'Tests de contrôle et livraison de votre matériel fonctionnel.' }
                        ].map((item, index) => (
                            <div key={index} className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md shadow-primary/30">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <div className="absolute -top-4 -right-4 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold shadow-md">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Grid (Existing Logic with New Design) */}
            <div id="services" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Nos Domaines d'Expertise</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Choisissez la catégorie correspondant à votre besoin.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                            <div key={category.id} className="group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300">
                                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-primary text-3xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-3">
                                    <i className={category.icon}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-secondary mb-4">{category.name}</h3>
                                <p className="text-gray-500 leading-relaxed mb-8 line-clamp-3">
                                    {category.description}
                                </p>
                                
                                <div className="flex flex-col gap-4">
                                    <Link to={`/maintenance/${category.id}`} className="w-full py-3 rounded-xl border-2 border-gray-100 text-center font-bold text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                                        En savoir plus <i className="fas fa-arrow-right text-sm"></i>
                                    </Link>
                                    <a href={`https://wa.me/224620833502?text=Bonjour, je souhaite un devis pour la maintenance de : ${category.name}`} target="_blank" className="w-full py-3 rounded-xl bg-green-50 text-green-600 font-bold text-center hover:bg-green-100 transition-colors flex items-center justify-center gap-2">
                                        <i className="fab fa-whatsapp"></i> Devis WhatsApp
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Emergency CTA */}
            <div className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Un problème bloquant ?</h2>
                        <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto relative z-10 font-medium">
                            Ne laissez pas une panne ralentir votre activité. Nos techniciens interviennent en urgence.
                        </p>
                        <a href="tel:+224620833502" className="relative z-10 inline-flex items-center justify-center px-12 py-5 bg-white text-primary font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all text-lg group">
                            <span>Appeler maintenant</span> <i className="fas fa-phone-alt ml-3 group-hover:rotate-12 transition-transform"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintenancePage;
