import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
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
    Square
  } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Carousel from '../Carousel/Carousel';
import NextLink from '../Contracts/NextLink/NextLink';
import UploadButton from './UploadButton';

  const avatars = [
    {
      name: 'PAS',
      url: 'https://avatars.githubusercontent.com/u/83708869?v=4',
    },
    {
      name: 'Segun Adebayo',
      url: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Kent Dodds',
      url: 'https://bit.ly/kent-c-dodds',
    },
    {
      name: 'Prosper Otemuyiwa',
      url: 'https://bit.ly/prosper-baba',
    },
    {
      name: 'Christian Nwamba',
      url: 'https://bit.ly/code-beast',
    },
  ];
  
  export default function ProductForm() {
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
              Quem já usou o site:
            </Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
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
              <Container >
                <UploadButton/>
              </Container>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4} mt={4}>
                <Input
                  placeholder="Nome do produto"
                  bg={useColorModeValue('white','gray.800')}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="Categoria"
                  bg={useColorModeValue('white','gray.800')}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="Preço"
                  bg={useColorModeValue('white','gray.800')}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Button onClick={onOpen} colorScheme={useColorModeValue('orange','purple')}>
                  Visualização rápida
                </Button>
                <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalBody>
                              <Carousel/>
                              <ModalCloseButton />
                                <Square>
                                <NextLink text={
                                  <Button colorScheme={useColorModeValue('orange','purple')} mr={2}>
                                      Lista de produtos
                                  </Button>
                                } 
                                 href='/products/' 
                                 target={undefined}
                                />
                                <Button colorScheme={'red'} mr={2}>
                                      Excluir
                                </Button>
                                 <Button colorScheme={'blue'}>
                                      Editar
                                  </Button>
                              </Square>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
              </Stack>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, green.400,teal.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, green.400,teal.400)',
                  boxShadow: 'xl',
                }}>
                Registrar
              </Button>
            </Box>
            form
          </Stack>
        </Container>
      </Box>
    );
  }