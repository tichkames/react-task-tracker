import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onToggleForm, showForm }) => {
  return (
    <header className='header'>
        <h1 style={{ color: 'white', backgroundColor: 'blue' }}>
            { title }
        </h1>
        <Button
        color={ showForm ? 'red' : 'green' }
        text={showForm ? 'Close' : 'Add'}
        onClick={ onToggleForm }
        />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker Default Prop'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// css in JS
const headingStyle = {
    color: 'red',
    backgroundColor: 'blue'
}

export default Header