# The Linux Commandline

The Linux command line is a core tool for system administration, troubleshooting and day-to-day server operations. This article covers essential commands for navigation, file management, permissions, searching and process-related tasks.

## Navigation

| Command | Description |
|---|---|
| `pwd` | Print current working directory |
| `ls` | List files in the current directory |
| `ls -la` | List all files including hidden ones with details |
| `cd <dir>` | Change directory |
| `cd ..` | Go up one directory level |
| `cd ~` | Go to home directory |

## File Management

| Command | Description |
|---|---|
| `touch <file>` | Create an empty file |
| `mkdir <dir>` | Create a new directory |
| `cp <src> <dest>` | Copy a file or directory |
| `mv <src> <dest>` | Move or rename a file |
| `rm <file>` | Delete a file |
| `rm -r <dir>` | Delete a directory recursively |
| `rm -rf <dir>` | Force-delete a directory recursively — use with caution |

## Viewing File Contents

| Command | Description |
|---|---|
| `cat <file>` | Print entire file content |
| `less <file>` | Scroll through a file |
| `head -n 10 <file>` | Show first 10 lines |
| `tail -n 10 <file>` | Show last 10 lines |
| `tail -f <file>` | Follow a file in real-time (useful for logs) |

## Searching

```bash
# Search for a string inside files
grep -r "search term" ./

# Find files by name
find . -name "*.log"

# Find files modified in the last 24 hours
find . -mtime -1
```

## Permissions

Every file in Linux has an owner and a set of permissions for the owner, group, and others.

```bash
# View permissions
ls -l

# Change permissions (e.g. make a script executable)
chmod +x script.sh

# Change file owner
chown user:group file.txt
```

Permission notation example: `rwxr-xr--`

- `r` = read
- `w` = write
- `x` = execute
- first group = owner
- second group = group
- third group = others

## Processes

| Command | Description |
|---|---|
| `ps aux` | List running processes |
| `top` | Monitor processes and resource usage |
| `pgrep <name>` | Find process IDs by name |
| `kill <pid>` | Send a termination signal to a process |
| `kill -9 <pid>` | Forcefully terminate a process — use only when necessary |

## Useful Shortcuts

| Shortcut | Description |
|---|---|
| `Ctrl + C` | Cancel running command |
| `Ctrl + L` | Clear terminal |
| `Tab` | Autocomplete file/command name |
| `↑ / ↓` | Navigate command history |
| `!!` | Repeat last command |
| `sudo !!` | Repeat last command with sudo |
