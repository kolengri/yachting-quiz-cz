---
inject: true
to: util/<%= subfolder %>/index.ts
append: true
skip_if: "from './<%= name %>'"
---
export * from './<%= name %>';
