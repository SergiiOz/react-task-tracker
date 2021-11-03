import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onClick }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="ADD" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
