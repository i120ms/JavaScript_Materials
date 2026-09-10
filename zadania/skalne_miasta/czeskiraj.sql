-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2026 at 09:01 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `czeskiraj`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `trasy`
--

CREATE TABLE `trasy` (
  `id` int(11) NOT NULL,
  `nazwa_trasy` varchar(255) NOT NULL,
  `dlugosc_trasy` decimal(4,2) NOT NULL,
  `trudnosc` int(11) NOT NULL,
  `zdjecie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `trasy`
--

INSERT INTO `trasy` (`id`, `nazwa_trasy`, `dlugosc_trasy`, `trudnosc`, `zdjecie`) VALUES
(1, 'Prachovské skály - Mała pętla', 4.50, 2, 'z1.jpg'),
(2, 'Hruboskalsko - Złota Ścieżka', 8.20, 3, 'z2.jpg'),
(3, 'Zamek Kost i dolina Plakánek', 6.00, 1, 'z3.jpg'),
(4, 'Drábské světničky - Skalne okna', 5.50, 4, 'z4.jpg'),
(5, 'Besedické skály - Skalny Labirynt', 4.00, 3, 'z5.jpg'),
(6, 'Szlak pod ruiny zamku Trosky', 7.50, 3, 'z6.jpg'),
(7, 'Klokočské skály i zamek Rotštejn', 9.00, 4, 'z7.jpg'),
(8, 'Wielka Pętla przez Valdštejn', 10.00, 2, 'z8.jpg');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `trasy`
--
ALTER TABLE `trasy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trasy`
--
ALTER TABLE `trasy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
