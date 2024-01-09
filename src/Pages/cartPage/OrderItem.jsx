import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSingleDataWish } from "../SingleProduct/SingleProduct";

const OrderItem = ({
  userID,

  ramID,


  quantity,
  colorID,
  storageID,
  name,
  img,
  price,
  priceSale,
  color,
  storage,
  id,
  QTY,
  DeleteRequest,
}) => {
  const breakpoints = {
    base: "320px", // 0px
    sm: "480px", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "600px", // ~768px
    lg: "800px", // ~992px
    xl: "768px", // ~1280px
    "2xl": "1024px", // ~1536px
  };
  const singleData = {
    userID,
    id,
    colorID,
    ramID,
    storageID,
    quantity,
    color,
    storage,
    name,
    img,
    priceSale,
    price,
    QTY,
  };
  const toast = useToast();

  const [count, setCount] = useState(quantity);
  //handle change for this  onChange={(e) => setCount(e.target.value)}

  const handleChange = (e, userID, id, colorID, storageID, ramID) => {
    let newCount = parseInt(e.target.value, 10);
    if (!isNaN(newCount) && newCount >= 1) {
      setCount(newCount);
      let number = parseInt(price);

      dispatch({ type: "priceChange", payload: number * newCount });

      // Get the current cart data from session storage
      const cartData = JSON.parse(sessionStorage.getItem("cart")) || {};

      // Get the user's cart directly using the userID
      const userCart = cartData[userID] || [];
      // Find the index of the item to be deleted based on specified conditions
      const itemIndex = userCart.findIndex(
        (item) =>
          item.prodID === id &&
          (colorID === null || item.colorID === colorID) &&
          (storageID === null || item.storageID === storageID)&&
          (ramID === null || item.ramID === ramID)
      );

      // If the item is found, change it quantity from the cart
      if (itemIndex !== -1) {
        // Remove the item from the array
        userCart[itemIndex].quantity = newCount;

        // Update the cart data in session storage
        cartData[userID] = userCart;
        sessionStorage.setItem("cart", JSON.stringify(cartData));
      }
      if (newCount > QTY) {
        toast({
          title: "Lỗi",
          description: "Số lượng vượt quá giới hạn",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        newCount = quantity;
        setCount(quantity);
      }
    }
  };

  const dispatch = useDispatch();
  var navigate = useNavigate();

  const handleInc = () => {
    const newCount = count + 1;
    let number = parseInt(price);
    dispatch({ type: "priceIncrease", payload: number });
    handleChange(
      { target: { value: newCount } },
      userID,
      id,
      colorID,
      storageID,
      ramID
    );
  };

  const handleDec = () => {
    if (count > 1) {
      const newCount = count - 1;
      let number = parseInt(price);
      dispatch({ type: "priceDecrease", payload: number });
      handleChange(
        { target: { value: newCount } },
        userID,
        id,
        colorID,
        ramID,
        storageID,
      );
    }
  };

  const handleWish = (data) => {
    let newData = {};
    for (let i in data) {
      if (i === "id") {
        continue;
      }
      newData[i] = data[i];
    }

    postSingleDataWish(newData)
      .then((res) => {
        navigate("/wishlist");
        toast({
          title: "Đã thêm vào giỏ hàng",
          description: "Product Added",
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
          position: "top",
        });
      })
      .catch((err) => {
        toast({
          title: "Đã xảy ra lỗi",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
          position: "top",
        });
      });
  };

  return (
    <Flex
      key={id}
      className=""
      border={"1px solid rgb(224, 224, 225)"}
      flexDirection="column"
      width={"100%"}
      boxShadow={"rgb(0 0 0 / 6%) 0px 2px 2px"}
      borderRadius="4px"
    >
      <Flex
        m="1"
        p="1"
        flexDirection={{
          base: "row",
          sm: "row",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent={{ sm: "center", base: "center" }}
        alignItems={{
          base: "normal",
          md: "normal",
          lg: "normal",
          xl: "normal",
          "2xl": "normal",
        }}
        gap={{ sm: "8px", base: "7px" }}
      >
        <Flex border={"0px solid blue"} flexWrap="wrap">
          <Box>
            <Image
              src={img}
              alt={name}
              width={{ "2xl": "60px", base: "60px" }}
            />
            <Box>
              <Button
                width="100%"
                h="auto"
                fontSize="12px"
                m="auto"
                border="none"
                backgroundColor={"white"}
                color="gray"
                _hover={{ color: "red" }}
                onClick={() => {
                  DeleteRequest(userID, id, colorID, storageID,ramID);
                }}
              >
                <DeleteIcon />
                xóa
              </Button>
            </Box>
          </Box>

          <Box justifyContent="center" display="flex" width="90%"></Box>
        </Flex>
        {/* //part2-line 46 to 71 */}
        <Flex
          flexDirection={"column"}
          border={"0px solid green"}
          textAlign={{
            base: "left",
            md: "left",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          width={{ "2xl": "50%", base: "70%" }}
          gap={2}
        >
          <Heading
            fontSize="15px"
            fontWeight="550"
            color="black"
            _hover={{ color: "red" }}
            lineHeight={"1.1"}
          >
            {name}
          </Heading>

          <Flex>
            <Heading fontSize="10px" color={"gray"}>
              {color} {storage}
            </Heading>
          </Flex>
        </Flex>
        {/* //part3- line 71 to 99*/}
        <Flex
          flexDirection={"column"}
          textAlign={{
            base: "center",
            md: "right",
            lg: "right",
            xl: "right",
            "2xl": "right",
          }}
          width={{ "2xl": "25%", base: "35%" }}
          gap={1}
          fontWeight="500"
        >
          <Heading fontSize="15px" color={"red"} fontWeight="500">
            {price &&
              price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
          </Heading>
          <Heading
            fontSize="13px"
            color={"gray"}
            fontWeight="500"
            textDecoration="line-through"
          >
            {priceSale &&
              priceSale.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
          </Heading>
          <Box
            display={"flex"}
            justifyContent={{ "2xl": "end", base: "center" }}
            fontSize="15px"
          >
            <Button onClick={handleDec} size="xs" color="gray">
              -
            </Button>
            <Input
              type="number"
              value={count}
              onChange={handleChange}
              size="xs"
              width="30px"
              textAlign="center"
              marginX={2}
            />
            <Button onClick={handleInc} size="xs" color="blue">
              +
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OrderItem;
