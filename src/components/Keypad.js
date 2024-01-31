// Code Keypad Component Here

function Keypad() {
  function event() {
    console.log("Entering password...");
  }
  return (
    <div>
      <input type="password" onChange={event} />
    </div>
  );
}

export default Keypad;
