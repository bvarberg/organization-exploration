# Concept

Constrain utilities defined for the design system to one location, specifically separated from the rest of the application. If the design system is built out to provide components, they live here too.

The separation is to make clear that these modules should be good dependencies to use -- they are intended to be relatively stable, frequently depended upon. It should be possible to extract this directory to its own Node package (similar to `@material-ui/core`) if desired.

# Consequences

- It may be difficult to decide when a component built for the application is general enough to be considered a part of the design system.
- Nesting paths, if not using import aliases and the package is not extracted to its own Node package