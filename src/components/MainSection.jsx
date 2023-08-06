import "./MainSection.css"
import reactLogo from '../assets/react.svg'

const MainSection = () => {
  return (
        <>
            <img src={reactLogo} className="main-logo" alt="React logo" />
            <h1>La Biblioteca Escondida</h1>
            <p className='proximamente'>Pagina en construccion. Subcribite para estar al tanto de nuestras novedades!</p>
            <button className='btn-newsletter'>Newsletter</button>
        </>
    );
};

export default MainSection;