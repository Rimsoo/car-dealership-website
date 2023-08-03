import './Loader.css';

export default function Loader() {

    return (
        <div className="loading-area">
            <img className="spinner" src={require('../assets/tire.png')} alt='Auta premium w Małopolsce' />
            <p>Ładowanie...</p>
        </div>
    )
}