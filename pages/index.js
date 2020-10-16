import Head from 'next/head'

import GlobalStyle from '../styles/GlobalStyle'
import Header from '../components/Header'
import Board from '../components/Board'


export default function Home() {
  return (
    <>
    <Header/>
    <Board/>

    <GlobalStyle/>
    </>
  )
}
