import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Button Clicked')
        }

  return (
    <header className='header'>
        <h1 style={{ color: 'red', backgroundColor: 'blue' }}>{ title }</h1>
        <Button color='green' text='Hello' onClick={ onClick }/>
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