import { Link } from 'react-router-dom';

const Formations = ({ formations }) => {
    return (
        <section id="formations" className="py-24 bg-secondary relative overflow-hidden">
            {/* Dark theme background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent font-bold tracking-wider uppercase text-sm">Carrière & Avenir</span>
                        <h2 className="mt-2 text-4xl font-display font-bold text-white sm:text-5xl">Formations Certifiantes</h2>
                        <p className="mt-4 text-xl text-gray-400">
                            Maîtrisez les compétences technologiques les plus demandées.
                        </p>
                    </div>
                    <Link to="/formations" className="inline-flex items-center text-white font-bold hover:text-accent transition-colors">
                        Voir le catalogue <i className="fas fa-arrow-up-right-from-square ml-2"></i>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {formations && formations.length > 0 ? (
                        formations.map((formation) => (
                            <div key={formation.id} className="group flex flex-col bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                                <div className="relative h-56 overflow-hidden">
                                    {formation.image ? (
                                        <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={formation.image} alt={formation.title} loading="lazy" />
                                    ) : (
                                        <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white">
                                            <i className="fas fa-laptop-code text-5xl opacity-50"></i>
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
                                    <p className="text-gray-400 line-clamp-3 mb-8 text-sm leading-relaxed">
                                        {formation.description}
                                    </p>
                                    <div className="mt-auto">
                                        <Link to={`/formations/${formation.id}`} className="block w-full text-center py-3 rounded-xl font-bold border border-slate-600 text-white hover:bg-primary hover:border-primary transition-all">
                                            S'inscrire
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-gray-500 italic">
                            Chargement des formations...
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Formations;
