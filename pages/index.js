import config from '../config.json'

import styled from 'styled-components'
import { CSSReset } from '../src/Components/CSSReset'
import Menu from '../src/Components/Menu.js'
import { StyledTimeline } from '../src/Components/Timeline'

export default function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} favoritos={config.favoritos} />
      </div>
    </>
  )
}




const StyleHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    
  }
`
const SyledBanner = styled.div`
  height: 230px;
  background-image: url("https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80");
  background-size: cover;
  `;



function Header() {
  return (
    <StyleHeader>
      <SyledBanner />

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


function TimeLine(props) {
  console.log("dentro do componente", props)

  const playlistsNames = Object.keys(props.playlists)
  //Vai pegar as chaves do objeto e transformar em um array

  return (
    <StyledTimeline>
      <div>TimeLine</div>
      {playlistsNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
              <section>
                <h2>{playlistName}</h2>
                <div>
                 {videos.map((video) => {
                  return (
                    <a href={video.url}>
                      <img src={video.thumb} />
                      <span>
                        {video.title}
                      </span>
                    </a>)})}
                </div>
              </section>
            )
          })}
      <div className='areaFavoritos'>
        {props.favoritos.map((pessoa) => {
          return (
                <div className='avatar'>
                  <img src={pessoa.foto} />
                  <p>
                    {pessoa.nome}
                  </p>
              </div>
          )})}
      </div>
      
      {/* Vai ser map o tempo todo */}
    </StyledTimeline>
  )
}

// Primeiro dia - desafios
// Adicionar um banner -- utilizar o unsplash
// Criar os aluraTubes Favoritos -- criar os favorites no config.json
//Elaborar um readme mais bonito  para apresentar o projeot