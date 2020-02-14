# Thoughts on this pattern

It is nice to have these things close to each other, but it mixes React concerns
with the service wrapper concerns.

It may be more appropriate for this directory to contain and export the overall
service interface and the domain data structures it will return. Similarly, the
hooks and context may be grouped in a React specific module.

# Questions

- How would you use this for a more complicated interaction of queries?
- Can you combine hooks like these?
- How would you combine this with something like useSWR (for caching)?