import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BRadialChart from '../index';

import 'react-vis/dist/style.css';

storiesOf('React vis', module)
  .add('#234', () => (
    <div>
      <h3>
        👍 react-vis issue #234 - opacity was incorrectly override
      </h3>
      <BRadialChart height={500} />
    </div>
  ));
