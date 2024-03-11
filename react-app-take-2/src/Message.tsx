
// Use Pascal Casing
function Message() {

  const name = 'Haizi'

  if (name) {
    return <h1>Hello {name}!</h1>;
  } else {
    return <h1>Hello guest!</h1>;
  }
}

export default Message;