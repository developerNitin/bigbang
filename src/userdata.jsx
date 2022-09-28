import image1 from "./assets/sample-img-1.jpg";
import image2 from "./assets/sample-img-2.jpg";
import image3 from "./assets/sample-img-3.jpg";
import image4 from "./assets/sample-img-4.jpg";
import image5 from "./assets/sample-img-5.jpg";
import image6 from "./assets/sample-img-6.jpg";

const productdata1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => ({
  name: "Angela Su",
  url: "angelasu/" + i,
  parenturl: "/angelasu",
  index: i,
  parentindex: 0,
  heading: "Bigbang",
  location: "California, USA",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa sed dolor pulvinar varius ut at velit.",
  language: "English, Hindi",
  pricing: "200$",
  date: "9 sept 2022",
  image: [image1, image2, image3, image4, image5, image6],
}));

const productdata2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => ({
  name: "Super Su",
  url: "supersu/" + i,
  parenturl: "/supersu",
  index: i,
  parentindex: 1,
  heading: "Bigbang",
  location: "California, USA",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa sed dolor pulvinar varius ut at velit.",
  language: "English, Hindi",
  pricing: "200$",
  date: "9 sept 2022",
  image: [image2, image1, image3, image4, image5, image6],
}));

const Userdata = [
  {
    name: "Angela Su",
    url: "angelasu",
    title: "Illustrator",
    website: "AngelaSu.com",
    since: "2022",
    location: "California, USA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa sed dolor pulvinar varius ut at velit.",
    language: "English, Hindi",
    links: {
      facebook: "facebook.com",
      instagram: "instagram.com",
      twitter: "twitter.com",
    },
    skills: {
      1: "Digital marketing",
      2: "Illustration",
      3: "Web development",
    },
    education: "B.Sc. - Bs Commerce",
    certification: "Certified In Commerce Industry",
    coverImg: "assets/coverimg/coverImg.jpeg",
    image: [image1, image2, image3, image4, image5, image6],
    products: productdata1,
  },
  {
    name: "Super Su",
    url: "supersu",
    title: "Illustrator",
    website: "AngelaSu.com",
    since: "2022",
    location: "California, USA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa sed dolor pulvinar varius ut at velit.",
    language: "English, Hindi",
    links: {
      facebook: "facebook.com",
      instagram: "instagram.com",
      twitter: "twitter.com",
    },
    skills: {
      1: "Digital marketing",
      2: "Illustration",
      3: "Web development",
    },
    education: "B.Sc. - Bs Commerce",
    certification: "Certified In Commerce Industry",
    coverImg: "assets/coverimg/coverImg.jpeg",
    image: [image1, image2, image3, image4, image5, image6],
    products: productdata2,
  },
];

export default Userdata;
