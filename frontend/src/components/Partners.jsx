const Partners = ({ partners }) => {
    if (!partners || partners.length === 0) return null;

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Ils nous font confiance</h2>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
                    {partners.map((partner) => (
                        <a key={partner.id} href={partner.website || '#'} className="transition-all hover:opacity-100">
                            <img src={partner.logo} alt={partner.name} className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
