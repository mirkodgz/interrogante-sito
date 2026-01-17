import React from 'react';

export default function Hero() {
    return (
        /* SECCIÓN: HERO - CINEMATIC BACKGROUND */
        <section className="h-[40vh] md:h-[90vh] relative overflow-hidden bg-black p-0 m-0">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source
                    src="https://res.cloudinary.com/dskliu1ig/video/upload/v1768093257/videohomepage-interrogante_l8tsbd.mp4"
                    type="video/mp4"
                />
            </video>
        </section>
    );
}
