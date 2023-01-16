const Gameover = ({ trigger, score }) => {
  if (!trigger) return null;
  return (
    <div className="go__modal">
      <div className="go__modal__content">
        <h1 className="go__head__text go_text">Game Over!</h1>
        <h2 className="go__head__text">Your score: {score}</h2>
        <button onClick={() => window.location.reload()} className="form-btn">
          Restart
        </button>
      </div>
    </div>
  );
};
export default Gameover;
