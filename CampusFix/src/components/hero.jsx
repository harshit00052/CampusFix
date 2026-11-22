import back from "../assets/College_Lost_Found_st.png"

const hero = () => {
    return(
        <div className="hero_one grid grid-cols-[1fr_2fr] items-center gap-6">
            <div className="left_hero flex flex-col text-start">
                <h2 className="text-7xl">Lost <span className="text-mist-600">&</span> Found For Colleges and Universities</h2>
                <p>Submitting <span className="text-red-500">lost or found items</span> has never been easier, simply enter the details of the lost or found property and <span className="text-green-600">let our smart matching system get to work for you.</span></p>
            </div>
            <div className="right_hero">
                <img src={back} alt="IMG" className="w-full h-auto"/>
            </div>
        </div>
    )
}

export default hero