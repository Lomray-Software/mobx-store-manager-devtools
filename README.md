# Mobx devtools extension for [Mobx stores manager](https://github.com/Lomray-Software/react-mobx-manager)

<p float="center">
  <img src="https://github.com/Lomray-Software/mobx-store-manager-devtools/assets/40923851/a90ef563-62d6-4f64-9b29-441b1331e4b4" alt="Mobx devtools extension demo 1" width="300"/>
  <img src="https://github.com/Lomray-Software/mobx-store-manager-devtools/assets/40923851/557fbbc1-950b-4f53-a345-721da9de2902" alt="Mobx devtools extension demo 2" width="300"/>
  <img src="https://github.com/Lomray-Software/mobx-store-manager-devtools/assets/40923851/92129a5e-64d9-4ecd-8eef-ade5e7f38e6b" alt="Mobx devtools extension demo 3" width="300"/>
</p>

## Table of contents

- [Getting started](#getting-started)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Copyright](#copyright)


## What this repository is

This is a Manifest V3 browser extension for inspecting `@lomray/react-mobx-manager` stores.
It is not a general MobX debugger or an npm library to import into an application.
The public npm artifact `mobx-store-manager-devtools@1.1.0` contains extension sources;
installing it with npm does not install a browser extension.

The release workflow builds the extension and attaches `build.zip` to GitHub releases.
Use the [release assets](https://github.com/Lomray-Software/mobx-store-manager-devtools/releases)
for the extension side, and the manager plugin below for the application side.
A working extension session still requires both parts. Browser installation and compatibility
must be checked in the target browser; an npm installation is not that check.

## Getting started

This package is part of the [Mobx stores manager](https://github.com/Lomray-Software/react-mobx-manager)

```
npm i @lomray/react-mobx-manager@4.5.2
```

Install the manager's `lodash` and `mobx` peer dependencies in the application too.

The plugin subpath below is present in the `4.5.2` tarball. It is absent in `1.1.0`,
despite the extension manifest's broad peer range. Presence of that module is not an
end-to-end browser compatibility test. Use it only in client-side development code,
with your existing store manager:

```jsx
import connectDevExtension from '@lomray/react-mobx-manager/plugins/dev-extension/index.js';

connectDevExtension(storeManager);
```

## Bugs and feature requests

Bug or a feature request, [please open a new issue](https://github.com/Lomray-Software/mobx-store-manager-devtools/issues/new).

## Copyright

Code and documentation copyright 2022 the [Lomray Software](https://lomray.com/). 

## Documentation checks

Run `node scripts/check-docs.cjs` from this repository. This checks documentation against local manifests and source, not a deployed integration.
