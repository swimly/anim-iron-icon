import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'anim-iron-icon',
  globalStyle: './node_modules/material-design-icons/iconfont/material-icons.css',
  plugins: [
    sass({
      injectGlobalPaths: [
        'node_modules/@ultrastark/us-mixin/mixin',
        'node_modules/@ultrastark/us-mixin/utilities/color',
      ],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
}
