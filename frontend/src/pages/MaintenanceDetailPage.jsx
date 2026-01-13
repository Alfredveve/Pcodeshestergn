import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

const MaintenanceDetailPage = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await api.get(`maintenance-categories/${id}/`);
                setCategory(response.data);
            } catch (error) {
                console.error('Error fetching maintenance category details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!category) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-white text-secondary">
                <h2 className="text-2xl font-bold">Catégorie introuvable</h2>
                <Link to="/maintenance" className="mt-4 text-primary hover:underline">
                    Retour à la maintenance
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link to="/maintenance" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
                    <i className="fas fa-arrow-left mr-2"></i> Retour à la maintenance
                </Link>
                
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-3xl shadow-lg">
                         <i className={category.icon || 'fas fa-tools'}></i>
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">{category.name}</h1>
                        <p className="text-xl text-gray-500 max-w-3xl">{category.description}</p>
                    </div>
                </div>
            </div>

            {/* Services List Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-secondary mb-8 border-b pb-4">Nos services pour {category.name}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.services && category.services.length > 0 ? (
                        category.services.map((service) => (
                            <div key={service.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-secondary mb-3">{service.name}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <a href={`https://wa.me/224620833502?text=Bonjour, je souhaite un devis pour : ${service.name} (${category.name})`} target="_blank" className="inline-flex items-center text-white bg-primary px-6 py-2 rounded-lg font-bold hover:bg-primary/90 transition-all">
                                    Demander un devis <i className="fab fa-whatsapp ml-2"></i>
                                </a>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 bg-gray-50 rounded-2xl">
                            <p className="text-gray-500 text-lg">Aucun service spécifique listé pour le moment.</p>
                            <a href="https://wa.me/224620833502" target="_blank" className="mt-4 inline-flex items-center text-primary font-bold hover:underline">
                                Contactez-nous pour plus d'infos
                            </a>
                        </div>
                    )}
                </div>

                {/* General Call to Action */}
                 <div className="mt-16 bg-gradient-to-r from-secondary to-slate-800 rounded-[2.5rem] p-12 text-white text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Besoin d'un diagnostic personnalisé ?</h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Nos techniciens sont prêts à intervenir sur tout type de panne liée à {category.name}.
                        </p>
                        <a href={`https://wa.me/224620833502?text=Bonjour, j'ai un problème avec ${category.name}, pouvez-vous m'aider ?`} target="_blank" className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-all">
                            Parler à un technicien <i className="fas fa-headset ml-3"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceDetailPage;
