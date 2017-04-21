import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BRadialChart from '../index';

import 'react-vis/dist/style.css';

storiesOf('React vis', module)
  .add('#234', () => (
    <BRadialChart height={500} />
  ));
