
import ArrowWhiteIcon from "../../assets/iconsIndex/arrow-right-long-solid-full white .svg"
import { Link } from "react-router-dom"

type dataProyetcProps={
    image:string,
    title:string,
    shortDescription:string,
    technologies:string,
    slug:string,
}
/*

video:string,
largeDescription:string,
linkRepo:string,
*/
export default function CardProyect({slug, image, title, shortDescription, technologies}:dataProyetcProps){
    return(
        <Link to={`/ProyectPage/${slug}`}>
        <article className="flex flex-col text-justify items-center px-10 bg-card py-10 rounded-card gap-5 hover:bg-surface lg:flex-row">
            <img className="md:w-110 w-[90%] rounded-image flex  " src={image} alt="" />
            <div className="flex flex-col gap-4">
                <h3 className="text-h3 text-primary">{title}</h3>
                <p className="text-h4 text-foreground" >{shortDescription}</p>
                <p className="text-primary text-body text-justify" >{technologies}</p>
                <p className="flex text-muted gap-2">VER PROYECTO <img className="w-3 md:w-4" src={ArrowWhiteIcon} alt="" /></p>
            </div>
        </article>
        </Link>
    )
}