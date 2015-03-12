SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema sample
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sample` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `sample` ;

-- -----------------------------------------------------
-- Table `sample`.`tags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sample`.`tags` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sample`.`articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sample`.`articles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NULL,
  `body` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sample`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sample`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `article_id` INT NOT NULL,
  `body` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tags_articles_idx` (`article_id` ASC),
  CONSTRAINT `fk_tags_articles0`
    FOREIGN KEY (`article_id`)
    REFERENCES `sample`.`articles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sample`.`articles_tags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sample`.`articles_tags` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `article_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_articles_tags_articles1_idx` (`article_id` ASC),
  INDEX `fk_articles_tags_tags1_idx` (`tag_id` ASC),
  CONSTRAINT `fk_articles_tags_articles1`
    FOREIGN KEY (`article_id`)
    REFERENCES `sample`.`articles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articles_tags_tags1`
    FOREIGN KEY (`tag_id`)
    REFERENCES `sample`.`tags` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
