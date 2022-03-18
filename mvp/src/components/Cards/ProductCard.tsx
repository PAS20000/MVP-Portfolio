import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from '@chakra-ui/react';
import NextLink from '../Contracts/NextLink/NextLink';

export default function ProductCard({  
  product_id,
  productName, 
  productPrice,
  productCategory,
  productImage
}) {
 
  return (
    <Center py={12}>
      <NextLink href={`/product/${product_id}`} target={undefined} text={
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${productImage ? productImage:'/img/digital_art.jpg'})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={250}
            width={282}
            objectFit={'cover'}
            src={productImage ? productImage:'/img/digital_art.jpg'}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {productCategory}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} textTransform={'uppercase'}>
            {productName}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Flex direction={'column'}>
              <Text fontWeight={800} fontSize={'xl'} color={useColorModeValue('orange.400','purple.500')}>
                ${(parseFloat(productPrice) - parseFloat(productPrice) * 0.10).toFixed(2).toString().replace('.',',')}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'} textAlign={'center'}>
                ${productPrice.replace('.',',')}
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </Box>
      }
      />
    </Center>
  );
}