import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Square,
  Divider
} from '@chakra-ui/react';
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextImageLink from '../contracts/NextImageLink/NextImageLink';
import NextLink from '../contracts/NextLink/NextLink';
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Nav() {
  const { data:session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.200', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
              <NextImageLink src='/img/logo.png' href='/' width={35} height={35} alt='logo' className={undefined} target={undefined}/>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              {!session &&
                <Button onClick={onOpen} colorScheme='orange' variant='ghost'>Login/Registro</Button>
              }
              <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Autenticação rápida :)</ModalHeader>
                  <Divider/>
                  <ModalCloseButton />
                  <ModalBody>
                    <Square>
                    <Button colorScheme='linkedin' leftIcon={<FaLinkedin/>} onClick={() => signIn("linkedin")} mr={3}>
                      Linkedin
                    </Button>
                    <Button colorScheme='purple' leftIcon={<FaGithub/>} onClick={() => signIn("github")} mr={3}>
                      Github
                    </Button>
                    <Button colorScheme='red' leftIcon={<FaGoogle/>} onClick={() => signIn("google")} mr={3}>
                      Gmail
                    </Button>
                    </Square>
                  </ModalBody>
                  <Divider/>
          <ModalFooter>

          </ModalFooter>
        </ModalContent>
      </Modal>
            {session &&
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={session.user.image}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={session.user.image}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>
                      {session.user.name}
                    </p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <NextLink href='/dashboard/' text={<MenuItem>Painel de controle</MenuItem>} className={undefined} target={undefined}/>
                  <NextLink href='/perfil/' text={<MenuItem>Perfil</MenuItem>}  className={undefined} target={undefined}/>
                  <MenuItem onClick={() => signOut()}>
                    Sair
                  </MenuItem>
                </MenuList>
              </Menu>
              }
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}