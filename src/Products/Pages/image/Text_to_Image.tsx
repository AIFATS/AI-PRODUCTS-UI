import { useState } from "react";
import Model from "./model";
// import React from "react";


import img from "../../../components/assets/imgs/Picture1.png"
import img1 from "../../../components/assets/imgs/Picture2.png"
import img2 from "../../../components/assets/imgs/Picture3.png"
import img3 from "../../../components/assets/imgs/Picture4.png"
import img4 from "../../../components/assets/imgs/Picture5.png"
import img5 from "../../../components/assets/imgs/Picture6.png"
import img6 from "../../../components/assets/imgs/Picture7.png"
import img7 from "../../../components/assets/imgs/Picture8.png"
import img8 from "../../../components/assets/imgs/Picture9.png"

export default function TexttoImage() {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const showForm = (formId: string | null) => {
    setSelectedForm(formId);
  };

  const handleCancel = () => {
    setSelectedForm(null); // Reset the selectedForm state to null
  };
  return (
    <>
      <div className="pt-[5rem] pl-[88%]">
        {selectedForm !== "form1" ? (
          <button
            type="button"
            value="form1"
            name="flexRadioDefault"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-4 py-2.5 text-center mr-2 mb-2"
            onClick={() => showForm("form1")}
            id="flexRadioDefault1"
          >
            Generate Image
          </button>
        ) : (
          <div className="flex">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-8 py-2.5 text-center mr-2 mb-2"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      {selectedForm === ("form1" as unknown) && <Model />}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
        <div className="grid gap-4"></div>

        <div className="grid gap-4">

          <div>
            <img
              className="h-auto max-w-full rounded-md"
              src={img}
              alt=""
            />
            <div>
              <span>
                Design an assortment of adrenaline-pumping, high-tech sports set
                in the distant future
              </span>
            </div>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-md"
              src={img1}
              alt=""
            />
            <span>
              Dive into the depths of the ocean and visualize an otherworldly
              underwater realm with exotic marine life and ancient ruins
            </span>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-md"
              src={img2}
              alt=""
            />
            <span>
              Create a series of dream-like and surreal images that challenge
              reality and evoke emotions through abstract symbolism
            </span>
          </div>

        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-md"
              src={img3}
              alt=""
            />
            <span>
              World: Illustrate a world reclaimed by nature after an apocalyptic
              event, with abandoned cities, overgrown landscapes, and new
              wildlife
            </span>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-md"
              src={img4}
              alt=""
            />
            <span>
              A digital illustration of a steampunk flying machine in space with
              cogs and mechanisms and eagles, 4k, detailed, trending in
              artstation, fantasy vivid colors
            </span>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-md"
              src={img5}
              alt=""
            />
            <span>Cyberpunk style city street at night, Expressionism</span>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-md"
              src={img6}
              alt=""
            />
            <span>Portrait of a Sci-Fi man, peaceful, digital art</span>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-md"
              src={img7}
              alt=""
            />
            <span>
              Generate an image of a grand, magical library filled with books
              that contain hidden knowledge and secrets
            </span>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-md"
              src={img8}
              alt=""
            />
            <span>
              Visualize long-lost jungle ruins overgrown with exotic plants,
              hiding ancient artifacts and mysteries.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}