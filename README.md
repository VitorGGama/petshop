PetShop: projeto Next.js
Branch 11
json-server --host 10.20.46.28 db.json --port 2112

json-server --watch db.json

npm install -g

json-server --version

Branch 05
Importante!!!
Após instalar o styled-components, ative o suporte à compilação dele pelo next.js modificando o arquivo next.confug.js

@type {import('next').NextConfig} const nextConfig = { reactStrictMode: true, compiler: { styledComponents: true, }, };

module.exports = nextConfig;

Recursos utilizados
Next.js
API Fake/Local
API via Firebase Realtime Database
Componentes
Rotas
Map, Filter
Manipulação de formulário
Publicação na Vercel e na Netlify
