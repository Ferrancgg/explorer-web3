import React from 'react'
import { Hero } from '../../components/Hero/Hero'
import FlexBox from '../../components/FlexBox/FlexBox'
import CardInfo from '../../components/CardInfo/Cardinfo'
import Main from '../../components/Main/Main'

const Home = () => {
  return (
    <Main>
         <Hero />
    <FlexBox>
      <CardInfo />
      <CardInfo />
      <CardInfo />
    </FlexBox>
    
    </Main>
   
   
  )
}

export default Home