FROM beevelop/ionic:latest

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "ionic", "serve" ]