CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  msg_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  msg_text VARCHAR(120),
  room VARCHAR(20) NOT NULL,
  posted_at DATE
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

