import React from 'react';
import styled from 'styled-components';
import Menu from '../../componentes/Menu/index';
import dadosInicial from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer/index';

const AppWrapper = styled.div`
  background: var(--grayDark);
}`;

function Home() {
  return (
    <AppWrapper style={{backgrou: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle={dadosInicial.categorias[0].videos.titulo}
        url={dadosInicial.categorias[0].videos[0].url}
        videoDescription={"Tendências para tenologia 2020 - Estudos, movimentações do mercado e novas legislaturas indicam que o mundo da tecnologia e inovação irá seguir por quatro caminhos neste novo ano: celulares com telas dobráveis; expansão da rede de dados 5G; implementação da Lei Geral de Proteção aos Dados Pessoais (LGPD) no Brasil; e o crescimento da utilização de assistentes por voz. Cada qual à sua maneira, essas tendências devem movimentar o ambiente econômico e social das empresas de tecnologia no ano de 2020, criando novas formas de se conectar com o mundo."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicial.categorias[0]}
      />

      <Carousel
        category={dadosInicial.categorias[1]}
      />

      <Carousel
        category={dadosInicial.categorias[2]}
      />

      <Carousel
        category={dadosInicial.categorias[3]}
      />

      <Carousel
        category={dadosInicial.categorias[4]}
      />

      <Carousel
        category={dadosInicial.categorias[5]}
      />

      <Footer />

    </AppWrapper>
  );
}

export default Home;
