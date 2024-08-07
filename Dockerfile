
# pull official base image
FROM node:lts-bookworm
 
# set working directory
WORKDIR /sumaiyah_sumaiyah_ui_garden_build_checks/
 
# install app dependencies
COPY public/ /sumaiyah_sumaiyah_ui_garden_build_checks/public
COPY src/ /sumaiyah_sumaiyah_ui_garden_build_checks/src
COPY package.json /sumaiyah_sumaiyah_ui_garden_build_checks/
COPY . /sumaiyah_sumaiyah_ui_garden_build_checks
RUN npm install
 
# start app
CMD ["npm", "run", "storybook"]