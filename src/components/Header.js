import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, toggleShowAddTask, isShowAddTask }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          text={isShowAddTask ? 'CLOSE' : 'Add'}
          onClick={toggleShowAddTask}
          color={isShowAddTask ? 'red' : 'green'}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
  toggleShowAddTask: PropTypes.func,
  isShowAddTask: PropTypes.bool,
};

export default Header;
