import React from 'react'
import moment from 'moment';

const Display = (props) => {

    const time = moment(props.date).format('LTS')



    return (
        <div className="container">

        <div className='display'>
            <div className="display-time">
                {moment(time, 'hh:mm:ss A').format('HH:mm:ss')}
            </div>
            <br />
            <div className="display-date">
                {props.isActive ?
                moment(props.date).format('ddd') + ' ' + moment(props.date).format('LL'):null}
            </div>

        </div>

        </div>
        

    )
}

export default Display