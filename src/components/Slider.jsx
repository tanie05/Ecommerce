import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems, categories, popularProducts}  from "../data";
import {mobile} from '../responsive'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display : "none"})}
    
    
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f8f4f4;
    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

  
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bg};
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    width: fit-content;

`
const Image = styled.img`
    height: 80%;
    
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    width: max-content;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
     margin: 50px 0;
     font-size: 20px;
     font-weight: 500;
     letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = React.useState(0)
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(prevSlideIndex => prevSlideIndex>0 ? prevSlideIndex-1 : 2)
        }
        else{
            setSlideIndex(prevSlideIndex => prevSlideIndex<2 ? prevSlideIndex+1 : 0)
        }

    };
    
  return (
    <Container>
      <Arrow direction = "left" onClick = {() => handleClick("right")} >
      <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => (
            <Slide bg = {item.bg} key = {item.id}>
            <ImageContainer>
                <Image src = {item.img} />
            </ImageContainer>
    
            <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
    
        ))}
        
      </Wrapper>

      
      

      
      <Arrow direction = "right" onClick = {() => handleClick("right")} >
      <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
