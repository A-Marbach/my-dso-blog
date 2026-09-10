# Understanding CLI Command Parts in Under 5 Minutes

CLI commands usually consist of a program, commands, options and arguments.

Example:

```bash
docker buildx build [OPTIONS] PATH | URL | -
```

| Part | Example | Description |
|---|---|---|
| Program | `docker` | The CLI program being executed |
| Command group | `buildx` | Groups related commands |
| Subcommand | `build` | Defines the action |
| Options | `[OPTIONS]` | Modify command behavior |
| Arguments | `PATH \| URL \| -` | Provide input for the command |

## Simple Examples

```bash
ls -la /var/log
```

```text
Program:  ls
Option:   -la
Argument: /var/log
```

Another example:

```bash
docker run --name web nginx
```

Here:

- `docker` = program
- `run` = command
- `--name` = option
- `web` = option value
- `nginx` = argument

## General Structure

```text
program [command] [subcommand] [options] [arguments]
```

Not every CLI command uses every part.

Understanding this structure makes unfamiliar commands easier to read and troubleshoot.