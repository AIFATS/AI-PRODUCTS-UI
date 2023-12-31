import React, { useState } from "react";
import Facebook from "./pages/Facebook";
import Instagram from "./pages/Instagram";
import Linkdin from "./pages/Linkdin";
import Pinterest from "./pages/Pinterest";
import Thread from "./pages/Thread";
import Twitter from "./pages/Twitter";
import Whatsapp from "./pages/Whatsapp";
import Youtube from "./pages/Youtube";

type SocialMediaType =
  | "facebook"
  | "instagram"
  | "thread"
  | "twitter"
  | "linkdin"
  | "whatsapp"
  | "youtube"
  | "pinterest";

export default function Socialmedia() {
  const [selectedSocialMedia, setSelectedSocialMedia] = useState<
    SocialMediaType[]
  >([]);

  const handleCheckboxChange = (socialMedia: SocialMediaType) => {
    if (selectedSocialMedia.includes(socialMedia)) {
      setSelectedSocialMedia(
        selectedSocialMedia.filter((item) => item !== socialMedia)
      );
    } else {
      setSelectedSocialMedia([...selectedSocialMedia, socialMedia]);
    }
  };

  return (
    <>
      <section className="py-6">
        <div className="container mt-4">
          <div className="rounded-md border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-gray-600 dark:text-white">
              Identification
            </h3>
            <span className="text-gray-600 font-sans dark:text-white">
              You can select one or multiple checkbox
            </span>
            <ul className="items-center w-full text-sm max-md:overflow-x-scroll font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {/* Facebook */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="facebook-checkbox-list"
                    type="checkbox"
                    checked={selectedSocialMedia.includes("facebook")}
                    onChange={() => handleCheckboxChange("facebook")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="facebook-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Facebook
                  </label>
                </div>
              </li>

              {/* Instagram */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="instagram-checkbox-list"
                    type="checkbox"
                    checked={selectedSocialMedia.includes("instagram")}
                    onChange={() => handleCheckboxChange("instagram")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="instagram-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Instagram
                  </label>
                </div>
              </li>

              {/* Thread */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="thread-checkbox-list"
                    type="checkbox"
                    checked={selectedSocialMedia.includes("thread")}
                    onChange={() => handleCheckboxChange("thread")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="thread-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Thread
                  </label>
                </div>
              </li>

              {/* Twitter */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="twitter-checkbox-list"
                    type="checkbox"
                    checked={selectedSocialMedia.includes("twitter")}
                    onChange={() => handleCheckboxChange("twitter")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="twitter-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Twitter
                  </label>
                </div>
              </li>

              {/* Linkdin */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="linkdin-checkbox-list"
                    type="checkbox"
                    checked={selectedSocialMedia.includes("linkdin")}
                    onChange={() => handleCheckboxChange("linkdin")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="linkdin-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Linkdin
                  </label>
                </div>
              </li>

              {/* What's App */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="whatsapp-checkbox-list"
                    type="checkbox"
                    checked={selectedSocialMedia.includes("whatsapp")}
                    onChange={() => handleCheckboxChange("whatsapp")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="whatsapp-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    What's_App
                  </label>
                </div>
              </li>

              {/* Youtube */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="youtube-checkbox-list"
                    type="checkbox"
                    checked={selectedSocialMedia.includes("youtube")}
                    onChange={() => handleCheckboxChange("youtube")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="youtube-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Youtube
                  </label>
                </div>
              </li>

              {/* Pinterest */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="pinterest-checkbox-list"
                    type="checkbox"
                    checked={selectedSocialMedia.includes("pinterest")}
                    onChange={() => handleCheckboxChange("pinterest")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="pinterest-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Pinterest
                  </label>
                </div>
              </li>
            </ul>
          </div>

          {selectedSocialMedia.length > 0 && (
            <div className="rounded-md border border-gray-200 bg-white p-4 mt-4">
              <h3 className="mb-4 text-gray-600 dark:text-white">
                Put Your Tokens here...
              </h3>

              {selectedSocialMedia.includes("facebook") && <Facebook />}
              {selectedSocialMedia.includes("instagram") && <Instagram />}
              {selectedSocialMedia.includes("thread") && <Thread />}
              {selectedSocialMedia.includes("twitter") && <Twitter />}
              {selectedSocialMedia.includes("linkdin") && <Linkdin />}
              {selectedSocialMedia.includes("whatsapp") && <Whatsapp />}
              {selectedSocialMedia.includes("youtube") && <Youtube />}
              {selectedSocialMedia.includes("pinterest") && <Pinterest />}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
