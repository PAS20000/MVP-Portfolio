import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

aws.config.update({
    secretAccessKey: process.env.AWSSECRET_KEY,
    accessKeyId: process.env.AWSACCESS_KEY,
    region: process.env.AWSREGION
});

const s3 = new aws.S3({});

const upload = multer({
    storage: multerS3({
        s3,
        bucket: process.env.AWSBUCKET,
        acl:'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata(req: any, file: { fieldname: any; }, cb: (arg0: any, arg1: { fieldName: any; }) => void) : void {
            cb(null, { fieldName: file.fieldname });
        },
        key(req: any, file: { originalname: any; }, cb: (arg0: any, arg1: string) => void) :void {
            cb(null, `${Date.now()-Math.random()}-${file.originalname}`)
        },
    }),
});

export default upload