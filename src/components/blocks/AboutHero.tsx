import React from 'react';
import PageHero from '@/components/ui/PageHero';

const AboutHero = ({ title = "Nosotros" }: { title?: string }) => {
    return (
        <PageHero
            title={title}
            image="https://res.cloudinary.com/dskliu1ig/image/upload/v1768534859/FotoGrupo1_sfbyvs.webp"
            height="90vh"
            overlayOpacity="bg-black/30"
        />
    );
};

export default AboutHero;
