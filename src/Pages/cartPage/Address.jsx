import "./cartstyle.css";

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";

import { Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";
import uuid from "react-uuid";

const Address = () => {
  const breakpoints = {
    base: "320px", // 0px
    sm: "480px", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "600px", // ~768px
    lg: "800px", // ~992px
    xl: "768px", // ~1280px
    "2xl": "1024px", // ~1536px
  };

  const [inputValueHo, setInputValueHo] = useState("");
  const [inputValueTen, setInputValueTen] = useState("");
  const [inputValueDiachi, setInputValueDiachi] = useState("");
  const [inputValueDuong, setInputValueDuong] = useState("");
  const [inputValueSdt, setInputValueSdt] = useState("");

  const [error, setError] = useState("");
  const [errorTen, setErrorTen] = useState("");
  const [errorDiachi, setErrorDiachi] = useState("");
  const [errorDuong, setErrorDuong] = useState("");
  const [errorSdt, setErrorSdt] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isValidQH, setIsValidQH] = useState(true);

  const handleInputChangeHo = (e) => {
    const value = e.target.value;
    // Cập nhật state error về giá trị rỗng khi người dùng thay đổi dữ liệu

    if (value.trim() === "") {
      setError("Họ không được bỏ trống");
    } else if (/[!@#$%^&*(),.?":{}|<>0-9]/.test(value)) {
      setError("Họ không được chứa ký tự đặc biệt");
    } else {
      setError("");
    }
    setInputValueHo(value);
  };
  const handleInputChangeTen = (e) => {
    const value = e.target.value;
    // Cập nhật state error về giá trị rỗng khi người dùng thay đổi dữ liệu

    if (value.trim() === "") {
      setErrorTen("Tên không được bỏ trống");
    } else if (/[!@#$%^&*(),.?":{}|<>0-9]/.test(value)) {
      setErrorTen("Tên không được chứa ký tự đặc biệt");
    } else {
      setErrorTen("");
    }
    setInputValueTen(value);
  };
  const handleInputChangeDiachi = (e) => {
    const value = e.target.value;
    // Cập nhật state error về giá trị rỗng khi người dùng thay đổi dữ liệu

    if (value.trim() === "") {
      setErrorDiachi("Địa chỉ không được bỏ trống");
    } else if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setErrorDiachi("Địa chỉ không được chứa ký tự đặc biệt");
    } else {
      setErrorDiachi("");
    }
    setInputValueDiachi(value);
  };
  const handleInputChangeDuong = (e) => {
    const value = e.target.value;
    // Cập nhật state error về giá trị rỗng khi người dùng thay đổi dữ liệu

    if (value.trim() === "") {
      setErrorDuong("Đường không được bỏ trống");
    } else if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setErrorDuong("Đường không được chứa ký tự đặc biệt");
    } else {
      setErrorDuong("");
    }
    setInputValueDuong(value);
  };
  const handleInputChangeSdt = (e) => {
    const value = e.target.value;
    // Cập nhật state error về giá trị rỗng khi người dùng thay đổi dữ liệu

    if (value.trim() === "") {
      setErrorSdt("Số điện thoại không được bỏ trống");
    } else if (/^\d{10,11}$/.test(value)) {
      setErrorSdt("");
    } else {
      setErrorSdt("Số điện thoại không đúng định dạng");
    }
    setInputValueSdt(value);
  };

  const username = Cookies.get("username");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const address = useRef({});
  const toast = useToast();
  const navigate = useNavigate();

  const clearAddress = () => {
    //function get username call to this router using axios to delete user: router.delete('/address/:username'
    const apiUrl = `${process.env.REACT_APP_DATABASE_API_URL}/users/address/${username}`;
    axios
      .delete(apiUrl)
      .then((response) => {
        console.log("Server response:", response.data);
        toast({
          title: "Địa chỉ được xóa thành công.",
          description: "Hãy thêm địa chỉ giao hàng mới.",
          status: "success",
          duration: 500,
          position: "top",
          isClosable: true,
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting address:", error);
      });
  };

  const handleAddressSubmit = () => {
    const newAddress = {
      username: username,
      firstname: address.current.setfirstname.value,
      lastname: address.current.setlastname.value,
      flat: address.current.setflat.value,
      state: address.current.setstate.value,
      street: address.current.setstreet.value,
      city: address.current.setcity.value,
      mobile: address.current.setmobile.value,
    };
    if (
      !newAddress.firstname ||
      !newAddress.lastname ||
      !newAddress.flat ||
      !newAddress.street ||
      !newAddress.city ||
      !newAddress.state ||
      !newAddress.mobile
    ) {
      toast({
        title: "Vui lòng nhập đầy đủ thông tin",
        status: "error",
        duration: 500,
        isClosable: true,
        position: "top",
      });

      return;
    }
    const apiUrl = `${process.env.REACT_APP_DATABASE_API_URL}/users/address`;

    if (
      !addressData ||
      !Array.isArray(addressData) ||
      addressData.length === 0
    ) {
      // If the address does not exist, perform a POST request
      axios
        .post(apiUrl, newAddress)
        .then((response) => {
          console.log("Server response:", response.data);

          toast({
            title: "Địa chỉ được thêm thành công.",
            description: "Chúng tôi sẽ sử dụng thông tin để liên hệ.",
            status: "success",
            duration: 500,
            position: "top",
            isClosable: true,
          });
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error adding address:", error);
        });
    } else {
      // If the address exists, perform a PUT request
      axios
        .put(apiUrl, newAddress)
        .then((response) => {
          console.log("Server response:", response.data);

          toast({
            title: "Địa chỉ được cập nhật thành công.",
            description: "Chúng tôi sẽ sử dụng thông tin để liên hệ.",
            status: "success",
            duration: 500,
            isClosable: true,
            position: "top",
          });
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error updating address:", error);
        });
    }
  };
  //show address data
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_DATABASE_API_URL}/users/address/${username}`,
      )
      .then((response) => {
        console.log("Server response:", response.data);
        setAddressData(response.data);
      })
      .catch((error) => {
        console.error("Error getting address:", error);
      });
  }, [username]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    fetchData(2, setProvinces);
  }, []);

  const fetchData = (depth, setData, parentCode = null) => {
    axios
      .get(
        `https://provinces.open-api.vn/api/?depth=${depth}&parent_code=${parentCode}`,
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProvinceChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    // Kiểm tra xem giá trị đã được chọn hay chưa
    if (value !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    const provinceName = e.target.value; // Giữ value là name
    setSelectedProvince(provinceName);

    if (provinceName) {
      const selectedProvinceData = provinces.find(
        (province) => province.name === provinceName,
      );
      setDistricts(selectedProvinceData.districts || []);
    } else {
      // Clear districts when no province is selected
      setDistricts([]);
    }
    setSelectedDistrict(""); // reset selected district when province changes
  };

  const handleDistrictChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    // Kiểm tra xem giá trị đã được chọn hay chưa
    if (value !== "") {
      setIsValidQH(true);
    } else {
      setIsValidQH(false);
    }

    const districtName = e.target.value;
    const selectedDistrictData = districts.find(
      (district) => district.name === districtName,
    );

    setSelectedDistrict(selectedDistrictData || {});
  };
  const renderAddressData = () => {
    if (
      !addressData ||
      !Array.isArray(addressData) ||
      addressData.length === 0
    ) {
      return (
        <Box w={{ "2xl": "66%", base: "80%" }}>
          <Text
            mt={{ "2xl": "5", base: "0" }}
            fontSize="15px"
            fontWeight="500"
            fontStyle="italic"
            width="100%"
          >
            Bạn chưa có địa chỉ nhận hàng
          </Text>
        </Box>
      );
    }

    return addressData.map((address, index) => (
      <Flex
        key={uuid()}
        w={{ "2xl": "90%", base: "100%" }}
        justifyContent={{ "2xl": "left", base: "left" }}
        flexWrap={{ base: "wrap" }}
      >
        <Flex display={"flex"} width={{ "2xl": "auto", base: "100%" }}>
          <Text mt="5" fontSize="15px" fontWeight="700">
            {address.firstname} {address.lastname}
          </Text>
          <Text mt="5" fontSize="15px" fontWeight="700" ml="2">
            (+84) {address.mobile}
          </Text>
        </Flex>

        <Text
          mt={{ "2xl": "5", base: "-2" }}
          fontSize={{ "2xl": "15px", base: "13px" }}
          ml="2"
        >
          Địa chỉ: {address.flat}, {address.street} - {address.state} -{" "}
          {address.city}
        </Text>
      </Flex>
    ));
  };

  return (
    <Center
      border={"1px solid rgb(224, 224, 225)"}
      width="100%"
      display="flex"
      flexWrap="wrap"
      padding="16px"
    >
      <div>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionPanel>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Địa chỉ giao hàng</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Flex flexDirection="column" gap="1rem">
                      <Input
                        placeholder="Họ*"
                        value={inputValueHo}
                        onChange={handleInputChangeHo}
                        isRequired
                        ref={(e) => (address.current["setfirstname"] = e)}
                      />
                      {error && <div style={{ color: "red" }}>{error}</div>}
                      <Input
                        placeholder="Tên*"
                        value={inputValueTen}
                        onChange={handleInputChangeTen}
                        isRequired
                        ref={(e) => (address.current["setlastname"] = e)}
                      />
                      {errorTen && (
                        <div style={{ color: "red" }}>{errorTen}</div>
                      )}
                      <Input
                        placeholder="Địa chỉ cụ thể (Tòa nhà)*"
                        value={inputValueDiachi}
                        onChange={handleInputChangeDiachi}
                        isRequired
                        ref={(e) => (address.current["setflat"] = e)}
                      />
                      {errorDiachi && (
                        <div style={{ color: "red" }}>{errorDiachi}</div>
                      )}
                      <Input
                        placeholder="Đường*"
                        value={inputValueDuong}
                        onChange={handleInputChangeDuong}
                        isRequired
                        ref={(e) => (address.current["setstreet"] = e)}
                      />
                      {errorDuong && (
                        <div style={{ color: "red" }}>{errorDuong}</div>
                      )}

                      <Select
                        id="provinces"
                        isRequired
                        onChange={handleProvinceChange}
                        value={selectedProvince || ""}
                        ref={(e) => (address.current["setcity"] = e)}
                      >
                        <option value="">Chọn tỉnh / thành phố</option>
                        {provinces.map((province) => (
                          <option key={uuid()} value={province.name}>
                            {province.name}
                          </option>
                        ))}
                      </Select>
                      {!isValid && (
                        <p style={{ color: "red" }}>
                          Vui lòng chọn tỉnh/thành phố
                        </p>
                      )}

                      <Select
                        id="districts"
                        onChange={handleDistrictChange}
                        value={selectedDistrict.name || ""}
                        ref={(e) => (address.current["setstate"] = e)}
                      >
                        <option value="">Chọn quận / huyện</option>
                        {districts.map((district) => (
                          <option
                            key={uuid()}
                            value={district.name}
                            data-code={district.code} // Lưu trữ code trong một thuộc tính tùy chỉnh
                          >
                            {district.name}
                          </option>
                        ))}
                      </Select>
                      {!isValidQH && (
                        <p style={{ color: "red" }}>Vui lòng chọn quận/huyện</p>
                      )}
                      <Input
                        type="number"
                        value={inputValueSdt}
                        onChange={handleInputChangeSdt}
                        isRequired
                        placeholder="Số điện thoại*"
                        ref={(e) => (address.current["setmobile"] = e)}
                      />
                      {errorSdt && (
                        <div style={{ color: "red" }}>{errorSdt}</div>
                      )}
                      <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() => {
                          handleAddressSubmit();
                        }}
                      >
                        SUBMIT
                      </Button>
                      <Button
                        variant="ghost"
                        colorScheme="blue"
                        mr={3}
                        onClick={onClose}
                      >
                        Cancel
                      </Button>
                    </Flex>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <Center
        display="flex"
        justifyContent={"space-between"}
        w="100%"
        mt={{ "2xl": "7" }}
      >
        <Text fontSize={{ "2xl": "25px", base: "20px" }} fontWeight="700">
          <Icon
            as={FaMapMarkerAlt}
            w={{ "2xl": "8", base: "4" }}
            h={{ "2xl": "8", base: "4" }}
            color="black"
            marginRight="5px"
          />
          Địa chỉ nhận hàng
        </Text>
        {!addressData ||
        !Array.isArray(addressData) ||
        addressData.length === 0 ? (
          <Button
            onClick={onOpen}
            colorScheme="blue"
            variant="outline"
            h={{ "2xl": "30px", base: "20px" }}
            color="#4a90e2"
            border="1px solid #3788FA"
            borderRadius="5px"
            marginRight="5px"
            fontSize={{ "2xl": "18px", base: "10px" }}
            textAlign={"center"}
            justifyContent={"center"}
          >
            Nhập địa chỉ giao hàng mới
          </Button>
        ) : (
          <Box
            padding={{ "2xl": "0", base: "0" }}
            display="flex"
            justifyContent="space-between"
            w={{ "2xl": "30%", base: "40%" }}
            h={{ "2xl": "auto", base: "auto" }}
          >
            <Button
              h={{ "2xl": "30px", base: "20px" }}
              color="#ff2323"
              border="1px solid red"
              borderRadius="5px"
              marginRight="5px"
              fontSize={{ "2xl": "18px", base: "10px" }}
              textAlign={"center"}
              justifyContent={"center"}
            >
              Mặc định
            </Button>
            <Button
              fontSize={{ "2xl": "18px", base: "10px" }}
              h={{ "2xl": "30px", base: "20px" }}
              color="#4a90e2"
              border="1px solid #3788FA"
              borderRadius="5px"
              onClick={onOpen}
              marginRight="5px"
            >
              Thay đổi
            </Button>
            <Button
              h={{ "2xl": "30px", base: "20px" }}
              fontSize={{ "2xl": "18px", base: "10px" }}
              color="#4a90e2"
              border="1px solid #3788FA"
              borderRadius="5px"
              onClick={clearAddress}
            >
              Xóa
            </Button>
          </Box>
        )}
      </Center>
      {renderAddressData()}
    </Center>
  );
};

export default Address;
