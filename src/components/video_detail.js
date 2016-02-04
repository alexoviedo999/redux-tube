import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	console.log(video)
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				{/*  why is the this not working?
				<div>{video.snippit.title}</div>
				<div>{video.snippit.description}</div>
				*/}
			</div>
		</div>
	);
};

export default VideoDetail;
