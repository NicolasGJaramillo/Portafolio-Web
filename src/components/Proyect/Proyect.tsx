import BarIcon from "../../assets/iconsIndex/bar-solid-full.svg"
import video from "../../../public/Anuel AA - Las Mas Bonitas Son P_tas (Video Oficial).mp4"
import ArrowIcon from "../../assets/iconsIndex/arrow-right-long-solid-full black.svg"
import ArrowLeftIcon from "../../assets/iconsIndex/arrow-left-solid-full.svg"
import WhatsAppIcon from "../../assets/iconsIndex/whatsapp-brands-solid-full.svg"
import { Link } from "react-router-dom"

export default function Proyect(){
    return(
        <section  className="py-10">
            <div className="flex flex-col items-center gap-5  ">
                <div className="flex flex-col md:flex-row    w-[80%] gap-3">
                    <Link to="/">
                        <a className="flex w-60 py-2 items-center md:w-20 border-border px-6 border-[3px] rounded-button md:absolute hover:bg-surface  "  ><img className="w-5 md:w-8" src={ArrowLeftIcon} alt="" /> <p className="flex md:hidden text-body  text-foreground">VOLVER A PROYECTOS</p> </a>
                    </Link>
                    <div className="flex items-center md:m-auto">
                        <img className="inline w-10 md:w-10 relative" src={BarIcon} alt=""/> 
                        <h2 className="text-foreground md:text-h2 text-h3  text-center m-auto"> TORNILLERIA PARTIDERO  </h2>
                        <img className="inline w-10 md:w-10" src={BarIcon} alt=""/>
                    </div>
                </div>
                <video className="w-[80%] rounded-card" src={video}  controls></video>
                <h3 className="text-foreground text-h3 flex gap-2 md:text-h2" ><img className="inline w-7 md:w-10" src={BarIcon} alt=""/>SOBRE EL PROYECTO<img className="inline w-7 md:w-10" src={BarIcon} alt=""/></h3>
                <p className="text-body text-muted text-justify px-3 md:text-h3 md:px-15">Tornillería Partidero fue desarrollado para solucionar la necesidad de un negocio de tornillería de presentar su catálogo de productos de forma organizada y facilitar el contacto con sus clientes. Creé una interfaz responsive con categorías, búsqueda de productos, modales con información y contacto directo mediante WhatsApp.
                Durante el proyecto fortalecí mis conocimientos en React, TypeScript y Tailwind CSS, especialmente en el manejo de estados, comunicación entre componentes, navegación con React Router y creación de componentes reutilizables.</p>
                <p className="text-foreground text-h3 flex px-4  text-center md:text-h2"><img className="inline w-7 md:w-10" src={BarIcon} alt=""/>TECNOLOGIAS Y HERRAMIENTAS UTILIZADAS<img className="inline w-7 md:w-10" src={BarIcon} alt=""/></p>
                <p className="text-muted text-body text-center px-2 md:text-h3" >TypeScript ● React ● Tailwind CSS ● Vite ● React Router DOM ● Git ● GitHub ● JavaScript ● HTML ● CSS</p>
                <div className="flex flex-col gap-3 md:flex-row ">
                    <a className="bg-primary text-body font-semibold hover:bg-primary-hover py-2 px-4 rounded-button text-surface items-center gap-1 md:px-10 md:gap-2 flex md:text-h4 " href="">VER REPOSITORIO<img className="w-3 md:w-4" src={ArrowIcon} alt=""/></a>
                    <a className="text-muted border-border px-4 border-[3px] rounded-button py-2   items-center gap-1 md:px-10 md:gap-2 flex hover:bg-surface md:text-h4" href="https://wa.me/573166657092" target="blank__"> ESCRIBEME <img className="w-6 md:w-6 " src={WhatsAppIcon} alt=""/></a>
                </div>
            </div>
        </section>
    )
}