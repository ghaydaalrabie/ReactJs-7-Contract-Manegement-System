-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2022 at 04:52 PM
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
-- Table structure for table `contracts`
--

CREATE TABLE `contracts` (
  `id` int(11) NOT NULL,
  `contract_name` varchar(50) NOT NULL,
  `signing_date` date NOT NULL,
  `expiration_date` date NOT NULL,
  `total_cost` int(11) NOT NULL,
  `legal_officer_name` varchar(50) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `company_location` varchar(50) NOT NULL,
  `company_contact` varchar(50) NOT NULL,
  `status` enum('Approved','Not Approved','Expired','') NOT NULL DEFAULT 'Not Approved',
  `user_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contracts`
--

INSERT INTO `contracts` (`id`, `contract_name`, `signing_date`, `expiration_date`, `total_cost`, `legal_officer_name`, `company_name`, `company_location`, `company_contact`, `status`, `user_id`) VALUES
(12, 'Oracle Contract', '2022-11-02', '2022-11-30', 1000, 'ghayda', 'Oracle', 'Jordan-Amman', '0790125645', 'Approved', 1002),
(14, 'Intuit Contract', '2022-10-04', '2022-11-22', 2000, 'ghayda', 'Intuit', 'Jordan-Amman', '0790125645', 'Approved', 1002),
(15, 'Microsoft Contract', '2022-09-14', '2022-11-22', 3000, 'majd', 'Microsoft', 'Jordan-Amman', '0790132545', 'Not Approved', 1005),
(16, 'Splunk Contract', '2022-09-04', '2022-11-01', 2000, 'majd', 'Splunk', 'Jordan-Amman', '0790132256', 'Approved', 1005),
(17, 'Destiny Builders Contract', '2022-08-10', '2022-11-27', 1500, 'asmaa', 'Destiny Builders', 'Jordan-Amman', '0790145785', 'Approved', 1006),
(18, 'Cosmik technology Contract', '2022-06-08', '2022-11-23', 4000, 'asmaa', 'Cosmik technology', 'Jordan-Amman', '0790124578', 'Not Approved', 1006),
(19, 'Big Rock Construction Contract', '2022-06-08', '2022-11-21', 5000, 'asmaa', 'Big Rock Construction Contract', 'Jordan-Amman', '079088924578', 'Approved', 1006),
(21, 'Dozer Construction Contract', '2022-04-06', '2022-11-30', 5000, 'doaa', 'Dozer Construction', 'Jordan-Amman', '0790157848', 'Approved', 1003);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contracts`
--
ALTER TABLE `contracts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contracts`
--
ALTER TABLE `contracts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contracts`
--
ALTER TABLE `contracts`
  ADD CONSTRAINT `contracts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
