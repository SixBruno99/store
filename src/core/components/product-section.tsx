import { Flex, useMediaQuery } from "@chakra-ui/react";

import { Product } from "./products";
import { useProduct } from "../../contexts/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation, Autoplay } from "swiper/modules";

interface IProps {
  category: string;
}

export const ProductSection = ({ category }: IProps) => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const { products } = useProduct();

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      slidesPerView={isLargerThan1024 ? 4 : 1}
      navigation={isLargerThan1024 ? true : false}
      modules={[Pagination, Keyboard, Navigation, Autoplay]}
    >
      {products
        .filter((product) => product.category === category)
        .map((product, index) => (
          <SwiperSlide data-hash={`slide${index}`} key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
              image={product.image}
              rating={{
                rate: product.rating.rate,
                count: product.rating.count,
              }}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
