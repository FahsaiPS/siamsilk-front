import './CommunityPage.css';
import './CommuContentPage.css';
import { useEffect, useState } from 'react';

//import component
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StoryContent from '../components/Story/StoryContent';



const StoryContentPage = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const ProductType = searchParams.get("q")
    const [storys, setStorys] = useState([])
    const fetchStorys = async () => {
        const response = await fetch('http://localhost:8000/story')
        const storys = await response.json()
        setStorys(storys)
    }
    useEffect(() => {
        fetchStorys()
    }, []);

    const StoryItems = storys.map((content, index) => {
        return <StoryContent key={index} story={content} />;
    });

    return (
        <div className="CommunityPage">
            <Navbar />
            <div className='community-container'>
                <div class="thumbnail">
                    <img className='banner' src="/assets/banner_story.png"/>
                    <h2 className='banner-title1'>SILK STORY</h2>
                    <h3 className='banner-text'>story of Thai silk</h3>
                </div>
                <div className='title'>
                    <h3> <a href='/silk-story'>SILK STORY</a></h3>
                    <center><hr className='line' /></center>
                </div>
                <div className='content-container'>
                    {StoryItems}
                    {/* <h2 className='content-title'>
                        How to make tie-dyed fabric from natural dyes
                    </h2>
                    <h3 className='content-text'>
                        Making textiles made of silk change to the desired color
                    </h3>
                    <div class="thumbnail-storyContent">
                        <img src={story3} className='content-img' />
                    </div>
                    <h3 className='content-text' id='Date'>May 13, 2023</h3>
                    <h3 className='content-text' id='title-text'>
                        In the past, there were no scientific dyes or ready-made colors
                    </h3>
                    <h3 className='content-text'>
                        shades of yellow <br></br>
                        “Khe or Kae Lae” uses the heartwood from Mactura cochinchinensis (Lour.) Corner Family Name: Moraceae Villagers will chop the heartwood “hot dye”, boil and extract the dye to dark yellow or fade depending on the age of the tree.
                    </h3> */}
                </div>
            </div>
            <Footer />
        </div>
    );

}
export default StoryContentPage;

