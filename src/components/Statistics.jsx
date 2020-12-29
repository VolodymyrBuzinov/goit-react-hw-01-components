import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <div className='statistics'>
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item-stat" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

