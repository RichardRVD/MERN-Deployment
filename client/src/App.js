import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import AllPets from './components/AllPets';
import AddPet from './components/AddPet';
import EditPet from './components/EditPet';
import PetDetail from './components/PetDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPets/>}/>
        <Route path="/pets/new" element={<AddPet/>}/>
        <Route path="/pet/edit/:id" element={<EditPet/>}/>
        <Route path="/pet/:id" element={<PetDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
