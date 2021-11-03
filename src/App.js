import Header from './components/Header';

function App() {
  const addTask = () => {
    console.log('add task');
  };
  return (
    <div className="container">
      <Header title="Header" onClick={addTask} />
    </div>
  );
}

export default App;
