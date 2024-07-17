create table if not exists todos (
  id serial primary key,
  name varchar(255) not null,
  completed boolean default false,
);