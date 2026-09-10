---
sidebar_label: Lifecycle in Git
title: Lifecycle in Git
---

# Lifecycle in Git

A typical Git workflow moves changes from the working directory to the staging area, then into the local repository and finally to the remote repository.

## Basic Workflow

### 1. Clone the Repository

Clone an existing remote repository to your local machine:

```bash
git clone https://github.com/username/repository.git
```

### 2. Make Changes

Edit, create or delete files in the working directory.

Check the current repository state:

```bash
git status
```

### 3. Stage Changes

Add a specific file to the staging area:

```bash
git add <file>
```

Or stage all current changes:

```bash
git add .
```

### 4. Commit Changes

Save the staged changes in the local Git repository:

```bash
git commit -m "Describe the changes"
```

A commit creates a snapshot of the staged changes in the local repository.

### 5. Push Changes

Send local commits to the remote repository:

```bash
git push
```

## Workflow Overview

```text
Remote Repository
       |
       | git clone
       v
Local Repository
       |
       v
Working Directory
       |
       | git add
       v
Staging Area
       |
       | git commit
       v
Local Repository
       |
       | git push
       v
Remote Repository
```

## Check Changes Before Committing

View the current repository status:

```bash
git status
```

View unstaged changes:

```bash
git diff
```

View staged changes:

```bash
git diff --staged
```

## Check Commit History

Display recent commits:

```bash
git log --oneline
```

Show only the last five commits:

```bash
git log --oneline -5
```

## Typical Daily Workflow

```bash
git status
git add .
git commit -m "Update configuration"
git push
```

This workflow repeats as files are changed, staged, committed and synchronized with the remote repository.