import React, { useState } from "react";
import bgVideo from "../assets/adelaidevideo.webm"; // your video path

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={bgVideo} type="video/webm" />
       
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 0,
        }}
      ></div>

      {/* Hamburger menu (top-right) */}
      <button
        onClick={toggleMenu}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 10,
          width: 40,
          height: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            display: "block",
            height: 3,
            width: "100%",
            backgroundColor: "white",
            transform: menuOpen ? "rotate(45deg) translateY(12px)" : "none",
            transition: "0.3s",
          }}
        />
        <span
          style={{
            display: "block",
            height: 3,
            width: "100%",
            backgroundColor: "white",
            opacity: menuOpen ? 0 : 1,
            transition: "0.3s",
          }}
        />
        <span
          style={{
            display: "block",
            height: 3,
            width: "100%",
            backgroundColor: "white",
            transform: menuOpen ? "rotate(-45deg) translateY(-12px)" : "none",
            transition: "0.3s",
          }}
        />
      </button>

      {/* Full-screen overlay menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "grey",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.5s ease",
          zIndex: 9,
          display: "flex",
          justifyContent: "flex-start", // keep panel on left side
        }}
      >
        <div
          style={{
            width: "60%",
            height: "100%",
            padding: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start", // menu links aligned left
            gap: 30,
            color: "#fff",
          }}
        >
          {/* Close button */}
          <button
            onClick={toggleMenu}
            style={{
              fontSize: 30,
              fontWeight: "bold",
              background: "none",
              border: "none",
              cursor: "pointer",
              marginBottom: 20,
              color: "#fff",
            }}
          >
            &times;
          </button>

          {/* Menu links */}
          <a href="#home" style={{ fontSize: 70, color: "#fff", textDecoration: "none" }}>
            Home
          </a>
          <a href="#about" style={{ fontSize: 70, color: "#fff", textDecoration: "none" }}>
            About
          </a>
          <a href="#admissions" style={{ fontSize: 70, color: "#fff", textDecoration: "none" }}>
            Admissions
          </a>
          <a href="#contact" style={{ fontSize: 70, color: "#fff", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </div>

      {/* Bottom-right caption with three horizontal lines */}
<div
  style={{
    position: "absolute",
    bottom: 30,
    right: 50,
    color: "#fff",
    textAlign: "right",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 10,
  }}
>
  {/* First line */}
  <div style={{ fontSize: "3rem", fontWeight: "bold" }}>Learn, Grow</div>

  {/* Excel with three horizontal lines to its left */}
  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
    {/* Three horizontal lines */}
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: 30 , fontWeight: "bold" }}>
      <div style={{ width: 40, height: 3, backgroundColor: "#fff" }}></div>
      <div style={{ width: 50, height: 3, backgroundColor: "#fff" }}></div>
      <div style={{ width: 60, height: 3, backgroundColor: "#fff" }}></div>
    </div>

    {/* Excel text */}
    <div style={{ fontSize: "5rem", fontWeight: "bold" }}>Excel</div>
  </div>
</div>


{/* Vertical green line with horizontal "Explore" link */}
<a
  href="#next-section" // replace with your next section ID
  style={{
    position: "absolute",
    bottom: -100, // extends beyond the landing page
    left: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "#00ff00", // green
    zIndex: 1,
  }}
>
  {/* "Explore" horizontal text at the top */}
  <span style={{ fontWeight: "bold", marginBottom: 8, fontSize: "2rem" }}>
    Explore
  </span>

  {/* Vertical line */}
  <div style={{ width: 3, height: "200px", backgroundColor: "#00ff00" }}></div>
</a>


      {/* Landing page content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "5rem", marginBottom: "1rem" }}>
        AcademIQ
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "2rem", fontFamily: "'Georgia', serif", 
    fontStyle: "italic",}}>
          “Nurturing talent. Building leaders.”
        </p>
        <button
          style={{
            padding: "10px 30px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#ff7f50",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
    
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-0 py-20 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-2xl title-font text-green-500 font-bold tracking-widest">Empowering today, excelling tomorrow</h2>
        <h1 class="text-gray-900 text-5xl font-bold  title-font font-large mb-4">A hub of inspiration <br/>and growth</h1>
        
        <p class="leading-relaxed mb-4">Education here nurtures well-rounded young minds who think critically, act responsibly, and dream boldly. It's more than academics—it's about preparing students to succeed in life.</p>

       
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-90 object-cover object-center rounded mb-8" src="students.jpg"/>

<div class="flex justify-start">
  <button class="flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded">About AcademIQ</button>
</div>

    </div>
  </div>
</section>
    </>

    
  );
};



export default Landing;
