# append-to-all-attributes

> Append a string to all keys of an object (handy utility)

## Install

```
$ npm install append-to-all-attributes
```

## Usage

```js
const appendToAllAttributes = require('append-to-all-attributes);
appendToAllAttributes({
    sanFrancisco_to_newYork: 50,
    madrid_to_barcelona: 5,
    withChilds: {
        onlyOneLevel: "It will not apply to inner attributes"
    }
}, "__by_car");

//=>
{
    sanFrancisco_to_newYork__by_car: 50,
    madrid_to_barcelona__by_car: 5,
    withChilds__by_car: {
        onlyOneLevel: "It will not apply to inner attributes"
    }
}
```

## License

MIT © [Fabio Espinosa](http://fabioespinosa.mit.edu)
