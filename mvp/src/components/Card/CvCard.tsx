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
    Square
  } from '@chakra-ui/react';
import { useState } from 'react';

  import { FaNodeJs, FaReact, FaAws, FaLeaf, FaDatabase, FaJs, FaMobile } from 'react-icons/fa';


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
                #Web
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #Mobile
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
                    <Square>
                    <Button colorScheme='whatsapp' mr={1}>
                      <FaNodeJs/>
                    </Button>
                    <Button colorScheme='green' mr={1}>
                      <FaLeaf/>
                    </Button>
                    <Button colorScheme='linkedin' mr={1}>
                      <FaDatabase/>
                    </Button>
                    <Button colorScheme='blue'  mr={1}>
                      <FaAws/>
                    </Button>
                    <Button colorScheme='cyan'  mr={1}>
                      <FaReact/>
                    </Button>
                    <Button colorScheme='yellow'  mr={1}>
                      <FaJs/>
                    </Button>
                    </Square>
                  </ModalBody>
                  :
                  <ModalBody>
                      <Text>
                        Trabalho em equipe
                      </Text>
                      <Text>
                        Comunicativo
                      </Text>
                      <Text>
                        Desafios são incríveis
                      </Text>
                      <Text>
                        Criativo
                      </Text>
                      <Text>
                        Aceito críticas
                      </Text>
                  </ModalBody>
                  }
                  <Divider/>
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