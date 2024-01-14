import '../components/MediaButton.css'
function MediaButton({media, link}){
    return (
        <div className='media-button'>
            <a className='button' href={link}>{media}</a>
        </div>
    )
}

export default MediaButton