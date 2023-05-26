import './StoryCard.css'
import './StoryContent.css'

function StoryContent(props) {
    const pathName = window.location.pathname;
    const storyId = '/silk-story/' + props.story._id
    const communityId = '/silk-community/' + props.story._id
    if((storyId === pathName || communityId === pathName)) {
        return (
        <div className='content-container'>
            <h2 className='content-title'>{props.story.title}</h2>
            <h3 className='content-text'>{props.story.description}</h3>
            <div class="thumbnail-storyContent">
                <img src={props.story.image} className='content-img' />
            </div>
            <h3 className='content-text' id='Date'>{props.story.date}</h3>
            <h3 className='content-text' id='title-text'>{props.story.preContent}</h3>
            <h3 className='content-text'>{props.story.content1}</h3>
            <h3 className='content-text'>{props.story.content2}</h3>
        </div>
    )
    }
    
}

export default StoryContent;