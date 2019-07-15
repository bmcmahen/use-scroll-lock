# use-scroll-lock

[scroll-lock](https://github.com/FL3NKEY/scroll-lock) is the most reliable scroll-locking library from my experience, and I wanted to use it in hook form. This super simple hook is the result.

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

You can also use the `data-scroll-lock-scrollable` attribute on whatever element you want to enable scrolling and omit the second argument.
