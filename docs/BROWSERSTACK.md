# BrowserStack execution notes

OpenWebBench is intended to be tested across browser/OS/device combinations. The current Playwright suite runs locally; remote BrowserStack execution is a follow-up integration task and is not enabled by default.

## Safe configuration

1. Create or use your own BrowserStack account.
2. Keep `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` in your CI provider's encrypted secrets.
3. Follow the current BrowserStack Automate documentation for the supported Playwright integration and desired browser capabilities.
4. Add a separate CI job for remote execution, and document the tested browser/device matrix and any platform-specific limitations.
5. Never add credentials, session URLs containing secrets, or private test data to Git.

The open-source application can be tested manually with BrowserStack Live as well. BrowserStack program access is subject to its approval and current terms.
