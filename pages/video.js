import { useRouter } from "next/router";
import  styled from "styled-components";


const StyledVideo = styled.div`
    width: 100%;
    height: 100%;
    iframe {
        width: 100%;
        height: 100%;
    }
`;

export default function Video({ video }) {
    const router = useRouter();
    const { url } = router.query;
  
    return (
    <StyledVideo>
      <iframe
        width="560"
        height="315"
        src={getEmbedUrl(url)}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </StyledVideo>
  );
}

//youtube watch replace embed
function getEmbedUrl(url) {
  return url?.replace("watch?v=", "embed/");
}

