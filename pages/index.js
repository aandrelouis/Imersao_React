import React, {useState} from 'react';
import config from '../config.json'
import styled from 'styled-components'
import Menu from '../src/Components/Menu'
import { StyledTimeline } from '../src/Components/Timeline'

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  
  return (
    <>
      <div>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        {/* Prop Drilling - vai descendo na arvore de componentes 1 a 1 */}
        <Header />
        <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
      </div>
    </>
  )
}




const StyleHeader = styled.div`
  background-color: ${({ theme}) => theme.backgroundLevel1} ;
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
  }
`


const SyledBanner = styled.div`
  height: 230px;
  background-image:url(${({ bg}) => bg});
  // background-image: url(${config.bg});
  background-size: cover;
  `;



function Header() {
  return (
    <StyleHeader>
      <SyledBanner bg={config.bg} />
      {/* <img src="banner" /> */}

      <div className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />

        <div>
          <h2>
            {config.name}
          </h2>

          <p>
            {config.job}
          </p>
        </div>
      </div>
    </StyleHeader>
  )
}


function TimeLine({searchValue, ...props}) {
  const playlistsNames = Object.keys(props.playlists)
  //Vai pegar as chaves do objeto e transformar em um array

  return (
    <StyledTimeline>
      <div>TimeLine</div>
      {playlistsNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
              <section key={playlistName}>
                <h2>{playlistName}</h2>
                <div>
                 {videos.filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const serchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(serchValueNormalized)
                 }).map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>
                        {video.title}
                      </span>
                    </a>)})}
                </div>
              </section>
            )
          })}
      {/* Vai ser map o tempo todo */}
    </StyledTimeline>
  )
}

// Single Page Application
// SPA - React, Angular, Vue
// Uma aplicação que só tem uma página, os elementos se adaptam a tela dinamicamente
// A SPA não recarrega a página, ela só atualiza o conteúdo

// Desafios Aula 3
// 1 - Criar a página video.js quando clicar no video com o titulo e o video
// 2 - Adicionar o projeto na vitrine do Alura
// 3 - copiar pagina do youtube