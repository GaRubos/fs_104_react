const Message = ({
  author,
  message = "default message",
  value = 18,
  status = "no date",
}) => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
        alt="logo"
        width="240"
      />
      <p>Author: {author}</p>
      <p>Message: {message}</p>
      <p>Age:{value}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default Message;
