import BarIcon from "../../assets/iconsIndex/bar-solid-full.svg"

import ArrowIcon from "../../assets/iconsIndex/arrow-right-long-solid-full black.svg"
import ArrowLeftIcon from "../../assets/iconsIndex/arrow-left-solid-full.svg"
import WhatsAppIcon from "../../assets/iconsIndex/whatsapp-brands-solid-full.svg"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { DataProyects } from "../../data/dataProyects/dataProyects";
export default function Proyect(){
    const { slug } = useParams();
    const proyecto = DataProyects.find(
        (proyecto) => proyecto.slug === slug
    );
    return(
        <section  className="py-10">
            <div className="flex flex-col items-center gap-5  ">
                <div className="flex flex-col md:flex-row    w-[80%] gap-3">
                    <Link to="/">
                        <a className="flex w-60 py-2 items-center md:w-20 border-border px-6 border-[3px] rounded-button md:absolute hover:bg-surface  "  ><img className="w-5 md:w-8" src={ArrowLeftIcon} alt="" /> <p className="flex md:hidden text-body  text-foreground">VOLVER A PROYECTOS</p> </a>
                    </Link>
                    <div className="flex items-center md:m-auto">
                        <img className="inline w-10 md:w-10 relative" src={BarIcon} alt=""/> 
                        <h2 className="text-foreground md:text-h2 text-h3  text-center m-auto"> {proyecto?.title}  </h2>
                        <img className="inline w-10 md:w-10" src={BarIcon} alt=""/>
                    </div>
                </div>
                <video className="w-[80%] rounded-card" src={proyecto?.video}  controls></video>
                <h3 className="text-foreground text-h3 flex gap-2 md:text-h2" ><img className="inline w-7 md:w-10" src={BarIcon} alt=""/>SOBRE EL PROYECTO<img className="inline w-7 md:w-10" src={BarIcon} alt=""/></h3>
                <p className="text-body text-muted text-justify px-3 md:text-h3 md:px-15">{proyecto?.largeDescription}</p>
                <p className="text-foreground text-h3 flex px-4  text-center md:text-h2"><img className="inline w-7 md:w-10" src={BarIcon} alt=""/>TECNOLOGIAS Y HERRAMIENTAS UTILIZADAS<img className="inline w-7 md:w-10" src={BarIcon} alt=""/></p>
                <p className="text-muted text-body text-center px-2 md:text-h3" >{proyecto?.technologies}</p>
                <div className="flex flex-col gap-3 md:flex-row ">
                    <a className="bg-primary text-body font-semibold hover:bg-primary-hover py-2 px-4 rounded-button text-surface items-center gap-1 md:px-10 md:gap-2 flex md:text-h4 " href={proyecto?.linkRepo}>VER REPOSITORIO<img className="w-3 md:w-4" src={ArrowIcon} alt=""/></a>
                    <a className="text-muted border-border px-4 border-[3px] rounded-button py-2   items-center gap-1 md:px-10 md:gap-2 flex hover:bg-surface md:text-h4" href="https://wa.me/573166657092" target="blank__"> ESCRIBEME <img className="w-6 md:w-6 " src={WhatsAppIcon} alt=""/></a>
                </div>
            </div>
        </section>
    )
}