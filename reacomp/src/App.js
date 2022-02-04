import './App.css';
import Address from './Component/profile/Address';
import FullName from './Component/profile/FullName';
import ProfilePhoto from './Component/profile/ProfilePhoto';

function App() {
  return (
      <div>
        <div className='nav'>
          <ProfilePhoto/>
          <FullName/>
          <Address/>
          </div>
      </div>
  );
}

export default App;
