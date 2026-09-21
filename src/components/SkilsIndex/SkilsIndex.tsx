import BarIcon from "../../assets/iconsIndex/bar-solid-full.svg"
export default function SkillsIndex(){
    return(
        <section className="py-15 scroll-mt-[-50px]" id="skills">
            <div className="text-center px-2 flex flex-col gap-5">
                <h2 className="text-foreground text-h2  text-center md:text-h1 "><img className="inline w-7 md:w-10" src={BarIcon} alt=""/> <span className="text-h4 text-muted md:text-h2" > SOBRE MI </span><img className="inline w-7 md:w-10" src={BarIcon} alt=""/> <br /> HABILIDADES Y EDUCACION  </h2>
                <details className="group">
                    <summary className="text-foreground text-left border-t-2 border-b-2 border-border group-open:border-b-transparent py-8 cursor-pointer hover:text-primary  md:text-h3 md:px-20">SOBRE MI</summary>
                    <div className="border-b-2 border-border">
                    
                        <p className=" text-body text-muted text-justify py-4 px-2 md:text-h3 md:px-20">¡HOLA! Te voy a contar un poco sobre mi. Soy un estudiante de ingeneria de sistemas que esta apasionado por el desarrollo de software me gusta mucho diseñar aplicaciones bonitas visualmente con toque elegante y oscuro. Actualmente curso sexto semestre en la Universidad de Nariño (Colombia) donde he adquirido mis bases de programacion, logica y desarrollo de software. Mi principal motivacion es convertirme en desarrollador full stack y estoy comenzando por el frontend area en la que estoy fortaleciendo conocimientos realizando proyectos personales y freelance. Pero por ahora estoy en busca de una oportunidad de pasantia o primera experiencia laboral en desarrollo de software que me permita poner en practica mis habilidades, aprender de profesionales y continuar creciendo en el area.</p>      
                    </div>
                </details>
                <details className="group">
                    <summary className="text-foreground text-left  border-t-2 border-b-2 py-8 border-border cursor-pointer group-open:border-b-transparent hover:text-primary  md:text-h3 md:px-20">FRONTEND</summary>
                    <div className="border-b-2 border-border">
                    
                        <p className=" text-body text-muted text-justify py-4 px-2  md:text-h3 md:px-20">
                        HTML5 · CSS3 · JavaScript · TypeScript ·
                        React · Tailwind CSS </p>      
                    </div>
                </details>
                <details className="group">
                    <summary className="text-foreground text-left  border-t-2 border-b-2 py-8 border-border cursor-pointer group-open:border-b-transparent hover:text-primary  md:text-h3 md:px-20">HERRAMIENTAS</summary>
                    <div className="border-b-2 border-border">
                    
                        <p className=" text-body text-muted text-justify py-4 px-2  md:text-h3 md:px-20">
                        Git · GitHub · VS Code · Vite </p>      
                    </div>
                </details>
                <details className="group">
                    <summary className="text-foreground text-left  border-t-2 border-b-2 py-8 border-border cursor-pointer group-open:border-b-transparent hover:text-primary  md:text-h3 md:px-20">EDUCACION</summary>
                    <div className="border-b-2 border-border">
                    
                        <p className=" text-body text-muted text-justify py-4 px-2  md:text-h3 md:px-20">
                        Ingeneria de sistemas · Universidad de Nariño · Sexto Semestre, 2022-Presente </p>      
                    </div>
                </details>
                
            </div>
        </section>
    )
}