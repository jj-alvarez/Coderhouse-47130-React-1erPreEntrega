import "./MainSection.css"
import reactLogo from '../assets/react.svg'

const MainSection = () => {
  return (
        <>
            <img src="./src/assets/img/main-logo-002.png" className="main-logo" alt="La Biblioteca Escondida" />
            <h1>La Biblioteca Escondida</h1>
            <p className='proximamente'>Pagina en construccion. Subcribite para estar al tanto de nuestras novedades!</p>
            <button className='btn-newsletter'>Newsletter</button>
        </>
    );
};

export default MainSection;