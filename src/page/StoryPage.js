import './CommunityPage.css';
import { useEffect, useState } from 'react';

//import component
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StoryCard from "../components/Story/StoryCard";


const StoryPage = () => {
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
    }, [])

    const StoryItems = storys.map((content, index) => {
        return <StoryCard key={index} story={content} />;
    });

    return (
        <div className="CommunityPage">
            <Navbar />
            <div className='community-container'>
                <div class="thumbnail">
                    <img className='banner' src="/assets/banner_story.png" />
                    <h2 className='banner-title1'>SILK STORY</h2>
                    <h3 className='banner-text'>story of Thai silk</h3>
                </div>
                <div className='title'>
                    <h3>FEATURED POSTS</h3>
                    <center><hr className='line' /></center>
                </div>
                <div className='featured-story'>
                    <div className='featured-container'>
                        <h5 className='featured-title' id='titleUnHidden'>SILK STORY</h5>
                        <h2 className='featured-text'>
                            How to make tie-dyed fabric
                            <br></br>from natural dyes
                        </h2>
                        <div className='featured-storyIcon'>
                            <img src="/assets/story-icon.png" alt="location Icon" width="45px" height="41px" />
                            <h3 className='featured-text' id='iconUnHidden'>Eco Friendly Material</h3>
                        </div>
                        <a href="/silk-story/645fc60aabcb78cc6861ef28" class="featured-btn" >Explore now</a>
                    </div>
                </div>
                <div className='title'>
                    <h3>LATEST POSTS</h3>
                    <center><hr className='line' /></center>
                </div>
                <div className='latest'>
                    {StoryItems}
                </div>

            </div>
            <Footer />
        </div>
    );

}
export default StoryPage;

