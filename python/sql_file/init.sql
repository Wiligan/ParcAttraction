DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction
(
    attraction_id int auto_increment PRIMARY KEY,
    nom           varchar(255) not null,
    description   varchar(255) not null,
    difficulte    int,
    visible       bool default true
);

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    users_id int auto_increment,
    primary key (users_id),
    name     varchar(255) not null,
    password varchar(255) not null
);


DROP TABLE IF EXISTS critique;

CREATE TABLE critique
(
    critique_id   int auto_increment PRIMARY KEY,
    prenom        varchar(255) null,
    nom           varchar(255) null,
    critique      varchar(255) not null,
    note          INT          not null,
    attraction_id INT          not null,
    CONSTRAINT fk_attraction_id FOREIGN KEY (attraction_id) REFERENCES attraction (attraction_id)
);