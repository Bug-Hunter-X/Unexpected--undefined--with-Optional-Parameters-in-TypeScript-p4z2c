# Unexpected 'undefined' with Optional Parameters in TypeScript

This example demonstrates a common pitfall with optional parameters in TypeScript: the default value is always `undefined`.

The `printName` function has an optional parameter `name`. When called without an argument, or with `undefined`, it prints `undefined`.

This might be different from the expected behavior if you intended a different default value or type handling for optional parameters.