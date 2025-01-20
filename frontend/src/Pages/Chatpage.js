import { Box }  from '@chakra-ui/react';
import { ChatState } from '../Context/ChatProvider'
import  SideDrawer   from '../Components/misc/SideDrawer.js'
import  MyChats  from '../Components/misc/MyChats.js'
import ChatBox  from '../Components/misc/ChatBox.js'
import { useState } from 'react';
const Chatpage = () => {
      
      const {user} = ChatState();
      const [fetchAgain, setFetchAgain]= useState(false)

  
  
    return (
     <div style = {{width: "100%"}}>
            {user && <SideDrawer/>}
            <Box
            display="flex"
            justifyContent='space-between'
            w='100%'
            h='91.5vh'
            p='10px'
            >
                  {user && <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
                  {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
            </Box>
     </div>
  )
}

export default Chatpage
