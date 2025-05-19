import React from 'react'

const NewsItem =(props)=> {
  
        let { title, description, imageUrl, newsurl, author, dates } = props

        return (
            <>
                <div className="car my-4" >
                    <img src={imageUrl ? imageUrl : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2VBJQVGSG2WIPRS3RMBGTJLHP4_size-normalized.jpg&w=1440"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p style={{ fontSize: "small", color: "grey" }}> by {author} last edited by {new Date(dates).toGMTString()}</p>
                        <a href={newsurl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </>
        )
    }


export default NewsItem