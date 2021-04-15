import {memo} from 'react';
import {Languages} from './Languages';
import {Examples} from './Examples';

function App() {
  return (
    <div>
      <div>
        <Languages />
      </div>
      <Examples />
    </div>
  );
}

export default memo(App);
