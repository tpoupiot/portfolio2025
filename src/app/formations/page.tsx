import Link from "next/link";
import "./page.css";
import Image from "next/image";

export default async function Page() {
    return (
        <main id="formations">
            <section className="hero">
                <div className="hero__content page-width">
                    <h1>Mon parcours</h1>
                </div>
            </section>

            <section className="experience">
                <div className="experience__content page-width">
                    <div className="experience__content__item" data-aos="fade-up">
                        <Image src="/images/netcurdlogo.png" alt="netcurdlogo" width={100} height={100} />
                        <div>
                            <h2>
                                <Link href="/">
                                    Développeur web
                                </Link>
                            </h2>

                            <span>NetCURD · Contrat en alternance</span>
                            <span>Rennes 35000, France · À distance</span>
                        </div>
                        <span>sept. 2023 - aujourd’hui</span>
                    </div>

                    <div className="experience__content__item" data-aos="fade-up" data-aos-delay="50">
                        <Image src="/icons/Logo_IUT_Lannion.svg" alt="Lannion" width={100} height={100} />
                        <div>
                            <h2>
                                <Link href="/">
                                    BUT Informatique
                                </Link>
                            </h2>

                            <div className="line">
                                <div>
                                    <h3>BUT 3</h3>
                                    <span>Parcours A</span>
                                    <span>Lannion 22700,France</span>
                                </div>
                                <div>
                                    <h3>BUT 2</h3>
                                    <span>Parcours A</span>
                                    <span>Lannion 22700,France</span>
                                </div>
                                <div>
                                    <h3>BUT 1</h3>
                                    <span>Lannion 22700,France</span>
                                </div>
                            </div>
                        </div>
                        <span>sept. 2022 - aujourd’hui</span>
                    </div>

                    <div className="experience__content__item" data-aos="fade-up">
                        <Image src="/images/joliot.png" alt="joliot" width={100} height={100} />
                        <div>
                            <h2>
                                <Link href="/">
                                    Baccalauréat Général
                                </Link>
                            </h2>

                            <span>Mention BIEN — Spécialité NSI, Mathématiques</span>
                            <span>Lycée Joliot Curie</span>
                            <span>Rennes 35000, France</span>
                        </div>
                        <span>sept. 2021 - sept. 2022</span>
                    </div>
                </div>
            </section>
        </main>
    );
}