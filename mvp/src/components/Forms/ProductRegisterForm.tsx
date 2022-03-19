import { FormControl, FormLabel, useColorModeValue, Button, Input, Container, useToast } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { axiosConfig } from '../../../src/utils/service/axiosConfig'
import { Upload, Space } from 'antd';
import { FaUpload } from 'react-icons/fa'

export default function ProductRegisterForm() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState('')
    const [load, setLoad] = useState(false)
    const {data:session} = useSession()
    const [status, setStatus] = useState({img_name:'', error:false})
    const toast = useToast()
    const props = {
        _listType: 'picture-card', //TypeScript library type error
        get listType() {
            return this._listType;
        },
        set listType(value) {
            this._listType = value;
        },
        maxCount:1,
        beforeUpload: file => {
          const ImgTypes = ['image/png','image/jpg', 'image/jfif','image/jpeg']
          if(!ImgTypes.includes(file.type)) {
            setStatus({
                img_name:file.name,
                error:true
            })
            return Upload.LIST_IGNORE;

          } else {
            setFile(file)
            setStatus({
                img_name:'', 
                error:false
            })
          }
        },
        
    }
    
    const nameChange = (e) => setName(e.target.value)
    const categoryChange = (e) => setCategory(e.target.value)
    const priceChange = (e) => setPrice(e.target.value)
    
   

    const ProductRegisterData = async () => {
        if(!name || !category || !price){
            return toast({
                title: 'Campos nulos',
                description: 'Preencha todos os campos!', 
                status: 'error',
                duration: 9000,
                isClosable:true
            })
        }
        
            const formData = new FormData();
            formData.append('productName',`${name.toUpperCase()}`);
            formData.append('category',`${category.toUpperCase()}`);
            formData.append('price',`${price.replace(',','.')}`);
            formData.append('file', file);
            formData.append('email',`${session.user.email}`);
        
       try {
        const form = document.querySelector('form')
           setLoad(true)
            const register = await axiosConfig.post('/api/product/', formData, { headers:{
                "Content-Type": "multipart/form-data"
            }})
            form.reset()
            setLoad(false)
            toast({
                title: 'Sucesso',
                description: 'Produto registrado', 
                status: 'success',
                duration: 9000,
                isClosable:true
            })

       } catch (e) {
            setLoad(false)
            toast({
                title: 'Erro',
                description: 'Produto não registrado', 
                status: 'error',
                duration: 9000,
                isClosable:true
            }), console.log(e)
       }
    }

    return(
        <FormControl isRequired >
            <Container mb={10} >
            <Space direction="vertical" style={{ width: '100%' }} size="small">
                <Upload
                name='upload'
                    {...props}
                >
                    {status.error &&
                        toast({
                            title: 'Imagem inválida',
                            description: `${status.img_name}, foi recusada, 
                            use imagens nos seguintes formatos: jpg, png e jfif`,
                            status: 'error',
                            duration: 9000,
                            isClosable:true
                        })
                    }
                    <Button leftIcon={<FaUpload/>}
                        fontFamily={'heading'}
                        type='button'
                        mt={8}
                        w={'full'}
                        bgGradient={useColorModeValue("linear(to-r, red.400,orange.400)","linear(to-r, purple.400,pink.400)")}
                        color={'white'}
                        _hover={{
                        bgGradient: useColorModeValue('linear(to-r, orange.600,red.600)','linear(to-r, pink.600,purple.600)'),
                        boxShadow: 'xl',
                    }}>
                        {' '}Enviar imagem 
                    </Button>
                </Upload>
            </Space>
            </Container>
            <FormLabel htmlFor='Product name' mt={1}>
            Nome:
            </FormLabel>
            <Input
            defaultValue={''}
            placeholder="Nome do produto"
            bg={useColorModeValue('white','gray.800')}
            border={0}
            color={'gray.500'}
            _placeholder={{
                color: 'gray.500',
            }}
            type='text'
            onChange={nameChange}
            maxLength={20}
            />
            <FormLabel htmlFor='Category' mt={1}>
            Categoria
            </FormLabel>
            <Input
            defaultValue={''}
            placeholder="Categoria"
            bg={useColorModeValue('white','gray.800')}
            border={0}
            color={'gray.500'}
            _placeholder={{
                color: 'gray.500',
            }}
            type='text'
            onChange={categoryChange}
            maxLength={20}
            />
            <FormLabel htmlFor='Price' mt={1}>
            Preço:
            </FormLabel>
            <Input
            defaultValue={''}
            placeholder="Por padrão é aplicado 10% de desconto"
            bg={useColorModeValue('white','gray.800')}
            border={0}
            color={'gray.500'}
            _placeholder={{
                color: 'gray.500',
            }}
            onChange={priceChange}
            type={'number'}
            />
            {load ? 
            <Button
            isLoading
            fontFamily={'heading'}
            type='button'
            mt={8}
            w={'full'}
            bgGradient="linear(to-r, green.400, teal.400)"
            color={'white'}
            _hover={{
            bgGradient: 'linear(to-r, green.600, teal.600)',
            boxShadow: 'xl',
            }}>
            Registrar
            </Button>
            :
            <Button
            onClick={ProductRegisterData}
            fontFamily={'heading'}
            type='button'
            mt={8}
            w={'full'}
            bgGradient="linear(to-r, green.400, teal.400)"
            color={'white'}
            _hover={{
            bgGradient: 'linear(to-r, green.600, teal.600)',
            boxShadow: 'xl',
            }}>
            Registrar
            </Button>
        }
      </FormControl>
    )
}
