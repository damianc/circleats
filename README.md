# circleats

A lightweight library to distribute items equally around a circle.

```
circleats(
  circleSpec,
  itemsNumber,
  startSide,
  itemSpec
)
```

The `circleats()` function takes up to 4 parameters:

- `circleSpec` - an object with the following properties:
  - `x` - the x coordinate of circle center
  - `y` - the y coordinate of circle center
  - `r` - radius of the circle
- `itemsNumber` - a number of items to distribute around the circle
- `startSide` - a side the distribution begins on; may be assigned one of the following values: _top, bottom, left, right, T, B, L, R_ (the parameter is case-insensitive, which means you can pass `top` as well as `TOP` or `Top`, for example)
- `itemSpec` - dimensions of each item; it may be a single number (then it is interpreted as both width and height) or an array of one or two items (`[width, height=width]`)
