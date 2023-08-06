import "./MainSection.css"
import ItemListContainer from './ItemListContainer'

const MainSection = () => {
  return (
        <>
            <img src="./src/assets/img/main-logo-002.png" className="main-logo" alt="La Biblioteca Escondida" />
            <h1>La Biblioteca Escondida</h1>
            <button className='btn-ingresar'>Ingresar</button>
        </>
    );
};

export default MainSection;


/*
<>
    <img src="./src/assets/img/main-logo-002.png" className="main-logo" alt="La Biblioteca Escondida" />
    <h1>La Biblioteca Escondida</h1>
    <p className='proximamente'>Pagina en construccion. Subcribite para estar al tanto de nuestras novedades!</p>
    <button className='btn-newsletter'>Newsletter</button>
</>
*/