import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
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
`;

const Right = styled.div`
   flex: 1;
`;

const Footer = () => {
  return (
    
    <Container>
     <Left>
         <logo>JAC STORE.</logo>
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
     <Center></Center>
     <Right></Right>
    </Container>
  )
}

export default Footer