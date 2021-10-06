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


INSERT INTO Game (gameid, gamedate, gametime, HomeTeam, AwayTeam, Field) VALUES 
(1, '11-20-21','5:00', 'Bears', 'Lions', 'Soldier'),
(2, '12-5-22', '6:00','Lions', 'Bears', 'Soldier'),
(3, '9-8-21', '7:00', 'Cougars', 'Tigers','Memorial');


INSERT INTO Referee (RefereeID, RefereeFirst, RefereeLast, PhoneNumber, Birthdate, Address) VALUES 
(1, 'John','5:00', 'Bears', 'Lions', 'Soldier'),
(2, '12-5-22', '6:00','Lions', 'Bears', 'Soldier'),
(3, '9-8-21', '7:00', 'Cougars', 'Tigers','Memorial');

-- SELECT * FROM students;


