import styled from 'styled-components'
import backgroundLogin from '../../assets/background_signin.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  gap: 8px;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    margin-top: 64px;
    text-align: center;
  }

  button {
    margin-top: 24px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundLogin}) no-repeat center center;
  background-size: cover;
`
