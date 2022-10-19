import './Note.css';


const Note = (props) => {

    let onDelete = () => {
        props.removeNote(props.id);
    }

    return (
        <>
            
            <div className="card m-3 individual">
                <div className="card-body">
                    <h4 className="card-title text-center titleCss">{props.title}</h4><hr />
                    <p className="card-text">{props.content}</p>
                    <button type="button" onClick={onDelete} className="btn btn-danger delbtn">Remove</button>
                </div>
            </div>
        </>
    );
}

export default Note;