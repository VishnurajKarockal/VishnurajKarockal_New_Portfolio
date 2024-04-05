import { Box, Flex, Image, Text, Grid } from '@chakra-ui/react';
import React from 'react';
import TypingAnimation from './Typinganimation';

const Home = () => {
  return (
    <Grid 
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} // Adjusting template columns for responsiveness
      gap={6} 
      marginTop={"90px"}
    >
      {/* Grid item for image */}
      <Box margin={"auto"}>
        <Image src='..\src\Sources\final_profile.jpg' alt='Dan Abramov' height={"400px"} borderRadius={"50%"} />
      </Box>
      {/* Grid item for text */}
      <Box height={"400px"} textAlign={"center"}>
        <Flex height="100%" alignItems="center" justifyContent="center" flexDirection="column">
          <Text fontSize={"3rem"} fontWeight={"600"}>Hi I'm, Vishnuraj K R</Text>
          <TypingAnimation />
        </Flex>
      </Box>
    </Grid>
  );
};

export default Home;
