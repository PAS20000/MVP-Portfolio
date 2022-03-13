import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useSession } from 'next-auth/react'

  export default function ProfileCard() {
    const { data:session } = useSession();
    
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              useColorModeValue('/img/pbackL.jpg', '/img/pbackD.jpg')
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                session.user.image
              }
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {session.user.name}
              </Heading>
              <Text color={'gray.500'}>{session.user.email}</Text>
            </Stack>  
          </Box>
        </Box>
      </Center>
    );
  }