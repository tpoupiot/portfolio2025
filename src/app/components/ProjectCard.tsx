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
    link
}: {
    title: string
    competences: string | undefined
    tech: string | undefined
    image: Image
    link: string
}) {
    const compList = competences?.split(' ')
    const formattedTech = tech?.split(' ').join(', ');

    return (
        <a href={link} className="project-card" data-aos="fade-up">
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