# use-scroll-lock

A simple hook wrapper around [scroll-lock](https://github.com/FL3NKEY/scroll-lock) built for React. From my experience this library is the most reliable when it comes to scroll locking... so I made it into a hook.

## Install

```
yarn add use-scroll-lock
```

## Basic usage

`useScrollLock` accepts two optional arguments.

- **enabled** - Whether the scroll locking is enabled. By default this is true.
- **container** - An optional container which permits scrollable content even when scrolling is locked.

```jsx
function Example() {
  const [enabled, setEnabled] = React.useState(false);
  const ref = React.useRef(null);

  useScrollLock(enabled, ref);

  return (
    <div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "turn off" : "turn on"}
      </button>
      <div style={{ overflow: "auto" }} ref={ref}>
        Scrollable content
      </div>
    </div>
  );
}
```
