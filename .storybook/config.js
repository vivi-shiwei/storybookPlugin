import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';


addDecorator(withInfo);
addDecorator(withA11y);
import {
    INITIAL_VIEWPORTS,
    // or MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';
const customViewports = {
    kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
            width: '600px',
            height: '963px',
        },
    },
    kindleFireHD: {
        name: 'Kindle Fire HD',
        styles: {
            width: '533px',
            height: '801px',
        },
    },
};

addParameters({
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
            // or ...MINIMAL_VIEWPORTS,
            ...customViewports,
        },
    },
    a11y: {
        // ... axe options
        element: '#root', // optional selector which element to inspect
        config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
        options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    },
    backgrounds: [
        { name: 'twitter', value: '#00aced', default: true },
        { name: 'facebook', value: '#3b5998' },
    ],
});

const req = require.context('../pages', true, /\.(js$|mdx)/);//將所有 storybook 保存在req

function loadStories() {
    req.keys().forEach(filename => req(filename));//循環把所有storybook導入全局
}

configure(loadStories, module);//configure只能調用一次，如果想調用多次，只能選擇數組，引用到控件中。
setConsoleOptions({
    panelExclude: [],
});
addDecorator((storyFn, consos) => withConsole()(storyFn)(consos));