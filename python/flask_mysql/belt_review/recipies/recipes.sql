-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema recipes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema recipes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `recipes` DEFAULT CHARACTER SET utf8 ;
USE `recipes` ;

-- -----------------------------------------------------
-- Table `recipes`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recipes`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(225) NULL,
  `last_name` VARCHAR(225) NULL,
  `email` VARCHAR(225) NULL,
  `password` VARCHAR(225) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `recipes`.`recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recipes`.`recipes` (
  `id` INT ZEROFILL NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(225) NULL,
  `desciption` VARCHAR(225) NULL,
  `instructions` VARCHAR(225) NULL,
  `under30` VARCHAR(225) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_recipes_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_recipes_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `recipes`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
