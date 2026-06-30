const sampleListings = [
  {
    title: "Bandra Seaside Studio",
    description: "A cozy studio apartment with a stunning sea view near Bandra.",
    price: 3200,
    location: "Bandra Mumbai",
    country: "India",
    image: {
      filename: "bandra-seaside-studio",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    }
  },
  {
    title: "Colaba Art Deco Loft",
    description: "A vibrant loft in Colaba featuring unique Art Deco designs.",
    price: 4500,
    location: "Colaba Mumbai",
    country: "India",
    image: {
      filename: "colaba-art-deco-loft",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Karol Bagh Budget Room",
    description: "Affordable budget room located in Karol Bagh, Delhi.",
    price: 1200,
    location: "Karol Bagh",
    country: "India",
    image: {
      filename: "karol-bagh-budget-room",
      url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d"
    }
  },
  {
    title: "Hauz Khas Lake Flat",
    description: "A trendy flat with a beautiful lake view in Hauz Khas.",
    price: 5000,
    location: "Hauz Khas",
    country: "India",
    image: {
      filename: "hauz-khas-lake-flat",
      url: "https://images.unsplash.com/photo-1586105251261-72a756497a11"
    }
  },
  {
    title: "Indiranagar Startup Pad",
    description: "Perfect modern studio for startup enthusiasts in Indiranagar.",
    price: 3500,
    location: "Indiranagar Bangalore",
    country: "India",
    image: {
      filename: "indiranagar-startup-pad",
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
    }
  },
  {
    title: "Koramangala Co-Living",
    description: "Co-living apartment with modern amenities in Koramangala.",
    price: 3800,
    location: "Koramangala Bangalore",
    country: "India",
    image: {
      filename: "koramangala-co-living",
      url: "https://images.unsplash.com/photo-1599423300746-b62533397364"
    }
  },
  {
    title: "Marina Breeze Apartment",
    description: "Spacious apartment with fresh marina breeze in Chennai.",
    price: 4000,
    location: "Marina Chennai",
    country: "India",
    image: {
      filename: "marina-breeze-apartment",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    }
  },
  {
    title: "OMR IT Studio",
    description: "A modern studio located in Chennai’s IT corridor.",
    price: 3200,
    location: "OMR Chennai",
    country: "India",
    image: {
      filename: "omr-it-studio",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    }
  },
  {
    title: "Salt Lake Suite",
    description: "An elegant tech-suite in Salt Lake, Kolkata.",
    price: 4200,
    location: "Salt Lake",
    country: "India",
    image: {
      filename: "salt-lake-suite",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    }
  },
  {
    title: "Park Street Stay",
    description: "Luxurious apartment near the vibrant Park Street.",
    price: 4600,
    location: "Park Street",
    country: "India",
    image: {
      filename: "park-street-stay",
      url: "https://images.unsplash.com/photo-1595526114035-2fa1dc50d8f2"
    }
  },
  {
    title: "MG Road Deluxe Suite",
    description: "A premium suite located near the bustling MG Road.",
    price: 4800,
    location: "MG Road",
    country: "India",
    image: {
      filename: "mg-road-deluxe-suite",
      url: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1"
    }
  },
  {
    title: "Whitefield Modern Loft",
    description: "A chic modern loft in the tech hub of Whitefield.",
    price: 3900,
    location: "Whitefield Bangalore",
    country: "India",
    image: {
      filename: "whitefield-modern-loft",
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
    }
  },
  {
    title: "Juhu Beachfront Villa",
    description: "A luxurious beachfront villa with direct Juhu Beach access.",
    price: 8900,
    location: "Juhu Mumbai",
    country: "India",
    image: {
      filename: "juhu-beachfront-villa",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    }
  },
  {
    title: "Vashi Urban Nest",
    description: "A comfortable 2BHK apartment in Vashi.",
    price: 2800,
    location: "Vashi Navi",
    country: "India",
    image: {
      filename: "vashi-urban-nest",
      url: "https://images.unsplash.com/photo-1600047509359-9aa8c65c0f09"
    }
  },
  {
    title: "Powai Lake View",
    description: "Modern flat overlooking the Powai Lake skyline.",
    price: 4100,
    location: "Powai Mumbai",
    country: "India",
    image: {
      filename: "powai-lake-view",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Noida Central Studio",
    description: "Compact and modern studio in central Noida.",
    price: 2300,
    location: "Noida Sector",
    country: "India",
    image: {
      filename: "noida-central-studio",
      url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d"
    }
  },
  {
    title: "Gurgaon Cyber Pad",
    description: "Perfect for professionals working in Cyber Hub, Gurgaon.",
    price: 3600,
    location: "Cyber Gurgaon",
    country: "India",
    image: {
      filename: "gurgaon-cyber-pad",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Patna Heritage Home",
    description: "A spacious heritage home in Patna city.",
    price: 2500,
    location: "Patna Bihar",
    country: "India",
    image: {
      filename: "patna-heritage-home",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    }
  },
  {
    title: "Ranchi Green Cottage",
    description: "A green cottage surrounded by trees in Ranchi.",
    price: 2100,
    location: "Ranchi Jharkhand",
    country: "India",
    image: {
      filename: "ranchi-green-cottage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Lucknow Nawabi Suite",
    description: "Stay like royalty in this Nawabi-style suite in Lucknow.",
    price: 3900,
    location: "Lucknow Uttar",
    country: "India",
    image: {
      filename: "lucknow-nawabi-suite",
      url: "https://images.unsplash.com/photo-1586105251261-72a756497a11"
    }
  },
  {
    title: "Ahmedabad Urban Studio",
    description: "A cozy urban studio in the heart of Ahmedabad.",
    price: 2700,
    location: "Ahmedabad Gujarat",
    country: "India",
    image: {
      filename: "ahmedabad-urban-studio",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Jaipur Pink Palace",
    description: "Experience Jaipur in this palace-inspired apartment.",
    price: 4500,
    location: "Pink Jaipur",
    country: "India",
    image: {
      filename: "jaipur-pink-palace",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Udaipur Lake Haven",
    description: "Beautiful lake view stay near Udaipur.",
    price: 4900,
    location: "Udaipur Lake",
    country: "India",
    image: {
      filename: "udaipur-lake-haven",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    }
  },
  {
    title: "Bhopal Lakeside Flat",
    description: "Relax by the lake in this Bhopal apartment.",
    price: 3100,
    location: "Bhopal Lake",
    country: "India",
    image: {
      filename: "bhopal-lakeside-flat",
      url: "https://images.unsplash.com/photo-1599423300746-b62533397364"
    }
  },
  {
    title: "Nagpur Orange Villa",
    description: "A charming villa in the orange city, Nagpur.",
    price: 3500,
    location: "Nagpur Maharashtra",
    country: "India",
    image: {
      filename: "nagpur-orange-villa",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Pune Hilltop Retreat",
    description: "A hilltop retreat offering stunning Pune views.",
    price: 4300,
    location: "Pune Hill",
    country: "India",
    image: {
      filename: "pune-hilltop-retreat",
      url: "https://images.unsplash.com/photo-1600047509359-9aa8c65c0f09"
    }
  },
  {
    title: "Mysore Palace View",
    description: "Stay near the beautiful Mysore Palace.",
    price: 3700,
    location: "Mysore Karnataka",
    country: "India",
    image: {
      filename: "mysore-palace-view",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Goa Beachside Shack",
    description: "Rustic beachside shack near Baga Beach.",
    price: 5200,
    location: "Baga Goa",
    country: "India",
    image: {
      filename: "goa-beachside-shack",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    }
  },
  {
    title: "Manali Mountain Cabin",
    description: "Wooden cabin with Himalayan mountain views.",
    price: 5700,
    location: "Manali Himachal",
    country: "India",
    image: {
      filename: "manali-mountain-cabin",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    }
  },
  {
    title: "Shimla Valley Resort",
    description: "Valley-facing resort with serene Shimla views.",
    price: 6000,
    location: "Shimla Valley",
    country: "India",
    image: {
      filename: "shimla-valley-resort",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    }
  },
  {
    title: "Darjeeling Tea Estate Stay",
    description: "Stay amid the lush tea estates of Darjeeling.",
    price: 5300,
    location: "Darjeeling Hills",
    country: "India",
    image: {
      filename: "darjeeling-tea-estate",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Ooty Hill Cottage",
    description: "Charming cottage in the lush hills of Ooty.",
    price: 4800,
    location: "Ooty Hills",
    country: "India",
    image: {
      filename: "ooty-hill-cottage",
      url: "https://images.unsplash.com/photo-1586105251261-72a756497a11"
    }
  },
  {
    title: "Coorg Coffee Villa",
    description: "A villa surrounded by coffee plantations in Coorg.",
    price: 4900,
    location: "Coorg Karnataka",
    country: "India",
    image: {
      filename: "coorg-coffee-villa",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Munnar Hill View",
    description: "Hill view retreat in the tea gardens of Munnar.",
    price: 5100,
    location: "Munnar Kerala",
    country: "India",
    image: {
      filename: "munnar-hill-view",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Alleppey Backwater House",
    description: "Experience Kerala backwaters in a houseboat stay.",
    price: 6200,
    location: "Alleppey Kerala",
    country: "India",
    image: {
      filename: "alleppey-backwater-house",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Rishikesh Ganga Camp",
    description: "Stay by the Ganga river in Rishikesh.",
    price: 3000,
    location: "Rishikesh Uttarakhand",
    country: "India",
    image: {
      filename: "rishikesh-ganga-camp",
      url: "https://images.unsplash.com/photo-1599423300746-b62533397364"
    }
  },
  {
    title: "Haridwar Temple Stay",
    description: "Peaceful stay near Haridwar temples.",
    price: 2800,
    location: "Haridwar Ghat",
    country: "India",
    image: {
      filename: "haridwar-temple-stay",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  },
  {
    title: "Varanasi River View",
    description: "Ganga view stay near the historic ghats of Varanasi.",
    price: 3500,
    location: "Varanasi Ghat",
    country: "India",
    image: {
      filename: "varanasi-river-view",
      url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d"
    }
  },
  {
    title: "Kolkata Heritage House",
    description: "Old heritage house in the lanes of Kolkata.",
    price: 3800,
    location: "Kolkata Bengal",
    country: "India",
    image: {
      filename: "kolkata-heritage-house",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    }
  },
  {
    title: "Chennai Marina Bay",
    description: "Bayfront apartment near Marina Beach.",
    price: 4000,
    location: "Chennai Marina",
    country: "India",
    image: {
      filename: "chennai-marina-bay",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    }
  }
]

  
  module.exports = { data: sampleListings };