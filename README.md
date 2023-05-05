# Node.js, MongoDB, and Nginx with Docker

Dockerized template for a Node.js API, MongoDB database, and served by a Ngnix reverse proxy with considerations for the acme (letsencrypt) companion for HTTPS.

**This project is by default set up for a development environment and will require some changes for a more production like environment.*

## Set Up

1. Install `docker` and `docker-compose`.

### Optional

By default I have set the `VIRTUAL_HOST` to `localhost`, so when you run this project you can access the app without having to change anything locally.

I would highly encourage you to read the [nginx-proxy](https://github.com/nginx-proxy/nginx-proxy) repo documentation for more detailed information about setting this up in a more production like environment.

**TLDR; To set up this app with a custom domain, follow the steps below.**

1. Update the `VIRTUAL_HOST` in the `docker-compose.yml` to whatever hostname you want.
   - i.e. `somedomain.local`
2. Add your chosen hostname to the `/etc/hosts` file on your local machine, and point it to localhost.
   - e.g. `127.0.0.1 somedomain.local`

## Development

- For detached mode, run:
  ```bash
  docker-compose up -d
  ```
- For attached mode, run:
  ```bash
  docker-compose up
  ```

Since this is a development template, the nodejs container has a linked volume to detect changes and the nodejs container runs the `nodemon` command for code auto detection and process restart.

If you want to run this in a more production like environment, you will want to remove the volume parameter from the nodejs service in the `docker-compose.yaml` and change the nodejs service `ENVIRONMENT` to `prod`.

## Comments

- Look at the Makefile for other useful commands.
- If you have a registered domain, replace `VIRTUAL_HOST` and localhost to said domain, and add the acme companion for HTTPS.
  - Read the [nginx-proxy](https://github.com/nginx-proxy/nginx-proxy) repo documentation for more information on how to configure HTTPS.