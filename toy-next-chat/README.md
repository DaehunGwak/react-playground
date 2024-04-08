# toy-next-chat

## 목표

- next.js, prisma, supabase 적응
- polling, long-polling, Server Sent Event, websocket 적응 및 장단점 분석
- (optional) redis pub/sub 구현 (supabase broadcast 로 대체 가능?)

## How to set up

### Prisma + Supabase

#### Prisma

<details>
<summary>첫 인스톨 시 나타나는 문구</summary>

```log
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run `npx prisma db pull` to turn your database schema into a Prisma schema.
4. Run `npx prisma generate` to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

</details>

```sh
npx prisma init
npx prisma migrate dev # migration 파일 생성 & 처음은 prisma 관련 설정 프로젝트에 반영
```
