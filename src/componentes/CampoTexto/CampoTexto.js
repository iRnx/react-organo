import "./CampoTexto.css"

const CampoTexto = (props) => {
    
    return (
        <div className="campo-texto">
            <label htmlFor="Nome">{ props.label }</label>
            <input required={props.obrigatorio} type="text" placeholder={ props.placeholder } />
        </div>
        
    )
}

export default CampoTexto