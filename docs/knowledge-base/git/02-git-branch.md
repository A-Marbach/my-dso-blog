---
id: git-branch
title: Git Branching
sidebar_label: Git Branching
---

# Git Branching

Branches allow you to work on changes independently without directly affecting the main branch. They are commonly used for features, fixes and experiments before changes are merged back into `main`.

## Common Commands

| Command | Description |
|---|---|
| `git branch` | List local branches |
| `git branch -r` | List remote branches |
| `git branch <branch-name>` | Create a new branch |
| `git switch -c <branch-name>` | Create and switch to a new branch |
| `git switch <branch-name>` | Switch to an existing branch |
| `git branch -m <new-name>` | Rename the current branch |
| `git branch -d <branch-name>` | Delete a merged branch |
| `git branch -D <branch-name>` | Force-delete a branch |
| `git merge <branch-name>` | Merge another branch into the current branch |
| `git fetch` | Retrieve updates from the remote repository |
| `git pull` | Fetch and integrate remote changes |

## Creating a New Branch

Create a branch without switching to it:

```bash
git branch <branch-name>
```

Create a new branch and switch to it:

```bash
git switch -c <branch-name>
```

Older Git workflows may also use:

```bash
git checkout -b <branch-name>
```

## Switching Between Branches

Switch to an existing branch:

```bash
git switch <branch-name>
```

Alternatively:

```bash
git checkout <branch-name>
```

## Listing Branches

List local branches:

```bash
git branch
```

List remote branches:

```bash
git branch -r
```

The currently active branch is marked with an asterisk (`*`).

## Renaming a Branch

Rename the currently active branch:

```bash
git branch -m <new-branch-name>
```

## Updating Remote Information

Retrieve new branches and commits from the remote repository without modifying the current branch:

```bash
git fetch
```

Fetch remote changes and integrate them into the current branch:

```bash
git pull
```

## Merging Branches

Before merging, switch to the branch that should receive the changes:

```bash
git switch main
```

Then merge the other branch:

```bash
git merge <branch-name>
```

Example:

```bash
git switch main
git merge feature
```

## Deleting a Branch

Delete a branch after it has been merged:

```bash
git branch -d <branch-name>
```

Force-delete a branch that has not been merged:

```bash
git branch -D <branch-name>
```

Use force deletion carefully because unmerged commits may be lost.

## Typical Branch Workflow

```bash
git switch -c feature
git status

# Make changes

git add .
git commit -m "Add feature"

git switch main
git pull
git merge feature

git branch -d feature
git push
```

## Summary

Branches provide an isolated workspace for changes. A typical workflow is to create a branch, make and commit changes, update the main branch, merge the work and remove the branch when it is no longer needed.