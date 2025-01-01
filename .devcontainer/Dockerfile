# [Choice] Node.js version (use -bookworm variants on local arm64/Apple Silicon): 18, 16, 14, 18-bookworm, 16-bookworm, 14-bookworm, 18-bullseye, 16-bullseye, 14-bullseye
ARG VARIANT=22-bookworm
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

RUN sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b ~/.local/bin