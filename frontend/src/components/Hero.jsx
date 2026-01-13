const Hero = ({ settings }) => {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-light">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wider">Nouveau Standard Digital</span>
                        </div>
                        
                        <h1 className="font-display font-bold tracking-tight text-secondary text-5xl sm:text-6xl xl:text-7xl mb-6 leading-tight">
                            <span className="block">{settings?.hero_title || 'Bienvenue chez'}</span>
                            <span className="block text-primary relative inline-block">
                                Codeshestergn
                                <span className="absolute -top-4 -right-12 hidden xl:block animate-bounce text-5xl">🚀</span>
                            </span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            {settings?.hero_subtitle || "Expert en réparation d'imprimantes Epson & HP, maintenance PC, photographie d'identité et formations informatiques professionnelles en Guinée."}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="https://wa.me/224620833502" target="_blank" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl text-white bg-primary hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/30 hover:-translate-y-1">
                                Prise de Rendez-vous
                                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                            </a>
                            <a href="#formations" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-2xl text-secondary bg-transparent hover:bg-white hover:border-white hover:shadow-lg transition-all">
                                Voir nos formations
                            </a>
                        </div>
                        
                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-400 grayscale opacity-70">
                           <i className="fab fa-apple text-3xl"></i>
                           <i className="fab fa-microsoft text-3xl"></i>
                           <i className="fab fa-google text-3xl"></i>
                           <span className="text-sm font-medium">Partenaires Technologiques</span>
                        </div>
                    </div>
                    
                    <div className="mt-16 lg:mt-0 lg:col-span-6 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            <img 
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                                src={settings?.hero_image || "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000"} 
                                alt="Bureau moderne" 
                            />
                            
                            <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                                        <i className="fas fa-play text-white ml-1 text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Découvrez nos services</p>
                                        <p className="text-xs text-gray-300">Vidéo de présentation (2 min)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-2xl rotate-12 -z-10 opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full -z-10 opacity-20 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
