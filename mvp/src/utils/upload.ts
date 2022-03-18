import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new aws.S3({});

const upload = multer({
    storage: multerS3({
        s3,
        bucket: process.env.AWS_BUCKET,
        acl:'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata(req, file:any, cb) : void {
            cb(null, { fieldName: file.fieldname });
        },
        key(req, file, cb) :void{
            cb(null, `${Date.now()-Math.random()}-${file.originalname}`)
        },
    }),
});

export default upload