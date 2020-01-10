import styled from 'styled-components'

export const StyledContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  padding: 25px 12px 18px;
  background: #f7f7f7;
`

export const Title = styled.h2`
  color: #222;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

export const Date = styled.div`
  color: #333;
  font-weight: 400;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

export const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

export const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
