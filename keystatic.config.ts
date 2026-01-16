import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: process.env.NODE_ENV === 'production'
        ? {
            kind: 'github',
            repo: {
                owner: 'mirkodgz',
                name: 'interrogante-sito',
            },
        }
        : {
            kind: 'local',
        },
    collections: {
        festival: collection({
            label: 'Festival',
            slugField: 'title',
            path: 'src/content/festival/*',
            format: { frontmatter: 'yaml', contentField: 'content' },
            entryExtension: 'mdoc',
            schema: {
                title: fields.slug({ name: { label: 'Título' } }),
                subtitle: fields.text({ label: 'Subtítulo' }),
                edition: fields.text({ label: 'Edición (Ej: I Edición)' }),
                date: fields.date({ label: 'Fecha' }),
                cover: fields.text({ label: 'Imagen de Portada (URL)' }),
                location: fields.text({ label: 'Ubicación' }),
                description: fields.text({ label: 'Descripción Corta', multiline: true }),
                videoUrl: fields.text({ label: 'URL de Youtube' }),
                press: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Medio' }),
                        image: fields.text({ label: 'Imagen (URL)' }),
                        url: fields.text({ label: 'Link' }),
                    }),
                    { label: 'Prensa' }
                ),
                quote: fields.text({ label: 'Frase', multiline: true }),
                gallery: fields.array(fields.text({ label: 'URL' }), { label: 'Galería' }),
                content: fields.document({ label: 'Contenido', formatting: true }),
            },
        }),
        creaciones: collection({
            label: 'Creaciones',
            slugField: 'title',
            path: 'src/content/creaciones/*',
            format: { frontmatter: 'yaml', contentField: 'content' },
            entryExtension: 'mdoc',
            schema: {
                title: fields.slug({ name: { label: 'Título' } }),
                subtitle: fields.text({ label: 'Subtítulo' }),
                cover: fields.text({ label: 'Imagen de Portada (URL)' }),
                videoUrl: fields.text({ label: 'Video Principal (Legacy)' }),
                additionalVideos: fields.array(
                    fields.text({ label: 'URL del Video' }),
                    {
                        label: 'Videos Adicionales',
                        itemLabel: (props) => props.value || 'Nuevo Video'
                    }
                ),
                details: fields.text({
                    label: 'Detalles (Créditos, Info Técnica)',
                    multiline: true
                }),
                quote: fields.text({ label: 'Frase Destacada', multiline: true }),
                quoteAuthor: fields.text({ label: 'Autor de la Frase' }),
                gallery: fields.array(fields.text({ label: 'URL de Imagen' }), { label: 'Galería de Fotos' }),
                content: fields.document({ label: 'Descripción Principal', formatting: true }),
            },
        }),
        performance: collection({
            label: 'Performance',
            slugField: 'title',
            path: 'src/content/performance/*',
            format: { frontmatter: 'yaml', contentField: 'content' },
            entryExtension: 'mdoc',
            schema: {
                title: fields.slug({ name: { label: 'Título' } }),
                date: fields.date({ label: 'Fecha' }),
                venue: fields.text({ label: 'Lugar' }),
                cover: fields.text({ label: 'Imagen (URL)' }),
                videoUrl: fields.text({ label: 'Video Breve (Youtube)' }),
                fullVideoUrl: fields.text({ label: 'Video Completo (Link)' }),
                gallery: fields.array(fields.text({ label: 'Imagen URL' }), { label: 'Galería (Carrusel)' }),
                details: fields.text({ label: 'Detalles', multiline: true }),
                description: fields.text({ label: 'Descripción', multiline: true }),
                content: fields.document({ label: 'Contenido', formatting: true }),
            },
        }),
        blog: collection({
            label: 'Blog',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { frontmatter: 'yaml', contentField: 'content' },
            entryExtension: 'mdoc',
            schema: {
                title: fields.slug({ name: { label: 'Título' } }),
                date: fields.date({ label: 'Fecha' }),
                cover: fields.text({ label: 'Imagen de Portada (URL)' }),
                author: fields.text({ label: 'Autor' }),
                summary: fields.text({ label: 'Resumen/Extracto', multiline: true }),
                content: fields.document({ label: 'Contenido', formatting: true }),
            },
        }),
        team: collection({
            label: 'Team',
            slugField: 'name',
            path: 'src/content/team/*',
            format: { frontmatter: 'yaml', contentField: 'content' },
            entryExtension: 'mdoc',
            schema: {
                name: fields.slug({ name: { label: 'Nombre' } }),
                role: fields.text({ label: 'Rol / Cargo' }),
                cover: fields.text({ label: 'Foto Portada (Wide/Horizontal)' }),
                profileImage: fields.text({ label: 'Foto Perfil (Vertical/Retrato)' }),
                facebook: fields.text({ label: 'Facebook URL' }),
                instagram: fields.text({ label: 'Instagram URL' }),
                linkedin: fields.text({ label: 'LinkedIn URL' }),
                content: fields.document({ label: 'Biografía', formatting: true }),
            },
        }),
    },
    singletons: {
        partners: singleton({
            label: 'Página Partners',
            path: 'src/content/pages/partners',
            format: { data: 'json' },
            schema: {
                collaborators: fields.array(
                    fields.image({
                        label: 'Logo Colaborador',
                        directory: 'public/images/collaborators',
                        publicPath: '/images/collaborators/'
                    }),
                    { label: 'Colaboradores (Logos)' }
                ),
                partners: fields.array(
                    fields.image({
                        label: 'Logo Partner',
                        directory: 'public/images/partners',
                        publicPath: '/images/partners/'
                    }),
                    { label: 'Partners (Logos)' }
                ),
                press: fields.array(
                    fields.image({
                        label: 'Logo Prensa',
                        directory: 'public/images/press',
                        publicPath: '/images/press/'
                    }),
                    { label: 'Prensa (Logos)' }
                ),
            },
        }),
    },
});
