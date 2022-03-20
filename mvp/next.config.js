module.exports = {
    images: {
        domains: [
        'lh3.googleusercontent.com',
        'media-exp1.licdn.com',
        'avatars.githubusercontent.com'],
    },
    trailingSlash: true,
    async headers(){
        return [{
            source:'/:path*',
            headers:[{
                key:'X-Frame-Options',
                value:'SAMEORIGIN',
               
            },{
                key:'x-robots-tag',
                value:'all',
            }, {
                key:'x-robots-tag',
                value:'*',
            },
            {	
                key:'Access-Control-Allow-Origin',
                value:'*'
            }]
        }]
    }
}