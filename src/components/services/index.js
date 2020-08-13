import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import Driver from './image_3.jpg'
import Lady from './image_4.jpg'
import Helper from './image_5.jpg'

const ServiceSection = () => (
  <Services>

    <MainService>
      <ServiceImage src={Driver} alt="" />
      <ServiceText>

        <ServicesH3>Experienced Drivers</ServicesH3>
        <ServiceParagraph>We make sure to vet all our drivers so all you have to worry about is what you’re going to do when you get home! </ServiceParagraph>
      </ServiceText>
    </MainService>
    <SecondService>
      <SecondServiceText>

        <ServicesH3>Ride in comfort</ServicesH3>
        <ServiceParagraph>All of our vehicles are well equiped to make your ride as comfortable as possible no matter the circumstance.</ServiceParagraph>
      </SecondServiceText>
      <SecondServiceImage src={Lady} alt="" />

    </SecondService>
    <MainService>
      <ServiceImage src={Helper} alt="" />
      <ServiceText>

        <ServicesH3>Always On Time</ServicesH3>
        <ServiceParagraph>We’ll be ready to pick you up ASAP. Our drivers  will make sure your ride is as quick and painless as possible to get you where you need to be when you need to be.</ServiceParagraph>
      </ServiceText>
    </MainService>
  </Services>

)

const Services = styled.div`
    margin: 15rem auto;
    width: 90%;
`
const MainService = styled.div`
  display: grid;
  grid-template-columns: 40% 35%;
  grid-gap: 3%;
  align-items: center;
  justify-items: center;
  justify-content: center;
`

const SecondService = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: #B50000;
  justify-items: center;
  margin: 20rem auto;

`

const ServiceText = styled.div`

`

const SecondServiceText = styled.div`
color: white;
`

const ServicesH3 = styled.h3`
  font-size: 2.8rem;
  /* text-align: center; */
  margin-bottom: 3rem;
`
const ServiceImage = styled.img`
  margin-bottom: 2rem;
  max-width: 440px;
  max-height: 440px;
  width: 100%;
`
const SecondServiceImage = styled.img`
  margin-bottom: 0;
  /* max-width: 712px;
  max-height: 440px; */
  width: 100%;
`

const ServiceParagraph = styled.p`
    font-size: 1.6rem;
    max-width: 300px;

`

export default ServiceSection