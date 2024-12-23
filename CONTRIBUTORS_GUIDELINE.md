# Contributing Guide

## 1. Fork the Repository

- Make sure you have a GitHub account.
- Visit the repository's page and click the **Fork** button in the top-right corner.

---

## 2. Clone the Fork

- Clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
```

---

## 3. Create a New Branch

- Create a new branch according to the guidelines in the following document: [Git Guidelines](https://github.com/Tico4Chain-Coders/POC-Trustless-Work/blob/main/GIT_GUIDELINE.md).
- Make sure to base the branch name on the type of change you're making (e.g., `feat/name-related-issue`, `fix/name-related-issue`).

```bash
git checkout -b your-branch-name
```

---

## 4. Make Atomic Commits

- Create atomic commits following the guidelines outlined here: [Git Guidelines](https://github.com/Tico4Chain-Coders/POC-Trustless-Work/blob/main/GIT_GUIDELINE.md).
- Each commit should represent a small, focused change. Avoid including multiple unrelated changes in a single commit.

```bash
git add .
git commit -m "type: description"
```

---

## 5. Push Your Changes

- Push the changes to your forked repository:

```bash
git push origin your-branch-name
```

### IMPORTANT NOTE:

_It's important to note that we are using Husky. This means that when you run a `git push`, Husky will automatically execute `npm run format and npm run lint`. If either of these commands throws an error, the push will not be successful, and you will see a Husky error. When this happens, make sure to resolve any format and lint errors before trying the push again._

---

## 6. Generate a Pull Request (PR)

- Create a Pull Request (PR) to the **develop** branch of the original repository.
- Follow the PR template below to submit your PR.
- **Important:** If you don’t use the provided PR template properly, your PR will be ignored.
