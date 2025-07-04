import React, { useEffect } from "react";
import Aarshay from "../assets/Aarshay.webp";
import Ankit from "../assets/Ankit.webp";
import Shaurya from "../assets/Shaurya.webp";

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="py-20 md:py-10 max-w-[1240px] items-center">
      <div className="flex justify-center mx-auto px-4 items-center py-5 md:py-4">
        <div
          className="max-w-[700px] text-center mx-auto"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h1 className="text-gray-300 text-5xl max-w-3xl font-sans font-bold leading-snug">
            Your Co-pilot for AI & Tech Hiring!
          </h1>
          <h3 className="text-gray-400 text-2xl py-3">
            Our AI interviews your entire pipeline in 2 days!
          </h3>
          <div className="flex justify-center py-5">
            <button className="bg-[#5D5DFF] text-white cursor-pointer mx-3 uppercase rounded-sm px-4 py-2 md:px-8 md:py-4">
              Schedule a demo
            </button>
            <button className="bg-gray-600 text-white cursor-pointer uppercase rounded-sm px-4 py-2 md:px-8 md:py-4">
              Pay on Success
            </button>
          </div>
        </div>
      </div>

      <div
  className="flex justify-center items-center w-full"
  data-aos="zoom-in-up"
  data-aos-duration="2000"
>
  <iframe
    width="800"
    height="450"
    src="https://www.youtube.com/embed/qYGralN2Rzw?autoplay=1&loop=1&mute=1&playlist=qYGralN2Rzw"
    title="YouTube video player"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>

      
      {/* Features Section header*/}
      <div className="max-w-[1240px] h-24 flex justify-center mx-auto px-4 items-center py-50 md:py-40">
        <div
          className="max-w-[700px] text-center mx-auto"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-gray-300 text-5xl max-w-3xl font-sans font-bold leading-snug">
            Accelerate hiring by 10X using{" "}
            <span className="text-[#5D5DFF]">CodeRound</span>
          </h1>
          <h3 className="text-gray-400 text-2xl py-3">
            CodeRound removes the toil from technical hiring
          </h3>
        </div>
      </div>

      {/* Features */}
      <div
        className="grid lg:grid-cols-3 md:grid-cols-1 gap-6 text-gray-300 px-4 justify-items-center pb-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="p-6 w-[350px] text-center h-auto flex flex-col">
          <i class="fa-solid fa-robot text-7xl text-[#5D5DFF]"></i>
          <h1 className="text-gray-200 font-bold text-2xl p-2">
            Accelerate your technical hiring by 10X
          </h1>
          <p>
            Job post to offer in 1 week. Get screening & L1 interviews done by
            AI on day 1 of job application.
          </p>
        </div>
        <div className="p-6 w-[350px] text-center h-auto flex flex-col">
          <i class="fa-solid fa-bolt text-7xl text-[#5D5DFF]"></i>
          <h1 className="text-gray-200 font-bold text-2xl p-2">
            Automate interviews and save time & money
          </h1>
          <p>
            CodeRound pays for itself many times over. Save 90% in HR &
            engineering time and cost per position.
          </p>
        </div>
        <div className="p-6 w-[350px] text-center h-auto flex flex-col">
          <i class="fa-solid fa-list-check text-7xl text-[#5D5DFF]"></i>
          <h1 className="text-gray-200 font-bold text-2xl p-2">
            Reclaim HR & engineering bandwidth
          </h1>
          <p>
            Engineers can now focus on building product and spend 80% lesser
            time interviewing candidates.
          </p>
        </div>
        <div className="p-6 w-[350px] text-center h-auto flex flex-col">
          <i class="fa-solid fa-clock text-7xl text-[#5D5DFF]"></i>
          <h1 className="text-gray-200 font-bold text-2xl p-2">
            Real-time evaluation
          </h1>
          <p>
            Receive instant feedback on candidate's problem solving and coding
            skills.
          </p>
        </div>
        <div className="p-6 w-[350px] text-center h-auto flex flex-col">
          <i class="fa-solid fa-droplet text-7xl text-[#5D5DFF]"></i>
          <h1 className="text-gray-200 font-bold text-2xl p-2">
            Reduce drop-offs by 6X
          </h1>
          <p>
            No more postponing of technical interviews because of interviwer
            unavailability.
          </p>
        </div>
        <div className="p-6 w-[350px] text-center h-auto flex flex-col">
          <i class="fa-solid fa-star text-7xl text-[#5D5DFF]"></i>
          <h1 className="text-gray-200 font-bold text-2xl p-2">
            10X hiring experience
          </h1>
          <p>
            Give your candidates an amazing hiring experience that is smooth,
            free of anxiety and devoid of human judgement.
          </p>
        </div>
      </div>
      {/* Partner section */}
      <div className="max-w-[1240px] h-24 flex justify-center mx-auto px-4 items-center py-40 md:py-30  border-t-1 border-gray-800">
        <div
          className="max-w-[700px] text-center mx-auto"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-gray-300 text-4xl max-w-3xl font-sans font-extrabold leading-snug">
            You Run a Recruitment Agency?
          </h1>
          <div className="flex justify-center py-5">
            <button className="bg-[#5D5DFF] text-white cursor-pointer mx-3 uppercase rounded-sm px-4 py-2 md:px-8 md:py-4">
              partner with us!
            </button>
          </div>
        </div>
      </div>
      {/* Testimonial section */}
      <div
        className="grid lg:grid-cols-3 md:grid-cols-1 gap-6 text-white px-4 justify-items-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* Testimonial 1 */}
        <div className="bg-gray-800 p-6 w-[350px] h-auto rounded-md flex flex-col">
          <img
            src={Aarshay}
            alt="Aarshay Jain"
            className="rounded-full h-14 w-14 mb-4"
          />
          <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
            — CodeRound filtered our pool of candidates from 200 to 4 and helped
            me hire 5x faster!
          </p>
          <hr className="border-gray-600 mb-2" />
          <p className="font-semibold mt-auto">
            Aarshay Jain <span className="text-blue-500">- CTO, InHouse</span>
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-800 p-6 w-[350px] h-auto rounded-md flex flex-col">
          <img
            src={Shaurya}
            alt="Shaurya Verma"
            className="rounded-full h-14 w-14 mb-4"
          />
          <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
            — Our candidate drop offs are almost non-existent thanks to
            CodeRound’s super fast interview process. We can rely on them.
          </p>
          <hr className="border-gray-600 mb-2" />
          <p className="font-semibold mt-auto">
            Shaurya Verma{" "}
            <span className="text-blue-500">- Founder, MDJunior</span>
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-gray-800 p-6 w-[350px] h-auto rounded-md flex flex-col">
          <img
            src={Ankit}
            alt="Ankit Arora"
            className="rounded-full h-14 w-14 mb-4"
          />
          <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
            — CodeRound has saved us 100s of hours of engineering time. Our
            engineers can now focus on what they do best – building products.
          </p>
          <hr className="border-gray-600 mb-2" />
          <p className="font-semibold mt-auto">
            Ankit Arora{" "}
            <span className="text-blue-500">- Founder, Deployment.io</span>
          </p>
        </div>
      </div>
      {/* Email section */}
      <div className="max-w-[1200px] bg-blue-600 text-white my-10 ">
        <div className="flex flex-col md:flex-row justify-between items-center py-20 px-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h1 className="font-bold text-2xl">Want to hire 10X faster?</h1>
            <p>Let's connect and discuss how we can be of help</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <input
              type="text"
              placeholder="Company email"
              className="bg-[#5D5DFF] border-1 border-white focus:outline-none text-white text-left px-5 py-2 md:px-8 md:py-4 mb-4 md:mb-0 w-full md:w-[400px]"
            />
            <button className="bg-[#ffffff] text-[#5D5DFF] cursor-pointer mx-3 uppercase rounded-sm px-5 py-2 md:px-8 md:py-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
