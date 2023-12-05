import './Loader.css';
import wheel from '../assets/tire.png';

export default function Loader() {

    return (
        <div className="loading-area">
            <img className="spinner" src={wheel} alt='Auta premium w Małopolsce' />
            <p>Ładowanie...</p>
        </div>
    )
}