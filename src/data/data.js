const products = [
  {
    id: 1,
    name: "Oversized Streetwear Hoodie",
    image: ["Aelfric Eden Burlap Star Patchwork Hoodie.jpg"],
    price: 3200,
    views: 0,
    sold: 25,
    reviews: [
      { rating: 5, comment: "Super cozy and stylish!" },
      { rating: 4, comment: "Fits perfectly." }
    ],
    category: "Hoodies"
  },
  {
    id: 2,
    name: "Denim Jeans",
    image: ["Aestheric pants.jpg"],
    price: 2800,
    views: 0,
    sold: 30,
    reviews: [
      { rating: 5, comment: "Love the quality!" },
      { rating: 3, comment: "Good, but not stretchy enough." }
    ],
    category: "Jeans"
  },
  {
    id: 3,
    name: "Graphic T-Shirt",
    image: ["Funny Cat Cartoon Print Oversize T-Shirt - Black _ XL.jpg"],
    price: 1800,
    views: 0,
    sold: 40,
    reviews: [
      { rating: 5, comment: "The design is sick!" },
      { rating: 4, comment: "Nice fit." }
    ],
    category: "T-Shirts"
  },
  {
    id: 4,
    name: "Cargo Pants",
    image: ["Teen Girl Straight-Leg Washed Cargo Jeans.jpg"],
    price: 2600,
    views: 0,
    sold: 18,
    reviews: [
      { rating: 4, comment: "Very comfy and practical." }
    ],
    category: "Jeans"
  },
  {
    id: 5,
    name: "Unisex Bucket Hat",
    image: ["2a70c31b-0643-4ea6-b908-8ce4602bae6c.jpg"],
    price: 950,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "Goes with every outfit!" }
    ],
    category: "Accessories"
  },
  {
    id: 6,
    name: "Floral Dress",
    image: ["5a8996ae-8948-41e4-8f2c-5831a903c971.jpg"],
    price: 5500,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "So pretty!" }
    ],
    category: "Dresses"
  },
  {
    id: 7,
    name: "A Pink Cute Cardigan",
    image: ["download (7).jpg"],
    price: 3500,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "Goes with every outfit!" }
    ],
    category: "Cardigans"
  },
  {
    id: 8,
    name: "Heart shaped Bluetooth earbuds wireless",
    image: ["Heart shaped Bluetooth earbuds wireless.jpg"],
    price: 5500,
    views: 0,
    sold: 50,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Electronics"
  },
  {
    id: 9,
    name: "Black Mary Jane Shoes",
    image: ["aca26e10-7ff8-42e1-a9f0-e135decdbed9.jpg"],
    price: 6600,
    views: 0,
    sold: 10,
    reviews: [{ rating: 5, comment: "soo pretty!" }],
    category: "Shoes"
  },
  {
    id: 10,
    name: "Cute Blue Cardigan",
    image: ["download (4).jpg"],
    price: 3500,
    views: 0,
    sold: 35,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Cardigans"
  },
  {
    id: 11,
    name: "Butterfly Shaped Hair Clip",
    image: ["Sweet Sakura _ Hot Topic.jpg"],
    price: 500,
    views: 0,
    sold: 2,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Accessories"
  },
  {
    id: 12,
    name: "Purple Camera",
    image: ["29 gifts from Target that are so good, you'll want to keep them for yourself.jpg"],
    price: 15500,
    views: 0,
    sold: 60,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Electronics"
  },
  {
    id: 13,
    name: "Long Floral Skirt",
    image: ["Giambattista Valli Fashion Collections For Women _ Moda Operandi.jpg"],
    price: 5500,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "So pretty!" }
    ],
    category: "Dresses"
  },
  
  {
    id: 14,
    name: "Black YSL Bag",
    image: ["download (11).jpg"],
    price: 7500,
    views: 0,
    sold: 50,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Bags"
  },
  {
    id: 15,
    name: "Purple Lilac Watch",
    image: ["1pc Purple Lilac Silicone Watch Band Compatible With Apple Watch.jpg"],
    price: 6500,
    views: 0,
    sold: 50,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Electronics"
  },
  {
    id: 16,
    name: "Pink Glasses",
    image: ["𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕 _ 𝒐𝒄𝒕𝒐𝒍𝒙.jpg"],
    price: 2500,
    views: 0,
    sold: 10,
    reviews: [{ rating: 5, comment: "the prettiest!" }],
    category: "Accessories"
  },
  {
    id: 17,name: "Pink Van",
    image: ["Flip Flop Finds's Amazon Page.jpg"],
    price: 2500,
    views: 0,
    sold: 25,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Electronics"
  },
  {
    id: 18,
    name: "Floral Scarf",
    image: ["download (6).jpg"],
    price: 1500,
    views: 0,
    sold: 12,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Accessories"
  },
  {
    id: 19,
    name: "Pink Watch",
    image: ["bfb04339-ae6c-4c39-8120-103e6b5648a2.jpg"],
    price: 1500,
    views: 0,
    sold: 30,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Accessories"
  },
  {
    id: 20,
    name: "Pink Slippers",
    image: ["41ebbb86-bdfc-4b44-891b-392cd9048b49.jpg"],
    price: 3550,
    views: 0,
    sold: 50,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Shoes"
  },
 
  {
    id: 22,
    name: "Dior Bag",
    image: ["Polished hardware and smooth leather add timeless….jpg"],
    price: 8500,
    views: 0,
    sold: 50,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Bags"
  },
  {
    id: 23,
    name: "Blue Ripped Jeans",
    image: ["Light Blue Wash Knee Rip Extreme Wide Leg Jeans….jpg"],
    price: 4500,
    views: 0,
    sold: 30,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Jeans"
  },
  {
    id: 24,
    name: "GUCCI Bag",
    image: ["GUCCI Jackie small patent-leather shoulder bag….jpg"],
    price: 6700,
    views: 0,
    sold: 50,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Bags"
  },
  {
    id: 25,
    name: "Golden Earrings",
    image: ["Schlicht und exotisch zieren diese Ohrringe mit….jpg"],
    price: 1700,
    views: 0,
    sold: 20,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Accessories"
  },
  {
    id: 26,
    name: "Beige Dress",
    image: ["65fdb7c8-0c71-49c1-b7ac-81250d408d8c.jpg"],
    price: 11800,
    views: 0,
    sold: 40,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Dresses"
  },
  {
    id: 27,
    name: "Beige Airpods",
    image: ["20527c08-b764-480e-96fb-223601c8f4df.jpg"],
    price: 1900,
    views: 0,
    sold: 20,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Electronics"
  },
  {
    id: 28,
    name: "Chemise Alma",
    image: ["téléchargement (2).jpg"],
    price: 3900,
    views: 0,
    sold: 20,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "T-Shirts"
  },
  {
    id: 29,
    name: "Pince",
    image: ["Cette jolie pince en forme de noeud sera parfaite….jpg"],
    price: 500,
    views: 0,
    sold: 10,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Accessories"
  },
  {
    id: 30,
    name: "Pink Chanel Heels",
    image: ["dea67f4c-eb90-42c2-91d0-52a520d89b32.jpg"],
    price: 5600,
    views: 0,
    sold: 10,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Shoes"
  },
 {
    id: 21,
    name: "Golden Watch",
    image: ["adb90098-9afc-4995-b424-3ae1f2a2650e.jpg"],
    price: 4000,
    views: 0,
    sold: 50,
    reviews: [{ rating: 5, comment: "the best!" }],
    category: "Accessories"
  },
];

export default products;