import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

const ServiceDetailPage = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await api.get(`services/${id}/`);
                setService(response.data);
            } catch (error) {
                console.error('Error fetching service details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-light">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!service) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-light">
                <h2 className="text-2xl font-bold text-gray-700">Service introuvable</h2>
                <Link to="/services" className="mt-4 text-primary hover:underline">
                    Retour aux services
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
                    <i className="fas fa-arrow-left mr-2"></i> Retour aux services
                </Link>
                
                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                    <div className="bg-primary/10 p-4 rounded-2xl text-primary text-3xl">
                        <i className={service.icon || 'fas fa-rocket'}></i>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-8 leading-tight">{service.title}</h1>
                        <div className="prose prose-lg text-gray-600 space-y-6">
                            <p className="whitespace-pre-line leading-relaxed text-lg">
                                {service.description}
                            </p>
                            {/* Placeholder for extended content if available */}
                            <p className="text-gray-500 italic border-l-4 border-primary/20 pl-4 py-2">
                                Nos experts sont à votre disposition pour analyser vos besoins spécifiques et vous proposer une solution sur mesure.
                            </p>
                        </div>
                        
                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <a href={`https://wa.me/224620833502?text=Bonjour, je suis intéressé par votre service : ${service.title}`} target="_blank" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all">
                                Demander un devis <i className="fab fa-whatsapp ml-3"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative">
                        <div className="sticky top-32">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                {service.image ? (
                                    <img className="w-full h-auto object-cover" src={service.image} alt={service.title} loading="lazy" />
                                ) : (
                                    <div className="w-full h-96 bg-gray-100 flex items-center justify-center text-gray-400">
                                        <i className="fas fa-image text-6xl"></i>
                                    </div>
                                )}
                            </div>
                            
                            {/* Call to Action Card */}
                            <div className="mt-12 bg-secondary rounded-3xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Pourquoi nous choisir ?</h3>
                                <ul className="space-y-4 relative z-10 text-gray-300">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                                        <span>Expertise reconnue et certifiée</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                                        <span>Intervention rapide et professionnelle</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                                        <span>Satisfaction client garantie</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
