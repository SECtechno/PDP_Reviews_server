#base image
FROM node:14-alpine
#make a folder in that image, where application source code live
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
