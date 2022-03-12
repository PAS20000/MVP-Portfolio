import Head from 'next/head'

const NextHead = ({ title, description, robots, googleBot, canonical }) => {
    return (
        <>
            <Head>
                <meta httpEquiv='content-language' content='pt' key='language'/>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport'/>
                <title key='title'>{title}</title>
                {!!canonical &&
                    <link rel="canonical" href="http://localhost:3000/" key='canonical'/>
                }
                <meta property='og:type' content='website' key='website'/>
                <meta property='og:locale' content='pt_BR' key='locale'/>
                <meta property='og:url' content='http://localhost:3000/' key='url'/>
                <meta property='og:title' content={title} key='titleog'/>
                <meta property='og:site_name' content='AnimeSoul' key='site_name'/>
                <meta property='og:description' content={description} key='descriptionog'/>
                <meta property='og:image' content='http://localhost:3000/img/anime-logo-dark.png' key='imageog'/>
                <meta property='og:image:type' content='image/png' key='imageogpng'/>
                <meta property='og:image:width' content='400' key='imageogpngwidth'/>
                <meta property='og:image:height' content='300' key='imageogpngheight'/> 
                <meta name='application-name' content='AnimeSoul' key='appname'/>
                <meta name='description' content={description} key='description'/>
                <meta name='robots' content={robots} key='robots'/>
                {!!googleBot &&
                    <meta name='googlebot' content='index, follow' key='googlerobot'/>
                }
                <meta name='author' content='AnimeSoul' key='author'/>
                <meta name='creator' content='AnimeSoul' key='creator'/>
            </Head>
        </>
    )
}
export default NextHead