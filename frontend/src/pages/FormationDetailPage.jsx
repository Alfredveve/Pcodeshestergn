import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

const FormationDetailPage = () => {
    const { id } = useParams();
    const [formation, setFormation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFormation = async () => {
            try {
                const response = await api.get(`formations/${id}/`);
                setFormation(response.data);
            } catch (error) {
                console.error('Error fetching formation details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFormation();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-secondary">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!formation) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-secondary text-white">
                <h2 className="text-2xl font-bold">Formation introuvable</h2>
                <Link to="/formations" className="mt-4 text-primary hover:text-accent">
                    Retour au catalogue
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-secondary min-h-screen pt-32 pb-20 text-white">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link to="/formations" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <i className="fas fa-arrow-left mr-2"></i> Retour au catalogue
                </Link>
                
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">{formation.title}</h1>
                <div className="flex flex-wrap gap-4 items-center">
                    {formation.certifier && (
                        <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                            Certifié par {formation.certifier} <i className="fas fa-check-circle ml-2"></i>
                        </span>
                    )}
                    <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold bg-primary/20 text-primary border border-primary/30">
                        {formation.price} FG
                    </span>
                    <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold bg-gray-700/50 text-gray-300">
                        <i className="fas fa-clock mr-2"></i> Session intensive
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Image and Sidebar Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-700 bg-slate-800/50">
                            {formation.image ? (
                                <img className="w-full h-auto object-cover" src={formation.image} alt={formation.title} loading="lazy" />
                            ) : (
                                <div className="w-full h-80 bg-slate-700 flex items-center justify-center text-gray-500">
                                    <i className="fas fa-laptop-code text-6xl"></i>
                                </div>
                            )}
                        </div>

                        {/* Inscription Card */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-xl">
                            <h3 className="text-2xl font-bold mb-6 text-white">Cette formation vous intéresse ?</h3>
                            <a href={`https://wa.me/224620833502?text=Bonjour, je souhaite m'inscrire à la formation : ${formation.title}`} target="_blank" className="block w-full text-center py-4 rounded-xl font-bold bg-primary text-white hover:bg-indigo-600 transition-all shadow-lg hover:shadow-primary/25 mb-4">
                                S'inscrire maintenant
                            </a>
                            <p className="text-center text-sm text-gray-500">
                                Places limitées par session pour un meilleur suivi.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Description and Curriculum */}
                    <div className="lg:col-span-7">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <h3 className="text-2xl text-accent font-bold mb-4">Description du programme</h3>
                            <p className="whitespace-pre-line leading-relaxed text-gray-300 mb-12">
                                {formation.description}
                            </p>

                            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
                                <h3 className="text-xl font-bold mb-6 flex items-center">
                                    <i className="fas fa-graduation-cap text-primary mr-3"></i>
                                    Ce que vous allez apprendre
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start text-gray-300">
                                        <i className="fas fa-check text-emerald-400 mt-1.5 mr-3"></i>
                                        <span>Maîtrise complète des outils et concepts clés.</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <i className="fas fa-check text-emerald-400 mt-1.5 mr-3"></i>
                                        <span>Travaux pratiques et projets réels.</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <i className="fas fa-check text-emerald-400 mt-1.5 mr-3"></i>
                                        <span>Support de cours et accompagnement personnalisé.</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <i className="fas fa-check text-emerald-400 mt-1.5 mr-3"></i>
                                        <span>Attestation de formation délivrée en fin de session.</span>
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

export default FormationDetailPage;
