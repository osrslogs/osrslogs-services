# Contributing

We are open to, and grateful for, any contrubtions made by the community. As a contributor, here are the guidelines we would like you to follow:

- [Code of Conduct](#code-of-conduct)
- [Got a question or problem?](#got-a-question-or-issue)
- [Issues and bugs](#found-a-bug)
- [Coding rules](#coding-rules)
- [Working with the code](#working-with-the-code)
- [Submission guidelines](#submission-guidelines)

## Code of Conduct

Help us keep **OSRS Logs** open and inclusive. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Got a question or problem?

Do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests. If you have questions about how to contribute to the project, please join our [Discord]() server.

## Found a bug?

If you find a bug in the soure code, you can help us by [submitting an issue](#submitting-an-issue) to our
[GitHub repository](https://github.com/osrslogs/osrs-services). Even better, you can [submit a pull request](#submitting-a-pull-request) with a fix.

## Coding rules

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

| Type       | Description                               |
| ---------- | ----------------------------------------- |
| `chore`    | Tooling change                            |
| `docs`     | Documentation change only                 |
| `feat`     | A new feature                             |
| `fix`      | A bug fix                                 |
| `refactor` | Code refactor                             |
| `revert`   | Reverting a previous commit               |
| `style`    | Change that do not affect meaning of code |
| `test`     | Adding or updating test                   |

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

We use [TypeScript](https://www.typescriptlang.org) for type checking, [ESLint](https://eslint.org) with
[Prettier](https://prettier.io) for linting and formatting the code, and [Jest](https://jestjs.io) for testing.

Our pre-commit hooks verify that the linter pass when committing.

## Working with the code

1. [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repository.
2. [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) your fork.

```
$ git clone https://github.com/<your-username>/osrs-services
```

3. Navigate to the cloned directory.

```
$ cd osrs-services
```

4. Assign the original repository as a new remote
   [upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork).

```
$ git remote add upstream https://github.com/osrslogs/osrs-services
```

5. Install dependencies.

```
$ npm install
```
