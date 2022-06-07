---
inject: true
to: <%= subfolder %>.ts
append: true
skip_if: "from './util/<%= subfolder %>'"
---
export * from './util/<%= subfolder %>';
