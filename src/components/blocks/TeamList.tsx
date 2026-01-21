import React from 'react';
import { MotionPreset } from '@/components/ui/motion-preset';
import BrandButton from '@/components/ui/BrandButton';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

interface TeamMember {
    id: string;
    slug: string;
    data: {
        name: string;
        role: string;
        cover: string;
        profileImage?: string;
        facebook?: string;
        instagram?: string;
        linkedin?: string;
    };
}

interface TeamListProps {
    teamMembers: TeamMember[];
    lang?: 'es' | 'it';
}

const TeamList = ({ teamMembers, lang = 'es' }: TeamListProps) => {
    const isIt = lang === 'it';
    const t = {
        title: isIt ? "IL NOSTRO TEAM" : "NUESTRO EQUIPO",
        highlight: isIt ? "TEAM" : "EQUIPO",
        button: isIt ? "LEGGI DI PIÙ" : "LEER MÁS"
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title={t.title}
                    highlightedWord={t.highlight}
                    className="mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <MotionPreset
                            key={member.id}
                            fade
                            slide={{ direction: 'up', offset: 30 }}
                            delay={index * 0.2}
                            className="flex flex-col items-center group text-center"
                        >
                            {/* Circular Image */}
                            <div className="relative w-64 h-64 mb-8">
                                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5">
                                    <img
                                        src={member.data.profileImage || member.data.cover}
                                        alt={member.data.name}
                                        className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <h3 className="font-nav text-3xl font-bold uppercase text-black mb-2 tracking-wide">{member.data.name}</h3>
                            <p className="font-sans text-sm text-black/70 mb-6">{member.data.role}</p>

                            {/* Re-doing icons straightforwardly */}
                            <div className="flex gap-5 mb-8 text-black justify-center w-full">
                                {member.data.facebook && (
                                    <a href={member.data.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        <Facebook size={22} />
                                    </a>
                                )}
                                {member.data.instagram && (
                                    <a href={member.data.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        <Instagram size={22} />
                                    </a>
                                )}
                                {member.data.linkedin && (
                                    <a href={member.data.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        <Linkedin size={22} />
                                    </a>
                                )}
                            </div>

                            {/* Button */}
                            <BrandButton
                                text={t.button}
                                href={isIt ? `/it/chi-siamo/team/${member.slug.split('/').pop()}` : `/nosotros/team/${member.slug.split('/').pop()}`}
                                variant="primary"
                                className="!px-8"
                            />
                        </MotionPreset>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamList;
