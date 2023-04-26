FROM node:16-buster-slim

# Go to /app directory.
WORKDIR /app

# Add permission to the /app folder.
RUN chmod -R 775 /app

# Install pnpm globally.
RUN npm install -g pnpm@7.17.0 --ignore-scripts

# Copy all required files for installation.
COPY package.json /app

# Install dependencies.
RUN pnpm install

CMD ["pnpm", "dev"]
