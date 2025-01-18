import ProjectCard from '../components/ProjectCard';
import { Metadata } from 'next';
import './page.css'
import { getProjectPosts } from './utils';

export const metadata: Metadata = {
    title: "Projets",
    description: "Découvrez les projets que j'ai réalisé",
    keywords: "développeur web, portfolio, projets, contact",
    robots: "index, follow",
};

export default function Page() {
    const posts = getProjectPosts();

    return (
        <main id='project'>
            <section className="hero">
                <div className="hero__content page-width">
                    <h1 data-aos="zoom-in">mes projets</h1>
                </div>
            </section>

            <section className="project">
                <div className="project__content page-width">
                    {posts.map((post) => (
                        <ProjectCard 
                            key={post.slug}
                            title={post.metadata.title}
                            competences={post.metadata.competences}
                            tech={post.metadata.tech}
                            image={{
                                src: post.metadata.thumbnail || "",
                                alt: post.metadata.alternativeTitle || ""
                            }}
                            link={`/projects/${post.slug}`}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}