#
# SQL Export
# Created by Querious (962)
# Created: March 14, 2015 at 2:06:24 PM CST
# Encoding: Unicode (UTF-8)
#


DROP TABLE IF EXISTS `clients`;


CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `subdomain` varchar(255) NOT NULL DEFAULT '',
  `secret_key` varchar(255) NOT NULL DEFAULT '',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;




SET @PREVIOUS_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS;
SET FOREIGN_KEY_CHECKS = 0;


LOCK TABLES `clients` WRITE;
ALTER TABLE `clients` DISABLE KEYS;
INSERT INTO `clients` (`id`, `name`, `subdomain`, `secret_key`, `created_at`) VALUES 
	(1,'Gym4Devs','gym4devs','MmSfT76E3cvJE3vPpxfv0TZ2flq679IT','2015-03-07 11:49:14');
ALTER TABLE `clients` ENABLE KEYS;
UNLOCK TABLES;




SET FOREIGN_KEY_CHECKS = @PREVIOUS_FOREIGN_KEY_CHECKS;


