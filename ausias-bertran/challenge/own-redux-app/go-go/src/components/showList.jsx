import 'react from 'react';
import LIST from '../constant/coolThings';

const showList = () => {
    return (
        <div className="Task">
            <ul>
            {
                LIST.map((x) => (<li>{ LIST.task }</li>))
            }
            </ul>
      </div>  
    );
};
export default showList;