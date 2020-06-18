# Use node 4.4.5 LTS
FROM node:4.4.5
ENV LAST_UPDATED 20160605T165400

# Copy source code into container

COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 8080

# Launch development server
CMD ["ionic","serve", "--port=8080"]