import React from "react";
import "./styles.css";
import ImageUpload from "../../components/imageUpload/imageUp";

export default function CreateStory() {
  return (
    <div className="flex flex-col flex-auto w-full h-screen font-Urbanist ">
      <div className="h-full">
        <div className="justify-center text-center">
          <h1 className="mb-[153px] text-4xl font-semibold leading-normal text-black">
            Create a new Travel Story
          </h1>
        </div>
        <div className="  grid h-full grid-cols-3 ml-[70px]">
          <div className="flex items-center justify-center bg-gray-300 w-[490px] h-[491px] rounded-2xl mb-308 ">
            {/* Include the image upload component here */}
            <ImageUpload />
          </div>
          <div className="flex justify-center col-span-2">
              <div className="ml-[104px] mr-[70px]">
                <form>
                  <div className="flex flex-col items-start flex-grow gap-4">
                    <label className="text-[24px]">Title of your review</label>
                    <input
                      type="text"
                      className="items-start gap-2 p-6 pt-4 pb-4 border border-gray-300 rounded-md w-[734px]"
                      placeholder="Summarize your Travel Journey"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-4 mt-5">
                    <label className="text-[24px]">Your review</label>
                    <input
                      type="text"
                      className="items-start gap-2 p-6 pt-4 pb-4 border border-gray-300 rounded-md w-[734px]"
                      placeholder="A detailed review of your Travel Journey. Travellers will love to know your experience"
                    />
                  </div>
                  <div className="flex items-start gap-4 mt-5">
                    <div class="flex flex-col items-start gap-4">
                    <label className="text-[24px]">Location</label>
                    <input
                      type="text"
                      className="p-4 border border-gray-300 rounded-md w-[352px]"
                      placeholder="Enter Travel Location"
                    />
                    </div>
                    <div class="flex flex-col items-start gap-4 ml-[15px]">
                    <label className="text-[24px]">When did you travel?</label>
                    <input
                      type="date"
                      className="p-4  border border-gray-300 rounded-md w-[352px]"
                      placeholder="Select"
                    />
                    </div>
                  </div>
                  <div className="flex flex-row items-start gap-[22px] mt-[56px]">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-indigo-600 form-checkbox"
                    />
                    <p className="ml-[22px] text-[20px] font-medium leading-normal text-black font-Urbanist w-[680px]" >
                      I certify that the information in this review is based solely on my own experiences with the
                      product or service in question. I also attest that I have no personal or professional affiliation
                      with the business in question and have not been given any incentives or payment from the business
                      to write this review. I am aware that fake reviews are strictly prohibited on Tripadvisor.
                    </p>
                  </div>
                  <div class="mt-5">
                   <button class="text-white flex items-center justify-center w-40 h-12  rounded-full bg-[#4169E1] mt-10">
                    Submit Story
                   </button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
