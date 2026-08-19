function CounterControls({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>

      <button onClick={() => setCount((prev) => prev - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default CounterControls;