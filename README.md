# VueStack
This repository is brand new, a work in progress - don't use this in production. 
VueStack is a mono repo of helpful VueJS components that you can pull into your project to save you time and code.

$ npm install @thomaswilliammcclean/vuestack --save

```javascript
<script>
  import "@thomaswilliammcclean/vuestack";
</script>
```

```html
<loading-container :is-loading="true">
  <p>TEST</p>
</loading-container>
```

## Included Components
### Loading Container:
That accepts loading state as a prop and conditionally renders a spinner or your content in a slot.
```html
<loading-container :is-loading="true">
  <p>TEST</p>
</loading-container>
```
### App Panel
A component which slides in from either side of the screen and allows you to place your own content.
```html
<app-panel enter-from="left">
  <p>TEST</p>
</app-panel>
```

### Loading Button
A button which when clicked accepts a loading state and conditionally renders a spinner inside the button.
```html
<loading-button :is-loading="true" text="Submit"/>
```

### Overlay
A simple overlay which allows you to render content over an image, or to cover parts of the page with a glass effect.
```html
<overlay>
  <p>This content goes inside the overlay.</p>
</overlay>
```

### Confirmation Panel
A component which slides up from the bottom of the page, can be used for cookie banners or confirmations from an end user.
```html
<confirmation-panel :show="true">
  <p>This content goes inside the panel.</p>
</confirmation-panel>
```

### Notification Panel
Used to show dismissable notifications sliding down from the top of the screen
```html
<notification-panel :show="true">
  <p>This content goes inside the panel.</p>
</notification-panel>
```

## Benefits
1. No JQuery - obviously
2. Small package, we don't have tons of dependencies
3. Works with both server side and client side Rendering
4. All styling is very minimal and scoped, so you can style the components your own way
