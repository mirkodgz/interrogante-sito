import React from 'react';
import { languages } from '../../i18n/ui';
import { getLangFromUrl } from '../../i18n/utils';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
    currentLang: keyof typeof languages;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
    const toggleLanguage = () => {
        const newLang = currentLang === 'es' ? 'it' : 'es';
        const currentPath = window.location.pathname;

        // Simple path translation logic
        let newPath = currentPath;

        if (currentLang === 'es') {
            // Switching to IT
            if (currentPath === '/') newPath = '/it/';
            else if (currentPath.startsWith('/nosotros/team/')) newPath = currentPath.replace('/nosotros/team/', '/it/chi-siamo/team/');
            else if (currentPath.startsWith('/nosotros')) newPath = currentPath.replace('/nosotros', '/it/chi-siamo');
            else if (currentPath.startsWith('/contacto')) newPath = currentPath.replace('/contacto', '/it/contatto');
            else if (currentPath.startsWith('/creaciones')) newPath = currentPath.replace('/creaciones', '/it/creazioni');
            else if (currentPath.startsWith('/la-carretilla')) newPath = currentPath.replace('/la-carretilla', '/it/associati');
            else if (currentPath.startsWith('/formacion-para-profesores-de-espanol')) newPath = currentPath.replace('/formacion-para-profesores-de-espanol', '/it/formazione-insegnanti');
            else if (currentPath.startsWith('/talleres-para-ninos')) newPath = currentPath.replace('/talleres-para-ninos', '/it/laboratori-per-bambini');
            else if (currentPath.startsWith('/crea-tu-taller')) newPath = currentPath.replace('/crea-tu-taller', '/it/crea-il-tuo-laboratorio');
            else if (currentPath.startsWith('/iniciativa-culturales-para-ninos')) newPath = currentPath.replace('/iniciativa-culturales-para-ninos', '/it/iniziative-culturali-per-bambini');
            else if (currentPath.startsWith('/jugando-en-espanol')) newPath = currentPath.replace('/jugando-en-espanol', '/it/giocando-in-spagnolo');
            else if (currentPath.startsWith('/abuela-te-hablo')) newPath = currentPath.replace('/abuela-te-hablo', '/it/abuela-te-hablo');
            else if (currentPath.includes('primera-edicion-a-piedi-nudi')) newPath = currentPath.replace('/festival/primera-edicion-a-piedi-nudi', '/it/festival/prima-edizione-a-piedi-nudi');
            else if (currentPath.includes('segunda-edicion-a-piedi-nudi')) newPath = currentPath.replace('/festival/segunda-edicion-a-piedi-nudi', '/it/festival/seconda-edizione-a-piedi-nudi');
            else if (currentPath.includes('tercera-edicion-a-piedi-nudi')) newPath = currentPath.replace('/festival/tercera-edicion-a-piedi-nudi', '/it/festival/terza-edizione-a-piedi-nudi');
            else if (currentPath.includes('cuarta-edicion-a-piedi-nudi')) newPath = currentPath.replace('/festival/cuarta-edicion-a-piedi-nudi', '/it/festival/quarta-edizione-a-piedi-nudi');
            else newPath = `/it${currentPath}`;
        } else {
            // Switching to ES
            if (currentPath === '/it/') newPath = '/';
            else if (currentPath.startsWith('/it/chi-siamo/team/')) newPath = currentPath.replace('/it/chi-siamo/team/', '/nosotros/team/');
            else if (currentPath.startsWith('/it/chi-siamo')) newPath = currentPath.replace('/it/chi-siamo', '/nosotros');
            else if (currentPath.startsWith('/it/contatto')) newPath = currentPath.replace('/it/contatto', '/contacto');
            else if (currentPath.startsWith('/it/creazioni')) newPath = currentPath.replace('/it/creazioni', '/creaciones');
            else if (currentPath.startsWith('/it/associati')) newPath = currentPath.replace('/it/associati', '/la-carretilla');
            else if (currentPath.startsWith('/it/formazione-insegnanti')) newPath = currentPath.replace('/it/formazione-insegnanti', '/formacion-para-profesores-de-espanol');
            else if (currentPath.startsWith('/it/laboratori-per-bambini')) newPath = currentPath.replace('/it/laboratori-per-bambini', '/talleres-para-ninos');
            else if (currentPath.startsWith('/it/crea-il-tuo-laboratorio')) newPath = currentPath.replace('/it/crea-il-tuo-laboratorio', '/crea-tu-taller');
            else if (currentPath.startsWith('/it/iniziative-culturali-per-bambini')) newPath = currentPath.replace('/it/iniziative-culturali-per-bambini', '/iniciativa-culturales-para-ninos');
            else if (currentPath.startsWith('/it/giocando-in-spagnolo')) newPath = currentPath.replace('/it/giocando-in-spagnolo', '/jugando-en-espanol');
            else if (currentPath.startsWith('/it/abuela-te-hablo')) newPath = currentPath.replace('/it/abuela-te-hablo', '/abuela-te-hablo');
            else if (currentPath.includes('prima-edizione-a-piedi-nudi')) newPath = currentPath.replace('it/festival/prima-edizione-a-piedi-nudi', 'festival/primera-edicion-a-piedi-nudi');
            else if (currentPath.includes('seconda-edizione-a-piedi-nudi')) newPath = currentPath.replace('it/festival/seconda-edizione-a-piedi-nudi', 'festival/segunda-edicion-a-piedi-nudi');
            else if (currentPath.includes('terza-edizione-a-piedi-nudi')) newPath = currentPath.replace('it/festival/terza-edizione-a-piedi-nudi', 'festival/tercera-edicion-a-piedi-nudi');
            else if (currentPath.includes('quarta-edizione-a-piedi-nudi')) newPath = currentPath.replace('it/festival/quarta-edizione-a-piedi-nudi', 'festival/cuarta-edicion-a-piedi-nudi');
            else newPath = currentPath.replace('/it', '');
        }

        window.location.href = newPath || '/';
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/10 transition-all duration-300 group"
            aria-label="Toggle Language"
        >
            {/* Flag Icon */}
            <span className="w-5 h-5 flex items-center justify-center">
                {currentLang === 'es' ? (
                    // Italian Flag
                    <svg viewBox="0 0 3 2" className="w-full h-full rounded-sm">
                        <rect width="1" height="2" fill="#009246" />
                        <rect x="1" width="1" height="2" fill="#fff" />
                        <rect x="2" width="1" height="2" fill="#ce2b37" />
                    </svg>
                ) : (
                    // Spanish Flag
                    <svg viewBox="0 0 3 2" className="w-full h-full rounded-sm">
                        <rect width="3" height="2" fill="#c60b1e" />
                        <rect y="0.5" width="3" height="1" fill="#ffc400" />
                    </svg>
                )}
            </span>
            <span className="text-[13px] font-nav uppercase tracking-widest text-white font-medium">
                {currentLang === 'es' ? 'IT' : 'ES'}
            </span>
        </button>
    );
};

export default LanguageSwitcher;
