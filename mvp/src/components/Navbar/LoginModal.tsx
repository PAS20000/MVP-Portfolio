import { 
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalContent,
    Square,
    Divider,
    Button,
    useDisclosure,
    useColorModeValue
} from '@chakra-ui/react';
import { useSession, signIn } from 'next-auth/react';
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function LoginModal({variant, lightColor, darkColor}) {
    const { data:session } = useSession();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <div>
             {!session &&
                <Button onClick={onOpen} colorScheme={useColorModeValue(lightColor,darkColor)} variant={variant}>Login/Registro</Button>
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
        </div>
    )
}