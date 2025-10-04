import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex p-4">
            <div className="w-1/3 flex items-center">
                <Link to={"/"} className="h-12 w-12">
                    <svg className="fill-white hover:fill-white/60" viewBox="0 0 637 637" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="89" y="227" width="276" height="92" />
                        <rect x="365" y="135" width="184" height="92" />
                        <rect x="273" y="319" width="92" height="184" />
                    </svg>
                </Link>
                <Link to="/" className="p-4 font-semibold hover:text-white/60">Home</Link>
                <Link to="/favorites" className="p-4 font-semibold hover:text-white/60">My Favorites</Link>
            </div>
            <div className="w-1/3 flex justify-center items-center">
                <div className="flex px-4 py-3 rounded-full border-2 border-white/20 overflow-hidden max-w-md mx-auto">
                    <input type="email" placeholder="Search Something..."
                        className="w-full outline-none bg-transparent text-sm" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white/20">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="w-1/3 flex justify-end items-center">
                <div className="w-12 h-12 bg-white rounded-lg"></div>
            </div>
        </header>
    )
}