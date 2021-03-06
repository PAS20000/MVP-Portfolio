import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoLeaf,
    IoLogoAmazon,
    IoLogoReact
  } from 'react-icons/io5';
import { ReactElement } from 'react';
import { SiVercel } from "react-icons/si";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Home() {

    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={useColorModeValue('orange.400','white')}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('orange.100', 'purple.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              PAS.dev
            </Text>
            <Heading>Bem vindo(a) ao meu portfólio</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
                Este site foi construido como forma de entreterimento e aprendizado,
                as tecnologias utilizadas no mesmo foram:
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={SiVercel} color={'gray.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('gray.100', 'gray.900')}
                text={'Nextjs'}
              />
              <Feature
                icon={<Icon as={IoLogoReact} color={'cyan.500'} w={5} h={5} />}
                iconBg={useColorModeValue('cyan.100', 'cyan.900')}
                text={'React'}
              />
              <Feature
                icon={
                  <Icon as={IoLeaf} color={'green.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Mongodb'}
              />
                <Feature
                icon={
                  <Icon as={IoLogoAmazon} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'S3 amazon'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                 useColorModeValue('/img/backL.jpg', '/img/back.png' )
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }