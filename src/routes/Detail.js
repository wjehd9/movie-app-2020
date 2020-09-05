import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const {location} = this.props;
        if(location.state) {
            const {year, title, summary, poster, genres, rating} = location.state;
            return (
                <section className="detail_container">
                    <div className="detail_data">
                        <img src={poster} alt={title} title={title} />
                        <h3 className="detail_title">{title}</h3>
                        <h5 className="detail_rating">{rating}</h5>
                        <h5 className="detail_year">{year}</h5>
                        <ul className="detail_genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="detail_genre">{genre}</li>
                        ))}
                        </ul>
                        <p className="detail_summary">{summary}</p>
                    </div>
                </section>
            );
        } else {
            return null;
        }
    }
}

export default Detail;