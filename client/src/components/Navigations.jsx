import { Link } from 'react-router-dom'

export function Navigation(params) {
    return ( 
        <div>
            <Link to="/tasks">
            <h1>Task App</h1>
            </Link>
            <Link to="/tasks-create">Create Task</Link>
        </div>
    )
}