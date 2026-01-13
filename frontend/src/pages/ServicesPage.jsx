import { useState, useEffect } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await api.get('services/');
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-light">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="bg-light min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Nos Solutions Digitales</span>
                    <h1 className="mt-2 text-4xl font-display font-bold text-secondary sm:text-6xl">Tous nos Services</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Des experts à votre écoute pour accompagner votre transformation numérique.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                    {services.map((service) => (
                        <Link to={`/services/${service.id}`} key={service.id} className="group bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 block">
                            <div className="md:flex h-full">
                                <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                                    {service.image ? (
                                        <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={service.image} alt={service.title} />
                                    ) : (
                                        <div className="h-full w-full bg-primary/10 flex items-center justify-center text-primary text-5xl">
                                            <i className={service.icon || 'fas fa-rocket'}></i>
                                        </div>
                                    )}
                                </div>
                                <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                        <i className={service.icon || 'fas fa-rocket'}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-lg mb-0 whitespace-pre-line line-clamp-3">
                                        {service.description}
                                    </p>
                                    <span className="mt-6 inline-flex items-center text-primary font-bold group-hover:underline">
                                        En savoir plus <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all"></i>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
