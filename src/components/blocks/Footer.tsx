import React from 'react';
import { contactInfo, navigationLinks } from '@/data/navigation';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-secondary text-black pt-20 pb-10 border-t border-black/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-8">
                        <a href="/" className="flex flex-col">
                            <img
                                src="https://res.cloudinary.com/dskliu1ig/image/upload/v1768532411/InterroganteSpettacolo-V-v3_iytvvk.svg"
                                alt="Interrogante Spettacolo"
                                className="h-48 w-auto object-contain self-start"
                            />
                        </a>
                        <p className="text-black font-sans text-sm leading-relaxed max-w-sm">
                            Interrogante Spettacolo es una compañía internacional de experimentación artística. Organizada en una asociación sin ánimo de lucro de producción y promoción artística multicultural.
                        </p>
                    </div>

                    {/* Contact/Info Section */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-nav text-lg font-bold uppercase tracking-widest border-l-4 border-white pl-3 mb-6">DIRECCIÓN: KALUA RODRIGUEZ</h3>
                            <div className="text-sm font-sans space-y-1">
                                <p className="font-bold">ASSOCIAZIONE INTERROGANTE SPETTACOLO</p>
                                <p>Via Per San Pietro 1328</p>
                                <p>22010 Carlazzo (CO)</p>
                                <p>Codice fiscale: 95142440130</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-nav text-lg font-bold uppercase tracking-widest border-l-4 border-white pl-3 mb-6">INFO/CONTACTO</h3>
                            <ul className="flex flex-col gap-4">
                                <li className="text-sm font-sans">
                                    <p>Tel/WhatsApp: +39 392 168 3752</p>
                                    <p>Dirección: Kalúa Rodríguez</p>
                                </li>
                                {contactInfo.emails.map((email) => (
                                    <li key={email}>
                                        <a href={`mailto:${email}`} className="text-sm font-sans hover:underline">
                                            {email}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Social Section */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-nav text-lg font-bold uppercase tracking-widest border-l-4 border-white pl-3 mb-6">SÍGUENOS EN</h3>
                        <div className="flex gap-4">
                            <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-white p-2 text-primary hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
                                <Facebook size={24} fill="currentColor" />
                            </a>
                            <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-white p-2 text-primary hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
                                <Instagram size={24} />
                            </a>
                            <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-2 text-primary hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
                                <Linkedin size={24} fill="currentColor" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-black/10 pt-10 text-center">
                    <p className="text-sm font-nav font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} Interrogante Spettacolo - All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
