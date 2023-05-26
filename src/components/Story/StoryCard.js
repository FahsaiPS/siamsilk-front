import './StoryCard.css'

function StoryCard(props){
    const pathName = window.location.pathname;
    const link = pathName + '/' + props.story._id;
    return(
        <div className='latest-container'>
            <img src={props.story.image} />
            <div className='latest-text'>
                <h5 className='featured-title'>{props.story.titlePage}</h5>
                <h3><a class="latest-textLink" href={link}>
                    {props.story.title}
                </a></h3>
                <h3 className='featured-text' id='latestDate'>{props.story.date}</h3>
                <h3 className='featured-text'>
                {props.story.description}
                </h3>
            </div>
        </div>
    )
}

export default StoryCard;