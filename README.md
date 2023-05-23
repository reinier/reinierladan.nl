# reinierladan.nl

Website over Reinier Ladan

## Podman script

`podman run --rm -p 8080:8080 -v ${PWD}:/app -w=/app node:16.15.0-alpine npm run start`

- todo: watching changes in directory not working
- todo: when closing running process with ctrl-c all sort of errors popping up
