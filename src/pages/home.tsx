import { Flex, useMediaQuery } from "@chakra-ui/react";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../style/swiper.css";

// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper/modules";

// Contexts
import { useProduct } from "../contexts/product";

// Components
import { Product } from "../core/components/products";
import { Filters } from "../core/components/filter";

export function Home() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const { filteredProducts } = useProduct();
  // console.log("products", products);
  // console.log("categories", categories);

  return (
    <Flex
      marginY={12}
      maxWidth={isLargerThan1024 ? "8xl" : "full"}
      marginX="auto"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      minHeight="calc(100vh - 112px)"
    >
      <Filters />
      <Flex maxWidth="full">
        <Swiper
          slidesPerView={isLargerThan1024 ? 4 : 1}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={isLargerThan1024 ? true : false}
          modules={[Pagination, Keyboard, Navigation, Autoplay]}
        >
          {filteredProducts .map((product, index) => (
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
      </Flex>
    </Flex>
  );
}
