FROM node:22

# Create app directory
WORKDIR /next-portfolio .

# Install app dependencies
COPY . .

# Install pnpm globally
RUN npm install -g pnpm

# Build the app
RUN pnpm install

EXPOSE 3000

# Start the app
CMD [ "pnpm", "dev" ]
