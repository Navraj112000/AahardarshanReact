import React, { useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import CardSecond from "../components/CardSecond";

const healthCards = [
  {
    title: "Thyroid",
    description: "Balanced nutrition for thyroid health",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/49a37553a2c3c8e611ffac1eabe4686f77dee549.jpg",
  },
  {
    title: "PCOS/PCOD",
    description: "Hormone-balancing solutions",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d7fce39bb976d9fc3da20d528ff57823fe2a6960.jpg",
  },
  {
    title: "Diabetes",
    description: "Blood sugar management",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e2a27c6f316bb29d731918ced5c4027dd22c6c34.jpg",
  },
  {
    title: "Obesity",
    description: "Healthy weight loss plans",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/9069f9e7350f458fc017234b44759825ee93c9f2.jpg",
  },
  {
    title: "Hypertension",
    description: "Blood pressure control",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/738ebe0a7c334d15364487ba468655039afc08fa.jpg",
  },
  {
    title: "High Cholesterol",
    description: "Heart-healthy diets",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f40bf663181df8e7a25b348870f53570057150b5.jpg",
  },
  {
    title: "Digestive Issues",
    description: "Gut health optimization",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/faafbb9760a44bb5f74fb9132b25cb4fd28866fc.jpg",
  },
  {
    title: "Fatty Liver",
    description: "Liver detox & healing",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d7a894bdd22345557c8c208f2fc3ca66d58b1196.jpg",
  },
  {
    title: "Stress & Anxiety",
    description: "Mind-body wellness",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7972de7d1e8da941655ee9c2e73e50872d517e2a.jpg",
  },
];

const packageCards = [
  {
    title: "Personalized Diet Charts",
    description:
      "Custom-made meal plans designed around your unique needs. From health goals to taste preferences — it's all covered.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/49a37553a2c3c8e611ffac1eabe4686f77dee549.jpg",
  },
  {
    title: "Weekly Check-ins",
    description:
      "Regular progress tracking with expert guidance to keep you on the right path.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d7fce39bb976d9fc3da20d528ff57823fe2a6960.jpg",
  },
  {
    title: "Recipe Suggestions",
    description:
      "Delicious, healthy recipes that fit your diet plan perfectly.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e2a27c6f316bb29d731918ced5c4027dd22c6c34.jpg",
  },
  {
    title: "Nutrition Education",
    description:
      "Learn the science behind healthy eating for lifelong wellness.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/9069f9e7350f458fc017234b44759825ee93c9f2.jpg",
  },
  {
    title: "Meal Timing Guide",
    description:
      "Optimize when you eat for better metabolism and energy levels.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/738ebe0a7c334d15364487ba468655039afc08fa.jpg",
  },
  {
    title: "Supplement Advice",
    description:
      "Evidence-based recommendations for vitamins and minerals you need.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f40bf663181df8e7a25b348870f53570057150b5.jpg",
  },
  {
    title: "Hydration Plans",
    description: "Customized water intake schedules for optimal body function.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/faafbb9760a44bb5f74fb9132b25cb4fd28866fc.jpg",
  },
  {
    title: "Exercise Integration",
    description: "Align your nutrition with fitness goals for maximum results.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d7a894bdd22345557c8c208f2fc3ca66d58b1196.jpg",
  },
  {
    title: "Progress Tracking",
    description: "Visual charts and metrics to see your health transformation.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7972de7d1e8da941655ee9c2e73e50872d517e2a.jpg",
  },
  {
    title: "24/7 Support",
    description: "Chat support whenever you need guidance or have questions.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/49a37553a2c3c8e611ffac1eabe4686f77dee549.jpg",
  },
  {
    title: "Community Access",
    description:
      "Join a supportive group of people on similar health journeys.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d7fce39bb976d9fc3da20d528ff57823fe2a6960.jpg",
  },
];

const AboutData = {
image="",
Heading="",
Description="",
yearExperience="",
HappyClients="",
ConditionTreated="",
Call="",
Whatsapp="",
Instagram="",
}

function Home() {
  const [showAllPackages, setShowAllPackages] = useState(false);

  const visiblePackages = showAllPackages
    ? packageCards
    : packageCards.slice(0, 7);

  return (
    <>
      <Banner />
      <div className="cardSection py-16 text-center">
        <h2 className="text-4xl font-bold">
          We Specialize in These Conditions
        </h2>
        <p>Expert care for your specific health needs</p>
        <div className="serviceCards flex flex-wrap gap-8 py-16 px-8 justify-center">
          {healthCards.map((item, index) => (
            <Card
              key={index}
              imageSrc={item.image}
              heading={item.title}
              description={item.description}
            />
          ))}
          <div
            className="hover:border-green-700 border-amber-100 border-2 text-3xl hover:text-4xl"
            style={{
              width: "300px",
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              color: "#626f47",
              borderRadius: "12px",
              background: "#fffbeb",
            }}
          >
            <h2 className=" font-bold ">Let's Discuss in Detail</h2>
          </div>
        </div>
      </div>
      <div className="py-16 text-center">
        <h2>How It Works</h2>
        <p>Simple steps to transform your health</p>
        <div className="cardSection py-16">
          <CardSecond />
          <div className=" max-w-4xl m-auto rounded-4xl bg-yellow-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Contact Us
          </div>
        </div>
      </div>
      <div className="cardSection py-16 text-center">
        <h2 className="text-4xl font-bold">What You Get</h2>
        <p>Comprehensive wellness package</p>
        <div className="packageCards max-w-8xl m-auto flex flex-wrap gap-8 py-16 px-8 justify-center">
          {visiblePackages.map((item, index) => (
            <Card
              key={index}
              imageSrc={item.image}
              heading={item.title}
              description={item.description}
              height="200px"
              width="400px"
            />
          ))}
          <div
            onClick={() => setShowAllPackages(!showAllPackages)}
            className="hover:border-green-700 border-amber-100 border-2 text-3xl hover:text-4xl transition-all"
            style={{
              width: "400px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              color: "#626f47",
              borderRadius: "12px",
              background: "#fffbeb",
            }}
          >
            <h2 className="font-bold">
              {showAllPackages ? "View Less" : "View More"}
            </h2>
          </div>
        </div>
      </div>
///
      <div className="AboutSectionpy16"></div>
    </>
  );
}

export default Home;
