-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 21 2020 г., 23:32
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `game`
--

-- --------------------------------------------------------

--
-- Структура таблицы `leaderboard`
--

CREATE TABLE `leaderboard` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `leaderboard`
--

INSERT INTO `leaderboard` (`id`, `name`, `score`) VALUES
(1, 'Ефросинья', 1100),
(2, 'Вадим', 1200),
(4, 'Агафья', 900),
(7, 'Наташа', 1122),
(10, 'Женя', 1000),
(11, 'Данил', 1001),
(12, 'Лена', 1000),
(24, 'Егор', 900),
(25, 'Дима', 1003),
(41, 'НН', 1021),
(42, 'НН', 1021);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `leaderboard`
--
ALTER TABLE `leaderboard`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `leaderboard`
--
ALTER TABLE `leaderboard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
