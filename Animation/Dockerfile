FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -D tailwindcss postcss autoprefixer
RUN npx tailwindcss init -p

COPY . .

EXPOSE 5173

CMD npm run dev