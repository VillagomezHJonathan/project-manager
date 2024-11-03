import './Bugs.css'
import { SetProjectPropsType } from '../../types/props'
import BugCard from '../BugCard/BugCard'
import KanbanBoard from '../ui/KanbanBoard/KanbanBoard'

const Bugs = (props: SetProjectPropsType) => {
  const bugs = props.project.bugs.filter(b => !b.completed)
  const completedBugs = props.project.bugs.filter(b => b.completed)

  return (
    <KanbanBoard className='bugs'>
      <div>
        <h2>Bugs</h2>
        {bugs.length ? (
          bugs.map(singleBug => (
            (!singleBug.completed && 
              <BugCard 
                key={String(singleBug.id)} 
                singleBug={singleBug} 
                project={props.project}
                setProject={props.setProject}
              />
            )
          ))
        ) : (
          <p className='mutedWhiteColor'>No bugs!</p>
        )}
      </div>

      <div>
        <h2>Completed Bugs</h2>
        {completedBugs.length ? (
          completedBugs.map(singleBug => (
            <BugCard 
              key={String(singleBug.id)} 
              singleBug={singleBug} 
              project={props.project}
              setProject={props.setProject}
            />
          ))
        ) : (
          <p className='mutedWhiteColor'>No completed bugs!</p>
        )}
      </div>
    </KanbanBoard>
  )
}

export default Bugs