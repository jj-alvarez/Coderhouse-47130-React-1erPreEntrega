import "./MainSection.css"

const MainSection = () => {
  return (
        <>
            <div>
                <img src={reactLogo} className="main-logo" alt="React logo" />
                <h1>La Biblioteca Escondida</h1>
                <p className='proximamente'>Pagina en construccion. Subcribite para estar al tanto de nuestras novedades!</p>
                <button className='btn-newsletter'>Newsletter</button>
            </div>
        </>
    );
};

export default MainSection;