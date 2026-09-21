import LinkedinIcon from "../../assets/iconsIndex/linkedin-brands-solid-full.svg"
import GitHubIcon from "../../assets/iconsIndex/github-brands-solid-full.svg"
import MailIcon from "../../assets/iconsIndex/mail-solid-full.svg"
import BarIcon from "../../assets/iconsIndex/bar-solid-full.svg"
import ArrowIcon from "../../assets/iconsIndex/arrow-right-long-solid-full black.svg"
import DownloadIcon from "../../assets/iconsIndex/download-solid-full.svg"
import ArrowWhiteIcon from "../../assets/iconsIndex/arrow-right-long-solid-full white .svg"


export default function HeroIndex() {
    return (
        <section>
            <div className="pt-30 flex flex-col text-center gap-5  px-1 md:gap-5 md:pt-15 md:px-5">

                <h1 className="text-h2  text-center text-foreground md:text-h1">
                    <img className="inline w-7 md:w-10" src={BarIcon} alt=""/>
                    <span className="md:inline hidden" >ELVIS</span> NICOLAS GORDON <span className="md:inline hidden" >JARAMILLO</span><img className="inline w-7 md:w-10" src={BarIcon} alt=""/>
                </h1>

                <h2 className="text-xl text-muted font-body md:text-h2">
                    Junior Frontend Developer
                </h2>

                <p className="text-base text-muted font-body md:text-h3 md:px-20">
                    Frontend Developer Junior con experiencia en React y TypeScript,
                    actualmente en búsqueda de mi primera oportunidad laboral.
                    Mi objetivo es crecer profesionalmente y llegar a ser desarrollador Full Stack.
                </p>

                <div className="flex gap-6 justify-center md:gap-10">
                    <img
                        className="inline w-7 md:w-10" src={BarIcon} alt=""/>

                    <a  href="https://www.linkedin.com/in/nicolas-gordon-b76543296/" target="blank__">
                        <img src={LinkedinIcon} className="inline w-10 md:w-13" alt="LinkedIn"/>
                    </a>

                    <a href="https://github.com/NicolasGJaramillo" target="blank__">
                        <img src={GitHubIcon} className="inline w-10 md:w-13" alt="GitHub"/>
                    </a>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nicolasgordon12@gmail.com&su=Hola" target="blank__">
                        <img src={MailIcon} className="inline w-10 md:w-13" alt="Email"/>
                    </a>

                    <img className="inline w-7 md:w-10" src={BarIcon} alt="" />
                </div>

                <div className="font-semibold flex flex-col gap-5 font-body md:gap-10">

                    {/* BOTONES */}
                    <div className="flex justify-center gap-3 text-sm md:gap-5 md:text-body">

                        <a
                            className="bg-primary hover:bg-primary-hover py-2 px-4 rounded-button text-surface items-center gap-1 md:px-10 md:gap-2 flex " href="#proyect">
                            VER PROYECTOS
                            <img className="w-3 md:w-4" src={ArrowIcon} alt=""/>
                        </a>

                        <a className="text-muted border-border px-4 border-[3px] rounded-button py-2  items-center gap-1 md:px-10 md:gap-2 flex hover:bg-surface" href=""> DESCARGAR CV <img className="w-4 md:w-6" src={DownloadIcon} alt=""/></a>

                    </div>

                    <div className="flex justify-center">
                        <a
                            className="text-muted border-border px-4 border-[3px] rounded-button py-2 flex items-center gap-1 text-sm md:px-10 md:gap-2 md:text-body hover:bg-surface" href="#skills">
                            VER HABILIDADES
                            <img className="w-3 md:w-4" src={ArrowWhiteIcon} alt="" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}