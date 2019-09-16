# anim-iron-icon



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type     | Default     |
| ----------- | ----------- | ----------- | -------- | ----------- |
| `animation` | `animation` |             | `string` | `undefined` |
| `circle`    | `circle`    |             | `string` | `undefined` |
| `icon`      | `icon`      |             | `string` | `undefined` |


## CSS Custom Properties

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-- Spectrum -- - static @include box-shadow(1); @include box-shadow(2); @include box-shadow(3); @include box-shadow(4); @include box-shadow(5); - animation @include box-shadow(0,1); @include box-shadow(1,2); @include box-shadow(1,3); @include box-shadow(1,4); @include box-shadow(1,5); @include box-shadow(1,6); - color @include box-shadow(1,1,#000); - reverse @include box-shadow(2,1); - svg or img @include drop-shadow(); -- Exemple -- .card { width` | 95px; height: 95px; background: #f4f4f4; transition: all 250ms; @include box-shadow(); // No animation } .card-animated { @include box-shadow(1,3); // Animated } .card-red-shadow { @include box-shadow(1,1,#dc3545); // Red shadow } .my-svg { @include drop-shadow(); // For svg or img shadow } |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
