import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    Avatar,
    useBreakpointValue,
    Center,
    Wrap,
    WrapItem,
    Square,
  } from '@chakra-ui/react';
import { FaShopify } from 'react-icons/fa';
  import { MdShoppingCart } from 'react-icons/md';
import NextLink from '../Contracts/NextLink/NextLink';
  
  export default function ProductDetailsCard({ product }) {
    return (
    <article>
      <Container maxW={'7xl'}>
        
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 2}}
          py={{ base: 18, md: 24 }}>
          <Box boxSize={'100%'}>
             <Image
              rounded={'md'}
              alt={'image-' + product.productName}
              src={
                product.productImage
              }
              fit={'cover'}
              align={'center'}
              w={{base:'100%'}}
              h={{ base: '100%', sm: '400px', lg: '600px' }}
              boxShadow={'dark-lg'}
            />
            </Box>
          <Stack spacing={{ base: 5 }} boxShadow={'dark-lg'} padding={'5'} wrap='wrap' h={'600px'}>
          
            <Box as={'header'}>
              <Heading
                textTransform={'capitalize'}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {product.productName}
              </Heading>
              <Text textTransform={'uppercase'} color={'gray'} p={'1'}>
                {product.category}
              </Text>
              <Text
                color={useColorModeValue('orange.500','purple.400')}
                fontWeight={500}
                fontSize={'2xl'}>
                ${(parseFloat(product.price) - parseFloat(product.price) * 0.10).toFixed(2).toString().replace('.',',')} USD
                
              </Text>
              <Text textDecoration={'line-through'} color={'red.600'}>
                ${product.price.replace('.',',')} USD
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
                
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
                <Button leftIcon={<MdShoppingCart/>} colorScheme={'green'} w={'full'} disabled>
                  Adicionar ao carrinho
                </Button>
              </VStack>
            </Stack>
            <Center>
              <Avatar
                    name={product.user.name}
                    src={product.user.image}
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
                  <Box fontSize={'lg'} ml={3} mr={3}>
                    Registrado por: 
                    <Text color={useColorModeValue('orange.400','purple.400')} fontWeight={500}>
                      {product.user.name}
                    </Text>
                  </Box>
                  
            </Center>
            <Center>
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
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </article>
    );
  }