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
    category: "Hoodies" // Category: Hoodies
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
    category: "Jeans" // Category: Jeans (added specific category)
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
    category: "T-Shirts" // Category: T-Shirts
  },
  {
    id: 18,
    name: "floral scarf",
    image: ["download (6).jpg"],  
    price: 1500,
    views: 0,
    sold: 12,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "accessories"
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
    category: "Pants" // Category: Pants
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
    category: "Accessories" // Category: Accessories
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
    category: "Dresses" // Category: Dresses
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
    category: "Cardigans" // Category: Cardigans
  }, 
  
  {
    id: 9,
    name: "black mary jane shoes",
    image: ["aca26e10-7ff8-42e1-a9f0-e135decdbed9.jpg"],  
    price: 6600,
    views: 0,
    sold: 10,
    reviews: [
      { rating: 5, comment: "soo pretty!" }
    ],
    category: "shoes" 
  }, 
  {
    id: 10,
    name: "cute blue Cardigan",
    image: ["download (4).jpg"],  
    price: 3500,
    views: 0,
    sold: 35,
    reviews: [
      { rating: 6, comment: "the best!" }
    ],
    category: "Cardigans" 
  }, 
  {
    id: 11,
    name: "butterfly shaped hair clip",
    image: ["Sweet Sakura _ Hot Topic.jpg"],  
    price: 500,
    views: 0,
    sold: 2,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "accessories" 
  },


  {
    id: 12,
    name: "purple camera",
    image: ["29 gifts from Target that are so good, you'll want to keep them for yourself.jpg"],  
    price: 15500,
    views: 0,
    sold: 60,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "electronics" 
  }, 
  {
    id: 13,
    name: "long floral skirt",
    image: ["Giambattista Valli Fashion Collections For Women _ Moda Operandi.jpg"],  
    price: 5500,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "dresses" 
  }, 
  {
    id: 14,
    name: "black ysl bag",
    image: ["download (11).jpg"],  
    price: 7500,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "bags"
  }, 
  {
    id: 15,
    name: "purple lilac watch",
    image: ["1pc Purple Lilac Silicone Watch Band Compatible With Apple Watch.jpg"],  
    price: 6500,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "electronics"
  }, 
  {
    id: 16,
    name: "pink glasses",
    image: ["𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕 _ 𝒐𝒄𝒕𝒐𝒍𝒙.jpg"],  
    price: 2500,
    views: 0,
    sold: 10,
    reviews: [
      { rating: 5, comment: "the prettiest!" }
    ],
    category: "accessories"
  }, 
  {
    id: 17,
    name: "pink van",
    image: ["Flip Flop Finds's Amazon Page.jpg"],  
    price: 2500,
    views: 0,
    sold: 25,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "accessories"
  }, 
  {
    id: 8,
    name: "Heart shaped Bluetooth earbuds wireless",
    image: ["Heart shaped Bluetooth earbuds wireless.jpg"],  
    price: 5500,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "electronics" 
  }, 
  {
    id: 22,
    name: " a pink watch",
    image: ["bfb04339-ae6c-4c39-8120-103e6b5648a2.jpg"],  
    price: 1500,
    views: 0,
    sold: 30,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "accessories" 
  },

  {
    id: 25,
    name: " pink slippers",
    image: ["41ebbb86-bdfc-4b44-891b-392cd9048b49.jpg"],  
    price: 3550,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "shoes" 
  },

  {
    id: 26,
    name: " golden watch",
    image: ["adb90098-9afc-4995-b424-3ae1f2a2650e.jpg"],  
    price: 4000,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "accessories" 
  },


  {
    id: 26,
    name: " Dior bag",
    image: ["Polished hardware and smooth leather add timeless….jpg"],  
    price: 8500,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "bags" 
  },


  {
    id:28,
    name: " blue jean",
    image: ["Light Blue Wash Knee Rip Extreme Wide Leg Jeans….jpg"],  
    price: 4500,
    views: 0,
    sold: 30,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "jeans " 
  },




  {
    id: 27,
    name: " GUCCI bag ",
    image: ["GUCCI Jackie small patent-leather shoulder bag….jpg"],  
    price: 6700,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "bags" 
  },



  {
    id:29,
    name: " earrings ",
    image: ["Schlicht und exotisch zieren diese Ohrringe mit….jpg"],  
    price: 1700,
    views: 0,
    sold: 20,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "accessories" 
  },
  {
    id:30,
    name: " biege dress",
    image: ["65fdb7c8-0c71-49c1-b7ac-81250d408d8c.jpg"],  
    price: 11800,
    views: 0,
    sold: 40,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "Dresses" 
  },
  



  {
    id:32,
    name: " biege airpod ",
    image: ["20527c08-b764-480e-96fb-223601c8f4df.jpg"],  
    price: 1900,
    views: 0,
    sold: 20,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "electronics" 
  },

  {
    id:33,
    name: " chemise alma ",
    image: ["téléchargement (2).jpg"],  
    price: 3900,
    views: 0,
    sold: 20,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "T-Shirts" 
  },
  
  
  


  {
    id:35,
    name: " pince",
    image: ["Cette jolie pince en forme de noeud sera parfaite….jpg"],  
    price: 500,
    views: 0,
    sold: 10,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "accessories" 
  },

  {
    id:37,
    name: " pink chanel heels",
    image: ["dea67f4c-eb90-42c2-91d0-52a520d89b32.jpg"],  
    price: 5600,
    views: 0,
    sold: 10,
    reviews: [
      { rating: 5, comment: "the best!" }
    ],
    category: "shoes" 
  },


  


];


  

export default products;
