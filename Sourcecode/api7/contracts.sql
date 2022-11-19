-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2022 at 08:44 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contracts`
--

-- --------------------------------------------------------

--
-- Table structure for table `contract`
--

CREATE TABLE `contract` (
  `contract_id` int(11) NOT NULL,
  `contract_name` varchar(50) NOT NULL,
  `Signing_date` date NOT NULL,
  `exprtion_date` date NOT NULL,
  `total_cost` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `items` varchar(50) NOT NULL,
  `Legal_officer_name` varchar(50) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `warranty_start_date` date NOT NULL,
  `warranty__end_date` date NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `company_phone` varchar(50) NOT NULL,
  `liaison_officer_name` varchar(50) NOT NULL,
  `status` enum('EXPIRED','APPROVED','REJECTED','WAITING') DEFAULT 'WAITING'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contract`
--

INSERT INTO `contract` (`contract_id`, `contract_name`, `Signing_date`, `exprtion_date`, `total_cost`, `amount`, `items`, `Legal_officer_name`, `employee_id`, `warranty_start_date`, `warranty__end_date`, `company_name`, `address`, `company_phone`, `liaison_officer_name`, `status`) VALUES
(2, 'ee', '2022-11-03', '2022-11-24', 3, 3, 'laptop', 'mohammed aldabee', 1, '2022-11-23', '2022-11-24', 'student', 'jordan', '0000000000', 'eeeeee', 'WAITING'),
(3, 'eeeee', '2022-11-01', '2022-12-01', 1, 1, 'laptop', 'mohammed aldabee', 1, '2022-11-16', '2022-11-27', 'student', 'jordan', '9999999', 'ffffffff', 'WAITING'),
(4, 'car', '2022-12-01', '2022-12-21', 1, 1, 'laptop', 'mohammed aldabee', 1, '2022-11-30', '2022-11-30', 'eeeeeeeeeee', 'ddddddddddddddd', '2222222222', 'sssssssssssss', 'WAITING'),
(5, 'ddddd', '2022-11-10', '2022-11-23', 3, 3, 'ddddddddd', 'dddddddddddddd', 1, '2022-11-11', '2022-11-01', 'ddddddddddd', 'dddddddddddddddddd', 'ddddddddddddddddd', 'ddddddddddddddddddd', 'WAITING'),
(6, 'ee', '2022-11-03', '2022-11-24', 3, 3, 'laptop', 'mohammed aldabee', 1, '2022-11-23', '2022-11-24', 'student', 'jordan', '0000000000', 'eeeeee', 'WAITING');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_id` int(11) NOT NULL,
  `department_name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `department_id` int(11) DEFAULT NULL,
  `phone` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL DEFAULT 'user',
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `department_id`, `phone`, `role`, `password`) VALUES
(1, 'Ziad Wassel', 'ziad.ab@gmail.com', NULL, '+962 2787987915', 'user', 'h15234684'),
(12, 'Ziad Wassel Abazeed', 'zi@gmail.com', NULL, '+962 2787987915', 'user', 'h15234684');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contract`
--
ALTER TABLE `contract`
  ADD PRIMARY KEY (`contract_id`),
  ADD KEY `contract_ibfk_1` (`employee_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `department_id` (`department_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contract`
--
ALTER TABLE `contract`
  MODIFY `contract_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contract`
--
ALTER TABLE `contract`
  ADD CONSTRAINT `contract_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
