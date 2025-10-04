export default function FavoriteStationBar() {
    return (
        <div className="bg-black border-r border-white/20 h-full px-2 flex flex-col gap-2">
            {/* add button */}
            <div className="flex items-center justify-center bg-white p-2.5 rounded-lg cursor-pointer">
                <svg viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 48C256 30.3 241.7 16 224 16C206.3 16 192 30.3 192 48V192H48C30.3 192 16 206.3 16 224C16 241.7 30.3 256 48 256H192V400C192 417.7 206.3 432 224 432C241.7 432 256 417.7 256 400V256H400C417.7 256 432 241.7 432 224C432 206.3 417.7 192 400 192H256V48Z" fill="black" />
                </svg>
            </div>

            {/* favorite stations list */}
            <div className="flex items-center justify-center bg-black rounded-lg overflow-hidden border border-white/20 cursor-pointer">
                <svg viewBox="0 0 541 541" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_72_68)">
                        <rect width="541" height="541" fill="#0B0A0D" />
                        <g filter="url(#filter0_d_72_68)">
                            <path d="M126.725 298.534L250.956 414.507C256.113 419.319 262.919 422 270 422C277.081 422 283.888 419.319 289.044 414.507L413.275 298.534C434.175 279.079 446 251.787 446 223.258V219.271C446 171.218 411.281 130.246 363.913 122.34C332.563 117.115 300.662 127.358 278.25 149.769L270 158.019L261.75 149.769C239.338 127.358 207.438 117.115 176.088 122.34C128.719 130.246 94 171.218 94 219.271V223.258C94 251.787 105.825 279.079 126.725 298.534Z" fill="#0B0A0D" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_72_68" x="-106" y="-79" width="752" height="701" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="100" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_68" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_68" result="shape" />
                        </filter>
                        <clipPath id="clip0_72_68">
                            <rect width="541" height="541" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    )
}