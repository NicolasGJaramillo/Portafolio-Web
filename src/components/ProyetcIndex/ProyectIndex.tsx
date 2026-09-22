import BarIcon from "../../assets/iconsIndex/bar-solid-full.svg"
import CardProyect from "../CardProyect/CardProyect"
import {DataProyects} from "../../data/dataProyects/dataProyects"


export default function ProyectIndex(){
    return(
        <section className="pt-23 scroll-mt-[-60px]" id="proyect">
            <div>
                <h2 className="text-h2  text-center text-foreground md:text-h1"> <span className="text-h4 text-muted md:text-h2"><img className="inline w-7 md:w-10" src={BarIcon} alt=""/> PROYECTOS EN LOS QUE HE </span><img className="inline w-7 md:w-10" src={BarIcon} alt=""/> <br /> TRABAJADO</h2>
                <div className="grid grid-cols-1 px-1 md:px-5 w-[90%] m-auto gap-10 py-10">
                    {DataProyects.map((proyect)=>{
                        return(
                            <CardProyect
                            slug={proyect.slug}
                            image={proyect.image}
                            title={proyect.title}
                            shortDescription={proyect.shortDescription}
                            technologies={proyect.technologies}
                            >
                            </CardProyect>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}