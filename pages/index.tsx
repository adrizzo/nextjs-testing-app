import React from 'react'
import Text from '../components/Text/Text'
import NavList from '../components/NavList/NavList'
import Header from '../components/Header/Header'

function Home() {
  return (
    <>
      <NavList />
      <Header>Title for Home</Header>
      <Text>Testing text for home page</Text>
    </>
  )
}

export default Home
