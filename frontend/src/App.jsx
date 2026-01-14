import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Lazy loading des pages pour optimiser le chargement initial
const Home = lazy(() => import ('./pages/Home'));
const FormationsPage = lazy(() => import ('./pages/FormationsPage'));
const ServicesPage = lazy(() => import ('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import ('./pages/ServiceDetailPage'));
const MaintenancePage = lazy(() => import ('./pages/MaintenancePage'));
const MaintenanceDetailPage = lazy(() => import ('./pages/MaintenanceDetailPage'));
const FormationDetailPage = lazy(() => import ('./pages/FormationDetailPage'));
const AboutPage = lazy(() => import ('./pages/AboutPage'));
const ContactPage = lazy(() => import ('./pages/ContactPage'));
const TermsOfServicePage = lazy(() => import ('./pages/TermsOfServicePage'));
const PrivacyPolicyPage = lazy(() => import ('./pages/PrivacyPolicyPage'));
const LegalNoticePage = lazy(() => import ('./pages/LegalNoticePage'));

// Composant de chargement réutilisable
const LoadingFallback = () => (
    <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
);

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
                <Navbar/>
                <main className="flex-grow">
                    <Suspense fallback={<LoadingFallback/>}>
                        <Routes>
                            <Route path="/"
                                element={<Home/>}/>
                            <Route path="/services"
                                element={<ServicesPage/>}/>
                            <Route path="/services/:id"
                                element={<ServiceDetailPage/>}/>
                            <Route path="/maintenance"
                                element={<MaintenancePage/>}/>
                            <Route path="/maintenance/:id"
                                element={<MaintenanceDetailPage/>}/>
                            <Route path="/formations"
                                element={<FormationsPage/>}/>
                            <Route path="/formations/:id"
                                element={<FormationDetailPage/>}/>
                            <Route path="/about"
                                element={<AboutPage/>}/>
                            <Route path="/contact"
                                element={<ContactPage/>}/>
                            <Route path="/conditions-utilisation"
                                element={<TermsOfServicePage/>}/>
                            <Route path="/confidentialite"
                                element={<PrivacyPolicyPage/>}/>
                            <Route path="/mentions-legales"
                                element={<LegalNoticePage/>}/>
                        </Routes>
                    </Suspense>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
