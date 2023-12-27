const Form = () => {
  return (
    <div className="hero min-h-screen bg-base-200 text-white"  style={{backgroundImage: 'url(https://i.ibb.co/hRDV2j3/pexels-elijah-o-donnell-3473569.jpg)'}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-4xl font-extrabold">Form</h1>
          <form>
            <div className="form-control w-full my-2">
              <label className="label">
                <span className="label-text text-white">Field Name</span>
              </label>
              <input
                type="text"
                placeholder="Field Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex gap-6">
              {/* Email ID */}
              <div className="form-control w-full my-2">
                <label className="label">
                  <span className="label-text text-white">Email ID</span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Email ID"
                  className="input input-bordered w-full "
                />
              </div>
              {/* Vehicle No */}
              <div className="form-control w-full my-2">
                <label className="label">
                  <span className="label-text text-white">Vehicle No</span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Vehicle No"
                  className="input input-bordered w-full "
                />
              </div>
            </div>

            {/* category */}
            <div className="form-control w-full my-2">
              <label className="label">
                <span className="label-text text-white">Chess No</span>{" "}
              </label>
              <input
                type="text"
                placeholder="Chess No"
                className="input input-bordered w-full "
              />
            </div>

            {/* NID Soft Copy */}
            <div className="form-control w-full my-2">
              <label className="label">
                <span className="label-text text-white">NID Soft Copy</span>{" "}
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-accent w-full "
              />
            </div>
            {/* Present Address */}
            <div className="form-control w-full my-2">
              <label className="label">
                <span className="label-text text-white">Present Address</span>{" "}
              </label>
              <input
                type="text"
                placeholder="Present Address"
                className="input input-bordered w-full "
              />
            </div>
            {/* Permanent Address */}
            <div className="form-control w-full my-2">
              <label className="label">
                <span className="label-text text-white">Permanent Address</span>{" "}
              </label>
              <input
                type="text"
                placeholder="Permanent Address"
                className="input input-bordered w-full "
              />
            </div>
            {/* Passport Size Photo */}
            <div>
              <label className="label">
                <span className="label-text text-white">Passport Size Photo </span>{" "}
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-accent w-full "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
