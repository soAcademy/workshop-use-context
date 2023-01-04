const TodoItem = ({
    handleToggleTask,
    item,
    count
}) => {
    const handleClick = (e) => {
        handleToggleTask(e.currentTarget.id)
    }
    return <li id={item.id} onClick={handleClick} className={item.isComplete ? "todo strike" : "todo"}>[{count}] {item.text}</li>
}

export default TodoItem