FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Exposer le port utilisé par Webpack (React Dev Server)
EXPOSE 3000

# Démarrer React en mode développement
CMD ["npm", "start"]