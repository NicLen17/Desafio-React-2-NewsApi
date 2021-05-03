import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Redirect } from 'react-router';
import './NwCss.css'
import './Cards.css'

export default function News() {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('entertainment');
    const [country, setCountry] = useState('ar');

    useEffect(() => { 
        const getNews = async () => {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?apiKey=b87dd70e3ac44e3aa45d83ed16c8b6dd&category=${category}&country=${country}`
        );
        setArticles(response.data.articles);
    };
        getNews();
    }, [category, country]);


    const handleChange = (event) => {
        const { value } = event.target;
        setCategory(value);
    };

    const handleChangeCountry = (eventCountry) => {
        const { value } = eventCountry.target;
        setCountry(value);
    };

    return (
        <div>
            <div className="titulo1">Noticias de hoy</div>
            <div className="salects">
                <select onChange={handleChange}>
                    <option value="science">Ciencia</option>
                    <option value="technology">Tecnologia</option>
                    <option value="sports">Deportes</option>
                    <option value="general">General</option>
                </select>
                <select onChange={handleChangeCountry}>
                    <option value="ar">Argentina</option>
                    <option value="us">Estados Unidos</option>
                    <option value="gb">United Kingdom</option>
                    <option value="br">Brazil</option>
                    <option value="general">General</option>
                </select>
            </div>
            <div className="flexcard">
            {articles.map((art) => (
                    <div className="card1" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <div className="imgcard">
                                <img
                                    src={art.urlToImage}
                                    className="card-img-top"
                                    alt="No disponible"
                                /></div>
                            <h5 className="card-title">{art.title}</h5>
                            <br />
                            <p className="card-text">
                                {art.description}
                            </p>
                            <br />
                            <div className="nota">
                                <h5>Autor: {art.author}</h5>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    );
}
