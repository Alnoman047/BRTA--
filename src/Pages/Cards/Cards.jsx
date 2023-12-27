const Cards = () => {
  return (
  <div>
      <h1 className="text-3xl font-extrabold text-center p-4 text-white bg-slate-800">Services</h1>
    <div className="m-8 grid md:grid-cols-2 lg:grid-cols-3  ">
       
      <div className="card w-96 bg-base-100 shadow-xl mb-6">
        <figure className="px-10 pt-10">
          <img 
            src="https://i.ibb.co/dcQZ23Y/360-F-128447604-6de-YSrg6bg-H2-F3-Yao-U0icdhvx-Nu4-Re-DN.webp"
            alt="Shoes"
            className="rounded-xl h-44"
          />
        </figure>
        <div className="bg-gray-600 text-white card-body items-center text-center">
          <ul>
            <h1 className="text-xl text-accent font-bold">About Us</h1>
            <a>Vision & Mission</a> <br />
            <a>Citizens Charter</a> <br />
            <a>Org Structure</a> <br />
            <a>Work Distribution</a> <br />
          </ul>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-6">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/Wp4tx1D/download-1.jpg"
            alt="Shoes"
            className="rounded-xl h-44"
          />
        </figure>
        <div className="bg-gray-600 text-white card-body items-center text-center">
          <ul>
            <h1 className="text-xl text-accent font-bold">Human Resources</h1>
            <a>Recruitment Notice</a> <br />
            <a href="http://www.brta.gov.bd/site/page/8a207def-38d7-41d2-ab55-cc13b40f0237/List-of-Chairmen" className="underline underline-offset-8">List of Chairmen</a> <br />
            <a>Officers List</a> <br />
            <a>Manpower PDS</a> <br />
          </ul>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-6">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/q0k2F9B/download-2.jpg"
            alt="Shoes"
            className="rounded-xl h-44"
          />
        </figure>
        <div className="bg-gray-600 text-white card-body items-center text-center">
          <ul>
            <h1 className="text-xl text-accent font-bold">Innovative Activities</h1>
            <a>Innovation Team</a> <br />
            <a>Annual Innovation Work Plans</a> <br />
            <a>Innovative Ideas</a> <br />
            <a>Notification/Circular/Policies</a> <br />
          </ul>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-6">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/jGL5hhZ/download-3.jpg"
            alt="Shoes"
            className="rounded-xl h-44"
          />
        </figure>
        <div className="bg-gray-600 text-white card-body items-center text-center">
          <ul>
            <h1 className="text-xl text-accent font-bold">
              National Integrity Strategy {" "}
            </h1>
            <a>Strategy Action Plan Focal Point & ALT Officer</a> <br />
            <a>Quarterly/Semi-monthly Monitoring /Evaluation Report</a> <br />
            <a>Laws/Rules/Policies/Minutes</a> <br />
          </ul>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-6">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/Hhdpw19/Citizen-s-Charter.png"
            alt="Shoes"
            className="rounded-xl h-44"
          />
        </figure>
        <div className="bg-gray-600 text-white card-body items-center text-center">
          <ul>
            <h1 className="text-xl text-accent font-bold">Citizens Charter </h1>
            <a>Focal Point </a> <br />
            <a>
              Officer/Monitoring Committee Quarterly/Annual Monitoring/
            </a>{" "}
            <br />
            <a>Evaluation/Action plan Laws/Rules/Policies/Circulars/</a> <br />
            <a>Guidelines/Notification</a> <br />
          </ul>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-6">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/RCQV2L3/download-4.jpg"
            alt="Shoes"
            className="rounded-xl h-44"
          />
        </figure>
        <div className="bg-gray-600 text-white card-body items-center text-center">
          <ul>
            <h1 className="text-xl text-accent font-bold">
              Instructor, Driving Training School, Traffic Sign Instructor,{" "}
            </h1>
           <a > Driving Training School Traffic Sign List of Instructor License</a>
           <a > Holder List of Driving Training School Traffic Sign</a>
           <a > Interview/Practical Notice</a>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cards;
