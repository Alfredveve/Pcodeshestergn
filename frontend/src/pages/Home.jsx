import { useState, useEffect } from 'react';
import api from '../api';
import Hero from '../components/Hero';
import Maintenance from '../components/Maintenance';
import Formations from '../components/Formations';
import Stats from '../components/Stats';
import Partners from '../components/Partners';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('global-data/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            <Hero settings={data?.settings} />
            <Maintenance categories={data?.maintenance_categories} />
            <Formations formations={data?.formations} />
            <Stats settings={data?.settings} />
            <Partners partners={data?.partners} />
        </div>
    );
};

export default Home;
