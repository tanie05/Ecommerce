import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styled from 'styled-components';
import RoomIcon from '@mui/icons-material/Room';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {mobile} from '../responsive'

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})}
`
const Left  = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;

`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: ${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin: 20px;


`
const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none"})}
`
const Title = styled.h3`
margin-bottom: 30px;
  
`
const List = styled.ul`
 margin: 0;
 padding: 0;
 list-style: none;
 display: flex;
 flex-wrap: wrap;

`
const ListItem = styled.li`
width: 50%;
margin-bottom: 5px;

`
const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor: "#eee"})}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 50%;

`

const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>TANCORE.</Logo>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ab debitis cupiditate minus sit velit sunt esse itaque placeat vel sed quam hic, magnam fugiat dolor temporibus rerum cum quo?</Desc>
        <SocialContainer>
            <SocialIcon color = "#385999" ><FacebookIcon/></SocialIcon>
            <SocialIcon color = "#55acee"><TwitterIcon/></SocialIcon>
            <SocialIcon color = "#e60023"><PinterestIcon/></SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
      <Title>Useful Links</Title>
      <List>
      <ListItem>Home</ListItem>
      <ListItem>Man Fashion</ListItem>
      <ListItem>Accessories</ListItem>
      <ListItem>Order Tracking</ListItem>
      <ListItem>Wishlist</ListItem>
      <ListItem>Cart</ListItem>
      <ListItem>Woman Fashion</ListItem>
      <ListItem>My Account</ListItem>
      <ListItem>Wishlist</ListItem>
      <ListItem>Terms</ListItem>
      </List>
      
    </Center>
    <Right>
      <Title>Contact</Title>
      <ContactItem><RoomIcon style={{marginRight:"10px"}}/>622 Dixie Path, South Tobinchester 98336</ContactItem>
      <ContactItem><LocalPhoneIcon style={{marginRight:"10px"}}/>+ 91 7206326178</ContactItem>
      <ContactItem><MailOutlineIcon style={{marginRight:"10px"}}/>tanvee.6352@gmail.com</ContactItem>
      
    </Right>
    </Container>
  )
}

export default Footer