function TaskBox(props){
    
    const styles={
        backgroundColor: props.on? 'green' : 'red'
    }

    return(
        <div 
        className="task__box__items"
        style={styles}
        onClick={props.handleClick}
        >
        </div>
    )
}

export default TaskBox