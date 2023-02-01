// reels images
import iphoneimg from "../../assets/images/Battery.svg";
import Cellularimg from "../../assets/images/Cellular Connection.svg";
import wifiimg from "../../assets/images/Wifi.svg";
import icon_homeimg from "../../assets/images/icon_home.svg";
import icon_mediaimg from "../../assets/images/icon_media.svg";
import icon_searchimg from "../../assets/images/icon_search.svg";
import icon_shopimg from "../../assets/images/icon_shop.svg";
import avatartimg from "../../assets/images/avatar.svg";
import camraimg from "../../assets/images/Camera-Icon.svg";
import divyarectingleimg from "../../assets/images/divya-rectingle.svg";
import icon_morewhiteimg from "../../assets/images/icon_morewhite.svg";
import Sharewhiteimg from "../../assets/images/Sharewhite.svg";
import Commentwhite from "../../assets/images/Commentwhite.svg";
import Heartwhite from "../../assets/images/Heartwhite.svg";
import instawhitepro from "../../assets/images/instawhitepro.svg";
import musie from "../../assets/images/musie.svg";
import rewieimg from "../../assets/images/rewie-dassbord.svg"
import { Header, Sidebar } from "../../layouts";
import { useState, useRef } from "react";
function Instagram() {
    const [instaData, setinstaData] = useState(false)
    const [postData, setPostData] = useState({})
    const focusPoint = useRef(null);
    const focusPointSpinner = useRef(null);
    const PostSource = ({ post_url = "" }) => {
        return (<source src={post_url} type="video/mp4" />)
    }
    const searchInstaPost = async (event) => {
        event.preventDefault();
        focusPoint.current.disabled = true
        focusPoint.current.style.cursor = "not-allowed"
        focusPointSpinner.current.style.display = "inline-block"
        const req_data = `{
      "post_link": "${event.target.querySelector("input").value.trim()}"
    }`
        try {
            let response = await fetch("http://localhost:8080/get-post-data", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: req_data
            });
            const data = await response.json();
            if (data.status) {
                setPostData(data.data)
                setinstaData(true)
            } else {
                setPostData(data)
                event.target.querySelector("input").value = ""
            }
            focusPoint.current.disabled = false
            focusPoint.current.style.cursor = "pointer"
            focusPointSpinner.current.style.display = "none"
        } catch (err) {
            console.log("Your Error is", err);
            focusPoint.current.disabled = false
            focusPoint.current.style.cursor = "pointer"
            focusPointSpinner.current.style.display = "none"
            return err
        }
    }
    return (
        <>
            <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
                <Header welcome="Welcome, " name="Manan Sharma!" />
                {
                    instaData ?
                        <div className="block md:block lg:flex px-5">
                            <div className="flex-initial w-full lg:w-3/12 box-shadow-1 mb-5 lg:mb-6 rounded-xl">
                                <div className=" py-2  overflow-y-auto  w-full " id="insta-modal-1">
                                    <div className="flex items-center sm:mt-0 mt-16 justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                        <div
                                            className="inline-block align-center  rounded-2xl text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-[21.7rem] sm:w-full w-[100%] "
                                            role="dialog"
                                            aria-modal="true"
                                            aria-labelledby="modal-headline"
                                        >
                                            <div className="bg-[#080A0B] box-shadow-3 w-[21.7rem] relative  mt-0.5 rounded-3xl ">

                                                <div className="h-[38.5rem] overflow-y-auto insta">
                                                    <div>
                                                        <div className="flex justify-between py-3 px-4 absolute	 top-1 w-full">
                                                            <div>
                                                                <h4 className="text-white text-xs font-medium">9:41</h4>
                                                            </div>
                                                            <div className="flex">
                                                                <img src={Cellularimg} alt="Cellularimg" className="w-4 mr-1" />
                                                                <img src={wifiimg} alt="wifiimg" className="w-4 mr-1" />
                                                                <img src={iphoneimg} alt="iphoneimg" className="w-6" />
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between py-3 px-4 absolute	 top-10 w-full">
                                                            <div>
                                                                <h4 className="text-white text-base font-bold ">Reels</h4>
                                                            </div>
                                                            <div className="flex">
                                                                <img src={camraimg} alt="camraimg" className="w-5 mr-1" />
                                                            </div>
                                                        </div>
                                                        <div className="instareals-video">
                                                            <video autoPlay muted loop id="myVideo" className="rounded-t-3xl ">
                                                                <PostSource post_url={postData.post_url} />
                                                                Your browser does not support HTML5 video.
                                                            </video>

                                                            <div class="content">
                                                                <div className="flex  items-center mb-4 justify-between relative">

                                                                    <div className="flex items-center">
                                                                        <img
                                                                            src={instawhitepro}
                                                                            alt="instawhitepro"
                                                                            className="w-8 mr-3"
                                                                        />
                                                                        <h5 className="text-sm font-semibold mr-3">{postData.owner_username}</h5>
                                                                        <button className="border-2 px-4 rounded-lg font-semibold py-1 text-xs border-white">
                                                                            Follow
                                                                        </button>
                                                                    </div>
                                                                    <div>
                                                                        <img
                                                                            src={Sharewhiteimg}
                                                                            alt="Sharewhiteimg"
                                                                            className="w-6 mr-3"
                                                                        />

                                                                    </div>
                                                                    <div className="absolute bottom-12 right-0">
                                                                        <div className=" mb-5">
                                                                            <img
                                                                                src={Heartwhite}
                                                                                alt="Heartwhite"
                                                                                className="w-6 mr-3 mb-1.5"
                                                                            />
                                                                            <p className="text-xs font-normal">{postData.post_likes_count}</p>
                                                                        </div>
                                                                        <div className=" mb-0">
                                                                            <img
                                                                                src={Commentwhite}
                                                                                alt="Commentwhite"
                                                                                className="w-6 mr-3 mb-1.5"
                                                                            />
                                                                            <p className="text-xs font-normal">{postData.comments}</p>

                                                                        </div>



                                                                    </div>

                                                                </div>

                                                                <div className="flex items-center">
                                                                    <p className="text-xs font-normal mb-3">
                                                                        {postData.caption}
                                                                    </p>
                                                                    <img
                                                                        src={icon_morewhiteimg}
                                                                        alt="icon_morewhiteimg"
                                                                        className="w-1 mr-5 mb-6"
                                                                    />
                                                                </div>

                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <img src={musie} alt="musie" className="w-3 mr-2" />
                                                                        <p className="font-medium text-xs">
                                                                            Don Omar • Danza Kuduro (fe
                                                                            <span className="text-[10px] font-normal">T O K Y O </span>
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <img
                                                                            src={divyarectingleimg}
                                                                            alt="divyarectingleimg"
                                                                            className="w-8 mr-2 border-2 rounded-lg"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="px-5 py-4 flex justify-between items-center pb-9">
                                                    <img src={icon_homeimg} alt="icon_homeimg" className="w-6 " />
                                                    <img src={icon_searchimg} alt="icon_searchimg" className="w-6" />
                                                    <img src={icon_mediaimg} alt="icon_mediaimg" className="w-6" />
                                                    <img src={icon_shopimg} alt="icon_shopimg" className="w-6" />
                                                    <img src={avatartimg} alt="avatartimg" className="w-6" />
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-initial w-full md:w-full lg:w-9/12 ml-6 mb-6 sm:mb-0">

                                <div className="block md:block lg:flex px-5 mb-5">
                                    <div className="flex-initial w-full md:w-full lg:w-4/12 ml-6 mb-6 sm:mb-0">
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-8 mt-6 sm:mt-0">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="makilimg" />
                                            </div>

                                            <div className="bg-white  py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button  text-base color-3 font-normal mb-7 -mt-1 ">Total Likes</h5>
                                                <p className="text-3xl font-semibold">{postData.post_likes_count}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-10 md:mb-8 lg:mb-2">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="rewieimg" />
                                            </div>

                                            <div className="bg-white rounded-2xl py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button text-base color-3 font-normal mb-7 -mt-1 ">Total Comments</h5>
                                                <p className="text-3xl font-semibold">{postData.comments}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-initial w-full md:w-full lg:w-4/12 ml-6 mb-6 sm:mb-0">
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-8 mt-6 sm:mt-0">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="makilimg" />
                                            </div>

                                            <div className="bg-white  py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button  text-base color-3 font-normal mb-7 -mt-1 ">Type of Media</h5>
                                                <p className="text-3xl font-semibold">{postData.is_video && "Video"}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-10 md:mb-8 lg:mb-2">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="rewieimg" />
                                            </div>

                                            <div className="bg-white rounded-2xl py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button text-base color-3 font-normal mb-7 -mt-1 ">Video Duration</h5>
                                                <p className="text-3xl font-semibold">{postData.video_duration} sec</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-initial w-full md:w-full lg:w-4/12 ml-6 mb-6 sm:mb-0">
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-8 mt-6 sm:mt-0">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="makilimg" />
                                            </div>

                                            <div className="bg-white  py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button  text-base color-3 font-normal mb-7 -mt-1 ">Date</h5>
                                                <p className="text-3xl font-semibold">{postData.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-10 md:mb-8 lg:mb-2">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="rewieimg" />
                                            </div>

                                            <div className="bg-white rounded-2xl py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button text-base color-3 font-normal mb-7 -mt-1 ">Owner Username</h5>
                                                <p className="text-3xl font-semibold">{postData.owner_username}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:block lg:flex px-5">
                                    <div className="flex-initial w-full md:w-full lg:w-4/12 ml-6 mb-6 sm:mb-0">
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-8 mt-6 sm:mt-0">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="makilimg" />
                                            </div>

                                            <div className="bg-white  py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button  text-base color-3 font-normal mb-7 -mt-1 ">Caption</h5>
                                                <p className="text-3xl font-semibold">{postData.caption}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-10 md:mb-8 lg:mb-2">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="rewieimg" />
                                            </div>

                                            <div className="bg-white rounded-2xl py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button text-base color-3 font-normal mb-7 -mt-1 ">Hashtag</h5>
                                                <p className="text-3xl font-semibold" >{postData[""]}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-initial w-full md:w-full lg:w-4/12 ml-6 mb-6 sm:mb-0">
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-8 mt-6 sm:mt-0">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="makilimg" />
                                            </div>

                                            <div className="bg-white  py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button  text-base color-3 font-normal mb-7 -mt-1 ">Caption Mentions</h5>
                                                {postData.caption_mentions.substring(1, postData.caption_mentions.length - 1).split(",").forEach(item => {
                                                    return (
                                                        <p className="text-3xl font-semibold">@{item.substring(1, item.length - 1)}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-10 md:mb-8 lg:mb-2">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="rewieimg" />
                                            </div>

                                            <div className="bg-white rounded-2xl py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button text-base color-3 font-normal mb-7 -mt-1 ">Owner Id</h5>
                                                <p className="text-3xl font-semibold">{postData.owner_id}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-initial w-full md:w-full lg:w-4/12 ml-6 mb-6 sm:mb-0">
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-8 mt-6 sm:mt-0">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="makilimg" />
                                            </div>

                                            <div className="bg-white  py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button  text-base color-3 font-normal mb-7 -mt-1 ">Media Count</h5>
                                                <p className="text-3xl font-semibold">{postData.mediacount}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-10 md:mb-8 lg:mb-2">
                                            <div className="mr-5">
                                                <img src={rewieimg} alt="rewieimg" />
                                            </div>

                                            <div className="bg-white rounded-2xl py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                                                <h5 className="campain-button text-base color-3 font-normal mb-7 -mt-1 ">Title</h5>
                                                <p className="text-3xl font-semibold">{postData.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        :
                        <div className="bg-[#00000036] m-5 border-2 rounded-lg">
                            <div className="flex items-center search-box-container">
                                <form onSubmit={(event) => searchInstaPost(event)} role="search">
                                    <label for="search">Search for stuff</label>
                                    <input id="search" type="search" placeholder="Search..." autofocus required />
                                    <button ref={focusPoint} type="submit"><i ref={focusPointSpinner} className="fa fa-spin fa-spinner mr-2" id="btn_spinner"></i>Go</button>
                                </form>
                            </div>
                            {postData.status == false &&
                                <div className="mx-10 my-3">
                                    <div class="border px-4 py-3 border-red-400 rounded-b bg-red-100 text-red-700">
                                        <p>{postData.message}</p>
                                    </div>
                                </div>
                            }
                        </div>
                }
            </section>


            <Sidebar title="Instagram" />
        </>
    );
}
export default Instagram;
