import "./dropDown.css"
export default function Entete({titre, drop, onClick}){
    return(
        <div className="entete">
            <h1>{titre}</h1>
            <i className={drop ? "bi bi-chevron-up" : "bi bi-chevron-down"} onPointerDown={onClick}></i>
        </div>
    )
}