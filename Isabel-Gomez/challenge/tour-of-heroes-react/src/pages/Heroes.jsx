import React from 'react';
import Anchorates from '../components/common/Anchorates';
import Subtitle from '../components/common/Subtitle';


const Heroes = () => {

return (
    <div>
        <Anchorates text="Dashboard" href="#"/>
        <Anchorates text="Heroes" href={null}/>
        <Subtitle text="My Heroes"/>
    </div>
)

}

export default Heroes;