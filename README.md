# Debugging React Native `&&` edge cases

Idea: https://x.com/kadikraman/status/1827394561984823796

For updates, follow https://twitter.com/pvinis


## Next time
- reactfabric-dev.js seems to be synced from facebook/react. it would be nice to see if we can run the rntester with the fabric renderer directly.
- next, we should look at the other edge cases that dont crash, and see what tag they use. maybe we can use that to figure out what is going on with the crashing ones. Seems like the crashing ones are tag 6, and its erroring on createTextInstance, because the "text" (0, NaN) is not inside a Text tag.


## Current behavior

- `{0 && <TestComponent />}` crashes 💥
- `{"" && <TestComponent />}` renders nothing ✅ (used to crash in 2022's original tweet)
- `{NaN && <TestComponent />}` crashes 💥
- `{false && <TestComponent />}` renders nothing ✅
- `{null && <TestComponent />}` renders nothing ✅
- `{undefined && <TestComponent />}` renders nothing ✅

## Investigation

### `{0 && <TestComponent />}` crash
- Turns out `<Text>{0 && <TestComponent />}</Text>` this works and renders a `0`

### `{NaN && <TestComponent />}` crash
