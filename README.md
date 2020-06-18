# craigs-donors

## How to Docker
do `cd craigs-donors`, then

```docker build --tag craigs-donors:0.0.1 .```

Finally, to launch server, do:
```
docker run --rm --publish 8080:8080 craigs-donors:0.0.1
```
Include `--detach` to run in background.