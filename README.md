# LUX.io — MVP Funcional

MVP acadêmico da plataforma web de monitoramento de sistemas solares fotovoltaicos.

## Escopo
- Login/cadastro simulado com armazenamento local.
- Perfil usuário comum e administrador.
- Cadastro de sistemas e inversores.
- Dashboard com geração, potência e status.
- Dados mockados simulando uma camada de API de fabricantes.
- Alertas e histórico de falhas.
- Gráficos com Recharts.
- Arquitetura preparada para substituir mocks por APIs reais.

## Requisitos
Node.js 20+

## Rodar frontend
```bash
cd frontend
npm install
npm run dev
```
Abra http://localhost:3000.

## Rodar backend
```bash
cd backend
npm install
npm run start:dev
```
API em http://localhost:3001.

> O MVP frontend funciona com mocks locais para permitir demonstração sem dependência externa. O backend contém a camada mock e endpoints de exemplo para evolução posterior para PostgreSQL/Prisma e APIs reais.
