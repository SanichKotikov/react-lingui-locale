import {memo} from 'react';
import {Languages} from './Languages';
import {Examples} from './Examples';
import {RawExamples} from './RawExamples';

function App() {
  return (
    <div>
      <div>
        <Languages />
      </div>
      <Examples />
      <RawExamples />
    </div>
  );
}

export default memo(App);
