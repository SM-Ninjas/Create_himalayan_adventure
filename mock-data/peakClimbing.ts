export type TrekkingContent = {
    id?: number;
    slug?: string;
    activityType?: String;
    category?: string;
    img?: string;
    description?: string;
    title?: string;
    location?: string;
    level?: string;
    days?: string;
    people?: string;
    equipment?: EquipmentType[];
    overView?: OverViewType;
    about?: string[];
    highlights?: string[];
    facilities?: string[];
    itinerary?: ItineraryType[];
    subimages?: subimages;
    HowToPrepare?: HowToPrepare;
    path?: string[];
    inclusions: boolean;
  };
  export type subimages = string[];
  
  interface EquipmentType {
    title: string;
    image: string;
    description: string;
  }
  
  export interface OverViewType {
    duration: string;
    startingPoint: string;
    endingPoint: string;
    peoples: string;
    category: string;
    bestSeason: string;
  }
  
  export type HowToPrepare = {
    paragraph: string[];
    points?: string[];
  };
  
  export type ItineraryType = {
    day: number;
    description: string;
    details?: string;
  };
  
  const peakClimbingData: { [key: string]: TrekkingContent } = 
  {
    // peak climbing
    // Island_Peak_Expedition_from_Chhukung: {
    //   id: 23,
    //   slug: "Island_Peak_Expedition_from_Chhukung",
    //   category: "Travel",
    //   activityType: "destinations",
    //   img: "/images/island-peak-climbing-from-chhukung.webp",
    //   description:
    //     "Explore the majestic land of Bhutan, known for its rich culture and stunning landscapes.",
    //   title: "Island Peak Expedition from Chhukung - 5 days",
    //   location: "Bhutan",
    //   days: "Varies",
    //   people: "Varies",
    //   subimages: [
    //     "/images/peakclimbing.jpg",
    //     "/images/peakclimbing1.jpg",
    //     "/images/peakclimbing3.webp",
    //     "/images/island-peak-climbing-from-chhukung.webp"
    //   ],
    //   overView: {
    //     duration:
    //       "Explore Bhutan at your own pace with customizable travel itineraries.",
    //     startingPoint: "Arrive in Paro International Airport.",
    //     endingPoint: "Depart from Paro International Airport.",
    //     peoples: "Suitable for individual travelers or groups.",
    //     category: "Cultural and Scenic Tours",
    //     bestSeason: "Spring and Autumn",
    //   },
    //   equipment: [
    //     {
    //       title: "Trekking Backpack",
    //       image: "/images/bagpack.png",
    //       description: "A durable backpack designed for trekking adventures.",
    //     },
    //     {
    //       title: "Walking Stick",
    //       image: "/images/walkingStick.png",
    //       description: "A sturdy walking stick to provide support during treks.",
    //     },
    //     {
    //       title: "Sunglasses",
    //       image: "/images/glasses.png",
    //       description: "UV-protected sunglasses to protect your eyes from glare.",
    //     },
    //     {
    //       title: "Trekking Shoes",
    //       image: "/images/shoes.png",
    //       description:
    //         "Waterproof and high-ankle shoes with good grip for trekking.",
    //     },
    //   ],
    //   about: [
    //     "Bhutan is a country steeped in rich cultural heritage and stunning landscapes. From the towering peaks of the Himalayas to the lush valleys and historic temples, Bhutan offers an unparalleled travel experience.",
    //     "Explore iconic landmarks such as the Tiger's Nest Monastery, the Punakha Dzong, and the vibrant local festivals. Experience Bhutanese hospitality and learn about the unique customs and traditions of this Himalayan kingdom.",
    //     "Bhutan's commitment to preserving its natural environment and cultural heritage makes it a truly special destination. Whether you're interested in trekking, cultural tours, or simply enjoying the serene beauty of the landscape, Bhutan has something for everyone.",
    //   ],
    //   highlights: [
    //     "Visit the iconic Tiger's Nest Monastery perched on a cliff.",
    //     "Explore the historic Punakha Dzong and its beautiful gardens.",
    //     "Experience local festivals and traditional Bhutanese ceremonies.",
    //     "Trek through pristine natural landscapes and enjoy breathtaking views.",
    //     "Discover the vibrant local markets and Bhutanese cuisine.",
    //   ],
    //   facilities: [
    //     "Guided tours with knowledgeable local guides.",
    //     "Accommodation in comfortable and traditional lodges.",
    //     "Transportation within Bhutan, including airport transfers.",
    //     "Assistance with visa and travel arrangements.",
    //     "Support for cultural and adventure activities.",
    //   ],
    //   itinerary: [
    //     {
    //       day: 1,
    //       description: "Arrival in Paro",
    //       details:
    //         "Arrive at Paro International Airport and transfer to your accommodation. Take a brief rest before exploring the local area.",
    //     },
    //     {
    //       day: 2,
    //       description: "Visit Tiger's Nest Monastery",
    //       details:
    //         "Embark on a hike to the famous Tiger's Nest Monastery. Enjoy the panoramic views and explore the sacred site.",
    //     },
    //     {
    //       day: 3,
    //       description: "Explore Punakha Dzong",
    //       details:
    //         "Travel to Punakha and visit the stunning Punakha Dzong. Discover the historical and architectural significance of this impressive structure.",
    //     },
    //     {
    //       day: 4,
    //       description: "Local Market and Cultural Tour",
    //       details:
    //         "Spend the day exploring local markets and experiencing Bhutanese culture. Visit traditional shops and sample local cuisine.",
    //     },
    //     {
    //       day: 5,
    //       description: "Departure",
    //       details:
    //         "Transfer to Paro International Airport for your departure flight. Reflect on your memorable Bhutanese adventure.",
    //     },
    //   ],
    //   HowToPrepare: {
    //     paragraph: [
    //       "Prepare for your Bhutan adventure by ensuring you have all necessary travel documents, including a visa and travel insurance. Pack comfortable clothing suitable for varying weather conditions and bring any required medications.",
    //       "Familiarize yourself with Bhutanese customs and traditions to enhance your travel experience. Consider learning a few basic phrases in Dzongkha, the local language, to help you interact with locals.",
    //       "Stay hydrated and maintain a good level of physical fitness, especially if you plan to undertake any trekking or hiking activities.",
    //     ],
    //   },
    //   path: ["/images/Bhutan/Bhutan-path.jpg"],
    //   inclusions: false,
    // },
    
    mera_peak_climbing_14_days: {
        id: 24,
        slug: "mera_peak_climbing_14_days",
        category: "Peak Climbing",
        img: "/peak_climbing/Short-Mera-Peak-Climbing-3.webp",
        description: "Challenge yourself with a 14-day expedition to Mera Peak, one of the highest trekking peaks in Nepal. Experience breathtaking views and the thrill of climbing at high altitude.",
        title: "Mera Peak Climbing - 14 Days",
        location: "Mera Peak, Nepal",
        days: "14",
        people: "Varies",
        level:"Easy to Moderate",
        subimages: [
          "/peak_climbing/Short-Mera-Peak-Climbing-3.webp",
          "/peak_climbing/mera-peak-climbing.jpg",
          "/peak_climbing/mera-peak.jpg",
          "/peak_climbing/Mera Peak.jpg",
          "/peak_climbing/mera peak (1).jpg"
        ],
        overView: {
          duration: "14 days",
          startingPoint: "Lukla",
          endingPoint: "Lukla",
          peoples: "Varies",
          category: "Peak Climbing",
          bestSeason: "Spring and Autumn"
        },
        equipment: [
          {
            title: "Trekking Backpack",
            image: "/images/bagpack.png",
            description: "A durable backpack designed for trekking adventures.",
          },
          {
            title: "Walking Stick",
            image: "/images/walkingStick.png",
            description: "A sturdy walking stick to provide support during treks.",
          },
          {
            title: "Sunglasses",
            image: "/images/glasses.png",
            description: "UV-protected sunglasses to protect your eyes from glare.",
          },
          {
            title: "Trekking Shoes",
            image: "/images/shoes.png",
            description:
              "Waterproof and high-ankle shoes with good grip for trekking.",
          },
        ],
        about: [
          "Mera Peak Climbing is an exciting expedition that offers a thrilling experience for both novice and experienced climbers. Located in the remote Solu Khumbu region, Mera Peak is one of the highest trekking peaks in Nepal, offering breathtaking views of Everest, Makalu, and other towering peaks."
        ],
        highlights: [
          "Trek through the remote and beautiful Hinku Valley.",
          "Summit Mera Peak at an altitude of 6,476 meters.",
          "Enjoy panoramic views of Everest, Lhotse, Makalu, and other Himalayan giants.",
          "Experience the culture and hospitality of Sherpa villages.",
          "Explore the stunning alpine scenery and glaciers."
        ],
        facilities: [
          "Accommodation in tents and lodges",
          "All meals during the trek and climb",
          "Experienced climbing guide and support staff",
          "Climbing permits and fees"
        ],
        itinerary: [
          {
            day: 1,
            description: "Arrival in Kathmandu",
            details: "Meet your guide and prepare for the expedition. Overnight in Kathmandu."
          },
          {
            day: 2,
            description: "Fly to Lukla and Trek to Paiya",
            details: "Fly to Lukla and begin your trek to Paiya through Sherpa villages and forests."
          },
          {
            day: 3,
            description: "Trek to Pangoma",
            details: "Continue trekking through dense rhododendron forests and cross several suspension bridges."
          },
          {
            day: 4,
            description: "Trek to Ningsow",
            details: "Ascend through terraced fields and forests to reach Ningsow."
          },
          {
            day: 5,
            description: "Trek to Chhatra Khola",
            details: "Descend into the Hinku Valley and follow the river to Chhatra Khola."
          },
          {
            day: 6,
            description: "Trek to Kothe",
            details: "Climb through the bamboo forest to the village of Kothe."
          },
          {
            day: 7,
            description: "Trek to Thaknak",
            details: "Follow the Hinku River and pass through several monasteries to reach Thaknak."
          },
          {
            day: 8,
            description: "Trek to Khare",
            details: "Ascend along the moraine of the Dig Glacier to reach Khare, the base camp for Mera Peak."
          },
          {
            day: 9,
            description: "Acclimatization Day in Khare",
            details: "Rest and acclimatize to the high altitude. Prepare for the summit push."
          },
          {
            day: 10,
            description: "Trek to Mera High Camp",
            details: "Climb to Mera High Camp, positioned on the edge of a spectacular ridge."
          },
          {
            day: 11,
            description: "Summit Mera Peak and Return to Khare",
            details: "Begin the summit push early in the morning. After reaching the summit, descend back to Khare."
          },
          {
            day: 12,
            description: "Trek to Kothe",
            details: "Retrace your steps back to Kothe."
          },
          {
            day: 13,
            description: "Trek to Lukla",
            details: "Continue descending to Lukla, where you will spend the night."
          },
          {
            day: 14,
            description: "Fly back to Kathmandu",
            details: "Take an early morning flight back to Kathmandu and conclude your adventure."
          }
        ],
        HowToPrepare: {
          paragraph: [
            "Ensure you are physically fit and have experience with high-altitude trekking.",
            "Pack essential climbing gear and clothing suitable for cold weather conditions.",
            "Carry personal medications and altitude sickness tablets.",
            "Obtain a valid climbing permit and ensure your travel insurance covers high-altitude climbing."
          ]
        },
        path: ["/peak_climbing/helmet.png" ],
        inclusions: false
    },
    
    Mera_Peak_Expedition_via_Phaplu: {
        id: 25,
        slug: "mera_peak_expedition_via_phaplu_19_days",
        category: "Peak Climbing",
        img: "/peak_climbing/trail-mera-peak-base-camp-to-high-walk-glacier-khumbu-region-himalayas-mountain-nepal-asia-136567271.webp",
        description: "Embark on a 19-day expedition to Mera Peak, starting from Phaplu, allowing for better acclimatization and a scenic journey through the Solu Khumbu region. Reach the summit of one of Nepal's highest trekking peaks.",
        title: "Mera Peak Expedition via Phaplu - 19 Days",
        location: "Mera Peak, Nepal",
        days: "19",
        people: "Varies",
        level: "Easy to Moderate",
        subimages: [
          "/peak_climbing/trail-mera-peak-base-camp-to-high-walk-glacier-khumbu-region-himalayas-mountain-nepal-asia-136567271.webp",
          "/peak_climbing/phaplu-village.jpghFs.jpg",
          "/peak_climbing/Mera-peak-climbing-1024x512.jpg",
          "/peak_climbing/khare-village.jpgpsF.jpg",
          "/peak_climbing/depositphotos_454144964-stock-photo-mountaineers-make-climbing-mount-island.jpg"
        ],
        overView: {
          duration: "19 days",
          startingPoint: "Phaplu",
          endingPoint: "Lukla",
          peoples: "Varies",
          category: "Peak Climbing",
          bestSeason: "Spring and Autumn"
        },
        equipment: [
          {
            title: "Trekking Backpack",
            image: "/images/bagpack.png",
            description: "A durable backpack designed for trekking adventures.",
          },
          {
            title: "Walking Stick",
            image: "/images/walkingStick.png",
            description: "A sturdy walking stick to provide support during treks.",
          },
          {
            title: "Sunglasses",
            image: "/images/glasses.png",
            description: "UV-protected sunglasses to protect your eyes from glare.",
          },
          {
            title: "Trekking Shoes",
            image: "/images/shoes.png",
            description:
              "Waterproof and high-ankle shoes with good grip for trekking.",
          },
        ],
        about: [
          "The Mera Peak Expedition via Phaplu is an ideal adventure for those looking to avoid flights to Lukla and enjoy a more gradual acclimatization process. Starting from Phaplu, the route offers a scenic trek through the Solu Khumbu region before reaching the challenging heights of Mera Peak."
        ],
        highlights: [
          "Begin the expedition with a scenic drive to Phaplu, avoiding the Lukla flight.",
          "Trek through diverse landscapes, including lush forests, terraced fields, and high-altitude alpine zones.",
          "Summit Mera Peak at 6,461 meters, one of the highest trekking peaks in Nepal.",
          "Experience panoramic views of Everest, Lhotse, Cho Oyu, Makalu, and Kanchenjunga.",
          "Enjoy better acclimatization and a unique route through the Solu Khumbu region."
        ],
        facilities: [
          "Accommodation in tents and lodges",
          "All meals during the trek and climb",
          "Experienced climbing guide and support staff",
          "Climbing permits and fees"
        ],
        itinerary: [
          {
            day: 1,
            description: "Drive from Kathmandu to Phaplu",
            details: "Enjoy a scenic drive from Kathmandu to Phaplu. Overnight at Phaplu."
          },
          {
            day: 2,
            description: "Trek to Ringmu",
            details: "Begin the trek with a gradual ascent to Ringmu through dense forests and traditional villages."
          },
          {
            day: 3,
            description: "Trek to Nunthala",
            details: "Descend to the Dudh Koshi River and ascend to the village of Nunthala."
          },
          {
            day: 4,
            description: "Trek to Kharikhola",
            details: "Continue trekking through terraced fields and rhododendron forests to Kharikhola."
          },
          {
            day: 5,
            description: "Trek to Panggom",
            details: "Climb through lush forests to reach the village of Panggom."
          },
          {
            day: 6,
            description: "Trek to Ningsow",
            details: "Ascend to Ningsow, passing through traditional villages and forested areas."
          },
          {
            day: 7,
            description: "Trek to Chhatra Khola",
            details: "Descend into the Hinku Valley and follow the river to Chhatra Khola."
          },
          {
            day: 8,
            description: "Trek to Kothe",
            details: "Continue through the bamboo forest to the village of Kothe."
          },
          {
            day: 9,
            description: "Trek to Thaknak",
            details: "Follow the Hinku River and pass through several monasteries to reach Thaknak."
          },
          {
            day: 10,
            description: "Trek to Khare",
            details: "Ascend along the moraine of the Dig Glacier to reach Khare, the base camp for Mera Peak."
          },
          {
            day: 11,
            description: "Acclimatization Day in Khare",
            details: "Rest and acclimatize to the high altitude. Prepare for the summit push."
          },
          {
            day: 12,
            description: "Trek to Mera High Camp",
            details: "Climb to Mera High Camp, positioned on the edge of a spectacular ridge."
          },
          {
            day: 13,
            description: "Summit Mera Peak and Return to Khare",
            details: "Begin the summit push early in the morning. After reaching the summit, descend back to Khare."
          },
          {
            day: 14,
            description: "Contingency Day",
            details: "This day is reserved as a buffer in case of unfavorable weather conditions."
          },
          {
            day: 15,
            description: "Trek to Kothe",
            details: "Retrace your steps back to Kothe."
          },
          {
            day: 16,
            description: "Trek to Thuli Kharka",
            details: "Ascend through the forested trails to Thuli Kharka."
          },
          {
            day: 17,
            description: "Trek to Lukla",
            details: "Descend to Lukla, where you will spend the night."
          },
          {
            day: 18,
            description: "Fly back to Kathmandu",
            details: "Take an early morning flight back to Kathmandu and conclude your adventure."
          },
          {
            day: 19,
            description: "Departure from Kathmandu",
            details: "Transfer to the airport for your onward journey."
          }
        ],
        HowToPrepare: {
          paragraph: [
            "Ensure you are physically fit and have experience with high-altitude trekking.",
            "Pack essential climbing gear and clothing suitable for cold weather conditions.",
            "Carry personal medications and altitude sickness tablets.",
            "Obtain a valid climbing permit and ensure your travel insurance covers high-altitude climbing."
          ]
        },
        path: ["/peak_climbing/helmet.png"],
        inclusions: false
    },
      Island_Peak_Expedition_5_Days: {
        id: 26,
        slug: "island_peak_expedition_5_days",
        category: "Peak Climbing",
        img: "/peak_climbing/islandpeak-expedition15.jpg",
        description: "A challenging 5-day expedition to Island Peak, perfect for those looking to experience Himalayan climbing within a short time frame. Reach the summit and enjoy stunning views of the surrounding peaks.",
        title: "Island Peak Expedition - 5 Days",
        location: "Island Peak, Nepal",
        days: "5",
        people: "Varies",
        level: "Moderate to Difficult",
        subimages: [
          "/peak_climbing/islandpeak-expedition15.jpg",
          "/peak_climbing/Island-Peak-Expedition-2.jpg",
          "/peak_climbing/Island-Peak-Expedition-1.jpg",
          "/peak_climbing/Islandpeakclimbing.jpg",
          "/peak_climbing/everest_crevasse.jpg"
        ],
        overView: {
          duration: "5 days",
          startingPoint: "Lukla",
          endingPoint: "Lukla",
          peoples: "Varies",
          category: "Peak Climbing",
          bestSeason: "Spring and Autumn"
        },
        equipment: [
          {
            title: "Trekking Backpack",
            image: "/images/bagpack.png",
            description: "A durable backpack designed for trekking adventures.",
          },
          {
            title: "Walking Stick",
            image: "/images/walkingStick.png",
            description: "A sturdy walking stick to provide support during treks.",
          },
          {
            title: "Sunglasses",
            image: "/images/glasses.png",
            description: "UV-protected sunglasses to protect your eyes from glare.",
          },
          {
            title: "Trekking Shoes",
            image: "/images/shoes.png",
            description:
              "Waterproof and high-ankle shoes with good grip for trekking.",
          },
        ],
        about: [
          "The Island Peak Expedition is a perfect short adventure for those looking to experience Himalayan climbing. This 5-day trek includes a challenging climb to the summit, offering spectacular views of the surrounding peaks."
        ],
        highlights: [
          "Experience a short yet challenging climb to Island Peak at 6,189 meters.",
          "Enjoy panoramic views of Lhotse, Nuptse, and the surrounding Himalayas.",
          "Trek through the beautiful Khumbu Valley, rich with Sherpa culture and traditions.",
          "Ideal for those looking to gain experience in high-altitude climbing."
        ],
        facilities: [
          "Accommodation in tents and lodges",
          "All meals during the trek and climb",
          "Experienced climbing guide and support staff",
          "Climbing permits and fees"
        ],
        itinerary: [
          {
            day: 1,
            description: "Fly from Kathmandu to Lukla and Trek to Phakding",
            details: "Take an early morning flight from Kathmandu to Lukla, followed by a trek to the village of Phakding."
          },
          {
            day: 2,
            description: "Trek to Namche Bazaar",
            details: "Continue trekking through pine forests along the Dudh Koshi River to reach the Sherpa capital of Namche Bazaar."
          },
          {
            day: 3,
            description: "Trek to Island Peak Base Camp",
            details: "Trek through the Khumbu Valley to reach Island Peak Base Camp. Prepare for the summit push."
          },
          {
            day: 4,
            description: "Summit Island Peak and Return to Base Camp",
            details: "Start early to climb to the summit of Island Peak. After reaching the top, descend back to Base Camp."
          },
          {
            day: 5,
            description: "Trek to Lukla and Fly back to Kathmandu",
            details: "Retrace your steps to Lukla and take a flight back to Kathmandu."
          }
        ],
        HowToPrepare: {
          paragraph: [
            "Ensure you are physically fit and have experience with high-altitude trekking.",
            "Pack essential climbing gear and clothing suitable for cold weather conditions.",
            "Carry personal medications and altitude sickness tablets.",
            "Obtain a valid climbing permit and ensure your travel insurance covers high-altitude climbing."
          ]
        },
        path: ["/peak_climbing/helmet.png"],
        inclusions: false
      
    },
    Lobuche_East_Climbing_with_EBC_Renjo_and_Cho_La_Pass_Trek: {
      id: 27,
      slug: "lobuche_east_climbing_with_ebc_renjo_and_cho_la_pass_trek",
      category: "Trekking and Peak Climbing",
      img: "/peak_climbing/view-from-the-summit-of-the-island-peak-nepal-391.jpg",
      description: "An ultimate 19-day adventure combining trekking to Everest Base Camp, crossing two high passes, and climbing Lobuche East Peak. Experience the best of the Everest region with stunning views and rich Sherpa culture.",
      title: "Lobuche East Climbing with EBC, Renjo, and Cho La Pass Trek - 19 Days",
      location: "Everest Region, Nepal",
      days: "19",
      people: "Varies",
      level: "Moderate to Difficult",
      subimages: [
        "/peak_climbing/renjo-la-pass.jpgcNj.jpg",
        "/peak_climbing/lobuche-peak-climb.webp",
        "/peak_climbing/langtang-trek-complete-guide.jpgEMo.jpg",
        "/peak_climbing/kala-patthar.jpgiCt.jpg",
        "/peak_climbing/chola-pass.jpgS1C.jpg"
      ],
      overView: {
        duration: "19 days",
        peoples: "Varies",
        startingPoint: "Kathmandu",
        endingPoint: "Kathmandu",
        category: "Trekking and Peak Climbing",
        bestSeason: "Spring and Autumn"
      },
      equipment: [
        {
          title: "Trekking Backpack",
          image: "/images/bagpack.png",
          description: "A durable backpack designed for trekking adventures.",
        },
        {
          title: "Walking Stick",
          image: "/images/walkingStick.png",
          description: "A sturdy walking stick to provide support during treks.",
        },
        {
          title: "Sunglasses",
          image: "/images/glasses.png",
          description: "UV-protected sunglasses to protect your eyes from glare.",
        },
        {
          title: "Trekking Shoes",
          image: "/images/shoes.png",
          description:
            "Waterproof and high-ankle shoes with good grip for trekking.",
        },
      ],
      about: [
        "The Lobuche East Climbing with EBC, Renjo, and Cho La Pass Trek is a comprehensive adventure offering a unique combination of trekking and peak climbing in the Everest region. This 19-day trek includes traversing high mountain passes, exploring beautiful valleys, and summiting Lobuche East Peak."
      ],
      highlights: [
        "Experience both trekking and peak climbing in one single itinerary.",
        "An exhilarating mountain flight to Lukla.",
        "Visit Namche Bazaar and hike to Hotel Everest View for breathtaking panoramas.",
        "Explore the serene Gokyo Lakes and ascend Gokyo Ri for sunrise views.",
        "Cross the high mountain passes of Renjo La and Cho La.",
        "Climb Lobuche East Peak and enjoy panoramic views of Everest, Lhotse, Nuptse, and more.",
        "Trek to Everest Base Camp and Kala Patthar for unobstructed views of Mt. Everest."
      ],
      facilities: [
        "Accommodation in lodges and tents",
        "All meals during the trek and climb",
        "Experienced trekking and climbing guide",
        "Climbing permits and fees",
        "Necessary climbing equipment"
      ],
      itinerary: [
        {
          day: 1,
          description: "Arrival in Kathmandu (1,400m/4,593ft) and Trek Preparation",
          details: "Arrive in Kathmandu, meet with your guide, and prepare for the trek."
        },
        {
          day: 2,
          description: "Fly to Lukla (2,840m/9,316ft) and Trek to Phakding (2,610m/8,561ft)",
          details: "Fly to Lukla and begin the trek to Phakding."
        },
        {
          day: 3,
          description: "Trek from Phakding to Namche Bazaar (3,440m/11,284ft)",
          details: "Trek through the forested trail to Namche Bazaar."
        },
        {
          day: 4,
          description: "Acclimatization Day at Namche Bazaar",
          details: "Explore Namche Bazaar and hike to Hotel Everest View."
        },
        {
          day: 5,
          description: "Trek from Namche Bazaar to Thame (3,820m/12,530ft)",
          details: "Trek to the historic village of Thame."
        },
        {
          day: 6,
          description: "Trek from Thame to Lumde (4,368m/14,328ft)",
          details: "Hike through beautiful landscapes to Lumde."
        },
        {
          day: 7,
          description: "Trek from Lumde to Gokyo (4,790m/15,712ft) via Renjo La Pass (5,360m/17,581ft)",
          details: "Cross Renjo La Pass and trek to Gokyo."
        },
        {
          day: 8,
          description: "Hike to Gokyo Ri (5,360m/17,581ft) or Excursion of the Four and Fifth Lakes",
          details: "Ascend Gokyo Ri for sunrise or explore additional lakes."
        },
        {
          day: 9,
          description: "Trek from Gokyo to Thagnag (4,700m/15,416ft)",
          details: "Trek along the moraine of Ngozumpa Glacier to Thagnag."
        },
        {
          day: 10,
          description: "Trek from Thagnag to Lobuche (4,910m/16,105ft) via Cho La Pass (5,420m/17,778ft)",
          details: "Cross Cho La Pass and trek to Lobuche."
        },
        {
          day: 11,
          description: "Trek from Lobuche to Gorak Shep (5,140m/16,860ft) and hike to Everest Base Camp (5,364m/17,594ft)",
          details: "Trek to Gorak Shep and hike to Everest Base Camp."
        },
        {
          day: 12,
          description: "Hike to Kala Patthar (5,550m/18,204ft) and Trek to Lobuche (4,910m/16,105ft)",
          details: "Hike to Kala Patthar for the best views of Everest and return to Lobuche."
        },
        {
          day: 13,
          description: "Trek from Lobuche to High Camp (5,400m/17,712ft) and Participate in Pre-Climb Training",
          details: "Trek to Lobuche High Camp and undergo climbing training."
        },
        {
          day: 14,
          description: "Summit Lobuche East (6,119m/20,071ft) and Descend to Pheriche (4,240m/13,908ft)",
          details: "Summit Lobuche East and descend to Pheriche."
        },
        {
          day: 15,
          description: "Contingency Day for Summit",
          details: "Extra day in case of bad weather or other delays."
        },
        {
          day: 16,
          description: "Trek from Pheriche to Namche Bazaar (3,440m/11,284ft)",
          details: "Retrace your steps back to Namche Bazaar."
        },
        {
          day: 17,
          description: "Trek from Namche Bazaar to Lukla (2,840m/9,316ft)",
          details: "Trek back to Lukla."
        },
        {
          day: 18,
          description: "Fly to Kathmandu (1,400m/4,593ft)",
          details: "Fly back to Kathmandu and enjoy the day at leisure."
        },
        {
          day: 19,
          description: "Final Departure",
          details: "Departure from Kathmandu."
        }
      ],
      HowToPrepare: {
        paragraph: [
          "Ensure good physical fitness and acclimatization for high-altitude trekking and climbing.",
          "Pack appropriate climbing gear, including boots, crampons, and an ice axe.",
          "Carry personal medications and altitude sickness tablets.",
          "Obtain necessary climbing permits and ensure your travel insurance covers high-altitude climbing."
        ]
      },
      path: ["/trekking/helmet.png"],
      inclusions: true
    },
    Dhampus_Peak_Climbing_14_Days: {
      id:28,
      slug: "dhampus_peak_climbing_14_days",
      category: "Peak Climbing",
      img: "/peak_climbing/The20Claiming20on%20Everest_GettyImages-513247652.webp",
      description: "Embark on a 14-day adventure to Dhampus Peak, a non-technical trekking peak in Nepal. This journey offers stunning views of the Annapurna and Dhaulagiri ranges, with a chance to experience the unique culture of Mustang and the beauty of the Annapurna Conservation Area.",
      title: "Dhampus Peak Climbing - 14 Days",
      location: "Dhampus Peak, Annapurna Region, Nepal",
      days: "14",
      people: "Varies",
      level: "Easy to Moderate",
      subimages: [
        "/peak_climbing/thapa-peak.jpg",
        "/peak_climbing/few-lake-pokhara.jpgu8A.jpg",
        "/peak_climbing/everest-expedition-south.webp",
        "/peak_climbing/Dhampus-Peak-Climbing-14-days.jpg",
        "/peak_climbing/annapurna-trekking.webp"
      ],
      overView: {
        duration: "14 days",
        startingPoint: "Kathmandu",
        endingPoint: "Kathmandu",
        peoples: "Varies",
        category: "Peak Climbing",
        bestSeason: "Spring and Autumn"
      },
      equipment: [
        {
          title: "Trekking Backpack",
          image: "/images/bagpack.png",
          description: "A durable backpack designed for trekking adventures.",
        },
        {
          title: "Walking Stick",
          image: "/images/walkingStick.png",
          description: "A sturdy walking stick to provide support during treks.",
        },
        {
          title: "Sunglasses",
          image: "/images/glasses.png",
          description: "UV-protected sunglasses to protect your eyes from glare.",
        },
        {
          title: "Trekking Shoes",
          image: "/images/shoes.png",
          description:
            "Waterproof and high-ankle shoes with good grip for trekking.",
        },
      ],
      about: [
        "Dhampus Peak is a popular non-technical trekking peak in Nepal's Annapurna region. The 14-day adventure includes a trek through stunning landscapes and cultural exploration before the challenging climb to Dhampus Peak summit, offering breathtaking views of the Annapurna and Dhaulagiri ranges."
      ],
      highlights: [
        "Summit Dhampus/Thapa Peak at 6,012m/19,724ft.",
        "Panoramic views of Dhaulagiri, Nilgiri, Sita Chuchura, Tukuche Peak, Thorong Peak, Mukut Himal, and Annapurna South.",
        "Cross the challenging Dhampus Pass/Thapa Pass at 5,244m/17,204ft.",
        "Explore the ancient forbidden Kingdom of Mustang and its unique culture.",
        "Relax in the hot springs of Tatopani.",
        "Visit UNESCO World Heritage Sites in Kathmandu and the scenic Phewa Tal Lakeside in Pokhara."
      ],
      facilities: [
        "Accommodation in tents and lodges",
        "All meals during the trek and climb",
        "Experienced climbing guide and support staff",
        "Climbing permits and fees"
      ],
      itinerary: [
        {
          day: 1,
          description: "Arrival in Kathmandu (1,400m/4,593ft) - Transfer to Hotel",
          details: "Arrive at Tribhuvan International Airport, transfer to your hotel in Thamel, Kathmandu. Rest and explore Thamel in the evening."
        },
        {
          day: 2,
          description: "Trip Preparation and Sightseeing in Kathmandu",
          details: "Complete necessary documentation and permits. Visit UNESCO World Heritage Sites including Kathmandu Durbar Square, Swayambhunath Stupa, Boudhanath Stupa, and Pashupatinath Temple."
        },
        {
          day: 3,
          description: "Drive from Kathmandu to Pokhara City (800m/2,625ft) - 6 to 7 hours drive",
          details: "Drive to Pokhara, explore the Lakeside area, and enjoy the beautiful Phewa Tal (Lake)."
        },
        {
          day: 4,
          description: "Drive from Pokhara to Tatopani (1,200m/3,936ft) - 6 to 7 hours drive",
          details: "Drive to Tatopani, known for its hot springs. Rest and interact with locals."
        },
        {
          day: 5,
          description: "Trek from Tatopani to Ghasa (2,010m/6,594ft) - 5 to 6 hours trek",
          details: "Trek along the Myagdi River to Ghasa, passing villages and forests, and enjoy the Himalayan pheasants in Ghasa."
        },
        {
          day: 6,
          description: "Trek from Ghasa to Larjung (2,550m/8,366ft) - 5 to 6 hours trek",
          details: "Trek to Larjung, a village with Tibetan Buddhist culture. Visit Guru Sangpo cave, Bhuturcho Lake, and Sekung Lake if time permits."
        },
        {
          day: 7,
          description: "Trek from Larjung to Marpha (2,670m/8,760ft) - 2 to 3 hours trek",
          details: "Trek to Marpha, known for its Tibetan Buddhist culture, apple orchards, and Tibetan refugee camps."
        },
        {
          day: 8,
          description: "Trek from Marpha to Yak Kharka (3,900m/12,795ft) - 5 to 6 hours trek",
          details: "Trek to Yak Kharka, an alpine pasture area. Experience stronger winds and enjoy a piece of cake at this high altitude."
        },
        {
          day: 9,
          description: "Trek from Yak Kharka to Dhampus/Thapa Pass (5,244m/17,204ft) - 6 to 7 hours trek",
          details: "Cross the challenging Dhampus/Thapa Pass. Enjoy views of Mt. Hongde, Dhaulagiri, and Gurja Himal."
        },
        {
          day: 10,
          description: "Summit Dhampus/Thapa Peak (6,012m/19,724ft) and descend to Kalopani (3,930m/12,893ft) - 8 to 9 hours trek/climbing",
          details: "Summit Dhampus Peak early in the morning. Enjoy the panoramic views and descend to Kalopani."
        },
        {
          day: 11,
          description: "Trek from Kalopani to Tatopani (2,530m/8,300ft) - 5 to 6 hours trek",
          details: "Descend back to Tatopani, relax in the hot springs."
        },
        {
          day: 12,
          description: "Drive from Tatopani to Beni then Pokhara (800m/2,625ft) - 6 to 7 hours drive",
          details: "Drive back to Pokhara via Beni. Enjoy the evening in Pokhara."
        },
        {
          day: 13,
          description: "Drive from Pokhara to Kathmandu - 6 to 7 hours drive",
          details: "Drive back to Kathmandu, explore local shops and enjoy a multi-cuisine or Nepali dinner."
        },
        {
          day: 14,
          description: "Final departure",
          details: "Transfer to Tribhuvan International Airport for your departure. Farewell and share your experiences."
        }
      ],
      HowToPrepare: {
        paragraph: [
          "Ensure you are physically fit and have experience with high-altitude trekking.",
          "Pack essential climbing gear and clothing suitable for cold weather conditions.",
          "Carry personal medications and altitude sickness tablets.",
          "Obtain a valid climbing permit and ensure your travel insurance covers high-altitude climbing."
        ]
      },
      path: ["/peak_climbing/helmet.png"],
      inclusions: false
    },
    Kyajo_Ri_Peak_Climbing_17_Days: {
      id:29,
      slug: "kyajo_ri_peak_climbing_17_days",
      category: "Peak Climbing",
      img: "/peak_climbing/titas-gurung-ntBPI4OnXZ0-unsplash-1-scaled.jpg",
      description: "Kyajo Ri Peak Climbing is a challenging 17-day adventure that combines technical climbing with breathtaking views of the Everest region. Experience alpine-style climbing with stunning vistas of Everest, Lhotse, Makalu, and Cho Oyu while immersing in the vibrant Sherpa culture.",
      title: "Kyajo Ri Peak Climbing - 17 Days",
      location: "Kyajo Ri Peak, Everest Region, Nepal",
      days: "17",
      people: "Varies",
      level: "Difficult to Challenge",
      subimages: [
        "/peak_climbing/kyajo-ri-peak-climbing-1.webp",
        "/peak_climbing/kailash-with-simikot.webp",
        "/peak_climbing/home-climbing-sliders-ae2999e2.jpeg",
        "/peak_climbing/Everest-Base-Camp-Trek-Ein-Abenteuer-im-Herzen-des-Himalayas-min-scaled",
        "/peak_climbing/depositphotos_454144964-stock-photo-mountaineers-make-climbing-mount-island.jpg"
      ],
      overView: {
        duration: "17 days",
        startingPoint: "Kathmandu",
        endingPoint: "Kathmandu",
        peoples: "Varies",
        category: "Peak Climbing",
        bestSeason: "Spring and Autumn"
      },
      equipment: [
        {
          title: "Trekking Backpack",
          image: "/images/bagpack.png",
          description: "A durable backpack designed for trekking adventures.",
        },
        {
          title: "Walking Stick",
          image: "/images/walkingStick.png",
          description: "A sturdy walking stick to provide support during treks.",
        },
        {
          title: "Sunglasses",
          image: "/images/glasses.png",
          description: "UV-protected sunglasses to protect your eyes from glare.",
        },
        {
          title: "Trekking Shoes",
          image: "/images/shoes.png",
          description:
            "Waterproof and high-ankle shoes with good grip for trekking.",
        },
      ],
      about: [
        "Kyajo Ri Peak is a semi-technical peak situated between Gokyo Valley and Thame. This 17-day adventure combines trekking with alpine climbing, providing a challenging experience along with stunning views of the Everest region. The journey includes acclimatization hikes, technical climbing sections, and immersion in Sherpa culture."
      ],
      highlights: [
        "Climb Kyajo Ri Peak at 6,186m/20,296ft.",
        "Bask in the panoramic views of Everest, Lhotse, Makalu, Cho Oyu, and other neighboring peaks.",
        "Experience technical climbing with alpine skills including ice and rock climbing.",
        "Fly into Lukla and trek through the scenic Everest region.",
        "Explore Sherpa villages and experience their vibrant culture.",
        "Acclimatize in Namche Bazaar and enjoy the Everest View Hotel.",
        "Relax in Kathmandu and celebrate your climb with local cuisine."
      ],
      facilities: [
        "Accommodation in teahouses, base camp tents, and higher camps",
        "All meals during the trek and climb",
        "Experienced climbing guide and support staff",
        "Climbing permits and fees",
        "Domestic flights and airport transfers"
      ],
      itinerary: [
        {
          day: 1,
          description: "Arrival in Kathmandu (1,400m/4,592ft) - Transfer to Hotel",
          details: "Arrive at Tribhuvan International Airport, transfer to your hotel in Kathmandu. Rest and explore Thamel if time permits."
        },
        {
          day: 2,
          description: "Trip Preparation and Sightseeing in Kathmandu",
          details: "Meet your guide, prepare your gear, and visit UNESCO World Heritage Sites such as Swayambhunath Stupa, Boudhanath Stupa, and Pashupatinath Temple."
        },
        {
          day: 3,
          description: "Fly to Lukla then trek to Phakding (2,800m/9,187ft) - 35 minutes flight and 3 to 4 hours trek",
          details: "Take a scenic flight to Lukla and trek to Phakding, exploring the Sherpa village and its surroundings."
        },
        {
          day: 4,
          description: "Trek from Phakding to Namche Bazaar (3,438m/11,280ft) - 6 to 7 hours trek",
          details: "Hike through forests and cross suspension bridges to reach Namche Bazaar, the vibrant Sherpa town."
        },
        {
          day: 5,
          description: "Acclimatization Day at Namche Bazaar (3,438m/11,280ft)",
          details: "Acclimatize by hiking to Everest View Hotel, visit Khumjung village, and explore local sites."
        },
        {
          day: 6,
          description: "Trek from Namche Bazaar to Mende (3,736m/12,258ft) - 5 to 6 hours trek",
          details: "Trek through rhododendron forests and villages to reach Mende, enjoying scenic views along the way."
        },
        {
          day: 7,
          description: "Trek from Mende to Kyajo Ri Base Camp (4,550m/14,929ft) - 5 to 6 hours trek",
          details: "Trek to Kyajo Ri Base Camp, soaking in views of surrounding peaks and preparing for the climb."
        },
        {
          day: 8,
          description: "Rest day at Kyajo Ri Base Camp (4,550m/14,929ft)",
          details: "Acclimatize and prepare for the climb with a pre-climb training session. Explore the base camp area."
        },
        {
          day: 9,
          description: "Kyajo Ri Base Camp to Camp I (5,200m/17,061ft) - 4 to 5 hours trek/climbing",
          details: "Ascend to Camp I near the Kyajo Glacier, navigating through boulders and steep headwalls."
        },
        {
          day: 10,
          description: "Acclimatization and rest at Camp I (5,200m/17,061ft)",
          details: "Acclimatize at Camp I and hike to Camp II for familiarization."
        },
        {
          day: 11,
          description: "Camp I to Camp II (5,700m/18,702ft) - 4 to 5 hours trek/climbing",
          details: "Climb to Camp II, handling technical terrain and using mountaineering gear."
        },
        {
          day: 12,
          description: "Summit Day and Back to Camp II (6,186m/20,296ft) - 8 to 9 hours trek/climbing",
          details: "Summit Kyajo Ri Peak early in the morning, enjoy the views, and return to Camp II."
        },
        {
          day: 13,
          description: "Trek back to Kyajo Ri Base Camp (4,550m/14,929ft) - 5 to 6 hours trek",
          details: "Retrace your steps to the base camp and celebrate the successful climb."
        },
        {
          day: 14,
          description: "Kyajo Ri Base Camp to Namche Bazaar (3,438m/11,280ft) - 7 to 8 hours trek",
          details: "Descend to Namche Bazaar, passing through various vegetation zones."
        },
        {
          day: 15,
          description: "Namche Bazaar to Lukla (2,800m/9,187ft) - 6 to 7 hours trek",
          details: "Complete your trek back to Lukla, enjoying the final views of the region."
        },
        {
          day: 16,
          description: "Fly to Kathmandu (1,350m/4,429ft) - 35 minutes flight",
          details: "Fly back to Kathmandu, relax or explore the city before departure."
        },
        {
          day: 17,
          description: "Final Departure",
          details: "Transfer to Tribhuvan International Airport for your flight home."
        }
      ],
      HowToPrepare: {
        paragraph: [
          "Ensure you are in good physical condition and have experience with high-altitude trekking.",
          "Pack essential climbing gear including boots, crampons, ice axe, and harness.",
          "Carry personal medications and altitude sickness tablets.",
          "Obtain necessary climbing permits and ensure your travel insurance covers high-altitude climbs."
        ]
      },
      path: ["/peak_climbing/helmet.png"],
      inclusions: false
    },
    Saribung_Peak_Climbing_25_Days: {
  id:30,
  slug: "saribung_peak_climbing_25_days",
  category: "Peak Climbing",
  img: "/peak_climbing/1293514676.jpeg",
  description: "Saribung Peak Climbing is a thrilling 25-day adventure that offers a mix of trekking and climbing in the remote Mustang region. Experience the beauty of the Himalayas and the unique culture of the Tibetan-influenced Mustang while climbing Saribung Peak, which stands at 6,328 meters.",
  title: "Saribung Peak Climbing - 25 Days",
  location: "Saribung Peak, Mustang Region, Nepal",
  days: "25",
  people: "Varies",
  level: "Moderate to Difficult",
  subimages: [
    "/peak_climbing/1293514676.jpeg",
    "/peak_climbing/1569820251-mount-kailash(1).jpg",
    "/peak_climbing/phu-village.jpgVUR.jpg",
    "/peak_climbing/saribung peak photo.jpg",
    "/peak_climbing/saribung-peak-climbing.jpeg"
  ],
  overView: {
    duration: "25 days",
    startingPoint: "Kathmandu",
    endingPoint: "Kathmandu",
    peoples: "Varies",
    category: "Peak Climbing",
    bestSeason: "Spring and Autumn"
  },
  equipment: [
    {
      title: "Trekking Backpack",
      image: "/images/bagpack.png",
      description: "A durable backpack designed for trekking adventures.",
    },
    {
      title: "Walking Stick",
      image: "/images/walkingStick.png",
      description: "A sturdy walking stick to provide support during treks.",
    },
    {
      title: "Sunglasses",
      image: "/images/glasses.png",
      description: "UV-protected sunglasses to protect your eyes from glare.",
    },
    {
      title: "Trekking Shoes",
      image: "/images/shoes.png",
      description:
        "Waterproof and high-ankle shoes with good grip for trekking.",
    },
  ],
  about: [
    "Saribung Peak is a remote peak situated in the Mustang region of Nepal. This 25-day expedition combines trekking through the hidden valleys of Mustang with alpine climbing on Saribung Peak. The journey includes acclimatization hikes, technical climbing sections, and an exploration of Mustang's unique Tibetan culture."
  ],
  highlights: [
    "Climb Saribung Peak at 6,328m/20,756ft.",
    "Experience panoramic views of the Annapurna and Dhaulagiri ranges.",
    "Trek through the remote Mustang region, known for its unique landscapes and culture.",
    "Explore Tibetan-influenced villages and monasteries.",
    "Acclimatize in Muktinath and visit the famous Muktinath Temple.",
    "Relax in Kathmandu and celebrate your climb with local cuisine."
  ],
  facilities: [
    "Accommodation in teahouses, base camp tents, and higher camps",
    "All meals during the trek and climb",
    "Experienced climbing guide and support staff",
    "Climbing permits and fees",
    "Domestic flights and airport transfers"
  ],
  itinerary: [
    {
      day: 1,
      description: "Arrival in Kathmandu (1,400m/4,592ft) - Transfer to Hotel",
      details: "Arrive at Tribhuvan International Airport, transfer to your hotel in Kathmandu. Rest and explore Thamel if time permits."
    },
    {
      day: 2,
      description: "Trip Preparation and Sightseeing in Kathmandu",
      details: "Meet your guide, prepare your gear, and visit UNESCO World Heritage Sites such as Swayambhunath Stupa, Boudhanath Stupa, and Pashupatinath Temple."
    },
    {
      day: 3,
      description: "Fly to Pokhara (820m/2,690ft) - 30 minutes flight",
      details: "Take a scenic flight to Pokhara and explore the beautiful lakeside city."
    },
    {
      day: 4,
      description: "Fly to Jomsom (2,715m/8,907ft) and Trek to Kagbeni (2,810m/9,219ft) - 20 minutes flight and 2 to 3 hours trek",
      details: "Fly to Jomsom and trek to Kagbeni, a gateway to Upper Mustang."
    },
    {
      day: 5,
      description: "Trek from Kagbeni to Muktinath (3,710m/12,172ft) - 6 to 7 hours trek",
      details: "Trek through arid landscapes to reach the sacred town of Muktinath."
    },
    {
      day: 6,
      description: "Rest and Acclimatization at Muktinath (3,710m/12,172ft)",
      details: "Acclimatize and visit the Muktinath Temple, an important pilgrimage site."
    },
    {
      day: 7,
      description: "Trek from Muktinath to Phu Village (4,080m/13,386ft) - 6 to 7 hours trek",
      details: "Trek through beautiful landscapes to reach the remote village of Phu."
    },
    {
      day: 8,
      description: "Trek from Phu Village to Phu Base Camp (4,500m/14,764ft) - 5 to 6 hours trek",
      details: "Continue to Phu Base Camp, preparing for the climb ahead."
    },
    {
      day: 9,
      description: "Rest and Acclimatization at Phu Base Camp (4,500m/14,764ft)",
      details: "Acclimatize and prepare for the climb with a pre-climb training session."
    },
    {
      day: 10,
      description: "Phu Base Camp to Camp I (5,000m/16,404ft) - 4 to 5 hours trek/climbing",
      details: "Ascend to Camp I, navigating through challenging terrain."
    },
    {
      day: 11,
      description: "Acclimatization and Rest at Camp I (5,000m/16,404ft)",
      details: "Acclimatize at Camp I and prepare for the ascent to Camp II."
    },
    {
      day: 12,
      description: "Camp I to Camp II (5,500m/18,045ft) - 4 to 5 hours trek/climbing",
      details: "Climb to Camp II, handling technical sections."
    },
    {
      day: 13,
      description: "Acclimatization and Rest at Camp II (5,500m/18,045ft)",
      details: "Acclimatize at Camp II and prepare for the summit push."
    },
    {
      day: 14,
      description: "Summit Day and Back to Camp II (6,328m/20,756ft) - 8 to 10 hours trek/climbing",
      details: "Summit Saribung Peak early in the morning, enjoy the views, and return to Camp II."
    },
    {
      day: 15,
      description: "Trek back to Camp I (5,000m/16,404ft) - 5 to 6 hours trek",
      details: "Descend to Camp I from Camp II."
    },
    {
      day: 16,
      description: "Trek from Camp I to Phu Village (4,080m/13,386ft) - 6 to 7 hours trek",
      details: "Descend to Phu Village, retracing your steps."
    },
    {
      day: 17,
      description: "Trek from Phu Village to Muktinath (3,710m/12,172ft) - 6 to 7 hours trek",
      details: "Return to Muktinath and relax after the climb."
    },
    {
      day: 18,
      description: "Trek from Muktinath to Jomsom (2,715m/8,907ft) - 6 to 7 hours trek",
      details: "Descend to Jomsom."
    },
    {
      day: 19,
      description: "Fly to Pokhara (820m/2,690ft) - 20 minutes flight",
      details: "Fly back to Pokhara and enjoy some leisure time."
    },
    {
      day: 20,
      description: "Rest Day in Pokhara",
      details: "Relax and explore Pokhara, visiting places like Phewa Lake and the World Peace Pagoda."
    },
    {
      day: 21,
      description: "Fly back to Kathmandu (1,400m/4,592ft) - 30 minutes flight",
      details: "Fly back to Kathmandu and relax at your hotel."
    },
    {
      day: 22,
      description: "Leisure Day in Kathmandu",
      details: "Explore Kathmandu or shop for souvenirs."
    },
    {
      day: 23,
      description: "Buffer Day",
      details: "Additional day in Kathmandu in case of delays or rest."
    },
    {
      day: 24,
      description: "Final Departure Preparation",
      details: "Prepare for your departure and wrap up any last-minute activities."
    },
    {
      day: 25,
      description: "Final Departure",
      details: "Transfer to Tribhuvan International Airport for your flight home."
    }
  ],
  HowToPrepare: {
    paragraph: [
      "Ensure you are in excellent physical condition and have experience with high-altitude trekking and climbing.",
      "Pack essential climbing gear including boots, crampons, ice axe, and harness.",
      "Carry personal medications and altitude sickness tablets.",
      "Obtain necessary climbing permits and ensure your travel insurance covers high-altitude climbs."
    ]
  },
  path: ["/peak_climbing/helmet.png"],
  inclusions: false
      },
    Yala_Peak_Climbing_14_Days: {
      id: 31,
      slug: "yala_peak_climbing_14_days",
      category: "Peak Climbing",
      img: "/peak_climbing/ganja-la-peak",
      description: "Yala Peak Climbing is a 14-day adventure offering a combination of trekking and climbing in the Langtang region of Nepal. At 5,732 meters, Yala Peak provides breathtaking views of the Langtang and Himalaya ranges, making it a perfect choice for climbers looking to experience the Himalayas in a shorter timeframe.",
      title: "Yala Peak Climbing - 14 Days",
      location: "Yala Peak, Langtang Region, Nepal",
      days: "14",
      people: "Varies",
      level: "Easy to Moderate",
      subimages: [
        "/peak_climbing/langtang-valley-trek-161.jpg",
        "/peak_climbing/maxresdefault.jpg",
        "/peak_climbing/view-from-yala-peak.jpg",
        "/peak_climbing/Yala-Peak-2.jpg",
        "/peak_climbing/yala-peak-climbing.webp"
      ],
      overView: {
        duration: "14 days",
        startingPoint: "Kathmandu",
        endingPoint: "Kathmandu",
        peoples: "Varies",
        category: "Peak Climbing",
        bestSeason: "Spring and Autumn"
      },
      equipment: [
        {
          title: "Trekking Backpack",
          image: "/images/bagpack.png",
          description: "A durable backpack designed for trekking adventures.",
        },
        {
          title: "Walking Stick",
          image: "/images/walkingStick.png",
          description: "A sturdy walking stick to provide support during treks.",
        },
        {
          title: "Sunglasses",
          image: "/images/glasses.png",
          description: "UV-protected sunglasses to protect your eyes from glare.",
        },
        {
          title: "Trekking Shoes",
          image: "/images/shoes.png",
          description:
            "Waterproof and high-ankle shoes with good grip for trekking.",
        },
      ],
      about: [
        "Yala Peak is a prominent peak located in the Langtang region of Nepal. This 14-day expedition involves trekking through the Langtang Valley and climbing Yala Peak, providing climbers with spectacular views of the Langtang Himalayas. The journey includes acclimatization hikes, technical climbing, and immersion in the local Tibetan culture."
      ],
      highlights: [
        "Climb Yala Peak at 5,732m/18,509ft.",
        "Enjoy panoramic views of the Langtang and Himalaya ranges.",
        "Trek through the beautiful Langtang Valley and visit traditional villages.",
        "Experience Tibetan-influenced culture and monasteries.",
        "Relax in Kathmandu and celebrate your climb with local cuisine."
      ],
      facilities: [
        "Accommodation in teahouses, base camp tents, and higher camps",
        "All meals during the trek and climb",
        "Experienced climbing guide and support staff",
        "Climbing permits and fees",
        "Domestic flights and airport transfers"
      ],
      itinerary: [
        {
          day: 1,
          description: "Arrival in Kathmandu (1,400m/4,592ft) - Transfer to Hotel",
          details: "Arrive at Tribhuvan International Airport, transfer to your hotel in Kathmandu. Rest and explore Thamel if time permits."
        },
        {
          day: 2,
          description: "Trip Preparation and Sightseeing in Kathmandu",
          details: "Meet your guide, prepare your gear, and visit UNESCO World Heritage Sites such as Swayambhunath Stupa, Boudhanath Stupa, and Pashupatinath Temple."
        },
        {
          day: 3,
          description: "Drive to Syabrubesi (1,460m/4,790ft) - 7 to 8 hours drive",
          details: "Drive from Kathmandu to Syabrubesi, the starting point for the trek."
        },
        {
          day: 4,
          description: "Trek from Syabrubesi to Lama Hotel (2,470m/8,104ft) - 6 to 7 hours trek",
          details: "Trek through lush forests and along the Langtang River to reach Lama Hotel."
        },
        {
          day: 5,
          description: "Trek from Lama Hotel to Langtang Village (3,430m/11,253ft) - 6 to 7 hours trek",
          details: "Continue trekking through beautiful landscapes to Langtang Village."
        },
        {
          day: 6,
          description: "Trek from Langtang Village to Kyanjin Gompa (3,870m/12,696ft) - 4 to 5 hours trek",
          details: "Trek to Kyanjin Gompa, a high-altitude village with stunning mountain views."
        },
        {
          day: 7,
          description: "Rest and Acclimatization at Kyanjin Gompa (3,870m/12,696ft)",
          details: "Acclimatize and explore the area around Kyanjin Gompa, including hikes to nearby viewpoints."
        },
        {
          day: 8,
          description: "Trek from Kyanjin Gompa to Yala Peak Base Camp (4,800m/15,748ft) - 5 to 6 hours trek",
          details: "Ascend to Yala Peak Base Camp and prepare for the climb ahead."
        },
        {
          day: 9,
          description: "Rest and Acclimatization at Base Camp (4,800m/15,748ft)",
          details: "Acclimatize and prepare for the summit attempt with a pre-climb training session."
        },
        {
          day: 10,
          description: "Climb to Yala Peak Summit (5,732m/18,509ft) and Return to Base Camp - 8 to 10 hours trek/climbing",
          details: "Summit Yala Peak early in the morning, enjoy the views, and return to Base Camp."
        },
        {
          day: 11,
          description: "Trek back to Kyanjin Gompa (3,870m/12,696ft) - 4 to 5 hours trek",
          details: "Descend back to Kyanjin Gompa."
        },
        {
          day: 12,
          description: "Trek from Kyanjin Gompa to Lama Hotel (2,470m/8,104ft) - 6 to 7 hours trek",
          details: "Continue the descent to Lama Hotel."
        },
        {
          day: 13,
          description: "Trek from Lama Hotel to Syabrubesi (1,460m/4,790ft) - 6 to 7 hours trek",
          details: "Return to Syabrubesi and relax after the climb."
        },
        {
          day: 14,
          description: "Drive back to Kathmandu (1,400m/4,592ft) - 7 to 8 hours drive",
          details: "Drive back to Kathmandu and prepare for your departure."
        }
      ],
      HowToPrepare: {
        paragraph: [
          "Ensure you are in good physical condition and have experience with trekking at high altitudes.",
          "Pack essential climbing gear including boots, crampons, ice axe, and harness.",
          "Carry personal medications and altitude sickness tablets.",
          "Obtain necessary climbing permits and ensure your travel insurance covers high-altitude climbs."
        ]
      },
      path: ["/peak_climbing/helmet.png"],
      inclusions: false
    },
    Chulu_Far_East_Peak_Climbing_16_Days: {
        id: 32,
        slug: "chulu_far_east_peak_climbing_16_days",
        category: "Peak Climbing",
        img: "/peak_climbing/chulu-east-peak-climbing-1.jpeg",
        description: "Chulu Far East Peak Climbing is a 16-day adventure offering a blend of trekking and climbing in the Annapurna Region. The climb starts from Chame and involves reaching the summit of Chulu Far East Peak, standing at 6,059 meters. Enjoy spectacular views of the Annapurna massif, Pisang Peak, Gangapurna, and Chulu West.",
        title: "Chulu Far East Peak Climbing - 16 Days",
        location: "Chulu Far East Peak, Annapurna Region, Nepal",
        days: "16",
        people: "Varies",
        level: "Easy to Moderate",
        subimages: [
          "/peak_climbing/chulu-east-peak-climbing-1.jpeg",
          "/peak_climbing/Chulu-Far-East-1.webp",
          "/peak_climbing/chulu-far-east-peak-climbin.jpg",
          "/peak_climbing/Chulu-Far-East-Peak-climbing-1.jpg",
          "/peak_climbing/maxresdefault.jpg"
        ],
        overView: {
          duration: "16 days",
          startingPoint: "Kathmandu",
          endingPoint: "Kathmandu",
          peoples: "Varies",
          category: "Peak Climbing",
          bestSeason: "Spring and Autumn"
        },
        equipment: [
          {
            title: "Trekking Backpack",
            image: "/images/bagpack.png",
            description: "A durable backpack designed for trekking adventures.",
          },
          {
            title: "Walking Stick",
            image: "/images/walkingStick.png",
            description: "A sturdy walking stick to provide support during treks.",
          },
          {
            title: "Sunglasses",
            image: "/images/glasses.png",
            description: "UV-protected sunglasses to protect your eyes from glare.",
          },
          {
            title: "Trekking Shoes",
            image: "/images/shoes.png",
            description:
              "Waterproof and high-ankle shoes with good grip for trekking.",
          },
        ],
        about: [
          "Chulu Far East Peak is a popular and relatively easier peak-climbing experience in the Annapurna Region of Nepal. The 16-day expedition involves trekking from Kathmandu to Chame, climbing through snowy terrains, and reaching the summit at 6,059 meters. The journey offers diverse landscapes, including rugged dry trails and snowy slopes, and provides incredible views of the Annapurna massif and other peaks."
        ],
        highlights: [
          "Climb Chulu Far East Peak at 6,059m/19,880ft.",
          "Enjoy panoramic views of Annapurna Massif, Pisang Peak, Gangapurna, and Chulu West.",
          "Experience the unique culture of Manangay villages.",
          "Visit the Lophelling Monastery and She Gompa.",
          "Explore the stunning Marsyangdi Valley.",
          "Acclimatize in Julu Khola and receive pre-climbing training."
        ],
        facilities: [
          "Accommodation in teahouses and tents",
          "All meals during the trek and climb",
          "Experienced climbing guide and support staff",
          "Climbing permits and fees",
          "Transport including drive and airport transfers"
        ],
        itinerary: [
          {
            day: 1,
            description: "Arrival in Kathmandu (1,400m/4,593ft) - Transfer to Hotel",
            details: "Arrive at Tribhuvan International Airport, transfer to your hotel in Kathmandu. Rest and explore Thamel if time permits."
          },
          {
            day: 2,
            description: "Culture tour around Kathmandu, then trip preparation",
            details: "Visit UNESCO World Heritage Sites in Kathmandu such as Kathmandu Durbar Square, Pashupatinath, Swayambhunath, and Bouddhanath Stupa. Prepare for the trek and meet your climbing guide."
          },
          {
            day: 3,
            description: "Drive from Kathmandu to Chame (2,710m/8,892ft) - 9 to 10 hours drive",
            details: "Drive through the Prithvi Highway and Marsyangdi Valley to reach Chame, the trailhead for the Annapurna Circuit."
          },
          {
            day: 4,
            description: "Trek from Chame to Lower Pisang (3,300m/10,827ft) - 5 to 6 hours trek",
            details: "Trek through dense forests and past organic apple farms to reach Lower Pisang."
          },
          {
            day: 5,
            description: "Trek from Lower Pisang to Humde Village (3,330m/10,926ft) - 3 to 4 hours trek",
            details: "Short trek to Humde Village, notable for its Mani wall and local Manangay culture."
          },
          {
            day: 6,
            description: "Trek from Humde to Julu Khola (3,500m/11,484ft) - 3 to 4 hours trek",
            details: "Trek through pine, cedar, and oak forests to reach Julu Khola, visiting the Lophelling Monastery and Sher Gompa."
          },
          {
            day: 7,
            description: "Acclimatization and Rest Day at Julu Khola",
            details: "Rest and acclimatize, with optional hikes around Julu Khola and preparation for the climb."
          },
          {
            day: 8,
            description: "Trek from Julu Khola to Chulu Far East Base Camp (5,000m/16,405ft) - 5 to 6 hours trek",
            details: "Climb to the base camp, experiencing high-altitude terrain and views of Annapurna Massif."
          },
          {
            day: 9,
            description: "Acclimatization Day at Chulu Far East Base Camp and pre-climbing training (5,000m/16,405ft)",
            details: "Acclimatize and participate in pre-climbing training with your guide."
          },
          {
            day: 10,
            description: "Climb from Base Camp to Chulu Far East High Camp (5,500m/18,046ft) - 3 to 4 hours trek",
            details: "Ascend to High Camp, passing through snowy slopes and enjoying views of the Annapurna range."
          },
          {
            day: 11,
            description: "High Camp to Chulu Far East Peak Summit (6,059m/19,880ft) and back to Base Camp - 9 to 10 hours trek/climbing",
            details: "Summit Chulu Far East Peak early in the morning, then return to Base Camp."
          },
          {
            day: 12,
            description: "Contingency Day",
            details: "Reserved for unexpected delays or issues. Can be used to explore local villages if everything is on schedule."
          },
          {
            day: 13,
            description: "Descend from Chulu Far East Base Camp to Humde Village (3,330m/10,926ft) - 6 to 7 hours trek",
            details: "Descend to Humde Village, enjoying local hospitality and tea house services."
          },
          {
            day: 14,
            description: "Trek from Humde Village to Chame (2,710m/8,892ft) - 7 to 8 hours trek",
            details: "Trek back to Chame, where you can enjoy hot showers and facilities."
          },
          {
            day: 15,
            description: "Drive from Chame to Kathmandu (1,400m/4,593ft) - 9 to 10 hours drive",
            details: "Return to Kathmandu, with time for shopping and a farewell dinner."
          },
          {
            day: 16,
            description: "Final Departure from Nepal",
            details: "Transfer to Tribhuvan International Airport for your flight home."
          }
        ],
        HowToPrepare: {
          paragraph: [
            "Ensure you are in good physical condition and have prior trekking experience.",
            "Pack essential climbing gear including boots, crampons, ice axe, and harness.",
            "Carry personal medications and altitude sickness tablets.",
            "Obtain necessary climbing permits and ensure your travel insurance covers high-altitude climbs."
          ]
        },
        path: ["/peak_climbing/helmet.png"],
        inclusions: false
    }
    
  };
  

  export default peakClimbingData;