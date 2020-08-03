import React, { useEffect, useState } from 'react';
import PageDefault from './components/PageDefault';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import categoriasRepository from './repositories/categorias'

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideo) => {
          setDadosIniciais(categoriasComVideo)
      });
  }, []);
  
  return (
    <>
      <PageDefault padding={0}>
      
        {dadosIniciais.length === 0 && (<div>Carregando...</div>)}
        
        {dadosIniciais.length >= 1 && (
          <>
            <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription={dadosIniciais[0].videos[0].titulo}
            />
            
            <Carousel
              ignoreFirstVideo
              category={dadosIniciais[0]}
            />
            {dadosIniciais.slice(1).map((categoria) => {
                return (<Carousel category={categoria} />)
              })
            }
          </>  
        )}
        
      </PageDefault>
    </>
  );
}

export default App;
