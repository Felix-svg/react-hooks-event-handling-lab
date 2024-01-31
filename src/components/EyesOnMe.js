// Code EyesOnMe Component Here
function EyesOnMe() {

const focus = (e) => {
  console.log('Good!');
}

const blur = (e) => {
  console.log('Hey! Eyes on me!');
}

  return (
    <div>
      <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    </div>
  );
}

export default EyesOnMe;
