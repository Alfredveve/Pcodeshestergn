import { useState, useEffect } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

const FormationsPage = () => {
    const [formations, setFormations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFormations = async () => {
            try {
                const response = await api.get('formations/');
                setFormations(response.data);
            } catch (error) {
                console.error('Error fetching formations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFormations();
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-secondary">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="bg-secondary min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm">Notre Catalogue Complet</span>
                    <h1 className="mt-2 text-4xl font-display font-bold text-white sm:text-6xl">Nos Formations</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Maîtrisez les compétences technologiques les plus demandées avec nos experts.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {formations.map((formation) => (
                        <div key={formation.id} className="group flex flex-col bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                            <div className="relative h-64 overflow-hidden">
                                {formation.image ? (
                                    <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={formation.image} alt={formation.title} />
                                ) : (
                                    <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white text-5xl opacity-50">
                                        <i className="fas fa-laptop-code"></i>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    {formation.certifier && (
                                        <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                                            Certifié <i className="fas fa-check-circle ml-2"></i>
                                        </span>
                                    )}
                                    <span className="bg-white text-secondary px-3 py-1 rounded-lg font-bold text-sm shadow-lg">
                                        {formation.price} FG
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 p-8 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">{formation.title}</h3>
                                <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                                    {formation.description}
                                </p>
                                <div className="mt-auto">
                                    <Link to={`/formations/${formation.id}`} className="block w-full text-center py-3 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                        En savoir plus
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FormationsPage;
