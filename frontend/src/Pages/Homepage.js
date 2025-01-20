import { Container , Box ,Text ,Tab ,Tabs , TabList ,TabPanel ,TabPanels} from '@chakra-ui/react';
import React, { useEffect } from 'react'
import Login from '../Components/Authentication/Login';
import Signup from '../Components/Authentication/Signup';
import { useHistory } from 'react-router-dom';




const Homepage = () => {

  const history = useHistory();

  useEffect(() => {
       const user = JSON.parse(localStorage.getItem("userInfo"));
       if(user){
        history.push("/chats")
       }

  }, [history])

  return (
    <Container maxW = 'xl' centerContent>
      <Box display="flex" justifyContent="center" p={3} bg={"white"} w="100%" m="45px 0 15px 0" 
      borderRadius="lg" 
      borderWidth="1px"
      background="blue.200"
      >
        <Text fontSize="3xl" fontFamily="work sans" color="black" fontWeight="extrabold"  >chatBook</Text>
      </Box>

      <Box bg={"white"} w="100%"  p={4} borderRadius="lg" borderWidth="1px">
         <Tabs variant='soft-rounded'>
            <TabList mb="1em">
              <Tab w="50%">Login</Tab>
              <Tab w="50%">Sign up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel >
                <Login/>
              </TabPanel>
              <TabPanel>
                <Signup/> 
              </TabPanel>
            </TabPanels>
          </Tabs> 
      </Box>
  
    </Container>
  )
}

export default Homepage;
