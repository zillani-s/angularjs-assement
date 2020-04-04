CREATE DATABASE  IF NOT EXISTS `my`;

USE `my`;

DROP TABLE IF EXISTS `covid`;

CREATE TABLE `covid` (
  `country`varchar(50) NOT NULL,
  `total_cases` varchar(10) NOT NULL,
  `new_cases` varchar(10) NOT NULL,
  `total_death` varchar(10) NOT NULL,
  `new_death` varchar(10) NOT NULL,
  `total_recovered` varchar(10) NOT NULL,
  `active_cases` varchar(10) NOT NULL,
  `critical` varchar(10) NOT NULL
  `cases_percent` decimal(10) NOT NULL,
  `death_percent` decimal(10) NOT NULL,
  `repoted_fisrt` varchar(10) NOT NULL,
  PRIMARY KEY (`country`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `covid` WRITE;

INSERT INTO `covid` VALUES ('World', '723729', '+920', '33,993', '+27', '151,800', '537,486', '26,707', '92.8', '4.4', 'Jan 10');

UNLOCK TABLES;