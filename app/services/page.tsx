import { Bus, Hotel, Link, Map, MapPin, Plane, User } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <section className="bg-white w-full min-h-screen dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white capitalize">
            Designed for those who love to travel
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Coleblog At Coleman Blog or “Discover Ireland with Coleman”,
            we specialize in providing personalized travel services tailored to
            your unique preferences and interests.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Plane />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white capitalize">
              Travel Consultation
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our experienced travel consultants are here to assist you with
              planning your perfect trip. Whether {"you're"} looking for
              adventure, relaxation, or a cultural immersion, we provide expert
              advice and create customized itineraries that match your desires.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Map />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white capitalize">
              Top Places Recommendation
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Discover hidden gems and must-visit destinations across Ireland.
              From the bustling streets of Dublin to the serene landscapes of
              the Wild Atlantic Way, we provide recommendations that cater to
              all tastes and interests.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Hotel />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white capitalize">
              Hotel Bookings and Reccomendation
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Enjoy a comfortable stay with our hassle-free hotel booking
              service. We partner with a range of accommodations, from luxury
              hotels to cozy bed-and-breakfasts, ensuring you find the perfect
              place to rest during your travels.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Bus />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white capitalize">
              Dublin Tour Bus Booking
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Experience Dublin like never before with our convenient tour bus
              booking service. Explore the city’s iconic landmarks, historical
              sites, and vibrant neighborhoods with ease, all while enjoying the
              commentary of knowledgeable guides.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <User />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white capitalize">
              Booking of a private tour Guide
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Enhance your travel experience with a private tour guide. Our
              professional and friendly guides provide personalized tours,
              sharing in-depth knowledge and stories about {"Ireland's"}{" "}
              history, culture, and attractions.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Link />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white capitalize">
              Connet With Proficicient and reliable tour agencies
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We connect you with trusted tour agencies across Ireland, ensuring
              you have access to a wide range of activities and excursions.
              Whether you’re interested in guided hikes, cultural tours, or
              adventure sports, we’ve got you covered.
            </p>
          </div>
        </div>
        <div className=" font-medium text-xl mt-10">
          <h3>
            Our team is dedicated to providing exceptional service and creating
            memorable experiences for each of our clients. We take pride in our
            attention to detail and our commitment to making your travel dreams
            come true.
          </h3>
          <br />
          <h3>
            Thank you for choosing Discover Ireland with Coleman. Let’s embark
            on an incredible journey together and explore the enchanting
            island of Ireland!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Page;
