import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${scrolled ? 'bg-primary text-white' : 'bg-white text-primary shadow-lg'}`}>
                            <i className="fas fa-graduation-cap text-xl group-hover:rotate-12 transition-transform"></i>
                        </div>
                        <span className={`text-2xl font-display font-bold tracking-tight ${scrolled ? 'text-secondary' : 'text-secondary'}`}>
                            Codeshestergn
                        </span>
                    </Link>
                    
                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            { name: 'Accueil', path: '/' },
                            { name: 'Services', path: '/services' },
                            { name: 'Maintenance', path: '/maintenance' },
                            { name: 'Formations', path: '/formations' },
                            { name: 'À Propos', path: '/about' }
                        ].map((item) => (
                            <Link 
                                key={item.name}
                                to={item.path} 
                                className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors relative group ${scrolled ? 'text-gray-600' : 'text-gray-800'}`}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link 
                            to="/contact" 
                            className="bg-primary hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all transform hover:-translate-y-0.5 active:scale-95"
                        >
                            Contactez-nous
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setOpen(!open)} className="text-gray-700 hover:text-primary p-2 rounded-md transition-colors">
                            <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {[
                            { name: 'Accueil', path: '/' },
                            { name: 'Services', path: '/services' },
                            { name: 'Maintenance', path: '/maintenance' },
                            { name: 'Formations', path: '/formations' },
                            { name: 'À Propos', path: '/about' }
                        ].map((item) => (
                            <Link 
                                key={item.name}
                                to={item.path} 
                                className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-primary hover:bg-indigo-50 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 mt-4 border-t border-gray-100">
                            <Link to="/contact" className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-500/30">
                                Contactez-nous
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
