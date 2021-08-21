-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-08-2021 a las 19:51:07
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

DROP TABLE IF EXISTS `especialidades`;
CREATE TABLE IF NOT EXISTS `especialidades` (
  `idEspecialidad` int(11) NOT NULL AUTO_INCREMENT,
  `especialidad` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idEspecialidad`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`idEspecialidad`, `especialidad`) VALUES
(1, 'Dermatologia'),
(2, 'Endocrinologia'),
(3, 'Medicina General'),
(4, 'Gastroenterologia'),
(5, 'Pediatria'),
(6, 'Ginecologia'),
(7, 'Nutricion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horaturnos`
--

DROP TABLE IF EXISTS `horaturnos`;
CREATE TABLE IF NOT EXISTS `horaturnos` (
  `idhoraTurno` int(11) NOT NULL AUTO_INCREMENT,
  `horaTurno` varchar(45) NOT NULL,
  PRIMARY KEY (`idhoraTurno`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `horaturnos`
--

INSERT INTO `horaturnos` (`idhoraTurno`, `horaTurno`) VALUES
(1, '09:00'),
(2, '10:00'),
(3, '11:00'),
(4, '12:00'),
(5, '13:00'),
(6, '14:00'),
(7, '15:00'),
(8, '16:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos`
--

DROP TABLE IF EXISTS `medicos`;
CREATE TABLE IF NOT EXISTS `medicos` (
  `idMedico` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `especialidadeIdEspecialidad` int(11) NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `genero` int(11) NOT NULL,
  PRIMARY KEY (`idMedico`,`especialidadeIdEspecialidad`),
  KEY `fk_medicos_especialidades_idx` (`especialidadeIdEspecialidad`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medicos`
--

INSERT INTO `medicos` (`idMedico`, `nombre`, `apellido`, `especialidadeIdEspecialidad`, `imagen`, `genero`) VALUES
(1, 'Jorge', 'Perez', 1, 'img1.jpg', 1),
(2, 'Carolina', 'Ramirez', 4, 'img2.jpg', 1),
(3, 'Roberta', 'Carranza', 5, 'img4.jpg', 0),
(4, 'Carlos', 'Manrique', 2, 'default.jpg', 1),
(5, 'Micaela', 'Perez', 5, 'img3.jpg', 0),
(6, 'Mirtha', 'Le Blanc', 7, 'img5.jpg', 0),
(7, 'Estanislao', 'Schewiasz', 3, 'img6.jpg', 1),
(8, 'Paula', 'Cingolani', 4, 'img7.jpg', 0),
(9, 'Sebastian', 'Vignolo', 1, 'img8.jpg', 1),
(10, 'Ricardo', 'Caruso Lombardi', 7, 'default.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `idRol` int(11) NOT NULL,
  `rol` varchar(45) NOT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idRol`, `rol`) VALUES
(0, 'user'),
(1, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

DROP TABLE IF EXISTS `turnos`;
CREATE TABLE IF NOT EXISTS `turnos` (
  `idturno` int(11) NOT NULL AUTO_INCREMENT,
  `fechaTurno` date NOT NULL,
  `horaturnoIdhoraTurno` int(11) NOT NULL,
  `medicoIdMedico` int(11) NOT NULL,
  `usuarioIdUsuario` int(11) NOT NULL,
  PRIMARY KEY (`idturno`,`horaturnoIdhoraTurno`,`medicoIdMedico`,`usuarioIdUsuario`),
  KEY `fk_turnos_horaTurno1_idx` (`horaturnoIdhoraTurno`),
  KEY `fk_turnos_medicos1_idx` (`medicoIdMedico`),
  KEY `fk_turnos_usuarios1_idx` (`usuarioIdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`idturno`, `fechaTurno`, `horaturnoIdhoraTurno`, `medicoIdMedico`, `usuarioIdUsuario`) VALUES
(1, '2021-10-10', 1, 1, 1),
(2, '2021-08-12', 4, 2, 1),
(3, '2021-08-20', 1, 3, 1),
(5, '2021-08-28', 6, 1, 1),
(6, '2021-08-12', 4, 2, 1),
(8, '2021-08-21', 3, 2, 1),
(9, '2021-08-28', 6, 2, 1),
(10, '2021-08-20', 6, 2, 1),
(11, '2021-08-21', 4, 2, 1),
(12, '2021-08-21', 8, 1, 1),
(13, '2021-08-20', 4, 1, 1),
(14, '2021-08-28', 4, 4, 1),
(15, '2021-08-27', 4, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `contrasenia` varchar(45) NOT NULL,
  `roleIdRol` int(11) NOT NULL,
  PRIMARY KEY (`idUsuario`,`roleIdRol`),
  KEY `fk_usuarios_roles1_idx` (`roleIdRol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombre`, `apellido`, `email`, `contrasenia`, `roleIdRol`) VALUES
(1, 'Rodolfo', 'Conci', 'r.conci@hotmail.com', 'asdasd', 1),
(2, 'Usuario', 'Comun', 'usuariocomun@usuariocomun.com', 'asdasd', 0);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD CONSTRAINT `fk_medicos_especialidades` FOREIGN KEY (`especialidadeIdEspecialidad`) REFERENCES `especialidades` (`idEspecialidad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD CONSTRAINT `fk_turnos_horaTurno1` FOREIGN KEY (`horaturnoIdhoraTurno`) REFERENCES `horaturnos` (`idhoraTurno`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_turnos_medicos1` FOREIGN KEY (`medicoIdMedico`) REFERENCES `medicos` (`idMedico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_turnos_usuarios1` FOREIGN KEY (`usuarioIdUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuarios_roles1` FOREIGN KEY (`roleIdRol`) REFERENCES `roles` (`idRol`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
