import { Box, Heading, Text, Button, useColorModeValue, Wrap, Square, useToast } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import NextImage from '../src/components/Contracts/NextImage/NextImage';
import NextLink from '../src/components/Contracts/NextLink/NextLink';
import LoginModal from '../src/components/Navbar/LoginModal';
import { axiosConfig } from '../src/utils/service/axiosConfig';

export default function NotFound() {
  const {data:session} = useSession()
  const router = useRouter()
  const toast = useToast()

    const userRegister = async () => {
      axiosConfig.post('/api/user/', {
        name:session.user.name,
        email:session.user.email,
        image:session.user.image
      })
      toast({
        title: 'Sua conta está ativa',
        description: "Tudo certo!",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setTimeout(() => {
        router.push('/dashboard/')
      }, 600);    
    }
    
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient={useColorModeValue(
            "linear(to-r, orange.400, orange.500, orange.600)",
            "linear(to-r, purple.400, purple.500, purple.600)",
        )}
        backgroundClip="text">
        401
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Você não tem autorização para acessar esta página.
      </Text>
      <Text color={useColorModeValue('gray.500','gray.400')} mb={6}>
          {session ? 'Sua conta não foi verificada':'Acesse sua conta para continuar'}
      </Text>
      <NextImage 
        src='/img/stop.gif' 
        height={300} 
        width={400} 
        alt='image-stop' 
        className={undefined}
        layout={undefined}
      />
      <Square>
        <NextLink
        href={'/'}
        target={undefined}
        text={
        <Button
          mr={1}
          colorScheme={useColorModeValue('orange','purple')}
          bgGradient={
          useColorModeValue(
              "linear(to-r, orange.400, orange.500, orange.600)",
              "linear(to-r, purple.400, purple.500, purple.600)",
          )}
          _hover={{
            opacity: '0.5'
          }}
          color="white"
          variant="solid"
        >
          Início
        </Button>
        }
        />
        {session &&
          <Button
            onClick={userRegister}
            ml={2}
            colorScheme={useColorModeValue('orange','purple')}
            bgGradient={
            useColorModeValue(
                "linear(to-r, green.400, green.500, green.600)",
                "linear(to-r, teal.400, teal.500, teal.600)",
            )}
            color="white"
            variant="solid"
            _hover={{
              opacity: '0.5'
            }}
          >
            Verificar conta
          </Button>
        }
        <LoginModal variant={'solid'} darkColor={'green'} lightColor={'red'}/>
      </Square>
    </Box>
  );
}