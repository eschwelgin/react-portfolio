import React from 'react'

function PortfolioItem(props) {
    return (
        <div class="bbox container">
            <div class="row">
                <div class="col-sm-6 overlay">
                    <p>{props.p1}</p>
                    <p>{props.p2}</p>
                    <p>{props.p3}</p>
                    {(props.p4) ? <p>{props.p4}</p> : <p></p>}
                </div>
                <div class="col-sm-6 overlay">
                    <a href={props.img}><img src={props.img} alt={props.name} /></a>
                    <h3>{props.name}</h3>
                    {(props.repo) ? <a href={props.repo}><button>Repo</button></a> : <div></div>}
                    {(props.live) ? <a href={props.live}><button>Live</button></a> : <div></div>}
                    </div>
            </div>
        </div>
    )
}

export default PortfolioItem