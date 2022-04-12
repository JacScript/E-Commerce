import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px; 
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon  = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Center = styled.div`
   flex: 1;
   padding: 20px;
`;

const Title = styled.h3`
 margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;

const Right = styled.div`
   flex: 1;
   padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    
    <Container>
     <Left>
         <Logo>JAC STORE.</Logo>
         <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aut odit asperiores dolorem illo doloremque mollitia itaque magni quasi, 
              perferendis maxime ut adipisci animi, ex, eaque et facilis minima voluptatum 
              unde. 
         </Desc>
         <SocialContainer>
             <SocialIcon color= "3B5999">
                 <Facebook/>
             </SocialIcon>
             <SocialIcon color= "e4405f">
                 <Instagram/>
             </SocialIcon>
             <SocialIcon color= "55acee">
                 <Twitter/>
             </SocialIcon>
             <SocialIcon color= "e60023">
                 <Pinterest/>
             </SocialIcon>
         </SocialContainer>
     </Left>
     <Center>
          <Title>Useful links</Title>
          <List>
             <ListItem>Home</ListItem>
             <ListItem>Cart</ListItem>
             <ListItem>Man Fashion</ListItem>
             <ListItem>Women Fashion</ListItem>
             <ListItem>Accessories</ListItem>
             <ListItem>My Account</ListItem>
             <ListItem>Order Tracking</ListItem>
             <ListItem>Wishlist</ListItem>
             <ListItem>Terms</ListItem>
          </List>
     </Center>
     <Right>
       <Title>Contact</Title>
       <ContactItem><Room style={{marginRight: "10px"}}/>
         131 IYUNGA , MBEYA , TANZANIA. 
       </ContactItem>
       <ContactItem><Phone style={{marginRight: "10px"}}/>
         +255 764 127 472
       </ContactItem>
       <ContactItem><MailOutline style={{marginRight: "10px"}}/>
         jacstore@gmail.com 
       </ContactItem>
       <Payment src="#"/>
     </Right>
    </Container>
  )
}

export default Footer