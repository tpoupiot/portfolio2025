import { getProjectPosts } from '../utils';
import { notFound } from 'next/navigation';
import { CustomMDX } from '@/app/components/MarkdownX';
import Gallery from '@/app/components/Gallery';
import Image from 'next/image';
import './page.css';
import ButtonLink from '@/app/components/Button';
import { CodeXml } from 'lucide-react';
import { Metadata } from 'next';

interface PageParams {
    slug: string;
}
 
export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getProjectPosts().find((post) => post.slug === slug);
    
    return {
        title: post?.metadata.title,
        description: post?.metadata.description,
        keywords: "développeur web, portfolio, projets, contact",
        robots: "index, follow",
    };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
    const { slug } = await params;
    const post = getProjectPosts().find((post) => post.slug === slug);

    if (!post) {
        return notFound();
    }

    const formattedDate = new Date(post.metadata.publishedAt).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric' 
    });

    const formattedTech = post.metadata.tech?.split(' ').join(', ');
    const compList = post.metadata.competences?.split(' ');

    return (
        <article id="single-article">
            <section className="hero">
                <div className="hero__content article-width">
                    <div className="competences">
                        {compList?.map((competence, index) => (
                            <span key={index}>{competence}</span>
                        ))}
                    </div>
                    <h1>{post.metadata.title}</h1>
                    <p>{post.metadata.description}</p>
                    <div className="more">
                        <p>Réalisé le {formattedDate}</p>
                        <p>{formattedTech}</p>
                    </div>
                    {post.metadata.thumbnail &&
                        <Image priority 
                            src={post.metadata.thumbnail} 
                            alt={post.metadata.alternativeTitle || ""} 
                            width={800} height={450} 
                        />
                    }
                </div>
            </section>

            <section className="article">
                <div className="article__content article-width">
                    <ButtonLink href={'https://github.com/tpoupiot/IUT-Lannion'} target='blank'>Code source<CodeXml width={18} height={18} /></ButtonLink>
                    <CustomMDX 
                        source={post.content} 
                        components={{
                            Gallery(props: { images: { src: string; alt: string; }[] }) {
                                return (
                                    <Gallery images={props.images} />
                                );
                            }
                        }} 
                    />
                </div>
            </section>
        </article>
    )
}