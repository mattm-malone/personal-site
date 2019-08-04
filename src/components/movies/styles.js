import styled from 'styled-components'
import { Button } from 'Common'

export const PageWrapper = styled.div`
  padding: 4rem 0 2rem;
  display: flex;
  align-items: flex;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: flex;
  justify-content: center;
  text-align: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 65%;
  align-items: center;
`

export const StyledButton = styled(Button)`
  width: 4.8rem;
  height: 1rem;
`
