import { Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useToast } from '@chakra-ui/react'
import { useState } from 'react';

export default function UploadButton({}){
    const [status, setStatus] = useState({img_name:'', error:false})
    const toast = useToast()
    const props = {
        beforeUpload: file => {
          const ImgTypes = ['image/png','image/jpg', 'image/jfif','image/jpeg']
          if(!ImgTypes.includes(file.type)) {
            setStatus({
                img_name:file.name,
                error:true
            })

            return Upload.LIST_IGNORE;

          } else {
            useState({
                img_name:'', 
                error:false
            })
          }
        },
    }
    
return(
    <Space direction="vertical" style={{ width: '100%' }} size="small">
        <Upload
            listType='picture' //TypeScript library type error
            maxCount={1} //TypeScript library type error
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
            <Button icon={<UploadOutlined />}> 
                {' '}Enviar imagem 
            </Button>
        </Upload>
    </Space>
    )
}