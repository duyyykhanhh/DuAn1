import React, { useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  color,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { FaHeartBroken } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const WishProduct = (props) => {
  const toast = useToast();
  const { data, handleDelete } = props;
  const userID = Cookies.get("userID");
  const {
    prodID,
    prodName,
    prodImg,
    prodPrice,
    prodPriceSale,
    colorID,
    ramID,
    ram,
    color,
    storage_value,
    storageID,
  } = data;

  const handleAdd = () => {
    let flag = false;
    const userID = Cookies.get("userID");
    axios
      .get(`${process.env.REACT_APP_DATABASE_API_URL}/wishlist/${userID}`)
      .then((res) => {
        res.data.map((i) => {
          if (i.prodID === data.prodID) {
            flag = true;
          }
        });
        if (flag) {
          toast({
            position: "top",
            title: "Sản phẩm đang trong giỏ hàng",
            description: `${prodName} hiện đã trong giỏ hàng`,
            status: "success",
            duration: 500,
            isClosable: true,
          });
        } else {
          const newData = {
            userID: userID,
            prodID: prodID,
            colorID: colorID,
            storageID: storageID,
            ramID: ramID,
          };
          axios
            .post(`${process.env.REACT_APP_DATABASE_API_URL}/cart`, newData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          toast({
            position: "top",
            title: "Đơn hàng đã được thêm vào giỏ hàng",
            description: `${prodName} thêm vào giỏ hàng thành công`,
            status: "success",
            duration: 500,
            isClosable: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Center>
        <Image
          src={prodImg}
          alt={prodName}
          p="5"
          justifyItems="center"
          w={["150px", "80%", "auto"]}
          h={["150px", "80%", "180px"]}
          objectFit="cover"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "translateY(-10px)" }}
        />
      </Center>
      <Box
        h="10"
        w="100%"
        fontFamily="Arial"
        color="#424245"
        lineHeight="120%"
        marginBottom="3"
        textOverflow="ellipsis"
        overflow="hidden"
        _hover={{ color: "red" }}
        className="box_1"
        fontSize={{ base: "15px", md: "20px", lg: "17px" }}
        fontWeight="700"
      >
        {prodName} {color} {storage_value}
      </Box>
      <Center w="100%" h="70px" marginBottom="2">
        <Box>
          <Heading
            as="h3"
            fontSize={{ base: "10px", md: "15px", lg: "16px" }}
            color="red"
            fontWeight="650"
          >
            Giá mới:{" "}
            {prodPrice &&
              prodPrice.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
          </Heading>
          <Text
            fontSize={{ base: "10px", md: "15px", lg: "16px" }}
            mt={2}
            fontWeight="bold"
            color="blackAlpha.600"
            textDecoration="line-through"
          >
            Giá gốc:{" "}
            {prodPriceSale &&
              prodPriceSale.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
          </Text>
        </Box>
      </Center>
      <Flex
        w="100%"
        justifyContent="space-around"
        borderTop="1px solid rgb(202, 201, 201)"
      >
        <Button
          w=""
          borderRadius="0"
          color="gray"
          bg="white"
          _hover={{ color: "red", fontWeight: "bold" }}
          onClick={() => handleDelete(userID, prodID, colorID, storageID,ramID)}
        >
          <FaHeartBroken fontSize="25px" />
        </Button>
        <Button
          borderRadius="0"
          color="gray"
          bg="white"
          _hover={{ color: "green", fontWeight: "bold" }}
          onClick={handleAdd}
        >
          <FaCartPlus fontSize="25px" />
        </Button>
      </Flex>
    </Box>
  );
};

export default WishProduct;
