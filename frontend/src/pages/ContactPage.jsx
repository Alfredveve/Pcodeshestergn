import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, logique d'envoi du formulaire (API ou emailjs)
        console.log('Form submitted:', formData);
        alert('Merci pour votre message ! Nous vous répondrons très bientôt.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Discutons de votre projet</span>
                    <h1 className="mt-2 text-4xl md:text-6xl font-display font-bold text-secondary">Contactez-nous</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Notre équipe est à votre écoute pour répondre à toutes vos questions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Info Cards */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                            <h3 className="text-xl font-bold text-secondary mb-6">Nos Coordonnées</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mr-4 shrink-0">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">Adresse</p>
                                        <p className="text-gray-500 text-sm">Kagbélen, Conakry, Guinée</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mr-4 shrink-0">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">Téléphone</p>
                                        <a href="tel:+224620833502" className="text-gray-500 text-sm hover:text-primary transition-colors">+224 620 83 35 02</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mr-4 shrink-0">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">Email</p>
                                        <a href="mailto:contact@pcodeguinee.com" className="text-gray-500 text-sm hover:text-primary transition-colors">contact@pcodeguinee.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mr-4 shrink-0">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">Horaires</p>
                                        <p className="text-gray-500 text-sm">Ouvert 24h/24, 7j/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-4">
                            <a href="#" className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/224620833502" target="_blank" className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-gray-200 border border-gray-100">
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Nom complet</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2 mb-8">
                                <label htmlFor="subject" className="text-sm font-bold text-gray-700 ml-1">Sujet</label>
                                <select 
                                    id="subject" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none"
                                >
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="Devis">Demande de devis</option>
                                    <option value="Formation">Renseignements Formation</option>
                                    <option value="Maintenance">Support / Maintenance</option>
                                    <option value="Partenariat">Partenariat</option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                                    placeholder="Comment pouvons-nous vous aider ?"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full py-5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-secondary transition-all transform hover:-translate-y-1">
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section (Placeholder) */}
                <div className="mt-24 rounded-[3rem] overflow-hidden h-[400px] shadow-lg border border-gray-200 relative">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.6109324644967!2d-13.5030281!3d9.7142085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf02d55fa937cc5b%3A0x45573439385861ab!2sCodeshestergn!5e0!3m2!1sfr!2s!4v1768265521597!5m2!1sfr!2s"
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation Pcodeshestergn"
                        className="filter grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                     <div className="absolute bottom-6 right-6 bg-white px-6 py-4 rounded-xl shadow-xl z-10 hidden md:block">
                        <p className="font-bold text-secondary">Venez nous rendre visite !</p>
                        <p className="text-sm text-gray-500">Ouvert 7j/7</p>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
