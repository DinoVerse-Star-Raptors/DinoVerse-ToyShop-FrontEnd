const imageUrls = [
  "https://th.plantoys.com/cdn/shop/files/1655_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/1657_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/2403_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/2403_-_Packshot_-_04_22f514ed-a77b-4fe3-8594-48dc0fae8946.jpg",
  "https://th.plantoys.com/cdn/shop/files/3415_-_Packshot_-_02_7a92b580-bd09-4702-a78d-e3cd669d4cf9.jpg",
  "https://th.plantoys.com/cdn/shop/files/3432_-_Lifestyle_-_04_b0968ce8-e339-4438-8234-2d4c05f1ff9e.jpg",
  "https://th.plantoys.com/cdn/shop/files/3432_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3451_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3488_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3491_-_Packshot_-_07.jpg",
  "https://th.plantoys.com/cdn/shop/files/3600_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3613_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3615_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3624_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3625_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3626_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3627_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3629_-_Packshot_-_03.jpg",
  "https://th.plantoys.com/cdn/shop/files/3630_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/3708_-_Lifestyle_-_02.jpg",
  "https://th.plantoys.com/cdn/shop/files/3708_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/4346_-_Lifestyle_-_03.jpg",
  "https://th.plantoys.com/cdn/shop/files/4346_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/4656_-_Lifestyle_-_06.jpg",
  "https://th.plantoys.com/cdn/shop/files/5101_-_Packshot_-_01.jpg",
  "https://th.plantoys.com/cdn/shop/files/5124_-_Packshot_-_03.jpg",
  "https://th.plantoys.com/cdn/shop/files/5176_-_Packshot_-_01.jpg",
  "https://th.plantoys.com/cdn/shop/files/5279_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5287_-_Packshot_-_02_f7a6c3d5-799c-442a-b29f-ec24d2a3ebc3.jpg",
  "https://th.plantoys.com/cdn/shop/files/5319_-_Packshot_-_04.jpg",
  "https://th.plantoys.com/cdn/shop/files/5337_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5370_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5379_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5388_-_Packshot_-_03.jpg",
  "https://th.plantoys.com/cdn/shop/files/5394_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5397_-_Packshot_-_01.jpg",
  "https://th.plantoys.com/cdn/shop/files/5399_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5400_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5405_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5407_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5457_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5459_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5463_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5465_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5466_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5471_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5472_Punch_Drop_-_Orchard_Collection1.jpg",
  "https://th.plantoys.com/cdn/shop/files/5473_Shape_Sort_It_Out_-_Orchard_Collection0.jpg",
  "https://th.plantoys.com/cdn/shop/files/5474_-_Packshot_-_01.jpg",
  "https://th.plantoys.com/cdn/shop/files/5476_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5477_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5480_-_Packshot_-_02.jpg",
  "https://th.plantoys.com/cdn/shop/files/5483_-_Packshot_-_02.jpg",
  "https://th.plantoys.com/cdn/shop/files/5485_-_Packshot_-_04.jpg",
  "https://th.plantoys.com/cdn/shop/files/5486_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5487_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5488_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5489_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5490_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5491_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5531_-_Packshot_-_03.jpg",
  "https://th.plantoys.com/cdn/shop/files/5544_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5545_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5547_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5633_-_Packshot_-_02.jpg",
  "https://th.plantoys.com/cdn/shop/files/5655_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5695_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5743_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5744_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5811_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/5813_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/6087_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/6126_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/6144_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/6203_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/6209_-_Packshot_-_03.jpg",
  "https://th.plantoys.com/cdn/shop/files/6264_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/6267_-_Packshot_-_sq_-_02.jpg",
  "https://th.plantoys.com/cdn/shop/files/6268_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/6272_-_Packshot_-_03.jpg",
  "https://th.plantoys.com/cdn/shop/files/6291_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/6292_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/6292_-_Packshot_-_01.jpg",
  "https://th.plantoys.com/cdn/shop/files/6293_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/6295_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/6296_-_Packshot_-_02.jpg",
  "https://th.plantoys.com/cdn/shop/files/6411_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/6422_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/6424_-_Packshot_-_03.jpg",
  "https://th.plantoys.com/cdn/shop/files/6613_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/6625_-_Main.jpg",
  "https://th.plantoys.com/cdn/shop/files/7156_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/7166_-_Main_-_sq.jpg",
  "https://th.plantoys.com/cdn/shop/files/7347_-_Packshot_-_01.jpg",
  "https://th.plantoys.com/cdn/shop/files/7353_-_Packshot_-_03.jpg",
  "https://th.plantoys.com/cdn/shop/files/8708_-_Packshot_-_02.jpg",
  "https://th.plantoys.com/cdn/shop/files/Dolls_Detail_47b1e573-4615-43ab-9f86-510cd6327497.jpg",
  "https://th.plantoys.com/cdn/shop/files/S2204-Packshot-01.jpg",
  "https://www.plantoys.com/cdn/shop/files/1610_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/1655_-_Lifestyle_-_04.jpg",
  "https://www.plantoys.com/cdn/shop/files/1655_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/1657_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/2403_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/2403_-_Packshot_-_04_6535289f-14c0-4686-9d25-a66b7e8c424f.jpg",
  "https://www.plantoys.com/cdn/shop/files/278970056_1059433637975796_1605303730909204519_n_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/2840_-_Packshot_-_01.jpg",
  "https://www.plantoys.com/cdn/shop/files/3400_-_Lifestyle_-_01_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/3415_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/3432_-_Lifestyle_-_04_14ece7b7-902f-4002-bc0f-422fd64aabd8.jpg",
  "https://www.plantoys.com/cdn/shop/files/3432_-_Packshot_-_02_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/3451_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/3489_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/3491_-_Packshot_-_01_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/3493_-_Packshot_-_05.jpg",
  "https://www.plantoys.com/cdn/shop/files/3499_-_Packshot_-_04_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/3600_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/3627_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/3629_-_Packshot_-_03_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/3630_-_Lifestyle_-_01_9617c408-87d5-4b1d-8701-a3e0c70b94d2.jpg",
  "https://www.plantoys.com/cdn/shop/files/3630_-_Lifestyle_-_04.jpg",
  "https://www.plantoys.com/cdn/shop/files/3630_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/3700_-_Packshot_-_02_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/3700_-_Packshot_-_02_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/3700_-_Packshot_-_03.jpg",
  "https://www.plantoys.com/cdn/shop/files/3705_-_Packshot_-_06.jpg",
  "https://www.plantoys.com/cdn/shop/files/4101_-_Packshot_-_02_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/4125_-_Lifestyle_-_01_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/4132_-_Lifestyle_-_02_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/4640_-_Packshot_-_04_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/4656_-_Lifestyle_-_06_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/5217_-_Lifestyle_-_05.jpg",
  "https://www.plantoys.com/cdn/shop/files/5251_-_Lifestyle_-_02.jpg",
  "https://www.plantoys.com/cdn/shop/files/5251_-_Packshot_-_02_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/5264_-_Lifestyle_-_01_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/5279_-_Lifestyle_-_01_50ff660b-a101-4558-9682-6690d3f73a96.jpg",
  "https://www.plantoys.com/cdn/shop/files/5279_-_Lifestyle_-_04_ee8b95b1-4716-4f1a-8f82-334a03c214d6.jpg",
  "https://www.plantoys.com/cdn/shop/files/5279_-_Lifestyle_-_06.jpg",
  "https://www.plantoys.com/cdn/shop/files/5279_-_Lifestyle_-_07.jpg",
  "https://www.plantoys.com/cdn/shop/files/5360_-_Packshot_-_03.jpg",
  "https://www.plantoys.com/cdn/shop/files/5365_-_Lifestyle_-_04_dd02a9ee-27cd-46b7-9f86-0e3c5e1d6cd1.jpg",
  "https://www.plantoys.com/cdn/shop/files/5370_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5405_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5405_-_Packshot_-_01.jpg",
  "https://www.plantoys.com/cdn/shop/files/5407_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5407_-_Packshot_-_01.jpg",
  "https://www.plantoys.com/cdn/shop/files/5463_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5465_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5465_-_Packshot_-_03.jpg",
  "https://www.plantoys.com/cdn/shop/files/5466_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5471_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5472_Punch_Drop_-_Orchard_Collection0_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/5474_-_Packshot_-_01.jpg",
  "https://www.plantoys.com/cdn/shop/files/5475_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5476_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5486_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5487_-_Lifestyle_-_02.jpg",
  "https://www.plantoys.com/cdn/shop/files/5487_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5489_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5491_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5531_-_Packshot_-_03_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/5545_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5546_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5547_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5652_-_Packshot_-_03_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/5655_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5695_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/5734_-_Packshot_-_02_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/5735_-_Packshot_-_03_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/6087_-_Main_-_sq.jpg",
  "https://www.plantoys.com/cdn/shop/files/6134_-_Main_-_sq.jpg",
  "https://www.plantoys.com/cdn/shop/files/6208_-_Packshot_-_02_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/6209_-_Packshot_-_03.jpg",
  "https://www.plantoys.com/cdn/shop/files/6268_-_Main_-_sq.jpg",
  "https://www.plantoys.com/cdn/shop/files/6269_-_Main_-_sq.jpg",
  "https://www.plantoys.com/cdn/shop/files/6288_-_Lifestyle_-_03_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/6292_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/6293_-_Packshot_-_01.jpg",
  "https://www.plantoys.com/cdn/shop/files/6297_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/6424_-_Packshot_-_03.jpg",
  "https://www.plantoys.com/cdn/shop/files/6613_-_Main_-_sq.jpg",
  "https://www.plantoys.com/cdn/shop/files/6625_-_Main.jpg",
  "https://www.plantoys.com/cdn/shop/files/7166_-_Main_-_sq.jpg",
  "https://www.plantoys.com/cdn/shop/files/7310_-_Main_-_sq.jpg",
  "https://www.plantoys.com/cdn/shop/files/7338_-_Packshot_-_03_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/7357_-_Lifestyle_-_01_1024x1024.jpg",
  "https://www.plantoys.com/cdn/shop/files/7406_-_Main_-_sq.jpg",
  "https://www.plantoys.com/cdn/shop/files/7416_-_Main_-_sq.jpg",
  "https://www.plantoys.com/cdn/shop/files/8622_-_Packshot_-_02.jpg",
  "https://www.plantoys.com/cdn/shop/files/9015_-_Packshot_-_sq_-_03.jpg",
  "https://www.plantoys.com/cdn/shop/files/9430_-_Lifestyle_-_sq_-_02.jpg",
  "https://www.plantoys.com/cdn/shop/files/9430_-_Lifestyle_-_sq_-_04.jpg",
  "https://www.plantoys.com/cdn/shop/files/9430_-_Main_-_sq.jpg",
  "https://www.plantoys.com/cdn/shop/files/9850_-_Main_-_sq.jpg",
];

// Function to generate random image for a mock product
function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const fullImageUrl = `${window.location.origin}/assets/`;
const ageGroups = ["0-6M", "6M+", "12M+", "18M+", "2Yrs+", "5Yrs+"];
const factors = [
  {
    name: "Auditory",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Auditory.png"}`,
  },
  {
    name: "Cause & Effect",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-CauseEffect.png"}`,
  },
  {
    name: "Concentration",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Concentration.png"}`,
  },
  {
    name: "Coordination",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Coordination.png"}`,
  },
  {
    name: "Creativity",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Creative.png"}`,
  },
  {
    name: "Emotion",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Emotion.png"}`,
  },
  {
    name: "Fine Motor",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-FineMotor.png"}`,
  },
  {
    name: "Gross Motor",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-GrossMotor.png"}`,
  },
  {
    name: "Imagination",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Imagination.png"}`,
  },
  {
    name: "Language & Communication",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-LanguageCommunication.png"}`,
  },
  {
    name: "Musical",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Musical.png"}`,
  },
  {
    name: "Social",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-text_Social.png"}`,
  },
];
const getRandomFactors = () => {
  const shuffledFactors = factors.sort(() => 0.5 - Math.random());
  return shuffledFactors.slice(0, 5);
};

const ageGroup = ageGroups[Math.floor(Math.random() * ageGroups.length)];
const breadcrumb = `Home / Age / ${ageGroup} / Toy No.`;
// const fullImageUrl = `${window.location.origin}${imagePath}`;

const prodMocking = Array.from({ length: imageUrls.length - 1 }, (_, i) => ({
  pid: `pid-${i + 1}`,
  name: `Toy ${i + 1}`,
  rating: 5,
  ageGroup: ageGroup,
  // breadcrumb: `Home / Age / 18M+ / Toy ${i + 1}`,
  breadcrumb: breadcrumb,
  image: `${imageUrls[i % imageUrls.length]}` || getRandomImage(imageUrls),
  quantity: Math.floor(Math.random() * 10) + 1,
  stockStatus: i % 3 > 0 ? "In Stock" : "Out of Stock",
  description:
    "A fun and educational toy for children featuring a colorful train engine and a passenger car. It encourages imaginative play and helps develop motor skills.",
  price: (100 + Math.floor(Math.random() * 10)).toFixed(2),
  recommendationTag: i % 2 === 0 ? "Recommend" : "",
  reviewsCount: 0,
  starDistribution: [],
  reviews: [
    {
      reviewer: "Erica",
      rating: Math.floor(Math.random() * 5) + 1,
      date: "03/10/2023",
      title: "Happy",
      comment:
        "My son enjoys playing with the train, but I have to say, the tracks don’t always stay connected when he pushes the train around too quickly. It can be a bit frustrating. It’s a good toy, but it might be better suited for gentle play or older kids.",
    },
    {
      reviewer: "Raelyn",
      rating: Math.floor(Math.random() * 5) + 1,
      date: "04/09/2023",
      title: "Wonderful Gift Idea",
      comment:
        "Bought this as a birthday gift for my nephew, and he loves it! The train set is bright and engaging, and it came in nice packaging, so it felt very special. It’s also safe, with rounded edges on the tracks and no small parts, which I appreciate. Great purchase!",
    },
  ],
  factors: getRandomFactors(),
}));

export default prodMocking;
