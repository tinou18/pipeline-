# Utiliser l'image Node.js
FROM node:18

# Définir le dossier de travail
WORKDIR /app

# Copier package.json et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier le code source
COPY . .

# Exposer le port 5000
EXPOSE 5000

# Démarrer l’application
CMD ["npm", "start"]
