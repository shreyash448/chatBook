import { Button , Input, InputGroup, InputRightElement, Toast, VStack } from '@chakra-ui/react'
import { FormControl,FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useHistory } from "react-router-dom"
const Login = () => {

    const [email ,setEmail] = useState();
    const [password ,setPassword] = useState();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const history = useHistory();


 const loginHandler = async() => {
             setLoading(true);
          if( !email || !password ){
            toast({
                title: 'Please fill all the fields',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
              });
              setLoading(false);
              return;
          }

          try {

            const config = {
              headers :{ 
                "Content-type" : "application/json"

              }
            }

            const { data } = await axios.post(
              "/api/user/login", { email , password },
              config
            )

            toast({
          title: 'Login Successful',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'bottom'
        });

        localStorage.setItem("userInfo" , JSON.stringify(data));
        setLoading(false);
        history.push('/chats');

            
          } catch (error) {
            toast({
          title: 'Login Failed',
          description: error.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'bottom'
        })

        setLoading(false);
          }

        }

        const guestHandler = () => {
            setEmail("guest@example.com");
            setPassword("123456");

           console.log(email);
           console.log(password);
        }
        const handleClick = () =>{
                setShow(!show);
        }

        
  return (
    <VStack>
       <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
            value={email}
            placeholder='Enter Your Email'
            onChange={(e) => setEmail(e.target.value)}
            />
       </FormControl>

       <FormControl id='password' isRequired>

            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input 
                value={password}
                type= {show?'text': 'password'}
                placeholder='Enter Your Password'
                onChange={(e) => setPassword(e.target.value)}
            />
              <InputRightElement width="4.5rem">
        <Button h="1.75rem" m="4px" size='sm' onClick={handleClick}>
            {show ? "Hide" : "Show"}
        </Button>
        </InputRightElement>

            </InputGroup>

            
       </FormControl>

       <Button
      colorScheme="blue"
      width="100%"
      style={{marginTop: 15}}
      onClick={loginHandler}
      isLoading={loading}
      >Login</Button>

      <Button
      colorScheme='red'
      width="100%"
      style={{marginTop: 15}}
      onClick={guestHandler}
      >Get Guest User credentials </Button>
      
    </VStack>
  )
}

export default Login
