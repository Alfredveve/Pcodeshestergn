const Stats = ({ settings }) => {
    return (
        <section className="py-16 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-extrabold text-white mb-2 underline decoration-accent decoration-4 underline-offset-8">
                            {settings?.students_count || "500+"}
                        </div>
                        <div className="text-indigo-100 font-medium lowercase">Élèves formés</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold text-white mb-2 underline decoration-accent decoration-4 underline-offset-8">
                            {settings?.satisfaction_rate || "98%"}
                        </div>
                        <div className="text-indigo-100 font-medium lowercase">Satisfaction client</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold text-white mb-2 underline decoration-accent decoration-4 underline-offset-8">
                            {settings?.years_expertise || "10+"}
                        </div>
                        <div className="text-indigo-100 font-medium lowercase">Années d'expertise</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold text-white mb-2 underline decoration-accent decoration-4 underline-offset-8">
                            {settings?.support_hours || "24/7"}
                        </div>
                        <div className="text-indigo-100 font-medium lowercase">Support technique</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
