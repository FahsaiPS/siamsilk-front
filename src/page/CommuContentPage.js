import './CommunityPage.css';
import './CommuContentPage.css'
import { useEffect, useState } from 'react';

//import component
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StoryContent from '../components/Story/StoryContent';


const CommuContentPage = () => {
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
        return <StoryContent key={index} story={content} />;
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
                    <h3> <a href='/silk-community'>SILK COMMUNITY</a></h3>
                    <center><hr className='line' /></center>
                </div>
                <div className='content-container'>
                {CommunityItems}
                    {/* <h2 className='content-title'>
                        Utma Thai silk of Nakhi Drama at Sawai, Surin
                    </h2>
                    <h3 className='content-text'>
                        The national level with the preservation of weaving methods under the house.
                    </h3>
                    <div class="thumbnail-storyContent">
                        <img src={story3} className='content-img'/>
                    </div>
                    <h3 className='content-text' id='Date'>May 13, 2023</h3>
                    <h3 className='content-text' id='title-text'>
                        The charm of Chang Ancient Thai food heritage Way of Isan Silk
                    </h3>
                    <h3 className='content-text'>
                        At present, Sawai sub-district community has become a famous weaving community
                        of Surin Province It is a Thai silk household industry.
                        at the national level with the preservation of weaving methods under the house
                        Which silk has beautiful patterns such as marble pattern, mudmee pattern, elephant pattern, eggplant pattern and various patterns
                    </h3> */}
                </div>
            </div>
            <Footer />
        </div>
    );

}
export default CommuContentPage;

