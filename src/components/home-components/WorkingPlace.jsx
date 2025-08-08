import React from 'react'
import "../../css/home-css/workingPlace.css"
import place1 from "../../assets/place1.jpg"
import place2 from "../../assets/place2.png"
import place3 from "../../assets/place3.png"
import place4 from "../../assets/place4.jpg"
import place5 from "../../assets/place5.jpg"
import place6 from "../../assets/place6.jpg"

const places = [
    {
        image: place1,
        title: "Front working space"
    },
    {
        image: place2,
        title: "Meeting corner"
    },
    {
        image: place3,
        title: "Guest meeting room"
    },
    {
        image: place4,
        title: "Guest rest room"
    },
    {
        image: place5,
        title: "Single working space"
    },
    {
        image: place6,
        title: "Kitchen room"
    }
]

const WorkingPlace = () => {
    return (
        <div className='container'>
            <div className='section-header'>
                <h4 className='section-title'>Working space</h4>
                <h3 className='sub-title'>Let's meet our interior room decoration</h3>
            </div>
            <div className='place-img-container'>
                {/* {
                    services.map((item, index) => {
                        return (
                            <Card key={index} icon={item.icon} title={item.title} details={item.details} bgColor={item.bgColor} />
                        )
                    })
                } */}
                <div className='first-col img-cols'>
                    <figure className='img-box'>
                        <img src={place1} alt="" />
                        <h3>Front working space</h3>
                    </figure>
                    <figure className='img-box'>
                        <img src={place2} alt="" />
                        <h3>Meeting corner</h3>
                    </figure>
                </div>
                <div className='second-col img-cols'>
                    <figure className='img-box'>
                        <img src={place3} alt="" />
                        <h3>Guest meeting room</h3>
                    </figure>
                    <figure className='img-box'>
                        <img src={place4} alt="" />
                        <h3>Guest rest room</h3>
                    </figure>
                </div>
                <div className='third-col img-cols'>
                    <figure className='img-box'>
                        <img src={place5} alt="" />
                        <h3>Single working space</h3>
                    </figure>
                    <figure className='img-box'>
                        <img src={place6} alt="" />
                        <h3>Kitchen room</h3>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default WorkingPlace