INSERT INTO attraction (nom, description, difficulte, visible)
VALUES ('Silver Star', 'Montagne russe', 3, 1);
INSERT INTO attraction (nom, description, difficulte, visible)
VALUES ('Montagne 8', 'Montagne russe', 4, 1);
INSERT INTO attraction (nom, description, difficulte, visible)
VALUES ('Attraction visible', 'Montagne russe', 3, 1);
INSERT INTO attraction (nom, description, difficulte, visible)
VALUES ('Attraction non visible', 'Montagne russe', 4, 0);

INSERT INTO users (name, password)
VALUES ('toto', 'toto');

INSERT INTO critique (prenom, nom, critique, note, attraction_id)
VALUES ('Jean', 'Dupont', 'Très bonne attraction à faire en famille', 4, 2);
INSERT INTO critique (critique, note, attraction_id)
VALUES ('Pas terrible, mais au moins la file était courte.', 1, 3);