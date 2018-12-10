import React from 'react'
import PracticeItem from '../PracticeItem/PracticeItem'
import './TaskDisplayer.css'

export default function TaskDisplayer(props) {
    return (
        <div id="task-displayer">
            {props.chart.map(task => (
                <PracticeItem
                    key={task.id}
                    id={task.id}
                    piece={task.piece}
                    composer={task.composer}
                    tempo={+task.tempo}
                    notes={task.notes}
                    deleteFn={props.deleteFn}
                    updateFn={props.updateFn}
                />
            ))}
        </div>
    )
}