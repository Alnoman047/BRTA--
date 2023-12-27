import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
const Banner = () => {
  return (
    <div>
      <div className="pt-20 pl-4 pb-4 bg-gray-800 text-white">
      <h1 className="text-4xl text-center  font-bold">
                Bangladesh Road Transport Authority 
              </h1>
              <h1 className="text-2xl text-center">Government of the Peoples
                Republic of Bangladesh</h1>
      </div>
      <Carousel className=" ">
   
        <div className="hero min-h-screen lg:h-[700px]">
    
          <img src={img1} />
   
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            
            <div className="max-w-md">
           
              <h1 className="mb-5 text-5xl font-bold">Driving License:</h1>
              <p className="mb-5">
                <span className="font-extrabold">1.</span>To obtain a driving
                license in Bangladesh, you generally need to apply through the
                Bangladesh Road Transport Authority (BRTA).
              </p>
              <p className="mb-5">
                <span className="font-extrabold">2.</span>You will need to pass
                a written test and a practical driving test.
              </p>
              <p className="mb-5">
                <span className="font-extrabold">3.</span>Necessary documents
                typically include proof of age, proof of residence, and a
                medical fitness certificate.
              </p>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen lg:h-[700px]">
          <img src={img2} />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Trade License:</h1>
              <p className="mb-5">
                <span className="font-extrabold">1.</span>A trade license is
                required for operating a business in Bangladesh.
              </p>
              <p className="mb-5">
                <span className="font-extrabold">2.</span>Apply for a trade
                license from the local City Corporation or Municipal Corporation
                office.
              </p>
              <p className="mb-5">
                <span className="font-extrabold">3.</span>Submit the necessary
                documents, including the application form, photographs, and
                proof of address.
              </p>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen lg:h-[700px]">
          <img src={img3} />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Professional License:</h1>
              <p className="mb-5">
                <span className="font-extrabold">1.</span>Certain professions
                may require specific licenses or permits from relevant
                authorities.
              </p>
              <p className="mb-5">
                <span className="font-extrabold">2.</span>For example, medical
                practitioners may need a license from the Bangladesh Medical and
                Dental Council (BMDC).
              </p>
              <p className="mb-5">
                <span className="font-extrabold">3.</span>Verify the
                requirements with the relevant professional council or authority
                for your specific profession.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
