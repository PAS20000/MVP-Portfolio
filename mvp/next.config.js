export const images = {
    domains: [
	     'lh3.googleusercontent.com',
             'media-exp1.licdn.com',
             'avatars.githubusercontent.com'
],
}
export const trailingSlash = true
export async function headers() {
    return [
	{
        source: '/:path*',
        headers: [{
            key: 'X-Frame-Options',
            value: 'DENY',
            
        }, 
        {
            key: 'x-robots-tag',
            value: 'all'
        },
	{	
	   key:'Access-Control-Allow-Origin',
           value:'*'
	}
      ]
   }]
}