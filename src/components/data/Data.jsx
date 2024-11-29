export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/page",
    text: "Page",
    subItems: [
      {
        id: 51,
        path: "/booking",
        text: "Booking",
      },
      {
        id: 52,
        path: "/team",
        text: "Our Team",
      },
      {
        id: 53,
        path: "/testimonial",
        text: "Testimonial",
      },
    ],
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Appartment",
    discription: "Explore our range of elegantly designed rooms and apartments.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription: "Indulge in a culinary experience at our restaurant, offering a variety of delicious dishes.",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    discription: "Relax and rejuvenate at our luxurious spa or stay active with our state-of-the-art fitness facilities.",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Enjoy an exciting range of sports and gaming activities, offering fun and entertainment.",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Host unforgettable events and lively parties in our versatile venues.",
  },

  {
    icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Stay fit and refreshed with our fully equipped gym and serene yoga studio.",
  },
];
export const team = [
  {
    image: "../assets/img/team-1.jpg",
    name: "John Abrahaam",
    designation: "Boss",
  },
  {
    image: "../assets/img/team-2.jpg",
    name: "David Bechkam",
    designation: "Manager",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Smith",
    designation: "Supervisor",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Anakin",
    designation: "Server",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
      },
      {
        name: "Spa & Fitness",
      },
      {
        name: "Sports & Gaming",
      },
      {
        name: "Event & Party",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "26th Street,Chennai, India",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+012 345 67890",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "hotelierchennai@gmail.com",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "hotelierbook@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "hoteliertech@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "hotelierinfo@example.com",
  },
];
export const testimonial = [
  {
    description:
      "I had an amazing stay at this hotel! The staff was incredibly friendly and attentive, and the facilities were top-notch. The room was spacious, comfortable, and clean. I especially loved the spa and fitness center. Highly recommend to anyone visiting the area!",
    name: "Jane Smith",
    profession: "Business Executive",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "This hotel exceeded all my expectations. The ambiance was wonderful, and the service was impeccable. I particularly enjoyed the food at the restaurant and the relaxing atmosphere of the pool area. Ill definitely return for another stay!",
    name: "Michael Johnson",
    profession: "Architect",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    description:
      "An exceptional experience from start to finish! The room was cozy, the staff were welcoming, and the location was perfect. I loved the variety of activities available, from the spa to the sports facilities. A great choice for anyone looking to relax and unwind!",
    name: "Emily Williams",
    profession: "Photographer",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = [
  {
    img: "../assets/img/room-1.jpg",
    price: "₹12,000/Night",
    name: "Junior Suit",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
    "The Junior Suite offers a spacious and comfortable environment perfect for both relaxation and work. With three cozy beds two well-appointed baths and high-speed WiFi youll have everything you need for a restful and productive stay.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/room-2.jpg",
    price: "₹20,000/Night",
    name: "Executive Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "The Executive Suite provides an elegant and spacious retreat with three luxurious beds, two pristine baths, and seamless WiFi connectivity. Ideal for both business and leisure, this suite ensures a comfortable and productive stay.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "₹28,000/Night",
    name: "Super Deluxe",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "The Super Deluxe offers a spacious, high-end living experience with three comfortable beds, two elegant baths, and reliable WiFi. Perfect for those seeking extra luxury and convenience during their stay.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];

export const facility = [
  {
    icon: <i class="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "bed",
  },
  {
    icon: <i class="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "bath",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];
