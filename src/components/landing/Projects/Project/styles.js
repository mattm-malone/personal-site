import styled from 'styled-components'
import { Image, Text } from 'rebass'

export const CARD_HEIGHT = '200px'

export const MEDIA_QUERY_SMALL = '@media (max-width: 400px)'

export const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: #6b63ff 5px solid;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT} / 2);
  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`

export const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`

export const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;
  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`
export const ProjectTag = styled.div`
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */
  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`
