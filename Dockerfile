#
#---- BUILD NODE -----
#this uses alpine npm as the base for a small container ... but we want smaller
FROM node:8-alpine AS base

#run the npm install and then build
LABEL builder=true
COPY package.json package-lock.json ./
RUN npm install
RUN apk update
COPY . .
RUN npm run build

#---- release ----
FROM nginx:alpine AS release

#copies the build output from the build container and uses the smaller alpine nginx as the new base
COPY --from=base /dist/ /usr/share/nginx/html

# just use default and don't set cmd
