FROM node:20-alpine

WORKDIR /app

# Copia apenas manifests primeiro (cache eficiente)
COPY package*.json ./

RUN npm install

# Copia o restante do projeto
COPY . .

EXPOSE 8532

CMD ["npm", "run", "build"]
