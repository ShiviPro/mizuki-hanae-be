const { initialiseDatabase } = require("./db/db.connect");
const Product = require("./models/product.models");
const express = require("express");
require("dotenv").config();

initialiseDatabase();
const app = express();
const PORT = process.env.PORT || 3000;

const seedProducts = async (productsData) => {
  try {
    for (const prodData of productsData) {
      const newProduct = new Product(prodData);
      await newProduct.save();
    }
  } catch (error) {
    console.log("Error seeding products:", error);
  }
};

const productsToSeed = [
  {
    name: "Dream of Light",
    yearOfMaking: new Date("1999-07-12"),
    rating: 4.7,
    description: "A unique piece depicting scenery.",
    category: ["Realism"],
    images: [
      "https://placehold.co/800x600?text=Dream+of+Light+1",
      "https://placehold.co/800x600?text=Dream+of+Light+2",
    ],
    dimensions: "60 x 52 inches",
    isFramed: true,
    stateOfPreservation: "Fair",
    proofOfAuthenticity: "Signed by artist",
    sellingPrice: 23799,
    markedPrice: 25499,
    tags: ["impressionism", "landscape", "canvas", "modern art", "sculpture"],
    additionalInfo: {
      medium: "Digital Print",
      style: "Minimalism",
    },
  },
  {
    name: "Solitude of Dawn",
    yearOfMaking: new Date("1976-10-03"),
    rating: 4.5,
    description: "A stunning oil painting with vivid color contrasts.",
    category: ["Landscape"],
    images: [
      "https://placehold.co/800x600?text=Solitude+of+Dawn+1",
      "https://placehold.co/800x600?text=Solitude+of+Dawn+2",
      "https://placehold.co/800x600?text=Solitude+of+Dawn+3",
    ],
    dimensions: "45 x 70 cm",
    isFramed: false,
    stateOfPreservation: "Good",
    proofOfAuthenticity: "Certificate of Authenticity included",
    sellingPrice: 12499,
    markedPrice: 14799,
    tags: ["oil painting", "landscape", "nature", "serene"],
    additionalInfo: {
      medium: "Oil on Canvas",
      style: "Impressionism",
    },
  },
  {
    name: "Echoes of Time",
    yearOfMaking: new Date("2001-05-22"),
    rating: 3.6,
    description: "An evocative piece with complex layers of meaning.",
    category: ["Abstract"],
    images: [
      "https://placehold.co/800x600?text=Echoes+of+Time+1",
      "https://placehold.co/800x600?text=Echoes+of+Time+2",
      "https://placehold.co/800x600?text=Echoes+of+Time+3",
    ],
    dimensions: "30 x 40 inches",
    isFramed: true,
    stateOfPreservation: "Mint",
    proofOfAuthenticity: "Signed by artist",
    sellingPrice: 47999,
    markedPrice: 51799,
    tags: ["modern art", "colorful", "canvas"],
    additionalInfo: {
      medium: "Acrylic on Canvas",
      style: "Abstract",
    },
  },
  {
    name: "Melody in Red",
    yearOfMaking: new Date("2020-11-15"),
    rating: 4.4,
    description: "A vibrant piece capturing deep emotions in red hues.",
    category: ["Figurative", "Portrait"],
    images: [
      "https://placehold.co/800x600?text=Melody+in+Red+1",
      "https://placehold.co/800x600?text=Melody+in+Red+2",
    ],
    dimensions: "24 x 36 inches",
    isFramed: false,
    stateOfPreservation: "Excellent",
    proofOfAuthenticity: "Gallery-signed certificate",
    sellingPrice: 31999,
    markedPrice: 32499,
    tags: ["portrait", "oil painting", "canvas"],
    additionalInfo: {
      medium: "Oil on Canvas",
      style: "Expressionism",
    },
  },
  {
    name: "Serene Waves",
    yearOfMaking: new Date("2018-08-09"),
    rating: 1.6,
    description: "A soothing seascape that evokes calm and peace.",
    category: ["Seascape"],
    images: [
      "https://placehold.co/800x600?text=Serene+Waves+1",
      "https://placehold.co/800x600?text=Serene+Waves+2",
    ],
    dimensions: "50 x 40 cm",
    isFramed: true,
    stateOfPreservation: "Good",
    proofOfAuthenticity: "COA #3456",
    sellingPrice: 9199,
    markedPrice: 9999,
    tags: ["watercolor", "ocean", "nature", "calm"],
    additionalInfo: {
      medium: "Watercolor on Paper",
      style: "Realism",
    },
  },
  {
    name: "Abstract Harmony",
    yearOfMaking: new Date("1995-03-18"),
    rating: 3.9,
    description: "A bold abstract piece with vibrant color blocks.",
    category: ["Abstract", "Niche Art"],
    images: [
      "https://placehold.co/800x600?text=Abstract+Harmony+1",
      "https://placehold.co/800x600?text=Abstract+Harmony+2",
    ],
    dimensions: "35 x 35 inches",
    isFramed: true,
    stateOfPreservation: "Excellent",
    proofOfAuthenticity: "Signed by artist",
    sellingPrice: 45999,
    markedPrice: 47799,
    tags: ["abstract", "colorful", "large", "canvas"],
    additionalInfo: {
      medium: "Acrylic on Canvas",
      style: "Cubism",
    },
  },
  {
    name: "Shadows of Red",
    yearOfMaking: new Date("2012-12-01"),
    rating: 4.2,
    description: "A dynamic portrait with striking use of red and black.",
    category: ["Figurative"],
    images: [
      "https://placehold.co/800x600?text=Shadows+of+Red+1",
      "https://placehold.co/800x600?text=Shadows+of+Red+2",
      "https://placehold.co/800x600?text=Shadows+of+Red+3",
    ],
    dimensions: "42 x 30 inches",
    isFramed: false,
    stateOfPreservation: "Good",
    proofOfAuthenticity: "Gallery-signed certificate",
    sellingPrice: 14999,
    markedPrice: 15999,
    tags: ["portrait", "oil painting", "expressive"],
    additionalInfo: {
      medium: "Oil on Canvas",
      style: "Expressionism",
    },
  },
  {
    name: "Ocean Bliss",
    yearOfMaking: new Date("2005-07-29"),
    rating: 4.6,
    description: "A serene seascape with gentle waves and pastel sky.",
    category: ["Seascape"],
    images: [
      "https://placehold.co/800x600?text=Ocean+Bliss+1",
      "https://placehold.co/800x600?text=Ocean+Bliss+2",
      "https://placehold.co/800x600?text=Ocean+Bliss+3",
    ],
    dimensions: "48 x 60 inches",
    isFramed: true,
    stateOfPreservation: "Fair",
    proofOfAuthenticity: "Documented provenance",
    sellingPrice: 23999,
    markedPrice: 26999,
    tags: ["watercolor", "ocean", "landscape"],
    additionalInfo: {
      medium: "Watercolor on Paper",
      style: "Realism",
    },
  },
  {
    name: "Golden Pathway",
    yearOfMaking: new Date("1999-11-11"),
    rating: 4.3,
    description: "A nostalgic landscape with a golden sunrise.",
    category: ["Landscape"],
    images: [
      "https://placehold.co/800x600?text=Golden+Pathway+1",
      "https://placehold.co/800x600?text=Golden+Pathway+2",
    ],
    dimensions: "30 x 50 inches",
    isFramed: false,
    stateOfPreservation: "Restored",
    proofOfAuthenticity: "Signed by artist",
    sellingPrice: 18499,
    markedPrice: 18999,
    tags: ["oil painting", "sunrise", "nature"],
    additionalInfo: {
      medium: "Oil on Canvas",
      style: "Impressionism",
    },
  },
  {
    name: "Urban Pulse",
    yearOfMaking: new Date("2022-01-20"),
    rating: 3.7,
    description: "A contemporary abstract piece reflecting city energy.",
    category: ["Abstract", "Niche Art"],
    images: [
      "https://placehold.co/800x600?text=Urban+Pulse+1",
      "https://placehold.co/800x600?text=Urban+Pulse+2",
      "https://placehold.co/800x600?text=Urban+Pulse+3",
    ],
    dimensions: "40 x 40 inches",
    isFramed: true,
    stateOfPreservation: "Excellent",
    proofOfAuthenticity: "Certificate of Authenticity included",
    sellingPrice: 29499,
    markedPrice: 31499,
    tags: ["modern art", "vibrant", "cityscape"],
    additionalInfo: {
      medium: "Gouache on Paper",
      style: "Minimalism",
    },
  },
  {
    name: "Rainy Evening",
    yearOfMaking: new Date("1985-10-30"),
    rating: 4.4,
    description: "A romantic landscape capturing rain and twilight.",
    category: ["Landscape"],
    images: [
      "https://placehold.co/800x600?text=Rainy+Evening+1",
      "https://placehold.co/800x600?text=Rainy+Evening+2",
      "https://placehold.co/800x600?text=Rainy+Evening+3",
    ],
    dimensions: "36 x 48 inches",
    isFramed: true,
    stateOfPreservation: "Good",
    proofOfAuthenticity: "Documented provenance",
    sellingPrice: 21999,
    markedPrice: 22499,
    tags: ["oil painting", "rain", "evening", "canvas"],
    additionalInfo: {
      medium: "Oil on Canvas",
      style: "Realism",
    },
  },
  {
    name: "Celestial Abstraction",
    yearOfMaking: new Date("2023-03-14"),
    rating: 2.7,
    description: "An abstract piece inspired by the cosmos.",
    category: ["Abstract"],
    images: [
      "https://placehold.co/800x600?text=Celestial+Abstraction+1",
      "https://placehold.co/800x600?text=Celestial+Abstraction+2",
      "https://placehold.co/800x600?text=Celestial+Abstraction+3",
    ],
    dimensions: "30 x 30 inches",
    isFramed: false,
    stateOfPreservation: "Excellent",
    proofOfAuthenticity: "Signed by artist",
    sellingPrice: 13499,
    markedPrice: 15999,
    tags: ["colorful", "digital art", "modern"],
    additionalInfo: {
      medium: "Digital",
      style: "Minimalism",
    },
  },
  {
    name: "Tranquil Forest",
    yearOfMaking: new Date("1992-09-07"),
    rating: 3.3,
    description: "A beautiful landscape filled with lush greens.",
    category: ["Landscape"],
    images: [
      "https://placehold.co/800x600?text=Tranquil+Forest+1",
      "https://placehold.co/800x600?text=Tranquil+Forest+2",
      "https://placehold.co/800x600?text=Tranquil+Forest+3",
    ],
    dimensions: "24 x 30 inches",
    isFramed: false,
    stateOfPreservation: "Restored",
    proofOfAuthenticity: "Gallery-signed certificate",
    sellingPrice: 10749,
    markedPrice: 12999,
    tags: ["oil painting", "forest", "nature"],
    additionalInfo: {
      medium: "Oil on Canvas",
      style: "Realism",
    },
  },
  {
    name: "Radiant Hills",
    yearOfMaking: new Date("2008-02-02"),
    rating: 4.7,
    description: "A serene landscape with rolling hills bathed in light.",
    category: ["Landscape"],
    images: [
      "https://placehold.co/800x600?text=Radiant+Hills+1",
      "https://placehold.co/800x600?text=Radiant+Hills+2",
    ],
    dimensions: "30 x 36 inches",
    isFramed: true,
    stateOfPreservation: "Good",
    proofOfAuthenticity: "Documented provenance",
    sellingPrice: 17999,
    markedPrice: 20999,
    tags: ["oil painting", "hills", "light"],
    additionalInfo: {
      medium: "Oil on Canvas",
      style: "Impressionism",
    },
  },
  {
    name: "City of Dreams",
    yearOfMaking: new Date("2017-06-12"),
    rating: 2.6,
    description: "An abstract depiction of urban nightlife.",
    category: ["Abstract", "Niche Art"],
    images: [
      "https://placehold.co/800x600?text=City+of+Dreams+1",
      "https://placehold.co/800x600?text=City+of+Dreams+2",
    ],
    dimensions: "36 x 48 inches",
    isFramed: true,
    stateOfPreservation: "Excellent",
    proofOfAuthenticity: "Certificate of Authenticity included",
    sellingPrice: 26499,
    markedPrice: 29499,
    tags: ["cityscape", "vibrant", "modern art"],
    additionalInfo: {
      medium: "Acrylic on Canvas",
      style: "Pop Art",
    },
  },
  {
    name: "Ocean Melody",
    yearOfMaking: new Date("1998-04-21"),
    rating: 2.8,
    description: "A tranquil seascape capturing the beauty of dawn at sea.",
    category: ["Seascape"],
    images: [
      "https://placehold.co/800x600?text=Ocean+Melody+1",
      "https://placehold.co/800x600?text=Ocean+Melody+2",
      "https://placehold.co/800x600?text=Ocean+Melody+3",
    ],
    dimensions: "50 x 60 inches",
    isFramed: false,
    stateOfPreservation: "Good",
    proofOfAuthenticity: "Signed by artist",
    sellingPrice: 14999,
    markedPrice: 16499,
    tags: ["oil painting", "sea", "sunrise"],
    additionalInfo: {
      medium: "Oil on Canvas",
      style: "Realism",
    },
  },
  {
    name: "Palette of Dreams",
    yearOfMaking: new Date("2024-02-13"),
    rating: 4.5,
    description: "A colorful abstract piece that feels like a dream palette.",
    category: ["Abstract"],
    images: [
      "https://placehold.co/800x600?text=Palette+of+Dreams+1",
      "https://placehold.co/800x600?text=Palette+of+Dreams+2",
    ],
    dimensions: "24 x 36 inches",
    isFramed: true,
    stateOfPreservation: "New",
    proofOfAuthenticity: "Certificate of Authenticity included",
    sellingPrice: 12999,
    markedPrice: 15499,
    tags: ["modern art", "vibrant", "colorful"],
    additionalInfo: {
      medium: "Acrylic on Canvas",
      style: "Surrealism",
    },
  },
  {
    name: "Silhouette Dreams",
    yearOfMaking: new Date("1980-01-09"),
    rating: 4.7,
    description: "A figurative piece with bold silhouettes in warm tones.",
    category: ["Figurative"],
    images: [
      "https://placehold.co/800x600?text=Silhouette+Dreams+1",
      "https://placehold.co/800x600?text=Silhouette+Dreams+2",
      "https://placehold.co/800x600?text=Silhouette+Dreams+3",
    ],
    dimensions: "48 x 60 inches",
    isFramed: false,
    stateOfPreservation: "Restored",
    proofOfAuthenticity: "Documented provenance",
    sellingPrice: 19499,
    markedPrice: 21999,
    tags: ["painting", "silhouette", "warm colors"],
    additionalInfo: {
      medium: "Oil on Canvas",
      style: "Modernism",
    },
  },
  {
    name: "Whispers of Leaves",
    yearOfMaking: new Date("2011-10-10"),
    rating: 1.9,
    description: "A delicate landscape with softly falling leaves.",
    category: ["Landscape"],
    images: [
      "https://placehold.co/800x600?text=Whispers+of+Leaves+1",
      "https://placehold.co/800x600?text=Whispers+of+Leaves+2",
    ],
    dimensions: "30 x 30 inches",
    isFramed: false,
    stateOfPreservation: "Fair",
    proofOfAuthenticity: "Signed by artist",
    sellingPrice: 7799,
    markedPrice: 9499,
    tags: ["watercolor", "leaves", "autumn"],
    additionalInfo: {
      medium: "Watercolor on Paper",
      style: "Impressionism",
    },
  },
  {
    name: "Dancing Colors",
    yearOfMaking: new Date("2016-05-05"),
    rating: 4.6,
    description: "A vibrant abstract piece full of energetic strokes.",
    category: ["Abstract", "Niche Art"],
    images: [
      "https://placehold.co/800x600?text=Dancing+Colors+1",
      "https://placehold.co/800x600?text=Dancing+Colors+2",
    ],
    dimensions: "50 x 50 cm",
    isFramed: true,
    stateOfPreservation: "Excellent",
    proofOfAuthenticity: "Certificate of Authenticity included",
    sellingPrice: 41999,
    markedPrice: 44499,
    tags: ["oil painting", "canvas", "contemporary"],
    additionalInfo: {
      medium: "Oil on Canvas",
      style: "Pop Art",
    },
  },
];

// seedProducts(productsToSeed);

const readAllProducts = async () => {
  try {
    const allProducts = await Product.find();
    console.log("Here are all the products:", allProducts);
    return allProducts;
  } catch (error) {
    throw error;
  }
};

app.get("/products", async (req, res) => {
  try {
    const allProducts = await readAllProducts();

    allProducts && allProducts.length > 0
      ? res
          .status(200)
          .send(JSON.stringify({ data: { products: allProducts } }))
      : res.status(404).send(JSON.stringify({ message: "No product found!" }));
  } catch (error) {
    res.status(500).send(
      JSON.stringify({
        message: "An error occurred while fetching the products!",
      })
    );
  }
});

app.listen(PORT, () => {
  console.log("Server started successfully on PORT", PORT);
});
