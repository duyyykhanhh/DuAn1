import axios from "axios";

const apiUrlBase = `${process.env.REACT_APP_DATABASE_API_URL}/category/`;

const categoryUrls = {
  sale: apiUrlBase + "sale",
  phone: apiUrlBase + "phone",
  tablet: apiUrlBase + "tablet",
  laptop: apiUrlBase + "laptop",
  applephone: apiUrlBase + "apple/phone",
  appletablet: apiUrlBase + "apple/tablet",
  samsung: apiUrlBase + "samsung",
  xiaomi: apiUrlBase + "xiaomi",
  hp: apiUrlBase + "hp",
  asus: apiUrlBase + "asus",
  lenovo: apiUrlBase + "lenovo",
  acer: apiUrlBase + "acer",
  smartwatch: apiUrlBase + "smartwatch",
  keyboard: apiUrlBase + "keyboard",
  mouse: apiUrlBase + "mouse",
  cable: apiUrlBase + "cable",
  Battery: apiUrlBase + "Battery",
  LoudSpeaker: apiUrlBase + "LoudSpeaker",
  EarPhone: apiUrlBase + "EarPhone",
};

const fetchDataForCategory = async (category) => {
  try {
    const response = await axios.get(categoryUrls[category]);
    return response.data.map((product) => ({
      name: product.prodName,
      img: product.prodImg,
      price: product.prodPrice,
      id: product.prodID,
      QTY: product.QTY,
      sale: product.prodSale,
      original: product.prodPriceSale,
      type: product.prodType,
    }));
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
    return [];
  }
};

export let PrSale = [];
export let PrApplePhone = [];
export let PrAppleTablet = [];
export let PrSamsung = [];
export let PrXiaomi = [];
export let PrHp = [];
export let PrAsus = [];
export let PrLenovo = [];
export let PrAcer = [];
export let PrSmartWatch = [];
export let PrPhone = [];
export let PrTablet = [];
export let PrLaptop = [];
export let PrKeyboard = [];
export let PrMouse = [];
export let PrCable = [];
export let PrBattery = [];
export let PrLoudSpeaker = [];
export let PrEarPhone = [];

export async function loadPrPhone() {
  PrPhone = await fetchDataForCategory("phone");
}
export async function loadPrSale() {
  PrSale = await fetchDataForCategory("sale");
}
export async function loadPrSmartWatch() {
  PrSmartWatch = await fetchDataForCategory("smartwatch");
}

export async function loadPrApplePhone() {
  PrApplePhone = await fetchDataForCategory("applephone");
}

export async function loadPrAppleTablet() {
  PrAppleTablet = await fetchDataForCategory("appletablet");
}
export async function loadPrSamsung() {
  PrSamsung = await fetchDataForCategory("samsung");
}
export async function loadPrXiaomi() {
  PrXiaomi = await fetchDataForCategory("xiaomi");
}
export async function loadPrHp() {
  PrHp = await fetchDataForCategory("hp");
}
export async function loadPrAsus() {
  PrAsus = await fetchDataForCategory("asus");
}
export async function loadPrLenovo() {
  PrLenovo = await fetchDataForCategory("lenovo");
}
export async function loadPrAcer() {
  PrAcer = await fetchDataForCategory("acer");
}
export async function loadPrTablet() {
  PrTablet = await fetchDataForCategory("tablet");
}
export async function loadPrLaptop() {
  PrLaptop = await fetchDataForCategory("laptop");
}
export async function loadPrKeyboard() {
  PrKeyboard = await fetchDataForCategory("keyboard");
}
export async function loadPrMouse() {
  PrMouse = await fetchDataForCategory("mouse");
}
export async function loadPrCable() {
  PrCable = await fetchDataForCategory("cable");
}
export async function loadPrBattery() {
  PrBattery = await fetchDataForCategory("Battery");
}
export async function loadPrLoudSpeaker() {
  PrLoudSpeaker = await fetchDataForCategory("LoudSpeaker");
}
export async function loadPrEarPhone() {
  PrEarPhone = await fetchDataForCategory("EarPhone");
}

export const BannersCenter = [
  {
    id: 1,
    name: "Máy tính",
    imgbnct: "https://cdn.tgdd.vn/2023/10/campaign/MHD-desk-1920x500.png",
    videoUrl: "https://youtu.be/BMHg1Eq6ZF8?t=6",
  },
];

export const BannersLeft = [
  {
    id: 1,
    name: "Máy tính",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Laptop-129x129.png",
  },
];

export const BannerHomePage = [
  {
    id: 1,
    image:
      "https://isotech-demo.myshopify.com/cdn/shop/files/2_f639d039-1b63-405c-ab7d-4561d7871d76.png?v=1696134235",
    name: "Samsung Galaxy Z Fold5 5G",
    title:
      "Điện thoại này mở ra những trải nghiệm di động mới mẻ và linh hoạt thông qua khả năng gập độc đáo, đáp ứng tốt các yêu cầu từ người dùng.",
    prodType: "samsung",
  },
  {
    id: 2,
    image:
      "https://isotech-demo.myshopify.com/cdn/shop/files/2_ae5cc69e-78af-4aea-9cc7-bb616d558539.png?v=1695797615",
    name: "Iphone 15 Pro Max",
    title:
      "Hiệu năng dẫn đầu phân khúc GPU của chip A17 Pro nhanh hơn Iphone 12 Pro lên đến 70%.",
    prodType: "apple/phone",
  },
  {
    id: 3,
    image:
      "https://isotech-demo.myshopify.com/cdn/shop/files/1_1cae1484-6708-4556-af27-18db5a0b650c.png?v=1696134352",
    name: "Xiaomi 13T Pro 5G",
    title:
      "Điện thoại ấn tượng nhờ được trang bị chip Dimensity 9200+, camera 50 MP có kèm sự hợp tác với Leica cùng kiểu thiết kế tinh tế đầy sang trọng.",
    prodType: "xiaomi",
  },
];

export const CateFeatures = [
  {
    id: 1,
    name: "Máy tính",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Laptop-129x129.png",
    prodType: "laptop",
  },
  {
    id: 2,
    name: "Tablet",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Tablet-128x129.png",
    prodType: "tablet",
  },
  {
    id: 3,
    name: "Đồng hồ thông minh",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-moi-128x129.png",
    prodType: "smartwatch",
  },
  {
    id: 4,
    name: "Điện thoại độc quyền",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/dien-thoai-doc-quyen-128x128.png",
    prodType: "samsung",
  },
  {
    id: 5,
    name: "Bàm phím Gaming",
    imgcatehot:
      "https://www.ipopularshop.com/cdn/shop/products/1_04c83235-33a4-49cd-9f1e-1c611b986fd2.jpg?v=1669603425&width=1445",
    prodType: "keyboard",
  },
  {
    id: 6,
    name: "Cáp sạc di động",
    imgcatehot: "https://wklife.vn/wp-content/uploads/iCon-Cap-Sac.webp",
    prodType: "cable",
  },
  {
    id: 7,
    name: "Chuột Gaming",
    imgcatehot:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZAErUASG2TVdC3MlnhrYhKM5jcKM-g3ZEw&usqp=CAU",
    prodType: "mouse",
  },
  {
    id: 8,
    name: "Loa Bluetooth ",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Loa-128x128.png",
    prodType: "LoudSpeaker",
  },
];

export const ItemDetails1 = [
  {
    img1: "https://i.pinimg.com/564x/e4/ac/1c/e4ac1c62cd247e2df4d9d554fca44021.jpg",
    img2: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/09/banner/IP15-720-220-720x220-5.png",

    caption: "Slide 1",
  },
  {
    img2: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/10/banner/Mua-kem-720-220-720x220-1.png",
    img1: "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/19/638333306153639836_F-C1_1200x300.png",

    caption: "Slide 2",
  },
];

export const ItemDetails7 = [
  {
    img: "https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g2Ny85OTIyNDU2MTkxMDA2LmpwZ3w0MGQxZjFhYjQ0ZjU1NTQzZjJiOGJmYzZhMDg5NTY5M2Y3NzIxZDkzOTQ2Yjg4YmNmOWZlMzc4OWM0YjlkMjA2",
    caption: "Slide 1",
  },
  {
    img: "https://www.reliancedigital.in/medias/iPad-10th-Gen-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYzNDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGY2L2hiMS85OTEzNjU2NDEwMTQyLmpwZ3wxNTJiZjhiZDMxYTcyZWJmMGM4MzE4OTdlYjkzOGMwYWMzM2E0Mzk1YWFiNTQzZjdiYmJkOTJlNGQ3Yjk5MDBm",
    caption: "Slide 2",
  },
  {
    img: "https://www.reliancedigital.in/medias/iPad-Pro-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYwNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2gyMC85OTEzNjU2NTQxMjE0LmpwZ3wwOTcxYjg0MTc5NDQxNDcwNTRjMzcwNjkxYWJlNGI2NDk3ZjkyYzNhNzM5NWY3NzM0NTRiYjA3ODA1MzRiOWFk",
    caption: "Slide 3",
  },
];

export const ItemDetails9 = [
  {
    img: "https://baobihuuco.com/wp-content/uploads/2019/04/icon-giao-hang-toan-quoc.jpg",
    caption: "Slide 1",
    title: "Ship hàng toàn quốc",
    desc: "Freeship nội thành TP.HCM",
  },
  {
    img: "https://baobihuuco.com/wp-content/uploads/2019/04/icon-thanh-toan-cod.jpg",
    caption: "Slide 2",
    title: "Thanh toán khi nhận hàng",
    desc: "Thanh toán ngay khi nhận được hàng",
  },
  {
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/405450353_207490879064623_2855196075071546846_n.png?stp=dst-png_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_ohc=A_EBQMA91fgAX8CS_s2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQnImNUvtuWspp2LdMIK72Ha-IgaDYT7oh9urciYR0_Qg&oe=658DF407",
    caption: "Slide 3",
    title: "Hỗ trợ khách hàng",
    desc: "Hổ trợ khách hàng 24/24",
  },
  {
    img: "https://baobihuuco.com/wp-content/uploads/2019/04/icon-dam-bao-chat-luong-1.jpg",
    caption: "Slide 4",
    title: "Cam kết chất lượng",
    desc: "Chất lượng hoàn toàn đúng như trong mô tả",
  },
];
