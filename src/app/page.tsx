import { Metadata } from "next";	
import './page.css';
import ButtonLink from './components/Button';
import Image from 'next/image';
import { ArrowRightIcon, EnvelopeClosedIcon, EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import ScrollNavbar from './components/ScrollNavbar';
import ProjectCard from './components/ProjectCard';
import Cross from './components/Cross';
import { getProjectPosts } from "./projects/utils";

export const metadata: Metadata = {
    title: "Timéo Poupiot - Portfolio",
    description: "Etudiant en BUT informatique et développeur web",
    keywords: "développeur web, portfolio, projets, contact",
    robots: "index, follow",
};

export default function Home() {
	const randomProjects = getProjectPosts().sort(() => Math.random() - 0.5).slice(0, 3);

	return (
		<main id="home">
			<section className="hero">
				<div className="hero__content page-width">
					<ButtonLink data-aos="zoom-in" data-aos-delay="100" className="btn-company" href={"https://netcurd.fr/"} special>travaille chez NetCURD</ButtonLink>
					<h1 data-aos="fade-right">développeur web.</h1>
					<p data-aos="fade-right" data-aos-delay="50">Etudiant en informatique et développeur web</p>

					<div className="hero__content__socials">
						<ButtonLink href={"https://github.com/tpoupiot/"} data-aos="zoom-in" data-aos-delay="100">
							<GitHubLogoIcon width={16} height={16} />
							github
						</ButtonLink>
						<ButtonLink href={"https://linkedin.com/in/timéo-poupiot-440a08268"} data-aos="zoom-in" data-aos-delay="150">
							<LinkedInLogoIcon width={16} height={16} />
							linkedin
						</ButtonLink>
					</div>
				</div>
				<Cross />
			</section>

			<ScrollNavbar />

			<section className="about" data-aos="fade-up">
				<div className="about__content page-width">
					<h2 data-aos="fade-up">à propos</h2>

					<div className="about__content__pres page-width">
						<div className="about__content__pres__paragraph" data-aos="fade-up">
							<p>
								Bonjour ! En tant qu&apos;Étudiant en --&gt; BUT Informatique, je suis passionné par le développement web. 
								J&apos;ai pour ambition de devenir développeur web fullstack afin de concevoir les sites webs de demain !
							</p>
							<p>
								Je suis actuellement en alternance chez --&gt; NetCurd, une entreprise de développement web pour acquérir de l&apos;expérience
								et compléter mon panel de connaissances de développeur web.
							</p>
							<div className="about__content__pres__paragraph__links" >
								<ButtonLink href={"/cv-original-poupiot.pdf"} target="blank" data-aos="fade-up">mon cv</ButtonLink>
								<ButtonLink  href={"/projects"} data-aos="fade-up" data-aos-delay="50">mes projets</ButtonLink>
							</div>
						</div>

						<div className="about__content__pres__image" data-aos="fade-up" data-aos-delay="50">
							<Image src={"/images/id.webp"} alt={"photo id"} width={300} height={300} />
						</div>
					</div>
				</div>
			</section>

			<section className="projects" data-aos="fade-up">
				<div className="projects__content page-width">
					<div className="projects__content__title">
						<h2>quelques projets</h2>

						<ButtonLink href={"/projects"} tertiary>
							voir plus
							<ArrowRightIcon width={16} height={16} />
						</ButtonLink>
					</div>

					<div className="projects__content__switcher">
						{
							randomProjects.map((project) => (
								<ProjectCard 
									key={project.slug}
									title={project.metadata.title}
									image={{
										src: project.metadata.thumbnail || "",
										alt: project.metadata.alternativeTitle || ""
									}}
									link={`/projects/${project.slug}`} 
									competences={project.metadata.competences}
									tech={project.metadata.tech}								
								/>
							))
						}

					</div>
				</div>
			</section>
			
			<section id="contact" className="contact" data-aos="fade-up">
				<div className="contact__content page-width">
					<div>
						<h2>à votre écoute !</h2>
						<p>Vous avez un projet en tête ?</p>
					</div>
					<ButtonLink href={"mailto:timeo.poupiot35700@gmail.com"}>envoyer un e-mail
						<EnvelopeClosedIcon width={16} height={16} />
						<EnvelopeOpenIcon width={16} height={16} />
					</ButtonLink>
				</div>
			</section>
		</main>
	);
}