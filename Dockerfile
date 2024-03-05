FROM node:16.17.1 as build

RUN mkdir /app

WORKDIR /app

# COPY ["package.json", "package-lock.json", "angular.json", "tailwind.config.js", "tsconfig.app.json", "tsconfig.json", "tsconfig.spec.json", "/app/"]

COPY ./ /app/

RUN npm install

RUN npm run build

FROM nginx:latest

# COPY ["src/", "/app/src/"]

COPY --from=build /app/nginx.config /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/trello-clone /usr/share/nginx/html

# EXPOSE 4200

# CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]
EXPOSE 80 443
