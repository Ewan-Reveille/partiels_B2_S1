-- Ce code n'est présent que pour indiquer la structure de la base de données en PostGreSQL
CREATE DATABASE IF NOT EXISTS partiels;

CREATE TABLE user_infos (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    email VARCHAR(100),
    numero_telephone VARCHAR(15),
    niveau_etudes VARCHAR(50)
);