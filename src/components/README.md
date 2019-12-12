# Concept

All application domain components live here. There is no distinction between connected/non-connected components. Ideally, components that make up the design system are extracted from this directory and place in their own library/package.

# Trade-offs

Grouping all components together without further distinction means that some may have different kinds of dependencies than the others. If a component uses more than what it is passed in props or explicitly `imports`, that may only be apparent by inspecting the component implementation.