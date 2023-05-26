import './CommunityPage.css';
import { useEffect, useState } from 'react';

//import component
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StoryCard from "../components/Story/StoryCard";


const CommunityPage = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const ProductType = searchParams.get("q")
    const [communitys, setCommunitys] = useState([])
    const fetchCommunitys = async () => {
        const response = await fetch('http://localhost:8000/community')
        const communitys = await response.json()
        setCommunitys(communitys)
    }
    useEffect(() => {
        fetchCommunitys()
    }, [])

    const CommunityItems = communitys.map((content, index) => {
        return <StoryCard key={index} story={content} />;
    });

    return (
        <div className="CommunityPage">
            <Navbar />
            <div className='community-container'>
                <div class="thumbnail">
                    <img className='banner' src="/assets/banner_community.jpeg" />
                    <h2 className='banner-title'>SILK</h2>
                    <h2 className='banner-title1'>COMMUNITY</h2>
                    <h3 className='banner-text'>Land of Thai silk</h3>
                </div>
                <div className='title'>
                    <h3>FEATURED POSTS</h3>
                    <center><hr className='line' /></center>
                </div>
                <div className='featured'>
                    <div className='featured-container'>
                        <h5 className='featured-title' id='titleUnHidden'>SILK COMMUNITY</h5>
                        <h2 className='featured-text'>
                            Utma Thai silk
                            <br></br>of Nakhi Drama
                        </h2>
                        <div className='featured-location'>
                            <img src="/assets/location-icon.png" alt="location Icon" width="45px" height="41px" />
                            <h3 className='featured-text' id='iconUnHidden'>Sawai community, Surin</h3>
                        </div>
                        <a class="featured-btn" href="/silk-community/645fcf3d4a64a9cef765f6d8">Explore now</a>
                    </div>
                </div>
                <div className='title'>
                    <h3>LATEST POSTS</h3>
                    <center><hr className='line' /></center>
                </div>
                <div className='latest'>
                    {CommunityItems}
                    {/* <div className='latest-container'>
                        <img src={community1} />
                        <div className='latest-text'>
                            <h5 className='featured-title'>SILK COMMUNITY</h5>
                            <h3>
                                <a class="latest-textLink" href="">
                                    Women's Group for Silk Weaving
                                    <br></br>at Ban Nong Bua, Sokanokten
                                </a>
                            </h3>
                            <h3 className='featured-text' id='latestDate'>May 13, 2023</h3>
                            <h3 className='featured-text'>
                                Heat 12 tells the story of Khon Kaen,
                                <br></br>the land of silk.
                            </h3>
                        </div>
                    </div><br></br>
                    <div className='latest-container'>
                        <img src={community2} />
                        <div className='latest-text'>
                            <h5 className='featured-title'>SILK COMMUNITY</h5>
                            <h3>
                                <a href="/community-content" class="latest-textLink" >
                                    Utma Thai silk of Nakhi Drama
                                    <br></br>at Sawai Community, Surin
                                </a>
                            </h3>
                            <h3 className='featured-text' id='latestDate'>May 2, 2023</h3>
                            <h3 className='featured-text'>
                                The national level with the preservation
                                <br></br>of weaving methods under the house.
                            </h3>
                        </div>
                    </div><br></br>
                    <div className='latest-container'>
                        <img src={community3} />
                        <div className='latest-text'>
                            <h5 className='featured-title'>SILK COMMUNITY</h5>
                            <h3>
                                <a class="latest-textLink" href="" >
                                    Phu Akkanee volcanic cotton
                                    <br></br>at Na Pho, Buriram
                                </a>
                            </h3>
                            <h3 className='featured-text' id='latestDate'>April 13, 2023</h3>
                            <h3 className='featured-text'>
                                Red silk sarong It is a local Eklak silk
                                <br></br>of the Phutthaisong and Napho districts.
                            </h3>
                        </div>
                    </div> */}
                </div>

            </div>
            <Footer />
        </div>
    );

}
export default CommunityPage;