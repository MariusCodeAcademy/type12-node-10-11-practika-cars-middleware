-- create table
CREATE TABLE `node_cars`.`cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  `numberPlates` VARCHAR(10) NOT NULL,
  `deleted` BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- insert 2 cars
INSERT INTO
  `cars` (
    `id`,
    `title`,
    `image`,
    `price`,
    `numberPlates`,
    `deleted`
  )
VALUES
  (
    NULL,
    'Parduodu audi 100',
    'https://placeimg.com/640/480/tech',
    '3000.50',
    'ABC123',
    '0'
  ),
  (
    NULL,
    'Parduodu BMW 320D',
    'https://placeimg.com/640/480/tech',
    '5000.99',
    'XYZ789',
    '0'
  );