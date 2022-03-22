import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "relaxed-fit-hoddie",
    name: "Relaxed Fit Hoddie",
    price: 1499,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F16%2Fcf%2F16cf0ed9ddfdb60b8f1290cfcf8eba84808fac0a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Light mauve/Do Good",
    categoryName: "hoddies",
    rating: 4.5,
    fastDelivery: false,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "regular-fit-hoddie",
    name: "Regular Fit Hoddie",
    price: 2299,
    img: "https://lp2.hm.com/hmgoepprod?set=source[/65/be/65bebbc0f1038ccb719ae92e56497d618246d85f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[3]&call=url[file:/product/main]",
    description: "Yellow/Sunflowers",
    categoryName: "hoddies",
    rating: 4,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "printed-oddie",
    name: "Printed Hoddie",
    price: 2699,
    img: "https://lp2.hm.com/hmgoepprod?set=source[/b3/6c/b36c74120838934479ac5450e952be23fa59c6b3.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[s],hmver[2]&call=url[file:/product/main]",
    description: "Light blue/Looney Tunes",
    categoryName: "hoddies",
    rating: 4.8,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "regular-fit-hoddie",
    name: "Regular Fit Hoddie",
    price: 1499,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F06%2F5c%2F065ceccdccf96d856b8c45a77a37014d864e497d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url[file:/product/main]",
    description: "Grey/Dreamscape",
    categoryName: "hoddies",
    rating: 3.5,
    fastDelivery: false,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "printed-hoddie",
    name: "Printed Hoddie",
    price: 1999,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5e%2F3c%2F5e3cd56c363fbe2f8778895a4b26af02a2bb9594.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Light yellow/SpongeBob",
    categoryName: "hoddies",
    rating: 3,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "relaxed-fit-hoddie",
    name: "Relaxed Fit Hoddie",
    price: 1999,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F46%2Fc6%2F46c62d75cb0620162b5b0aa9e660447f14aa98c6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Orange/The Digital Detox",
    categoryName: "hoddies",
    rating: 3.5,
    fastDelivery: false,
    isLiked: false,
  },

  {
    _id: uuid(),
    title: "cotton-tshirt",
    name: "Cotton T-shirt",
    price: 799,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe5%2Faf%2Fe5af0ce1b94d4bc4a97ec6cc601da3bc5ce42dd0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "White/Mushrooms",
    categoryName: "tshirts",
    rating: 4.5,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "printed-tshirt",
    name: "Printed T-shirt",
    price: 699,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F50%2F00%2F5000af2ff5827b92794dbc08b13f1f8972ca2c7f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Black/Toadstools",
    categoryName: "tshirts",
    rating: 3.5,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "regular-fit-tshirt",
    name: "Regular Fit T-Shirt",
    price: 799,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe0%2Ffe%2Fe0fe695c8284c7e04f75331ef9886c51291db003.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Black/Metallica",
    categoryName: "tshirts",
    rating: 3,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "printed-tshirt",
    name: " Printed T-shirt",
    price: 1499,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2F4f%2F8a4fc4154f61b4b05fcdb93ce60737f74f1a3dda.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Light green/Rick and Morty",
    categoryName: "tshirts",
    rating: 4,
    fastDelivery: false,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "oversized-tshirt",
    name: "Oversized T-shirt",
    price: 799,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F64%2F10%2F6410632ce2ac654307a9d4cad7f4e58938b69416.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Orange",
    categoryName: "tshirts",
    rating: 3,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "kaftan-dress",
    name: "Kaftan Dress",
    price: 1499,
    img: "https://lp2.hm.com/hmgoepprod?set=source[/80/68/8068fa803d4e3c55a04dda34ac3a43206bd5523b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    description: "Yellow/Floral",
    categoryName: "dresses",
    rating: 4,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "shirt-dress",
    name: "Shirt dress",
    price: 1299,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fac%2Fa7%2Faca71fbd3ca0129cd5b9141abff28cb6cff35358.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Grey/Blue floral",
    categoryName: "dresses",
    rating: 3.5,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "patterned-wrap-dress",
    name: "Patterned wrap dress",
    price: 2299,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9a%2F86%2F9a86d3cb338688238b0f24a6636689e2dfedc9b3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BLadies_dresses_wrap%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Red/White floral",
    categoryName: "dresses",
    rating: 4,
    fastDelivery: false,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "tie-collar-dress",
    name: "Tie-collar dress",
    price: 3999,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2Fa5%2Fc2a59b27334fe5a3f01dfa284d97f9eb85853c67.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Cerise/Block-coloured",
    categoryName: "dresses",
    rating: 4.5,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "short-kaftan",
    name: " Short kaftan",
    price: 2699,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Feb%2Fb8%2Febb86f5b2da83988ce674638729ee13623bd23a1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Bright red",
    categoryName: "dresses",
    rating: 4,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "cotton-overshirt",
    name: "Cotton overshirt",
    price: 1699,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2F67%2F026713948fb073b782d061074ec5c1b0f54ee9a7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Blue/Green checked",
    categoryName: "shirts",
    rating: 4,
    fastDelivery: false,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "short-sleeved-shirts",
    name: "Short-sleeved shirts",
    price: 1299,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff0%2F2c%2Ff02c901fed99324a2c485bf1b22ea4576407d604.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Black/White",
    categoryName: "shirts",
    rating: 4,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "corduroy-shirts",
    name: "Corduroy shirt",
    price: 2299,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F96%2Fcf%2F96cfdd32658f8bb920b080061b8170cccc090049.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Blue",
    categoryName: "shirts",
    rating: 3.4,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "linen-blend-shirt",
    name: "Linen-blend shirt",
    price: 1299,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F65%2F19%2F65196abf41fcb223d7ed953916cc67d0a9a7901d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Dark green/Checked",
    categoryName: "shirts",
    rating: 3,
    fastDelivery: true,
    isLiked: false,
  },
  {
    _id: uuid(),
    title: "oxford-shirts",
    name: "Oxford shirt",
    price: 1499,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fde%2F6a%2Fde6a475433db331ed86836b7aeeb80c1827e5f7a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    description: "Khaki green",
    categoryName: "shirts",
    rating: 4,
    fastDelivery: false,
    isLiked: false,
  },
];
