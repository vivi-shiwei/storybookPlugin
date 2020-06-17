import React from 'react';
import { storiesOf } from '@storybook/react';
import { LinkTo, linkTo } from '@storybook/addon-links'

storiesOf('Select', module)
    .add('first', () => (<button onClick={linkTo('Storybook Knobs', 'knobs')}>Go to "knobs"</button>))
    .add('second', () => (
        <button onClick={linkTo('Select', 'first')}>Go to "First"</button>
    ))