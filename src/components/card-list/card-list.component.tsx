import { directoryState, directoryEntry } from '../../App';
import Card from '../card/card.component';

const CardList = ({directory}: directoryState) => {
    return (
        <div className='card-list'>
            {
                directory.map((entry: directoryEntry) => {
                    return <Card {...entry} />
                })
            }
        </div>
    );
};

export default CardList;
