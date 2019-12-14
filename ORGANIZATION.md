# Configuration

See [`src/config`](./src/config.ts). This file should be the only location that references `process.env`. Any module requiring configuration via environment should have that configuration provided by this file -- either by importing it directly or receiving its configuration via params.

# Components

All components live in the `src/components` directory, with a few rules:

1. Components MAY contain nested components as part of their implementation details
1. Components MAY depend upon a peer component
1. Components MUST NOT depend upon a peer's nested components (these are effectively private)
1. Components MUST export their public interface from the top-level `index.tsx`

# Routes

Routes are also components, but each represents either a collection of related routes or a composition of components that make up the contents of a route.

These use React's `Suspense` and `lazy` to lazily load the page implementations based on [React's guide on route-based codesplitting](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting).

# Contexts & external services

Service wrappers like API clients are configured and injected into the application through `Context`s. The goal is to create and provide the client object once, and access it through the `useComponent` hook.