import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalBody,
    ModalFooter,
    Divider,
    ModalContent, 
    ModalHeader,
    ModalCloseButton,
    Wrap,
    Square
  } from '@chakra-ui/react';
import { useState } from 'react';
import { FaNodeJs, FaReact, FaAws, FaLeaf, FaDatabase, FaJs, FaUserAstronaut, FaVoicemail, FaFileInvoice, FaLaptopCode, FaCheck } from 'react-icons/fa';
import { SiExpress, SiTypescript, SiVercel } from "react-icons/si";
import NextLink from '../Contracts/NextLink/NextLink';


  export default function CvCard() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modal, setModal] = useState('')

    function SoftRender(){
      setModal('SoftSkills')
      onOpen()
    }
    function HardRender(){
      setModal('HardSkills')
      onOpen()
    }

    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                '/img/eu.png'
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
                Pedro Schroeder
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @PAS
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
                Desenvolvedor fullstack.
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #WEB
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #MOBILE
              </Badge>
            </Stack>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.400',
                }}
                onClick={SoftRender}
                >
                Soft Skills
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={useColorModeValue('orange.400','purple.400')}
                color={'white'}
                boxShadow={
                  useColorModeValue(
                  '0px 1px 25px -5px rgb(255 69 0 / 48%), 0 10px 10px -5px rgb(255 99 71/ 43%)',
                  '0px 1px 25px -5px rgb(255 0 255 / 48%), 0 10px 10px -5px rgb(238 130 238 / 43%)'
                  )
                }
                _hover={{
                  bg: useColorModeValue('orange.500','purple.500')
                }}
                _focus={{
                  bg: useColorModeValue('orange.500','purple.500')
                }}
                onClick={HardRender}
                >
                Hard Skills
              </Button>
              <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    {modal === 'HardSkills' ? 'Hard Skills':'Soft Skills'}
                  </ModalHeader>
                  <Divider/>
                  <ModalCloseButton />
                  {modal === 'HardSkills' ?
                  <ModalBody>
                      <Wrap>
                        <NextLink href={'https://nodejs.org/en/docs/'} target='_blank' 
                        text={
                          <Button colorScheme='whatsapp' leftIcon={<FaNodeJs/>} mt={1}>
                            Nodejs
                          </Button>
                        }
                        />
                         <NextLink href={'https://www.mongodb.com/'} target='_blank' 
                        text={
                          <Button colorScheme='whatsapp' leftIcon={<FaLeaf/>} mt={1}>
                            MongoDB
                          </Button>
                        }
                        />
                         <NextLink href={'https://dev.mysql.com/doc/'} target='_blank' 
                        text={
                          <Button colorScheme='blue' leftIcon={<FaDatabase/>} mt={1}>
                            Mysql
                          </Button>
                        }
                        />
                         <NextLink href={'https://docs.aws.amazon.com/s3/index.html'} target='_blank' 
                        text={
                          <Button colorScheme='linkedin' leftIcon={<FaAws/>} mt={1}>
                            S3 amazon
                          </Button>
                        }
                        />
                         <NextLink href={'https://pt-br.reactjs.org/docs/getting-started.html'} target='_blank' 
                        text={
                          <Button colorScheme='blue' leftIcon={<FaReact/>} mt={1}>
                            React
                          </Button>
                        }
                        />
                         <NextLink href={'https://reactnative.dev/docs/getting-started'} target='_blank' 
                        text={
                          <Button colorScheme='purple' leftIcon={<FaReact/>} mt={1}>
                            React Native
                          </Button>
                        }
                        />
                         <NextLink href={'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'} target='_blank' 
                        text={
                          <Button colorScheme='yellow' leftIcon={<FaJs/>} mt={1}>
                            JavaScript
                          </Button>
                        }
                        />
                        <NextLink href={'https://www.typescriptlang.org/docs/'} target='_blank' 
                        text={
                          <Button colorScheme='blue' leftIcon={<SiTypescript/>} mt={1}>
                            TypeScript
                          </Button>
                        }
                        />
                        <NextLink href={'https://nextjs.org/docs'} target='_blank' 
                        text={
                          <Button colorScheme='gray' leftIcon={<SiVercel/>} mt={1}>
                            Nextjs
                          </Button>
                        }
                        />
                         <NextLink href={'https://expressjs.com/pt-br/'} target='_blank' 
                        text={
                          <Button colorScheme='teal' leftIcon={<SiExpress/>} mt={1}>
                            Express
                          </Button>
                        }
                        />
                      </Wrap>
                  </ModalBody>
                  :
                  <ModalBody>
                    <Square>
                        <Wrap>
                        <NextLink href={'#'} target='' 
                        text={
                          <Button colorScheme='whatsapp' variant={'ghost'} leftIcon={<FaUserAstronaut/>} mt={1}>
                            Determinado
                          </Button>
                        }
                        />
                         <NextLink href={'#'} target='' 
                        text={
                          <Button colorScheme='whatsapp' variant={'ghost'} leftIcon={<FaFileInvoice/>} mt={1}>
                            Cuminicativo
                          </Button>
                        }
                        />
                         <NextLink href={'#'} target='' 
                        text={
                          <Button colorScheme='blue' variant={'ghost'} leftIcon={<FaLaptopCode/>} mt={1}>
                            Criativo
                          </Button>
                        }
                        />
                         <NextLink href={'#'} target='' 
                        text={
                          <Button colorScheme='blue' variant={'ghost'} leftIcon={<FaCheck/>} mt={1}>
                            Foco em resultados
                          </Button>
                        }
                        />
                        </Wrap></Square>
                      <Divider></Divider>
                  </ModalBody>
                  }
                  <ModalFooter>
                      
                  </ModalFooter>
              </ModalContent>
            </Modal>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }