-- To seed the database:
-- 1. Login to mysql as root and source the schema.sql file.
-- 2. In mysql as root run "CREATE USER IF NOT EXISTS 'homebuddy'@'localhost' IDENTIFIED BY 'homebuddy';"
-- 3. In mysql aw root run "GRANT ALL ON home_buddy_db.* TO 'homebuddy'@'localhost';"
-- 4. Exit out of mysql and log back in as the homebuddy user. (password homebuddy)
-- 5. In vscode make sure force is set to true in server.js file.
-- 6. In vscode run "npm start" to start the application. This will drop and re-create all the tables.
-- 7. In mysql source the seed.sql file (this file).
-- 8. In vscode change force back to false in server.js file.

USE home_buddy_db;

INSERT INTO user (username, email, password) VALUES ('testuser1', 'testuser1@nowhere.com', 'testuser1');
INSERT INTO user (username, email, password) VALUES ('testuser2', 'testuser2@nowhere.com', 'testuser2');
SELECT * FROM user;


INSERT INTO item (item_name, item_info, user_id, created_at, updated_at) VALUES ('AC Filter','Filter size is 12x25x1',1,CURDATE(),CURDATE());
INSERT INTO item (item_name, item_info, user_id, created_at, updated_at) VALUES ('AC Filter','Filter size is 10x16x1',2,CURDATE(),CURDATE());
INSERT INTO item (item_name, item_info, user_id, created_at, updated_at) VALUES ('Trash','Trash day is Monday',1,CURDATE(),CURDATE());
INSERT INTO item (item_name, item_info, user_id, created_at, updated_at) VALUES ('Trash','Trash day is Tuesday',2,CURDATE(),CURDATE());
INSERT INTO item (item_name, item_info, user_id, created_at, updated_at) VALUES ('Lawn','Watering cycle is MWF for 30 minutes',1,CURDATE(),CURDATE());
INSERT INTO item (item_name, item_info, user_id, created_at, updated_at) VALUES ('Lawn','Watering cycle is Tue, Thu, Sat for 30 minutes',2,CURDATE(),CURDATE());
SELECT * FROM item;


INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 1 DAY), 1, 'change air filter', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 90 DAY), 1, 'change air filter', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 180 DAY), 1, 'change air filter', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 2 DAY), 2, 'change air filter', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 92 DAY), 2, 'change air filter', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 182 DAY), 2, 'change air filter', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 6 DAY), 3, 'Take out trash', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, notes, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 13 DAY), 3, 'Take out trash', 'recycling', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 20 DAY), 3, 'Take out trash', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, notes, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 7 DAY), 4, 'Take out trash', 'recycling', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 14 DAY), 4, 'Take out trash', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, notes, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 21 DAY), 4, 'Take out trash', 'recycling', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 1 DAY), 5, 'Water the lawn', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 3 DAY), 5, 'Water the lawn', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 6 DAY), 5, 'Water the lawn', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 8 DAY), 5, 'Water the lawn', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 10 DAY), 5, 'Water the lawn', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 2 DAY), 6, 'Water the lawn', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 4 DAY), 6, 'Water the lawn', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 7 DAY), 6, 'Water the lawn', CURDATE(), CURDATE());
INSERT INTO schedule (schedule_date, item_id, action, created_at, updated_at) VALUES (DATE_ADD(CURDATE(), INTERVAL 9 DAY), 6, 'Water the lawn', CURDATE(), CURDATE());
SELECT * FROM schedule;