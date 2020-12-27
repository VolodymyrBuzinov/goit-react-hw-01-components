import statisticalDatas from '../json-files/statistical-data.json'
import PropTypes from 'prop-types';

export default function Statistics() {
    return statisticalDatas.map(data => {
        const { id, label, percentage } = data;
       return <li key={id} className="item-stat">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    }  
    ) 
}

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,    
};

