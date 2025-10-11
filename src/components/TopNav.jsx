import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Compass, Scale, Theater } from "lucide-react";

const TopNav = () => {
  return (
    <div className="drawer">
      {/* Drawer toggle */}
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full sticky top-0 z-50 ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-bold text-lg">My School</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>
        </div>

      {/* Drawer side */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-base-200 h-full">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div> 

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 class="text-green-600 text-xl title-font font-medium mb-4">Making today's learning count in tomorrow's workplace</h1>
        <h1 class="text-gray-900 text-7xl font-bold title-font font-medium mb-10 mt-4">A dynamic learning environment</h1>
        <p class="leading-relaxed mb-4 text-xl">We help students learn, grow, and succeed. Our school combines innovative teaching with a supportive environment, giving every student the tools to reach their full potential and shine in the future.
We are committed to fostering curiosity, creativity, and a love for lifelong learning.</p>

      </div>
       <div className="lg:w-1/2 flex items-center justify-center">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      className="h-full w-full rounded-lg overflow-hidden"
    >
      <SwiperSlide>
        <img
          src="students.jpg"
          className="object-cover h-full w-full"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="Pupils.jpg"
          className="object-cover h-full w-full"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="techstudents.png"
          className="object-cover h-full w-full"
          alt="Slide 3"
        />
      </SwiperSlide>
    </Swiper>
  </div> 
    </div>
  </div>
</section>


<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="mission.png"/>
      <div class="lg:w-1/2 w-full lg:pl-6 lg:py-6 mt-6 lg:mt-6">
            <h1 class="text-green-600 text-xl title-font font-medium mb-6">Engaging, innovative, and supportive learning for all learners</h1>
       <h1 class="text-gray-900 text-6xl font-bold title-font font-medium mb-10 mt-2">Learning inspires growth</h1>
        <p class="leading-relaxed text-xl">At AcademIQ, we aim to enhance education through innovative tools and personalized learning. We empower students to reach their full potential, support teachers with actionable insights, and create an engaging, inclusive environment for all learners.</p>
       
      </div>
    </div>
  </div>

</section>

<div>
  <p class="text-gray-600 font-bold text-center text-3xl">Our Vision</p>
</div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap -mx-4 -my-8">
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div className="flex-shrink-0 mr-4 text-green-500">
  <Compass size={48} />
</div>
          <div class="flex-grow pl-6">

            <p class="leading-relaxed mb-5"> To cultivate every student's potential, empowering them to grow intellectually, socially, and emotionally while developing responsibility, creativity, critical thinking, and character, preparing them for a successful future.</p>
            
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
             <div className="flex-shrink-0 mr-4 text-green-500">
  <Scale size={48} />
</div>
          <div class="flex-grow pl-6">
            
            <p class="leading-relaxed mb-5">To provide a learning environment that inspires curiosity, encourages exploration, fosters problem-solving, builds resilience, and equips every student with knowledge, skills, and values to achieve excellence in all areas.</p>
            
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
            <div className="flex-shrink-0 mr-4 text-green-500">
  <Theater size={48} />
</div>
          <div class="flex-grow pl-6">
            <p class="leading-relaxed mb-5">To prepare students to lead, innovate, collaborate, embrace challenges, develop talents, and make meaningful contributions to society, the community, and the world with integrity, vision, and confidence.</p>
            <a class="inline-flex items-center">
             
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-green-600 tracking-widest font-bold text-xl">Embracing young people's curiosity</h2>
        <h1 class="text-gray-800 text-8xl font-bold title-font font-medium mb-10 mt-4">Meet the Principal</h1>
       
        <p class="leading-relaxed mb-4 text-2xl italic">"With over 25 years in education, and most of those as a parent, I understand the importance of choosing the right school for your child. As a compassionate and student-centred leader, I am proud to lead this vibrant community. Together, we foster a nurturing and innovative environment where every young person feels valued, empowered, and prepared to become confident, resilient, and future-ready individuals, ready for life beyond school."</p>
       
         <p class="mt-4 text-xl font-semibold text-gray-900">Marilyn Juma,</p>
    <p class="text-lg text-green-600 font-semibold">Principal AcademIQ</p>
  
      </div>
   <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="princi.jpg"/>
    </div>
  </div>
</section>

      
    
    </div>
</div>
    
  );
};

export default TopNav;
