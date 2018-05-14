# UniMart

> CMSC389L Final Project  for Eric Appelbaum

UniMart is a online marketplace where university student can buy and sell from each other.

## AWS Services and Setup
### IAM

Nothing special here, the default generated Lambda user role will work.

### S3

Put the static assets from `npm run build`
- `index.html`
- `dist/*`

### Lambda

Create lambda jobs for `GET /items`, `POST /items`, and `GET /items/{id}` with timeout of 10 seconds (need time for elasticseach.js to initialize) and change the handler to `api.getAllItems`, `api.postItem`, and `api.getItem`

Install `elasticsearch` and `http-aws-es` via npm in `lambda/` and zip the contents of `lambda/` uploading the zip to each Lambda function.

### API Gateway

Create endpoints for `GET /items`, `POST /items`, and `GET /items/{id}`

Enable CORS on each resource with `Access-Control-Allow-Origin` added to the list of headers.

### Elasticsearch Service

Creating the default cluster will be sufficient.

## Architecture

![AWS Architecture](https://raw.githubusercontent.com/erabaum/unimart-cmsc389l/master/architecture.png)


------------

## [Demo][1]

[1]: http://unimart-cmsc389l-erabaum.s3-website-us-east-1.amazonaws.com/ "Demo"
