# Setting the base to nodejs 8.5.0
FROM node:8.5.0-alpine

# Maintainer
MAINTAINER Jonas MacCyber Enge

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start