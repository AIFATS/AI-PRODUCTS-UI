import "animate.css"; // Import Animate.css
import { useEffect } from "react";
import WOW from "wow.js"; // Import WOW.js
import "wow.js/css/libs/animate.css"; // Import WOW.js CSS

export default function Header() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <header className="header " >
          <div className="overlay ">
            {/* <div className="wow bounceIn"> */}
            <h1 className="title font-italic pt-[5%]">FATS</h1>
            <h1 className="subtitle font-italic pt-4">
              FUTURE AI TECHNOLOGY'S
            </h1>
            <div className="buttons text-center pt-4 pb-4">
              <button
                onClick={() => {
                  const contactUsSection = document.getElementById("service");
                  if (contactUsSection) {
                    contactUsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn btn-primary rounded w-lg btn-lg my-1"
              >
                Our Service
              </button>
              <button
                onClick={() => {
                  const contactUsSection = document.getElementById("contact");
                  if (contactUsSection) {
                    contactUsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn btn-outline-light rounded w-lg btn-lg my-1"
              >
                Contact Us
              </button>
            </div>
            </div>
          {/* </div> */}
        </header>

        <div className="box text-center shadow-lg">
          <div className="box-item wow fadeInDown" data-wow-delay=".3s">
            <i className="ti-vector"></i>
            <h6 className="box-title">AI development</h6>
            <p>
              AI development involves creating algorithms that enable machines
              to perform tasks requiring human-like intelligence, such as
              learning and problem-solving.
            </p>
          </div>
          <div className="box-item wow fadeInDown" data-wow-delay=".3s">
            <i className="ti-filter"></i>
            <h6 className="box-title">Web Development</h6>
            <p>
              Web development encompasses designing, building, and maintaining
              websites, involving various technologies like HTML, CSS,
              JavaScript, and backend frameworks for functionality .
            </p>
          </div>
          <div className="box-item wow fadeInDown" data-wow-delay=".3s">
            <i className="ti-mobile"></i>
            <h6 className="box-title">App Design</h6>
            <p>
              App design is crafting user interfaces for mobile or desktop
              applications, focusing on aesthetics, usability, and user
              experience to enhance engagement.
            </p>
          </div>
        </div>
      </body>
    </>
  );
}
