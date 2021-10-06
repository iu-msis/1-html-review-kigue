CREATE TABLE Game (
    GameID int,
    GameDate varchar(255),
    GameTime varchar(255),
    HomeTeam varchar(255),
    AwayTeam varchar(255),
    Field varchar(255),
    ReferencesNeeded varchar(255)
);

CREATE TABLE Referee (
    RefereeID int,
    RefereeFirst varchar(255),
    RefereeLast varchar(255),
    PhoneNumber varchar(255),
    Birthdate varchar(255),
    Address varchar(255),
    City varchar(255),
    State varchar(255),
    Zip varchar(255),
    RefereeLevel varchar(255),
);

CREATE TABLE GameDetails (
    GameID int,
    Position varchar(255),
    PositionStatus varchar(255),
    RefereeID int,
    GameLevel(255),
);


INSERT INTO Game (gameid, gamedate, gametime, HomeTeam, AwayTeam, Field) VALUES 
(1, '11-20-21','5:00', 'Bears', 'Lions', 'Soldier'),
(2, '12-5-22', '6:00','Lions', 'Bears', 'Soldier'),
(3, '9-8-21', '7:00', 'Cougars', 'Tigers','Memorial');

-- SELECT * FROM students;

DROP TABLE IF EXISTS offer;
CREATE TABLE offer (
    id int PRIMARY KEY AUTO_INCREMENT,
    studentId int NOT NULL REFERENCES student(id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    companyName VARCHAR(24) NOT NULL DEFAULT '',
    salary int NOT NULL DEFAULT 0,
    bonus int NOT NULL DEFAULT 0,
    offerDate date NOT NULL DEFAULT(CURRENT_DATE)
);

-- Student 1 has no offers, Student 2 has 3 offers, Student 3 has one offer
INSERT INTO offer(id, studentId, companyName, salary, bonus, offerDate) VALUES
  (1, 2, 'KPMG', 95000, 7000, '2021-09-30'),
  (2, 2, 'Deloitte Digital', 94000, 12000, '2021-10-03'),
  (3, 2, 'IU, ISGP', 54000, 0, '2021-10-05'),
  (4, 3, 'Amazon', 122000, 11000, '2021-10-15')
;

-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';