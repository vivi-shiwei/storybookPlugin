import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, actions } from '@storybook/addon-actions';

const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' });

storiesOf('Actions', module)
    .add('action', () => (
        <button onClick={action('button-click')}>Hello World!</button>
    ))
    .add('more actions', () => (
        <button {...eventsFromObject}>Hello World!</button>
    ));