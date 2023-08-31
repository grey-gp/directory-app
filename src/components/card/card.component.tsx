import { directoryEntry } from '../../App';

const Card = (entry: directoryEntry) => {
    return (
        <div className='card-container' key={entry.id}>
            <h2>{entry.name}</h2>
            <p>{entry.email}</p>
        </div>
    );
};

export default Card;
