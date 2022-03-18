import { Box } from '@chakra-ui/react';
import NextImage from '../Contracts/NextImage/NextImage';

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
        <NextImage src='/img/load.gif' 
        width={450} 
        height={450} 
        alt={'load'} 
        className={undefined} 
        layout={undefined} />
    </Box>
  );
}