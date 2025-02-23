# What image do you want to start building on?
FROM node:16

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# install node modules
COPY     package.json /src/app/package.json
RUN      npm install

# What source code do you what to copy, and where to put it?
COPY . /src/app

# Does your app have any dependencies that should be installed?
RUN yarn install

# What port will the container talk to the outside world with once created?
EXPOSE 3000

# How do you start your app?
CMD ["npm", "run", "server-dev"]
