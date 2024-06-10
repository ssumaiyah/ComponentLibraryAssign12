
# pull official base image
FROM node:lts-bookworm
 
# set working directory
WORKDIR /sumaiyah_sumaiyah_ui_garden/
 
# install app dependencies
COPY public/ /sumaiyah_sumaiyah_ui_garden/public
COPY src/ /sumaiyah_sumaiyah_ui_garden/src
COPY package.json /sumaiyah_sumaiyah_ui_garden/
COPY . /sumaiyah_sumaiyah_ui_garden
RUN npm install
 
# start app
CMD ["npm", "run", "storybook"]