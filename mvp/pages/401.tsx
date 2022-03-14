import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import NextImage from '../src/components/Contracts/NextImage/NextImage';
import NextLink from '../src/components/Contracts/NextLink/NextLink';

export default function NotFound() {
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
        verifique se você está logado.
      </Text>
      <NextImage 
        src='/img/stop.gif' 
        height={300} 
        width={400} 
        alt='image-stop' 
        className={undefined}
        layout={undefined}
      />
      <NextLink
      href={'/'}
      target={undefined}
      text={
      <Button
        colorScheme={useColorModeValue('orange','purple')}
        bgGradient={
        useColorModeValue(
            "linear(to-r, orange.400, orange.500, orange.600)",
            "linear(to-r, purple.400, purple.500, purple.600)",
        )}
        color="white"
        variant="solid"
      >
        Voltar para o início
      </Button>
      }
      />
    </Box>
  );
}