// src/data/data.js

const products = [
  {
    id: 1,
    name: "Oversized Streetwear Hoodie",
    image: "/images/hoodie1.jpg",
    price: 3200,
    views: 0,
    sold: 25,
    reviews: [
      { rating: 5, comment: "Super cozy and stylish!" },
      { rating: 4, comment: "Fits perfectly." }
    ]
  },
  {
    id: 2,
    name: "Ripped Denim Jeans",
    image: "/images/jeans.jpg",
    price: 2800,
    views: 0,
    sold: 30,
    reviews: [
      { rating: 5, comment: "Love the quality!" },
      { rating: 3, comment: "Good, but not stretchy enough." }
    ]
  },
  {
    id: 3,
    name: "Graphic T-Shirt - DZ Edition",
    image: "/images/tshirt.jpg",
    price: 1800,
    views: 0,
    sold: 40,
    reviews: [
      { rating: 5, comment: "The design is sick!" },
      { rating: 4, comment: "Nice fit." }
    ]
  },
  {
    id: 4,
    name: "Cargo Pants",
    image: "/images/cargo.jpg",
    price: 2600,
    views: 0,
    sold: 18,
    reviews: [
      { rating: 4, comment: "Very comfy and practical." }
    ]
  },
  {
    id: 5,
    name: "Unisex Bucket Hat",
    image: "/images/hat.jpg",
    price: 950,
    views: 0,
    sold: 50,
    reviews: [
      { rating: 5, comment: "Goes with every outfit!" }
    ]
  }
];

export default products;
