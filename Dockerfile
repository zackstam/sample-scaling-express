# Gunakan Node.js versi terbaru sebagai base image
FROM node:alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan install dependencies
COPY package.json ./
RUN npm install

# Copy seluruh kode aplikasi
COPY . .

# Jalankan aplikasi saat container dimulai
CMD ["npm", "start"]
