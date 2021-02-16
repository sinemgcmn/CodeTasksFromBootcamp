DROP TABLE IF EXISTS celebs_table;

CREATE TABLE celebs_table (
    id SERIAL primary key,
    Name VARCHAR(255) NOT NULL,
    Age INT,
    "Number of Oscars" INT
);

INSERT INTO celebs_table (name, Age, "Number of Oscars")
Values('Leonardo DiCaprio', 41, 1);

INSERT INTO celebs_table (name, age, "Number of Oscars")
Values('Jennifer Lawrence', 25, 1);

INSERT INTO celebs_table (name, age, "Number of Oscars")
Values('Samuel L. Jackson', 67, 0);

INSERT INTO celebs_table (name, age, "Number of Oscars")
Values('Meryl Streep', 66, 3);

INSERT INTO celebs_table (name, age, "Number of Oscars")
Values('John Cho', 43, 0);