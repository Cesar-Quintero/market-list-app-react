const LeftToDo = (props) => {
  return (
    <div className="leftToDo">
      <h4>Left to do: <span className="leftToDoCount">{props.leftToDo}</span></h4>
    </div>
  )
}

export default LeftToDo