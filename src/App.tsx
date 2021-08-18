import MyFormikForm from './components/FormikForm';
import ReactHookForm from './components/ReactHookForm';

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ textAlign: 'center' }}>Formik Form</h1>
        <MyFormikForm />
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>React Hook Form</h1>
        <ReactHookForm />
      </div>
    </div>
  );
}

export default App;
