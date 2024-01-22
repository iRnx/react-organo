import "./CampoTexto.css"

const CampoTexto = (props) => {
    console.log(props)
    return (
        <div className="campo-texto">
            <label htmlFor="Nome">{ props.label }</label>
            <input type="text" placeholder={ props.placeholder } />
        </div>
        
    )
}

export default CampoTexto