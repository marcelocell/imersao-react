import React from 'react'
import PageDefault from './components/PageDefault'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import dadosIniciais from './data/dados_iniciais.json'

function App() {
  return (
    <>
      <PageDefault>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={dadosIniciais.categorias[0].videos[0].titulo}
        />
        
        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />
        
        <Carousel
          category={dadosIniciais.categorias[1]}
        />
        
        <Carousel
          category={dadosIniciais.categorias[2]}
        />
        
        <Carousel
          category={dadosIniciais.categorias[3]}
        />
      </PageDefault>
    </>
  );
}

export default App;
