import { Link } from 'react-router-dom';

const Maintenance = ({ categories }) => {
    return (
        <section id="maintenance" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Nos Services Techniques</span>
                    <h2 className="mt-2 text-4xl font-display font-bold text-secondary sm:text-5xl">Maintenance & Réparation</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Des solutions rapides et efficaces pour tous vos équipements informatiques.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {categories && categories.length > 0 ? (
                        categories.map((category) => (
                            <div key={category.id} className="relative group bg-gray-50 hover:bg-white p-8 rounded-[2rem] border border-transparent hover:border-gray-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white border border-gray-100">
                                    <i className={category.icon}></i>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{category.name}</h3>
                                <p className="text-gray-500 mb-8 text-sm leading-relaxed">{category.description}</p>
                                <Link to="/maintenance" className="flex items-center text-primary font-bold text-sm group-hover:underline">
                                    En savoir plus <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                                </Link>
                            </div>
                        ))
                    ) : (
                        // Fallback/Skeleton
                        [1, 2, 3, 4].map((i) => (
                           <div key={i} className="animate-pulse bg-gray-100 p-8 rounded-[2rem] h-64"></div> 
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Maintenance;
