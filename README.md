# ci-doctor-sandbox

> Smoke-test target for the `ci-doctor` Claude Managed Agent.

This repo exists so ci-doctor has a safe place to:

1. **Observe real `workflow_run` failure events** (the `sample-failing` workflow fires on push and on demand and exits 1 on purpose).
2. **Be installed with minimum permissions** as `ci-doctor[bot]` during Phase 1 foundation.
3. **Receive the first end-to-end smoke session** from `/triarch:ci-doctor` once Phase 1 lands.

It is intentionally NOT a real product repo and should never have business code in it. If you find yourself wanting to add real code here, create a separate sandbox.

Owned by: triarchsecurity / Mike Geehan
Related: https://github.com/triarchsecurity/triarch-managed-agents

## Pipeline probe note

Docs-only change to exercise the docs-only fast-path.
