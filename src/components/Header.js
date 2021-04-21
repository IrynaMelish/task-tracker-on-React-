 import PropTypes from 'prop-types'
 
 import Button from './Button'
 const Header = ({title, onAdd, showAdd}) => {
    
    return (
                
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={showAdd ?'green':'red'} 
            text={showAdd ?'Hinzufügen' : 'Schließen'}
             onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps={
    title:"Aufgaben-Manager",
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}
//Css in JS
// const headerStyle={
//     color:'red',
//     backgroundColor: 'blue'
// }
export default Header