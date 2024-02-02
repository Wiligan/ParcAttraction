DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction
(
    attraction_id int auto_increment,
    primary key (attraction_id),
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


DROP TABLE IF EXISTS critiques;

CREATE TABLE critiques
(
    critique_id   int auto_increment,
    primary key (critique_id),
    prenom        varchar(255) not null,
    nom           varchar(255) not null,
    critique      varchar(255) not null,
    attraction_id INT,
    CONSTRAINT fk_id_attraction FOREIGN KEY (attraction_id) REFERENCES attraction (attraction_id)
);