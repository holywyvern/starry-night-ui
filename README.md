# starry-night-ui

A React user interface for applications (Mostly Electron apps)

## Installing

```sh
npm i --save starry-night-ui
```

## Usage

Import the required CSS in your code:

```js
import "starry-night-ui/build/css/index.css";
```

Wrap your application in a Container:

```jsx
import { Container } from "starry-night-ui";

const App = () => {
    return (
        <Container>
            {...}
        </Container>
    );
};
```

And you are good to go now!

## Documentation

[Read the style guide](https://holywyvern.github.io/starry-night-ui/manual/) to learn about each component on the library.

And [check out the demo](https://holywyvern.github.io/starry-night-ui) to see this library in action.

## License

[Apache 2.0](https://spdx.org/licenses/Apache-2.0.html)
