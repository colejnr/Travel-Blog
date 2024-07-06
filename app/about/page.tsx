import Image from "next/image";

export default function Page() {
  return (
    <div className=" w-full h-screen">
      <section className=" dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto w-[80%] lg:flex lg:flex-row lg:justify-between l lg:py-16 lg:px-6">
          <div className="font-light w-[40%] text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Welcome to Coleman Blog
            </h2>
            <p className="mb-4">
              A personal travel blog which I also regard as “Discover Ireland
              with Coleman”. This is your ultimate travel companion for
              exploring the breathtaking beauty and rich culture of Ireland. Our
              mission is to make your travel experience seamless, enjoyable, and
              unforgettable while sharing some of our epic journeys with some
              heartfelt experiences.
            </p>
            <p>
              At Coleman Blog or “Discover Ireland with Coleman”, we specialize
              in providing personalized travel services tailored to your unique
              preferences and interests. Our passion for travel, combined with
              our deep knowledge of Ireland, allows us to offer exceptional
              services and insider tips to help you make the most
              of your journey.
            </p>
          </div>
          <div className="grid grid-cols-2 w-[60%] gap-4 mt-8">
            <Image
              width={200}
              height={200}
              className="w-full  rounded-lg"
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="office content 1"
            />
            <Image
              width={200}
              height={200}
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
