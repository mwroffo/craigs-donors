FROM node:10
WORKDIR /app
COPY . /app
RUN cd /app/client && yarn
RUN npm install
EXPOSE 3000 5000
CMD ["npm", "run", "dev"]