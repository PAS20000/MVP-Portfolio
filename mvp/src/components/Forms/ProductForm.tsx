import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useColorModeValue,
    Square,
    Grid
  } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { FaShopify } from 'react-icons/fa';
import Carousel from '../Carousel/Carousel';
import NextLink from '../Contracts/NextLink/NextLink';
import ProductRegisterForm from './ProductRegisterForm';

  export default function ProductForm({ users }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {data:session} = useSession()
    
    return (
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
              Bem Vindo(a){' '}
              <Text
                as={'span'}
                bgGradient={ useColorModeValue(
                  'linear(to-bl, orange.400, red.500)',
                  'linear(to-bl, purple.400,pink.400)')
                }
                bgClip="text">
                {session?.user?.name}
              </Text>{' '}
            total de pessoas que já usaram o site: <span>{users.length}</span>
            </Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {users.slice(0,5).map((user) => (
                  <Avatar
                    key={user.name + Math.random()}
                    name={user.name}
                    src={user.image}
                    size={useBreakpointValue({ base: 'md', md: 'lg' })}
                    position={'relative'}
                    zIndex={0}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: useColorModeValue(
                        'linear(to-bl, orange.400, red.500)',
                        'linear(to-bl, purple.400,pink.400)'),
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'white'}
                rounded={'full'}
                width={useBreakpointValue({ base: '44px', md: '60px' })}
                height={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: useColorModeValue(
                    'linear(to-bl, orange.400, red.500)',
                    'linear(to-bl, purple.400,pink.400)'),
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                   <Avatar
                   key={session?.user?.email}
                   name={session?.user?.name}
                   src={session?.user?.image}
                   size={useBreakpointValue({ base: 'md', md: 'lg' })}
                   position={'relative'}
                   zIndex={0}
                   _before={{
                     content: '""',
                     width: 'full',
                     height: 'full',
                     rounded: 'full',
                     transform: 'scale(1.125)',
                     bgGradient: useColorModeValue(
                     'linear(to-bl, orange.400, red.500)',
                     'linear(to-bl, purple.400,pink.400)'),
                     position: 'absolute',
                     zIndex: -1,
                     top: 0,
                     left: 0,
                   }}
                 />
              </Flex>
            </Stack>
          </Stack>
         
          <Stack
            bg={useColorModeValue('gray.100','gray.900')}
            boxShadow='dark-lg'
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                <Text
                  as={'span'}
                  bgGradient = { useColorModeValue(
                    'linear(to-bl, orange.400, red.500)',
                    'linear(to-bl, purple.400,pink.400)')
                  }
                  bgClip="text">
                  Painel de controle
                </Text>
              </Heading>
              
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                  Registre seus produtos aqui.
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4} mt={4}>

                <ProductRegisterForm />

                <Button onClick={onOpen} 
                bgGradient="linear(to-r, blue.400,cyan.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, cyan.600,blue.600)',
                  boxShadow: 'xl',
                }}>
                  Visualização rápida
                </Button>
                <Square>
                <NextLink text={
                                <Button leftIcon={<FaShopify/>}
                                bgGradient={useColorModeValue("linear(to-r, red.400,orange.400)","linear(to-r, purple.400,pink.400)")}
                                color={'white'}
                                _hover={{
                                  bgGradient: useColorModeValue('linear(to-r, orange.600,red.600)','linear(to-r, pink.600,purple.600)'),
                                  boxShadow: 'xl',
                                }}>
                                      Lista de produtos
                                </Button>
                              } 
                                 href='/products/' 
                                 target={undefined}
                                />
                </Square>
                <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalBody>
                                <Carousel/>
                              <ModalCloseButton />
                            </ModalBody>
                        </ModalContent>
                    </Modal>
              </Stack>
            </Box>
            form
          </Stack>
        </Container>
      </Box>
    );
  }