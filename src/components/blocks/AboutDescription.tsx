import React from 'react';
import { MotionPreset } from '@/components/ui/motion-preset';

const AboutDescription = () => {
    return (
        <section
            className="py-24 px-6 md:px-12 lg:px-24 text-white"
            style={{
                background: 'linear-gradient(90deg, #050505, var(--color-primary, #4338ab), #050505)'
            }}
        >
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <MotionPreset fade slide={{ direction: 'up', offset: 30 }} delay={0.2}>
                    <h2 className="font-nav text-5xl md:text-7xl uppercase tracking-normal drop-shadow-lg">
                        INTERROGANTE SPETTACOLO
                    </h2>
                </MotionPreset>

                <MotionPreset fade slide={{ direction: 'up', offset: 30 }} delay={0.4}>
                    <div className="font-sans text-lg md:text-xl leading-relaxed space-y-8 text-white/90">
                        <p>
                            Interrogante Spettacolo es una compañía internacional de creación artística multicultural, fundada en La Habana y actualmente con sede en Milán. La iniciativa surge de la visión de Kalua Rodríguez, quien buscaba establecer un espacio innovador y experimental para graduados en pedagogía con inquietudes artísticas. Su experiencia como actriz y emigrante en Europa la llevó a comprender el poder del arte como medio para la reconexión personal y social, ofreciendo experiencias significativas a través del teatro y otras formas creativas.
                        </p>
                        <p>
                            Organizada como una asociación sin fines de lucro, Interrogante Spettacolo se dedica a la producción artística y a la enseñanza del español en Italia, utilizando un enfoque que combina la rica herencia cultural latinoamericana con metodologías pedagógicas creativas. La propuesta de la compañía no solo mejora las competencias lingüísticas de los estudiantes, sino que también promueve su desarrollo artístico, estableciendo un vínculo profundo con el idioma español a través de la expresión y la creatividad. Esto ha permitido que Interrogante Spettacolo se convierta en un referente en la formación de docentes y estudiantes, creando un entorno en el que el arte y la creatividad son fundamentales para un aprendizaje transformador.
                        </p>
                        <p>
                            Desde hace tres años, Interrogante Spettacolo colabora estrechamente con el Instituto Cervantes de Milán, contribuyendo al enriquecimiento cultural y educativo de la comunidad hispanohablante. Además, mantiene alianzas con instituciones culturales de renombre en la ciudad, como el Museo de las Culturas de Milán, el Pabellón de Arte Contemporáneo (PAC), la Fabbrica del Vapore, la Asociación Cultural CUBEART, la Casa della Poesia di Milano y la Accademia dei Filodrammatici de Milán. Su misión es transformar la enseñanza del español en Italia a través de un enfoque creativo que combina elementos artísticos y teatrales, estableciendo un estándar innovador que inspire y mejore el proceso educativo. Con un compromiso firme hacia la excelencia, Interrogante Spettacolo celebra la diversidad cultural y fomenta el crecimiento colaborativo mediante el intercambio de experiencias y el desarrollo de redes de aprendizaje.
                        </p>
                    </div>
                </MotionPreset>
            </div>
        </section>
    );
};

export default AboutDescription;
