


const Message = (props) => {
    return (
        <>
            <div className="Msg">
                {props.headerText}
                <h3>Привет, {props.name}</h3>
            </div>
        </>
    )
}



export default Message;