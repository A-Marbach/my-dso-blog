---
sidebar_label: Clone a Repository
title: Clone a Repository
---

# Clone a Repository

Cloning creates a local copy of a remote repository on your machine, including the full commit history.

## Basic Usage

```bash
git clone https://github.com/username/repository.git
```

This creates a folder named `repository` in your current directory.

## Clone into a Specific Folder

```bash
git clone https://github.com/username/repository.git my-folder
```

## Clone a Specific Branch

```bash
git clone -b develop https://github.com/username/repository.git
```

## Clone via SSH

SSH is convenient for regular repository access because authentication can be handled using SSH keys.

```bash
git clone git@github.com:username/repository.git
```

To use SSH cloning, you need to add your public SSH key to your GitHub/GitLab account first.

## What Happens After Cloning

After cloning, Git automatically:
- Sets `origin` as the name for the remote URL
- Checks out the default branch (usually `main`)

You can verify the repository state, current branch and configured remote with:

```bash
git status
git branch
git remote -v
```

```
origin  https://github.com/username/repository.git (fetch)
origin  https://github.com/username/repository.git (push)
```
