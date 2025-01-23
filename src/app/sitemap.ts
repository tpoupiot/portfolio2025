import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://timeopoupiot.fr/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://timeopoupiot.fr/projects',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://timeopoupiot.fr/formations',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://timeopoupiot.fr/projects/installation-d-un-poste-de-dev',
            lastModified: new Date('2020-11-11'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://timeopoupiot.fr/projects/site-netcurd',
            lastModified: new Date('2024-11-20'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://timeopoupiot.fr/projects/base-de-donnees-trans',
            lastModified: new Date('2023-06-13'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://timeopoupiot.fr/projects/site-style-airbnb',
            lastModified: new Date('2024-06-10'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://timeopoupiot.fr/projects/projet-pokedex',
            lastModified: new Date('2024-03-25'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://timeopoupiot.fr/projects/site-d-association-sportive',
            lastModified: new Date('2023-02-21'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://timeopoupiot.fr/projects/creation-d-une-application',
            lastModified: new Date('2023-06-16'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://timeopoupiot.fr/projects/puissance-4',
            lastModified: new Date('2023-06-14'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://timeopoupiot.fr/projects/rapport-rse',
            lastModified: new Date('2020-11-11'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://timeopoupiot.fr/projects/probleme-du-cavalier',
            lastModified: new Date('2023-04-09'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ]
}