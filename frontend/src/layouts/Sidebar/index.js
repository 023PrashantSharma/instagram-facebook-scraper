import dassbordimg from "../../assets/images/dassbord-white.svg";
import dassbordcolorimg from "../../assets/images/dassbord.svg";
import { NavLink as Link } from "react-router-dom";
export const Sidebar = ({ title }) => {
  return (
    <>

      <div className="relative  md:flex" data-dev-hint="container">
        <input type="checkbox" id="menu-open" className="hidden" />
        <header className="bac-7 fixed top-0  w-full text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
          <a href="#" className="block p-4 text-white font-bold whitespace-nowrap truncate">
            RevuER
          </a>
          <label for="menu-open" id="mobile-menu-button" className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
            <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </header>

        <aside id="sidebar" className="fixed top-4 sm:top-0  text-gray-100 md:w-64 w-3/4 space-y-6 px-0   transform  md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">


          <div className=" bac-7 w-60  h-[100vh] sm:block ">
            <div className="text-center sm:pt-0 pt-10 text-white flex justify-center mr-4 mt-10 mb-10 font-medium text-3xl">
              SCRAPER
            </div>
            <div className="">
              <ul className="mb-80">
                <li className="flex items-center  min-h-[60px]  px-9 relative">
                  <img
                    src={title == "Instagram" ? dassbordcolorimg : dassbordimg}
                    alt="daseimg"
                    className="w-5 h-5 object-cover mr-5"
                  />
                  <Link
                    to={`/`}
                    className={`text-sm font-medium ${title == "Instagram" ? "text-[#FCB43C]" : "text-[#fff]"
                      }`}
                  >
                    Instagram
                  </Link>
                  {title == "Instagram" ? (
                    <div
                      className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
                    ></div>
                  ) : null}
                </li>
                <li className="flex items-center  min-h-[60px]  px-9 relative">
                  <img
                    src={title == "Facebook" ? dassbordcolorimg : dassbordimg}
                    alt="daseimg"
                    className="w-5 h-5 object-cover mr-5"
                  />
                  <Link
                    to={`/facebook`}
                    className={`text-sm font-medium ${title == "Facebook" ? "text-[#FCB43C]" : "text-[#fff]"
                      }`}
                  >
                    FaceBook
                  </Link>
                  {title == "Facebook" ? (
                    <div
                      className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
                    ></div>
                  ) : null}
                </li>
                {/* 
          <li className="flex items-center min-h-[60px]  px-9">
            <img
              src={title == "Campaigns" ? campincolorimg : campinimg}
              alt="campinimg"
              className="w-5 h-5 object-cover mr-5"
            />
            <Link
              to={`/${process.env.REACT_APP_FRONT_URL}/campaign-page`}
              className={`text-sm font-medium ${
                title == "Campaigns" ? "text-[#FCB43C]" : "text-[#fff]"
              }`}
            >
              Campaigns
            </Link>
            {title == "Campaigns" ? (
              <div
                className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
              ></div>
            ) : null}
          </li>

          <li className="flex items-center min-h-[60px]  px-9">
            <img
              src={title == "inbox" ? inboxcolorimg : inboximg}
              alt="inboximg"
              className="w-5 h-5 object-cover mr-5"
            />
            <Link
              to={`/${process.env.REACT_APP_FRONT_URL}/inbox`}
              className={`text-sm text-white  font-medium ${
                title == "inbox" ? "text-[#FCB43C]" : "text-[#fff]"
              }`}
            >
              Inbox
            </Link>
            {title == "inbox" ? (
              <div
                className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
              ></div>
            ) : null}
          </li>

          <li className="flex items-center min-h-[60px]  px-9">
            <img
              src={title == "Plan-menu" ? framcolorimg : framimg}
              alt="framimg"
              className="w-5 h-4 object-cover mr-5"
            />
            <Link
              to={`/${process.env.REACT_APP_FRONT_URL}/plan-menu`}
              className={`text-sm text-white  font-medium ${
                title == "Plan-menu" ? "text-[#FCB43C]" : "text-[#fff]"
              }`}
            >
              Plans
            </Link>
            {title == "Plan-menu" ? (
              <div
                className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
              ></div>
            ) : null}
          </li>
          <li className="flex items-center min-h-[60px]  px-9">
            <img
              src={analayimg}
              alt="analayimg"
              className="w-5 h-5 object-cover mr-5"
            />
            <Link
              to={`/${process.env.REACT_APP_FRONT_URL}/dassbord`}
              className={`text-sm text-white  font-medium ${
                title == "Dashboard" ? "color-2" : ""
              }`}
            >
              Analysis Report
            </Link>
            {title == "Campaign5" ? (
              <div
                className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
              ></div>
            ) : null}
          </li> */}
              </ul>
            </div>
          </div>


        </aside>


      </div>


    </>
  );
};

export default Sidebar;
