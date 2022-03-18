import React, { useEffect, useState } from 'react';
import { Box, IconButton, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import ProductCard from '../Cards/ProductCard';
import { axiosConfig } from '../../utils/service/axiosConfig';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {

  const [slider, setSlider] = React.useState<Slider | null>(null);
  const [products, setProducts] = useState([])
  
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  useEffect(() => {
    const getProducts = async () => {
      const products = await axiosConfig.get('/api/product/')
      setProducts(products.data.products)
    }
    
    getProducts()
  }, [])
  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme={useColorModeValue("orange","purple")}
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme={useColorModeValue("orange","purple")}
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {products.slice(0,3).map((product) => (
          <ProductCard 
            key={product._id}
            product_id={product._id}
            productImage={product.productImage}
            productName={product.productName} 
            productPrice={product.price}
            productCategory={product.category}
          />
        ))}
      </Slider>
    </Box>
  );
}