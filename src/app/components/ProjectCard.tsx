import Image from 'next/image';
import "./css/projectCard.css";

interface Image {
    src: string;
    alt: string;
}

export default function ProjectCard({
    title,
    competences,
    tech,
    image,
    link,
    delay,
}: {
    title: string
    competences: string | undefined
    tech: string | undefined
    image: Image
    link: string
    delay?: number
}) {
    const compList = competences?.split(' ')
    const formattedTech = tech?.split(' ').join(', ');

    return (
        <a href={link} className="project-card" data-aos="fade-up" data-aos-delay={delay}>
            <Image
                src={ image.src }
                alt={ image.alt }
                width={800} 
                height={800}
            />

            <div className="project-card__content">
                <div>
                    {compList?.map((comp, index) => (
                        <span className="tag" key={index}>{comp}</span>
                    ))}
                </div>
                <h3>{ title }</h3>
                <p>{ formattedTech }</p>
            </div>
        </a>
    )
}