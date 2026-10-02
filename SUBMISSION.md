# BrowserStack Open Source Program — application draft

**Project:** OpenWebBench  
**Repository:** https://github.com/qsay8/OpenWebBench  
**Licence:** MIT  
**Primary technology:** HTML, CSS, JavaScript, Playwright  
**Maintainer:** Mj Bailey

## Project summary

OpenWebBench is a small, community-oriented browser compatibility test lab. It provides a responsive sample interface and automated regression tests for common web behaviours, including form validation, keyboard navigation, accessible status feedback, and UI state. The project is intended to help developers reproduce browser-specific issues and contribute portable regression tests without needing to maintain a complex application or backend.

## Why cross-browser testing matters

Even simple interface patterns can behave differently across browser engines, operating systems, viewport sizes, and input methods. OpenWebBench provides a compact, reproducible test target that contributors can use to identify and document those differences. Testing on a wider range of desktop browsers and real mobile devices will help the project improve compatibility and accessibility.

## How BrowserStack will be used

If accepted into the Open Source Program, BrowserStack will be used to:
- Manually reproduce reported issues on desktop browsers and real mobile devices.
- Validate responsive layouts and keyboard-operable interactions across browser/OS combinations.
- Run automated regression checks in supported remote environments as the integration is implemented.
- Capture reproducible evidence for fixes and help maintainers review contributions from different environments.

## Open-source commitment

The project is released under the MIT licence. Source code, issues, and contributions will be public. The repository will include setup instructions, contribution guidance, and reproducible bug-report templates. BrowserStack credentials, if used, will be stored as private CI secrets and will not be committed.

## Current status and planned work

The initial repository includes a standalone demo application and Playwright tests for core interactions and responsive rendering. Planned work includes configuring a supported BrowserStack Automate workflow, expanding the device/browser matrix, and adding regression cases based on community-reported issues.

## Links and evidence to add before submission

- Public GitHub repository: [URL]
- Public demo: [URL, optional]
- Recent commits or release: [URL, once available]
- Test workflow: [URL, once configured]

## Short description

OpenWebBench is an MIT-licensed browser compatibility test lab with a responsive demo interface and Playwright regression tests. BrowserStack will help maintainers verify behaviour across desktop browsers, operating systems, and real mobile devices, and provide reproducible compatibility feedback to contributors.
