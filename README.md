# Projeto Demo Duolingo

## Descrição do Projeto

O demo Duolingo é um projeto completo que permite aos usuários aprender idiomas de forma interativa e envolvente, similar ao famoso aplicativo Duolingo. Com recursos avançados, como aulas guiadas, design visualmente atraente, personagens cativantes, efeitos de áudio e visual, este projeto oferece uma experiência de aprendizado de idiomas única.

## Principais Funcionalidades

- **Aulas Guiadas:** Os usuários podem escolher um curso de idiomas e participar de aulas interativas e guiadas.

- **Componentes Visuais Atraentes:** Utilização do Shadcn UI para criar um sistema de componentes visualmente atraente.

- **Personagens Encantadores:** Incorporação de personagens cativantes, contribuídos por KenneyNL, para tornar o aprendizado mais divertido.

- **Autenticação:** Sistema de autenticação utilizando Clerk para garantir a segurança das contas dos usuários.

- **Efeitos Sonoros:** Inclusão de efeitos sonoros para uma experiência de aprendizado imersiva.

- **Sistema de Corações:** Implementação de um sistema de corações para controlar a progressão e o número de erros dos usuários.

- **Sistema de Pontos/XP:** Atribuição de pontos e XP aos usuários para acompanhar seu progresso e motivá-los.

- **Popup de Sem Corações:** Exibição de um popup quando o usuário fica sem corações, incentivando-o a praticar novamente ou a adquirir mais corações.

- **Popup de Confirmação de Saída:** Popup de confirmação ao sair do aplicativo para evitar saídas acidentais.

- **Prática de Lições Anteriores:** Opção para praticar lições anteriores e recuperar corações perdidos.

- **Leaderboard:** Sistema de leaderboard para competição saudável entre os usuários.

- **Milestones de Quests:** Definição de marcos de quest para ajudar os usuários a acompanhar seu progresso.

- **Sistema de Loja:** Loja virtual onde os usuários podem trocar pontos por corações ou outras recompensas.

- **Camada Pro com Stripe:** Camada premium com assinatura ilimitada de corações utilizando Stripe.

- **Página Inicial Atrativa:** Desenvolvimento de uma página inicial atraente para cativar os usuários desde o início.

- **Dashboard do Administrador:** Painel de controle administrativo utilizando React Admin para gerenciar o aplicativo.

- **ORM com DrizzleORM:** Utilização de DrizzleORM para uma camada de abstração de banco de dados e gerenciamento de dados eficiente.

- **PostgresDB com NeonDB:** Armazenamento de dados utilizando PostgreSQL através do NeonDB.

- **Implantação no Vercel:** Implantação do projeto na plataforma Vercel para garantir alta disponibilidade e escalabilidade.

- **Responsividade para Dispositivos Móveis:** Garantia de uma experiência de usuário otimizada em dispositivos móveis.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento suave:

- `@clerk/nextjs:` ^4.29.9
- `@neondatabase/serverless:` ^0.9.0
- `@radix-ui/react-avatar:` ^1.0.4
- `@radix-ui/react-dialog:` ^1.0.5
- `@radix-ui/react-progress:` ^1.0.3
- `@radix-ui/react-separator:` ^1.0.3
- `@radix-ui/react-slot:` ^1.0.2
- `class-variance-authority:` ^0.7.0
- `clsx:` ^2.1.0
- `dotenv:` ^16.4.5
- `drizzle-orm:` ^0.30.6
- `lucide-react:` ^0.363.0
- `next:` 14.1.4
- `next-themes:` ^0.3.0
- `ra-data-simple-rest:` ^4.16.15
- `react:` ^18
- `react-admin:` ^4.16.15
- `react-circular-progressbar:` ^2.1.0
- `react-confetti:` ^6.1.0
- `react-dom:` ^18
- `react-use:` ^17.5.0
- `sonner:` ^1.4.41
- `stripe:` ^14.24.0
- `tailwind-merge:` ^2.2.2
- `tailwindcss-animate:` ^1.0.7
- `zustand:` ^4.5.2
- `@types/node:` ^20
- `@types/react:` ^18
- `@types/react-dom:` ^18
- `autoprefixer:` ^10.0.1
- `drizzle-kit:` ^0.20.14
- `eslint:` ^8
- `eslint-config-next:` 14.1.4
- `pg:` ^8.11.3
- `postcss:` ^8
- `tailwindcss:` ^3.3.0
- `tsx:` ^4.7.1
- `typescript:` ^5

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_valor_aqui
CLERK_SECRET_KEY=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
STRIPE_API_KEY=seu_valor_aqui
NEXT_PUBLIC_APP_URL=seu_valor_aqui
STRIPE_WEBHOOK_SECRET=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Para iniciar o servidor de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. O projeto estará disponível em `http://localhost:3000`.
