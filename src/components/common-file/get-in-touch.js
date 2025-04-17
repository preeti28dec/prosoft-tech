import React from "react";
//import mockupImage from "../../image/get-in-touch.png";
import mockupImage from "../../image/contact_us.svg";

const GetInTouch = () => {
  return (
    <div className="bg-[#ececff] py-12 md:py-20">
      <div className="mx-3 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <img
          src={mockupImage}
          alt="Digital Journey Mockup"
          className="w-full rounded-lg order-2 md:order-1"
        />

        <div className="order-1 md:order-2">
          <div className="text-center md:text-left mb-8">
            <div className="flex items-center mb-3">
              <div>
                <h6 className="pr-3 text-center font-semibold">CONNECT WITH US</h6>
              </div>
              <div className="border-t border-stone-950 flex-[0.2_1]"></div>
            </div>
            <div className="mt-2 text-4xl font-semibold">
            Your goals, our expertise.<span className="text-[#0f0987]"> Begin your digital</span> transformation now.
            </div>
           
          </div>

          <form className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            {[
              {
                label: "Name",
                id: "name",
                type: "text",
                attr: "Please enter name",
              },
              {
                label: "Company Name *",
                id: "companyName",
                type: "text",
                required: true,
                attr: "Please enter company name",
              },
              {
                label: "Email *",
                id: "email",
                type: "email",
                required: true,
                attr: "Please enter email",
              },
              {
                label: "Phone Number *",
                id: "phone",
                type: "tel",
                required: true,
                prefix: "+91",
                attr: "Please enter number",
              },
            ].map(({ label, id, type, required, prefix, attr }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
                <div className="mt-1 relative">
                  {prefix && (
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      {prefix}
                    </span>
                  )}
                  <input
                    type={type}
                    id={id}
                    placeholder={attr}
                    className={`shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                      prefix ? "pl-16" : ""
                    }`}
                    required={required}
                  />
                </div>
              </div>
            ))}
            <div className="sm:col-span-2">
              <label
                htmlFor="help"
                className="block text-sm font-medium text-gray-700"
              >
                How Can We Help ? *
              </label>
              <textarea
                id="help"
                rows={4}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                SUBMIT 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
