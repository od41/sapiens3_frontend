import React from 'react'
import { Link } from 'react-router-dom'


function RoomieCard({roomie}) {
	const favButton = {
		position: "absolute",
		right: 24,
		top: 24,
		zIndex: 2,
		backgroundColor: "#fff",
		borderRadius: '8px',
		color: '#0a0a0a',
		border: "none",
		padding: "0.3rem 0.5rem",
		paddingTop: "0.2rem",

	}

	const cropImageStyle = {
        objectFit: 'cover',
        objectPosition: 'center',
        width: '22rem',
        height: '22rem',
		minHeight: '260px',
		minWidth: '260px',
        maxHeight: '300px',
        maxWidth: '300px',
        // marginBottom: '1rem',
    }

	return (
        <div className="col-md-6 col-lg-4 col-xl-3" >
			<figure className="snip1527" style={{borderRadius: "30px"}} >
				<div className="image">
					<button className="btn btn-sm" style={favButton} alt="add to favourites">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
							<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
						</svg>
					</button>
					<img style={{...cropImageStyle, borderRadius: "30px"}} src={roomie.display_photo} alt={`profile- ${roomie.name}`}  />
				</div>
				<figcaption style={{width: "100%"}}>
					<div >
						<div className="row-full" style={{
							borderRadius: "70px",
							width: "100%",
							position: "relative"}}>
							<span className="profile-name"><h4>{`${roomie.first_name} ${roomie.last_name}`}</h4></span>
						</div>
						<div className="d-flex justify-content-between" style={{display: "flex", width: "100%", height: '30px'}}>
							<div className='d-flex justify-content-between'>
								<span className="" style={{
														color: "#000000",
														backgroundColor: "#ffffff",
														fontSize: "13px",
														fontWeight: '600',
														border: "1px solid #fff",
														borderRadius: "20px",
														textTransform: 'capitalize',
														padding: "4px 10px",
														marginRight: "5px",}} >
										{roomie.gender}</span>

								<span className="" style={{
														color: "#000000",
														backgroundColor: "#ffffff",
														fontSize: "13px",
														fontWeight: '600',
														border: "1px solid #fff",
														borderRadius: "20px",
														padding: "4px 10px",
														marginRight: "5px",}} >
										{roomie.age} years</span>
							</div>

							<Link to={`/profile/${roomie.id}`} className="btn btn-primary" type="button" style={{
                                color: "#fff",
                                backgroundColor: "rgba(255,255,255,0)",
                                fontSize: "13px",
								fontWeight: '600',
                                border: "1px solid #fff",
                                borderRadius: "20px",
                                padding: "4px 10px",
								height: "30px",
								width: "110px",
                                cursor: "pointer"}}>
                                    
                                    View Profile</Link>
						</div>
					</div>
				</figcaption>
				<Link to="#" style={{display: 'none'}}></Link>
			</figure>
		</div>
  )
}

export default RoomieCard