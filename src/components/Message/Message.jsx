
const Message = ({ author, message = 'default message', value=18, status = 'no date' }) => {

    return (
        <div>
            <img src="" alt="logo" width='240' />
            <p>Author: {author}</p>
            <p>Message: {message}</p>
            <p>Age:{value}</p>
            <p>Status: { status}</p>
        </div>
    );
};

export default Message