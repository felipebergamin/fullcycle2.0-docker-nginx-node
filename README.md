# fullcycle2.0-docker-nginx-node

Practical exercise from fullcycle 2.0 docker module.

The proposal was create a docker environment for the nodejs app on src/ dir and use a nginx reverse proxy to provide access to app.

To run it, please, clone the repo and run `docker-compose up -d` on root dir.

When containers are ready, make a POST request to `http://localhost:8080/` with a JSON payload like this:

```json
{
  "name": "Felipe"
}
```

Of course, you can change the name value :smile:

You should see a http 201 response with content: `CodeEducation Rocks!`

If you hit the same endpoint with a GET request, you will get a list with all names on database.
