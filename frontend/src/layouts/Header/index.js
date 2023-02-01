import { useState } from "react";
export const Header = ({ none, block, welcome, name, extra, extrab, showCampaign = true }) => {
    const [profileMenu, setOpenProfileMenu] = useState(false)
    return (
        <div className="hidden sm:block  md:flex lg:flex items-center py-3 mb-8 lg:mb-5 px-2 md:px-5 lg:px-8 md:py-5 lg:py-5 box-shadow-1">
            <div className="md:flex justify-between flex-initial w-full md:w-full lg:w-7/12 sub-width-3 mr-5">
                <div>
                    <h4 className={`text-[20px] ${block} font-normal`}><span className="font-bold pr-1">{welcome} </span>{name}</h4>
                    <p className={`${none}text-xs font-semibold`}> <span className="color-3 font-normal">{extrab}</span> {extra}</p>
                </div>
            </div>
        </div>
    )
}
export default Header