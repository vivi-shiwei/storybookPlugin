import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

storiesOf('withConsole', module)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .add('with Log', () => <button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</button>)
    .add('with Warning', () => <button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</button>)
    .add('with Error', () => <button onClick={() => console.error('Test Error')}>Error Button</button>)
    .add('with Uncatched Error', () =>
        <button onClick={() => console.log('Data:', T.buu.foo)}>Throw Button</button>
    )