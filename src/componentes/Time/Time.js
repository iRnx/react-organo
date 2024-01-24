import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = (props) => {

    const backgroundColor = { backgroundColor: props.corSecundaria }

    return (
        <section className='time' style={backgroundColor}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <Colaborador />
            <Colaborador />
        </section>
    )
}

export default Time