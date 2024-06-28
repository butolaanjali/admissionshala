import React, { useState } from "react";
import Slider from "react-slick";
import "./testimonial.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for tablets and small desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [currentTestimonials, setCurrentTestimonials] = useState(0);

  const testimonials = [
    {
      name: "Srushti Kakde",
      text: "Admissionshala is one such portal that students have longed to have. As a student, I had no idea about how my two years' college journey would be and what am I supposed to do. There was so much bombarding from multiple counselors, colleges, and agents. But when I got to know about admissionshala from a friend of mine, I knew this is the one stop solution I need! Admissionshala has helped me in every possible way. They have been there at every step including college search, college assessment, judgment, choice of the college within my financial constraints. The entire process looked like a cakewalk to me with Admissionshala.com.",
      image:"test.jpg"
    },
    {
      name: "Vishal Pahuja",
      text: "My Name is Vishal Pahuja and I hail from Indore, Madhya Pradesh. Admissionshala conducts a series of sessions named- Coffee with the Counselors for benefitting all management aspirants. I was amongst the bunch of lucky students who met experts from Admissionshala in the CWC event at Indore. Since my competitive scores weren't that great, I was in great confusion about my next step for building my career. All thanks to Admissionshala for contacting me and inviting me for the session in Indore. They have been there at every step right from college search to admissions. I went through the GDPI and WAT process for PGDM Program and got admission to Dr. DY Patil Institute in a very hassle-free manner. I got placed in Neilsen and I am very thankful for making this decision of choosing Admissionshala for doing my masters.",
      image:"test.jpg"
    },
    {
      name: "Aditya Billore",
      text: "I hail from Indore, Madhya Pradesh and currently, I am pursuing PGDM from batch ISBS 2023 batch. I am thankful for all the assistance Admissionshala has provided me by doing my career mapping, career guidance, assistance in GDPI WAT, college visit, college registration, and fee payment. My entire journey has been simplified and I could literally focus on PGDM preparations. Its been a year studying in ISBS and I am glad I made the decision of attending coffee with the counselors and meeting Rahul Sir. With admissionshala, there's no scope of failure in career. I am happily progressing in my career and I suggest everyone choose this platform to leverage their career growth.",
      image:"test.jpg"
    },
    {
      name: "Aditya Billore",
      text: "I hail from Indore, Madhya Pradesh and currently, I am pursuing PGDM from batch ISBS 2023 batch. I am thankful for all the assistance Admissionshala has provided me by doing my career mapping, career guidance, assistance in GDPI WAT, college visit, college registration, and fee payment. My entire journey has been simplified and I could literally focus on PGDM preparations. Its been a year studying in ISBS and I am glad I made the decision of attending coffee with the counselors and meeting Rahul Sir. With admissionshala, there's no scope of failure in career. I am happily progressing in my career and I suggest everyone choose this platform to leverage their career growth.",
      image:"test.jpg"
    },
    {
      name: "Vishal Pahuja",
      text: "My Name is Vishal Pahuja and I hail from Indore, Madhya Pradesh. Admissionshala conducts a series of sessions named- Coffee with the Counselors for benefitting all management aspirants. I was amongst the bunch of lucky students who met experts from Admissionshala in the CWC event at Indore. Since my competitive scores weren't that great, I was in great confusion about my next step for building my career. All thanks to Admissionshala for contacting me and inviting me for the session in Indore. They have been there at every step right from college search to admissions. I went through the GDPI and WAT process for PGDM Program and got admission to Dr. DY Patil Institute in a very hassle-free manner. I got placed in Neilsen and I am very thankful for making this decision of choosing Admissionshala for doing my masters.",
      image:"test.jpg"
    },
    {
      name: "Srushti Kakde",
      text: "Admissionshala is one such portal that students have longed to have. As a student, I had no idea about how my two years' college journey would be and what am I supposed to do. There was so much bombarding from multiple counselors, colleges, and agents. But when I got to know about admissionshala from a friend of mine, I knew this is the one stop solution I need! Admissionshala has helped me in every possible way. They have been there at every step including college search, college assessment, judgment, choice of the college within my financial constraints. The entire process looked like a cakewalk to me with Admissionshala.com.",
      image:"test.jpg"
    },
  ];
  return (
    <div  style={{background:'lightblue'}}>
          <div className="testimonial-container">
      <h2 className="slider-title">Testimonial</h2>
      
      <p className="slider-subtitle">Read our success stories. Get inspired and apply for your dream career with Admissionshala</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          
          <div key={index} className="testimonial-card">
           <div className="testimonial-image-container">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            </div>
            <div className="testimonial-content">
              <p>"{testimonial.text}"</p>
              <p className="testimonial-author">
                - {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="testimonial-navigation">
        <div className="testimonial-dots">
          {Array(Math.ceil(testimonials.length / 3)).fill(0).map((_, index) => (
            <span
              key={index}
              className={
                index === currentTestimonials
                  ? "testimonial-dot active"
                  : "testimonial-dot"
              }
              onClick={() => setCurrentTestimonials(index)}
            ></span>
          ))}
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Testimonial;