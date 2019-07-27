import styled from 'styled-components'
import { Image, Text } from 'rebass'

export const CARD_HEIGHT = '200px'

export const MEDIA_QUERY_SMALL = '@media (max-width: 400px)'

export const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: #4285f4 5px solid;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
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
