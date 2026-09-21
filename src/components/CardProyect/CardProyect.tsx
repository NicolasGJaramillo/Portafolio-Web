import EjemploImg from "../../assets/imageProyect/ejemplo.jpg"
import ArrowWhiteIcon from "../../assets/iconsIndex/arrow-right-long-solid-full white .svg"
import { Link } from "react-router-dom"
/*
type dataProyetcProps={
    slug:string,
    image:string,
    title:string,
    shortDescription:string,
    technologies:string,
    link:string,

    video:string,
    largeDescription:string,
    linkRepo:string,

}
*/
export default function CardProyect(){
    return(
        <Link to="/ProyectPage">
        <article className="flex flex-col text-justify items-center px-10 bg-card py-10 rounded-card gap-5 hover:bg-surface lg:flex-row">
            <img className="md:w-110 w-[90%] rounded-image flex  " src={EjemploImg} alt="" />
            <div className="flex flex-col gap-4">
                <h3 className="text-h3 text-primary">TORNILLERIA PARTIDERO</h3>
                <p className="text-h4 text-foreground" >Tornillería Partidero es un sitio web para una empresa de tornillería y ferretería, diseñado para mostrar su catálogo de productos, organizarlos por categorías y facilitar el contacto con los clientes mediante WhatsApp</p>
                <p className="text-primary text-body text-justify" >Typescript ● React ● Tailwind</p>
                <p className="flex text-muted gap-2">VER PROYECTO <img className="w-3 md:w-4" src={ArrowWhiteIcon} alt="" /></p>
            </div>
        </article>
        </Link>
    )
}