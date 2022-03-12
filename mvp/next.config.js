module.exports = {
    images: {
        domains: [
            'lh3.googleusercontent.com',
             'media-exp1.licdn.com',
             'avatars.githubusercontent.com'
    ],
    },
    trailingSlash: true,
    async headers(){
        return [{
            source:'/:path*',
            headers:[{
                key:'X-Frame-Options',
                value:'DENY',
                key:'x-robots-tag',
                value:'all'
            }]
        }]
    }
}