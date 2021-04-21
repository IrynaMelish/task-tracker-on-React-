import {useState } from 'react'


const AddTask = ({onAdd}) => {
    const[text, setText]=useState('')
    const[day, setDay]=useState('')
    const[reminder, setReminder]=useState('false')

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!text){
            alert('Bitte fügen Sie eine Aufgabe hinzu')
            return
        }
        onAdd({text, day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form'onSubmit={onSubmit}>
            <div className='form-control'>
           <label>Aufgaben</label>   
           <input type='Text'
            placeholder='Aufgaben hinzufügen'
            value ={text}
            onChange={(e)=>
        setText(e.target.value)}
        />
            </div>
            <div className='form-control'>
           <label>Tag & Uhrzeit</label>   
           <input type='Text'
            placeholder='Tag & Uhrzeit hinzufügen'
            value ={day}
            onChange={(e)=>
        setDay(e.target.value)}
         />
            </div>
            <div className='form-control form-control-check'>
           <label>Erinnerung einstellen</label>   
           <input 
           type='checkbox' 
           checked={reminder}
           value={reminder}
            onChange={(e)=>
       setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Aufgabe speichern' 
            className='btn btn-block'/>
            
        </form>
    )
}

export default AddTask
