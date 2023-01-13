const Error = ({ msg = "404: page not found" }) => {
  return <div className="error">{msg}</div>;
};

export default Error;
