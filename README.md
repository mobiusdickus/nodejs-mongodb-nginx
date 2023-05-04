# Node.js MongoDB Nginx

Dockerized Node.js API, MongoDB database, and Ngnix reverse proxy with room for acme (letsencrypt) companion.

## Development

1. Install `docker` and `docker-compose`.
2. Update the `VIRTUAL_HOST` in the `docker-compose.yml` to whatever hostname you want (default is `somedomain.local`).
3. Add your chosen hostname pointing to localhost to `/etc/hosts` on your local machine. Example: `somedomain.local 127.0.0.1`. (Depending on the production requirements his may only be for local development, but leaves room for the use of an externally registered domain and SSL.)
4. Either run `make start` for detached mode or simply run `docker-compose up`.
5. In the browser, enter the hostname (default it's `somedomain.local`) and you should see a basic "Hello World!" page. 

## Production

TBD

## Notes

- What are the resource constraints of the hardware hosting the webserver? (raspbery pi os 11 bulleye)
  - Change mongo version to 5.0-bionic potentially.
- If given a registered domain, replace `VIRTUAL_HOST` and localhost to said domain, and add the acme companion for auto generating SSL certs.