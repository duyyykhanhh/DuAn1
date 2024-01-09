import React, { Component } from "react";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./styles.css";
import uuid from "react-uuid";

const BannerHome = ({ type }) => {
  const settings = {
    arrows: false,
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    borderRadius: 15,
  };
  const sliderRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000); // Thay đổi số 3000 thành khoảng thời gian bạn muốn chuyển slide (đơn vị là milliseconds)
    return () => clearInterval(interval);
  }, []);
  console.log(type);
  return (
    <>
      <Center>
        <Grid
          mt={{ lg: 4, base: 4 }}
          w={{ lg: "80%", base: "90%" }}
          h="auto"
          // display={'none'}
          templateRows={{ base: "repeat(3, 2fr)", base: "repeat(1, 1fr)" }}
          templateColumns={{ base: "repeat(12, 1fr)", base: "repeat(12, 1fr)" }}
          gap={4}
        >
          <GridItem rowSpan={{ lg: 2, base: 1 }} colSpan={{ lg: 9, base: 12 }}>
            <Box position="relative">
              <Slider ref={sliderRef} {...settings}>
                {type.map((i) => (
                  <Box
                    Box
                    key={uuid()}
                    position="relative"
                    style={{ height: "100%" }}
                  >
                    <Image
                      src={i.image}
                      width="100%"
                      height={{ lg: "520px", base: "200px" }}
                      objectFit="cover"
                      borderRadius="15px"
                      overflow="hidden"
                    />
                    <Box
                      position="absolute"
                      top={{ lg: 150, base: 10 }}
                      left="40px"
                      w={{ lg: 600, base: 400 }}
                    >
                      <Text
                        color="white"
                        fontSize={{ lg: 46, base: 24 }}
                        className="amin"
                      >
                        {i.name}
                      </Text>
                      <Text
                        display={{ lg: "block", base: "none" }}
                        fontSize={14}
                        color="white"
                        className="amin"
                      >
                        {i.title}
                      </Text>
                      <Link to={`/${i.prodType}`}>
                        <Button
                          mt={5}
                          h={{ lg: 50, base: 30 }}
                          w={{ lg: 130, base: 40 }}
                          fontSize="18px"
                          borderRadius={10}
                          textDecoration="underline"
                          p={7}
                          className="amin"
                        >
                          <Link to={`/blog/${i.id}`}>
                            <Text
                              fontSize="18px"
                              textDecoration="underline"
                              m={1}
                              color={"#black"}
                            >
                              {" "}
                              Xem thêm{" "}
                            </Text>
                          </Link>
                          <ArrowForwardIcon color={"black"} fontSize={24} />
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </GridItem>

          <GridItem
            colSpan={{ lg: 3, base: 12 }}
            display={{ lg: "block", base: "none" }}
          >
            <Box position="relative">
              <Image
                src="https://isotech-demo.myshopify.com/cdn/shop/files/Frame_14.png?v=1695797658&width=1500"
                alt="Slide 3"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              />
              <Box position="absolute" top="20px" left="20px" p={1}>
                <Text color="white" fontSize="24px">
                  Phụ kiện Gaming
                </Text>
                <Link to="/keyboard">
                  <Text
                    mt={2}
                    color="white"
                    fontSize="18px"
                    textDecoration="underline"
                    transition="transform 0.3s ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                  >
                    Xem thêm
                  </Text>
                </Link>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ lg: 3, base: 12 }}
            display={{ lg: "block", base: "none" }}
          >
            <Box position="relative">
              <Image
                src="https://isotech-demo.myshopify.com/cdn/shop/files/Frame_15.png?v=1695797682&width=1500"
                alt="Slide 3"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              />
              <Box position="absolute" top="20px" left="20px">
                <Text color="white" fontSize="24px">
                  SmartWatch
                </Text>
                <Link to="/smartwatch">
                  <Text
                    mt={2}
                    color="white"
                    fontSize="18px"
                    textDecoration="underline"
                    transition="transform 0.3s ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                  >
                    Xem thêm
                  </Text>
                </Link>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={4} display={{ lg: "block", base: "none" }}>
            <Box position="relative">
              <Image
                src="https://isotech-demo.myshopify.com/cdn/shop/files/3_Banner_4.png?v=1695813715&width=550"
                alt="Slide 3"
                h={220}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              />
              <Box position="absolute" top="70px" left="20px">
                <Text color="white" fontSize="24px">
                  Loa Bluetooth
                </Text>
                <Link to="/LoudSpeaker">
                  <Text
                    mt={2}
                    color="white"
                    fontSize="18px"
                    textDecoration="underline"
                    transition="transform 0.3s ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                  >
                    Xem thêm
                  </Text>
                </Link>
              </Box>
            </Box>
          </GridItem>

          <GridItem colSpan={4} display={{ lg: "block", base: "none" }}>
            <Box position="relative">
              <Image
                src="https://isotech-demo.myshopify.com/cdn/shop/files/3_Banner_5.png?v=1695813736&width=550"
                alt="Slide 3"
                h={220}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              />
              <Box position="absolute" top="70px" left="20px">
                <Text color="black" fontSize="24px">
                  Tablet
                </Text>
                <Link to="/tablet">
                  <Text
                    mt={2}
                    color="black"
                    fontSize="18px"
                    textDecoration="underline"
                    transition="transform 0.3s ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                  >
                    Xem thêm
                  </Text>
                </Link>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={4} display={{ lg: "block", base: "none" }}>
            <Box position="relative">
              <Image
                src="https://cdn.vectorstock.com/i/preview-1x/35/83/software-development-programming-vector-24033583.jpg"
                alt="Slide 3"
                h={220}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              />
              <Box position="absolute" top="70px" left="20px" p={1}>
                <Text color="white" fontSize="24px">
                  Laptop
                </Text>
                <Link to="/laptop">
                  <Text
                    mt={2}
                    color="white"
                    fontSize="18px"
                    textDecoration="underline"
                    transition="transform 0.3s ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                  >
                    Xem thêm
                  </Text>
                </Link>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Center>
    </>
  );
};
export default BannerHome;
