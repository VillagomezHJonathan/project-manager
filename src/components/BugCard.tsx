import '../styles/BugCard.css'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { BugPropsType } from '../types/props'
import useToggle from '../hooks/useToggle'
import Card from './ui/Card'

const BugCard = (props: BugPropsType) => {
  const userContext = useContext(UserContext)
  const [isShown, toggleShown] = useToggle()

  const clickHandler = () => {
    toggleShown()
  }

  const completeHandler =async () => {
    
  }

  const deleteHandler = async () => {
    await userContext?.deleteBug(
      props.project,
      props.singleBug.id,
      props.setProject
      )
  }
  
  return (
    <Card className='bug-todo-card'>
      <p>{props.singleBug.bug}</p>

      {props.singleBug.bug_info &&
        <div className='bug-info'>
          <button onClick={clickHandler}>View Info</button>

          {isShown && 
            <p>{props.singleBug.bug_info}</p>
          }
        </div>
      }

      <button className='success' onClick={completeHandler}>Complete</button>
      <button className='danger' onClick={deleteHandler}>Delete</button>
    </Card>
  )
}

export default BugCard