import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import FeaturedDestination from "../../components/common/FeaturedDestination";
import DestinationCard from "../../components/common/DestinationCard";
import RecentSearchCard from "../../components/common/RecentSearchCard";
import ArticleCard from "../../components/common/ArticleCard";

import Footer from "../../layout/footer";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Home() {
  return (
    <div id="home" className="">
      <div className="hero-section flex bg-black">

        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="2xl:text-6xl xl:text-4xl text-2xl font-bold">Discover New Places and Create Unforgettable Memories</h1>
        </div>

        <FeaturedDestination
          title="Why you should reconsider The Inca Trail, Peru Trip"
          imageUrl="/images/misc/dest1.jpg"
        />
        <FeaturedDestination
          title="The Hidden Powers of The Northern Lights, Iceland"
          imageUrl="/images/misc/dest2.jpg"
        />
        <FeaturedDestination
          title="10 Facts you didn't know about The Blue Hole, Belize"
          imageUrl="/images/misc/dest3.jpg"
        />

      </div>

      <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16 pb-8">
        <div className="container 2xl:w-3/4">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full px-4">
              <h2 className="text-4xl text-center font-bold mb-2 text-gray-700">ALSO FEATURED IN</h2>
              <div className="flex flex-wrap justify-center items-center">
                <div className="w-1/2 lg:w-1/5 p-4 flex justify-center">
                  <img src="/images/common/image 4.png" alt="" /> </div>
                <div className="w-1/2 lg:w-1/5 p-4 flex justify-center">
                  <img src="/images/common/image 5.png" alt="" /> </div>
                <div className="w-1/2 lg:w-1/5 p-4 flex justify-center">
                  <img src="/images/common/image 6.png" alt="" /> </div>
                <div className="w-1/2 lg:w-1/5 p-4 flex justify-center">
                  <img src="/images/common/image 7.png" alt="" /> </div>
                <div className="w-1/2 lg:w-1/5 p-4 flex justify-center">
                  <img src="/images/common/image 8.png" alt="" /> </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16">
        <div className="container 2xl:w-3/4">

          <div className="flex flex-wrap justify-between items-center px-4">
            <div>
              <div className="text-4xl font-bold">Plan Your Best Trip Ever</div>
              <div>Making the Most of Your Travel Experience in 2023</div>
            </div>
            <div>
              <Link to="/signup"
                className="px-8 py-4 text-blue-500 rounded-full border-2
              border-blue-500 text-xl hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">View All Destinations</Link>
            </div>
          </div>

          <div className="px-0 mt-8">
            <Carousel
              infinite={true}
              draggable={false}
              responsive={responsive}>
              <DestinationCard
                imgSrc="/images/common/Frame17.jpg"
                location={"Tokyo, Japan"}
                title="The Shibuya"
                description="Discover the best travel destinations based on your interests."
                link={"/destination/italy"}
              />
              <DestinationCard
                imgSrc="/images/common/Frame9.jpg"
                location={"Rome, Italy"}
                title="The Colosseum"
              />
              <DestinationCard
                imgSrc="/images/misc/dest2.jpg"
                title="The Shibuya"
                description="Discover the best travel destinations based on your interests."
                link={"/destination/italy"}
              /><DestinationCard
                imgSrc="/images/common/Frame17.jpg"
                location={"Tokyo, Japan"}
                title="The Shibuya"
                description="Discover the best travel destinations based on your interests."
              />
              <DestinationCard
                imgSrc="/images/common/Frame9.jpg"
                location={"Rome, Italy"}
                title="The Colosseum"
              />
              <DestinationCard
                imgSrc="/images/misc/dest2.jpg"
                title="The Shibuya"
                description="Discover the best travel destinations based on your interests."
                link={"/destination/italy"}
              />
            </Carousel>
          </div>

          {/* <div className="flex flex-wrap justify-between px-0 mt-16"></div> */}

        </div>
      </div>

      <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16">
        <div className="container 2xl:w-3/4">

          <div className="flex flex-wrap justify-between items-center px-4">
            <div>
              <div className="text-4xl font-bold">Your Recent Searches</div>
              <div>Here are some of the places you have searched</div>
            </div>
          </div>

          <div className="flex flex-wrap px-4 mt-8">

            <RecentSearchCard
              to="/destination"
              icon="bx bx-map"
              title="The Shibuya"
              location="Tokyo, Japan"
            />

            <RecentSearchCard
              to="/destination"
              icon="bx bx-map"
              title="Museum of Tomorrow"
              location="Rio de Janeiro, Brazil"
            />

            <RecentSearchCard
              to="/destination"
              icon="bx bx-search"
              title="Restaurants in Canada"
            />

          </div>

        </div>
      </div>

      <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16">
        <div className="container 2xl:w-3/4">

          <div className="flex flex-wrap justify-between items-center px-4">
            <div>
              <div className="text-4xl font-bold">Locations based on search</div>
              <div>Check out fun places based on your searches</div>
            </div>
          </div>

          <div className="px-0 mt-8">
            <Carousel
              infinite={true}
              draggable={false}
              responsive={responsive}>
              <DestinationCard
                imgSrc="/images/common/Frame17.jpg"
                location={"Tokyo, Japan"}
                title="The Shibuya"
                description="Discover the best travel destinations based on your interests."
              />
              <DestinationCard
                imgSrc="/images/common/Frame9.jpg"
                location={"Rome, Italy"}
                title="The Colosseum"
              />
              <DestinationCard
                imgSrc="/images/misc/dest2.jpg"
                title="The Shibuya"
                description="Discover the best travel destinations based on your interests."
                link={"signin"}
              /><DestinationCard
                imgSrc="/images/common/Frame17.jpg"
                location={"Tokyo, Japan"}
                title="The Shibuya"
                description="Discover the best travel destinations based on your interests."
              />
              <DestinationCard
                imgSrc="/images/common/Frame9.jpg"
                location={"Rome, Italy"}
                title="The Colosseum"
              />
              <DestinationCard
                imgSrc="/images/misc/dest2.jpg"
                title="The Shibuya"
                description="Discover the best travel destinations based on your interests."
                link={"signin"}
              />
            </Carousel>
          </div>

        </div>
      </div>

      <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16">
        <div className="container 2xl:w-3/4">

          <div className="flex flex-wrap justify-between items-center px-4">
            <div>
              <div className="text-4xl font-bold">Top Travel Stories</div>
              <div>Explore our latest stories from our active users</div>
            </div>
            <div>
              <Link to="/signup"
                className="px-8 py-4 text-blue-500 rounded-full border-2
              border-blue-500 text-xl hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">View All Stories</Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-between px-0 mt-8">

            <ArticleCard
              to="/"
              imgSrc="/images/common/Frame 17.jpg"
              location="Mumbai, India"
              date="Feb 27, 2023"
              readTime="5 min read"
              title="A Wonderful Journey to India"
              description="I had always been interested in spirituality, so I decided to take a year-long journey to India to explore various religious practices and traditions."
            />

            <ArticleCard
              to="/"
              imgSrc="/images/common/Frame 17-1.jpg"
              location="Barcelona, Spain"
              date="Feb 27, 2023"
              readTime="5 min read"
              title="A Solo Trip Across Europe"
              description="I had just graduated from college and decided to take a six-month solo trip across Europe before starting my career. I backpacked through 15 different countries, staying in hostels and meeting people."
            />

          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}
