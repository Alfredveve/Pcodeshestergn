import {Link} from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white pt-24 pb-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand & Description */}
                    <div className="md:col-span-5">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <i className="fas fa-graduation-cap text-primary text-3xl"></i>
                            <span className="text-2xl font-display font-bold">Codeshestergn</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                            Votre partenaire de confiance pour la transformation digitale, la formation continue et les services technologiques de pointe en Guinée.
                        </p>
                        <div className="flex space-x-4">
                            {
                            [
                                {
                                    icon: 'facebook-f',
                                    color: 'hover:bg-[#1877F2]'
                                }, {
                                    icon: 'x',
                                    color: 'hover:bg-black hover:text-white'
                                }, {
                                    icon: 'linkedin-in',
                                    color: 'hover:bg-[#0A66C2]'
                                }, {
                                    icon: 'instagram',
                                    color: 'hover:bg-[#E4405F]'
                                }
                            ].map((social) => (
                                <a key={
                                        social.icon
                                    }
                                    href="#"
                                    className={
                                        `w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center ${
                                            social.color
                                        } transition-all duration-300 text-white hover:-translate-y-1`
                                }>
                                    {
                                    social.icon === 'x' ? (
                                        <span className="text-lg font-bold">𝕏</span>
                                    ) : (
                                        <i className={
                                            `fab fa-${
                                                social.icon
                                            } text-lg`
                                        }></i>
                                    )
                                } </a>
                            ))
                        } </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-lg font-bold mb-6 text-white">Exploration</h4>
                        <ul className="space-y-4">
                            {
                            [
                                {
                                    name: 'Accueil',
                                    path: '/'
                                },
                                {
                                    name: 'Services',
                                    path: '/services'
                                },
                                {
                                    name: 'Formations',
                                    path: '/formations'
                                },
                                {
                                    name: 'À Propos',
                                    path: '/about'
                                }, {
                                    name: 'Contact',
                                    path: '/contact'
                                }
                            ].map((item) => (
                                <li key={
                                    item.name
                                }>
                                    <Link to={
                                            item.path
                                        }
                                        className="text-slate-400 hover:text-primary transition-colors hover:pl-2 duration-200 block">
                                        {
                                        item.name
                                    } </Link>
                                </li>
                            ))
                        } </ul>
                    </div>

                    {/* Legal */}
                    <div className="md:col-span-2">
                        <h4 className="text-lg font-bold mb-6 text-white">Légal</h4>
                        <ul className="space-y-4">
                            {
                            [
                                {
                                    name: 'Mentions Légales',
                                    path: '/mentions-legales'
                                }, {
                                    name: 'Confidentialité',
                                    path: '/confidentialite'
                                }, {
                                    name: "Conditions d'utilisation",
                                    path: '/conditions-utilisation'
                                }
                            ].map((item) => (
                                <li key={
                                    item.name
                                }>
                                    <Link to={
                                            item.path
                                        }
                                        className="text-slate-400 hover:text-primary transition-colors hover:pl-2 duration-200 block">
                                        {
                                        item.name
                                    } </Link>
                                </li>
                            ))
                        } </ul>
                    </div>

                    {/* Contact - Compact */}
                    <div className="md:col-span-3">
                        <h4 className="text-lg font-bold mb-6 text-white">Nous trouver</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-primary">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <span className="text-slate-400 mt-2">Kagbélén, Conakry<br/>Guinée</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-primary">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <span className="text-slate-400 mt-2">+224 620 83 35 02</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {currentYear}
                        Codeshestergn. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-slate-500 text-sm">Systèmes opérationnels</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
