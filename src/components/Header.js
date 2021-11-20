import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, toggleShowAddTask, isShowAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={isShowAddTask ? 'CLOSE' : 'Add'}
        onClick={toggleShowAddTask}
        color={isShowAddTask ? 'red' : 'green'}
      />
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
