import React from 'react';
import { ThemeProvider } from 'styled-components'
import { CSSReset } from '../src/Components/CSSReset'
import ColorModeProvider, { ColorModeContext } from '../src/Components/Menu/components/ColorMode';
import '../styles/globals.css'



const theme = { 
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0", 
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
},
  dark: {
      backgroundBase: "#181818", 
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838", 
      textColorBase: "#FFFFFF",
  }
};


function ProviderWrapper({ children }) {
      return(
        <ColorModeProvider initialMode={"dark"}>
         {children}
        </ColorModeProvider>
      )
}
//Color Mode Provider Prove o state do modo de cor para todo mundo



function MyApp({ Component, pageProps }) {
  
  const contexto = React.useContext(ColorModeContext);
  
  return(
      <ThemeProvider theme={theme[contexto.mode]}>
          <CSSReset />
          <Component {...pageProps} />
      </ThemeProvider>
    // Melhor ter mais de um provider com tarefas específicas
    // do que ter um único provider com muitas responsabilidades
    ) 
}

// arquivo _app.js é o componente que envolve toda a aplicação e é carregado uma única vez 
// ele é o componente que vai ser carregado em todas as páginas
// _app.js são definições globais da aplicação
// O provider vai passar o theme para todos os styled components

export default function _App(props){
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
};
//Antes do MyApp, o ProviderWrapper é chamado, que por sua vez chama o MyApp
//O Provider Wrapper vai carregar o tema e quando chamarmos o Myapp, ele já esteja carregado 
