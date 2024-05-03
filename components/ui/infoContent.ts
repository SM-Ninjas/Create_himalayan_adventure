type TrekkingContent = {
  about: string[];
  highlights: string[];
  facilities: string[];
  itinerary: itineraryType[];
  howtoprepare: HowToPrepare[];
  path: string[];
};

export type HowToPrepare = {
  paragraph: string[];
  points: string[];
};

export type itineraryType = {
  day: number;
  description: string;
  details?: string;
};

const infoContent = {
  about: [
    "A professionally developed trekking itinerary for those looking for excitement is the 14 Days Annapurna Base Camp Trek by Green Valley Nepal Treks Team. A peak above 8,000 meters, thirteen peaks over 7,000 meters, and sixteen more over 6,000 meters are all located within about 60-70 km lateral distance. More beautiful vistas of the Himalayas will gradually open out in front of you as you approach your ultimate goal, Annapurna Base Camp. Throughout the Annapurna Base Camp Trek Journey, each sunrise will increase the thrill and delight.",
    "An awe-inspiring scenery is provided by the area's terrain. The mountains look magnificent in the early morning. The Annapurna Base Camp Trek Itinerary offers stunning morning views. The hikes include a wide variety of sceneries and get you quite near the foot of peaks that are 7,000 and 8,000 meters high. The Annapurna First (8,091 m), Mt. Dhaulagiri (8,167 m), Mt. Nilgiri, Mt. Gangapurna, Mt. Machhapuchhre (6,993 m), Lamjung Himal, and other peaks will all be seen from here.  Along with seeing a wealth of cultural variety, the trip takes you past rural fields and villages inhabited by Gurung ethnic groupings. Gurung people are well-known for their fearlessness all around the world.",
    "Starting with a beautiful journey from Kathmandu to Pokhara, the Annapurna Base Camp Trek itinerary begins. To go to Nayapul from here, you will just need to make one more little drive. The stunning Nepali landscape will be visible to you as you travel. Your journey to the Annapurna Base Camp will start from Nayapul. To ultimately get to the impressive Annapurna Base Camp, one must go through the towns of Tikhedhunga, Ghorepani, Poonhill, Tadapani, Chhomrong, and Deurali. As you retrace your ways out of Modi River Valley to a tranquil resting place called Sinuwa, where you will spend the night, the next day will take you outside of the Annapurna Sanctuary. You will depart Sinuwa the next morning and make your way to Jhinu Danda on foot. Natural hot springs may be found at Jhinu Danda, where you can unwind and ease your aching muscles.  You will travel from Jhinu Danda to Siwai to catch a jeep to Pokhara. 14 Days Annapurna Base Camp Trek itinerary will come to an end when you board a luxurious tourist bus in Pokhara and travel back to Kathmandu.",
  ],
  highlights: [
    "Trek through lovely rhododendron forests, rivers, mountain terraces, and charming villages of Magar, Gurung, Tamang, Thakali, etc.",
    "Discover the vibrant culture, traditions, and way of life of the inhabitants.",
    "Trek to Poon Hill to see the magnificent sunrise and the breathtaking Himalayan range.",
    "Discover the abundant flora and animals as you explore the area around Annapurna glacier.",
    "Explore Jhinu Danda's Natural Hot Springs.",
    "Experience breathtaking views of the Himalayan Mountains, including the Annapurna range, Dhaulagiri, Nilgiri, Fishtail, etc.",
    "From Annapurna Base Camp, you can see the entire snow-covered Himalayas in all their glory.",
    "On the same journey, visit the Annapurna and Machhapucchre base camps.",
    "Spend a night in one of the most gorgeous villages of the Annapurna region, Ghorepani.",
    "Witness stunning views of Himalayan mountains like the Annapurna range, Mt. Dhaulagiri, Mt. Nilgiri, Mt. Fishtail, etc.",
    "Overnight in the shadow of Annapurna at Base Camp.",
  ],
  facilities: [
    "Free International Airport Pickup and Drop off facilities",
    "Green Valley Nepal Trek T-Shirt and Duffle Bag",
    "Map of Annapurna Base Camp Trekking",
    "Medical Kits might be necessary in Certain Cases",
    "Free Excess Luggage Stored at Green Valley Nepal Store During the Trek",
    "Be accompanied by a knowledgeable trek leader, assistant guides, and porters who will not only provide you with all the assistance and direction you need but also educate you about the fascinating Sherpa culture of the area.",
    "Know that you are assisting a firm that runs its treks following principles that guarantee respectful, secure, and equitable working conditions both in Nepal and on all tours undertaken worldwide.",
  ],
  itinerary: [
    {
      day: 1,
      description: "Arrival To Kathmandu",
      details:
        "Our agent will meet you at Tribhuwan International Airport. In addition, to help you check in, he will provide you with a private trip to the hotel. You might choose to relax at your hotel after a long travel or go exploring to find some of Kathmandu's wonderful sights. You will meet your guide and receive any equipment that is missing as well as information on the Annapurna Base Camp Trek Itinerary during the overnight trek briefing.",
    },
    {
      day: 2,
      description: "Take Tourists Delux Bus from Kathmandu to Pokhara",
      details:
        "Our agent will meet you at Tribhuwan International Airport. In addition, to help you check in, he will provide you with a private trip to the hotel. You might choose to relax at your hotel after a long travel or go exploring to find some of Kathmandu's wonderful sights. You will meet your guide and receive any equipment that is missing as well as information on the Annapurna Base Camp Trek Itinerary during the overnight trek briefing.",
    },
    {
      day: 3,
      description:
        "Drive from Pokhara (822m) to Birethanti (1263m) then Trek to Ulleri (1960m)",
      details:
        "Our agent will meet you at Tribhuwan International Airport. In addition, to help you check in, he will provide you with a private trip to the hotel. You might choose to relax at your hotel after a long travel or go exploring to find some of Kathmandu's wonderful sights. You will meet your guide and receive any equipment that is missing as well as information on the Annapurna Base Camp Trek Itinerary during the overnight trek briefing.",
    },
    {
      day: 4,
      description: "Trek from Ulleri (1960m) to Ghorepani (2880m)",
      details:
        "Our agent will meet you at Tribhuwan International Airport. In addition, to help you check in, he will provide you with a private trip to the hotel. You might choose to relax at your hotel after a long travel or go exploring to find some of Kathmandu's wonderful sights. You will meet your guide and receive any equipment that is missing as well as information on the Annapurna Base Camp Trek Itinerary during the overnight trek briefing.",
    },
    {
      day: 5,
      description:
        "Trek from Ghorepani (2880m) to Poon Hill (3210m) then Tadapani (2630m)",
      details:
        "Our agent will meet you at Tribhuwan International Airport. In addition, to help you check in, he will provide you with a private trip to the hotel. You might choose to relax at your hotel after a long travel or go exploring to find some of Kathmandu's wonderful sights. You will meet your guide and receive any equipment that is missing as well as information on the Annapurna Base Camp Trek Itinerary during the overnight trek briefing.",
    },
    {
      day: 6,
      description: "Trek from Tadapani (2630m) to Chomrong (2165m)",
      details:
        "Our agent will meet you at Tribhuwan International Airport. In addition, to help you check in, he will provide you with a private trip to the hotel. You might choose to relax at your hotel after a long travel or go exploring to find some of Kathmandu's wonderful sights. You will meet your guide and receive any equipment that is missing as well as information on the Annapurna Base Camp Trek Itinerary during the overnight trek briefing.",
    },
  ],
  howtoprepare: {
    paragraph: [
      "This is just a single-day tour so, you might not have to prepare for a lot of things. Our representatives will pick you up in the morning and show you the beauties and mysteries of Pokhara city for one whole day before dropping you off at your hotel by the evening or night.",
      "In between, Green Valley Nepal Treks' guide will always be with you if you have any problems or queries. So, preparation for this trip is not so difficult or worth spending a lot of energy and time. However, here are a few things that we suggest you be prepared with for this trip.",
    ],
    points: [
      "Please wake up early, have your breakfast, and get ready by the time when our representative comes to pick you up.",
      "This tour also includes the sunrise view from Sarangkot, so, you might have to wake up a little earlier than usual because sunrise is best witnessed at around six in the morning.",
      "There are a lot of drives throughout the day, so if you have any problems with traveling (sometimes people have problems like vomiting and headaches if they travel by road for a long time), please carry your medicine and inform us beforehand.",
      "Remember to carry some cash with you. That is because the trip cost does not include the ticket and pass price that you will need in some places like Davis' Falls, Gupteswor Cave, etc.",
      "Don't forget to carry sun protection with you because you might be exposed to scorching sunlight.",
      "Make sure to read the package completely and thoroughly or contact us in case of any queries before booking the Full Day Pokhara Tour.",
    ],
  },
  path: "/images/abc-road-img.jpg",
};
export default infoContent;
