---
to: <%= subfolder %>.ts
unless_exists: true
---
export * from './util/<%= subfolder %>';
