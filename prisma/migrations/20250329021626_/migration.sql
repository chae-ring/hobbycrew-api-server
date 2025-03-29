-- AlterTable
ALTER TABLE `user` ADD COLUMN `category` ENUM('운동', '게임', '여행', '공부', '음악', 'diy', '미디어', '기타') NOT NULL DEFAULT '운동',
    ADD COLUMN `radius` ENUM('OneKm', 'FiveKm', 'TenKm') NOT NULL DEFAULT 'OneKm',
    ADD COLUMN `region` ENUM('서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기', '강원', '제주') NOT NULL DEFAULT '서울';
