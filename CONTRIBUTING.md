# Contributing to the Mem Node.js Client

### Making a Code Contribution

Workflow:
- Create a feature branch
- Write your code (feature, bug, ...)
- Add tests
  - For new features, ensure the code code paths are being tested
  - For bug-fixes, make sure that we have some sort of regression test in place
- Ensure that `script/quality_check` passes (Linting, Type-Checking, ...)
- Create a pull request, and add some details about your change!

### Development Tips

- You can try running your code locally using `script/repl`.
- You can use the `msw` to mock-out API requests while developing locally, to avoid hitting rate-limits

### Local Scripts Overview
```
# ๐  Run `tsc`, building the package for publication
script/build

# ๐ Run typescript code generation
script/codegen

# ๐ฆ Install package dependencies
script/install

# ๐งน Run eslint code linting/formatting
script/lint

# โจ Runs multiple quality-checks (linting, type-checking, ...)
script/quality_check

# ๐ Build the app and launch a local node repl to try it out
script/repl

# ๐ Run jest tests (use --watch to launch tests in "watch" mode)
script/test

# ๐ Run type-checking on the codebase
script/type_check
```

### License
By contributing to the Mem Node.js Client, you agree that your contributions will be licensed under its ISC license.
