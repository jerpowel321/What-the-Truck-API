-- Truck Business Information --

INSERT INTO Trucks (businessName, cuisine, firstName, lastName, email, phone, address, city, state, zip) VALUES ("Tico's Tacos", "Mexican", "Noah", "Glasser", "noah@gmail.com", "4157289976", "555 Mission", "San Francisco", "CA", "941007")
INSERT INTO Trucks (businessName, cuisine, firstName, lastName, email, phone, address, city, state, zip) VALUES ("Fish Dish", "Chinese", "4133284446", "true")
INSERT INTO Trucks (businessName, cuisine, firstName, lastName, email, phone, address, city, state, zip) VALUES ("Jacob's Hoagies", "American", "5107288890", "true")
INSERT INTO Trucks (businessName, cuisine, firstName, middleInitial, lastName, email, phone, address, address2, city, state, zip, approved) VALUES ("The Roasted Pig", "American", "786940392", "true")
INSERT INTO Trucks (businessName, cuisine, phone, approved) VALUES ("Sushi Truck", "Japanese", "4158674930", "true")
INSERT INTO Trucks (businessName, cuisine, phone, approved) VALUES ("Frozen Banana Bonanza", "American", "4159982674", "true")
INSERT INTO Trucks (businessName, cuisine, phone, approved) VALUES ("Ol' Sally May's Grill", "American", "4150982658", "true")
INSERT INTO Trucks (businessName, cuisine, phone, approved) VALUES ("The French Quarter", "French", "4151328853", "true")
INSERT INTO Trucks (businessName, cuisine, phone, approved) VALUES ("Jimmy's Pho Truck", "Vietnamese", "4159877493", "true")
INSERT INTO Trucks (businessName, cuisine, phone, approved) VALUES ("Sajeel's Southern Grill", "Mexican", "4150098375", "true")


-- insert many


id, businessName, website, cuisine, menu, firstName, middleInitial, lastName, email, phone, address, address2, city, state, zip, approved, applicationOpen, createdAt, updatedAt

INSERT INTO Trucks (businessName, website, cuisine, menu, firstName, lastName, email, phone, address, city, state, zip, createdAt, updatedAt) VALUES ('Jen’s Pizza', 'https://pizzahub.cs/', 'Italian', 'https://pizzahub.ca/menu',  'Jennifer', 'Powell', 'jerpowel321@gmail.com', '1157289976', '555 Mission', 'San Francisco', 'CA', '941007', '2019-05-31 17:50:26', '2019-05-31 17:50:26');
INSERT INTO Trucks (businessName, website, cuisine, menu, firstName, lastName, email, phone, address, city, state, zip, createdAt, updatedAt) VALUES ("Noah's Fried Dough-a", 'https://www.krispykreme.com/', 'American', 'https://www.krispykreme.com/menu/doughnuts',  'Noah', 'Glasser', 'noah@gmail.com', '1157289977', '555 Mission', 'San Francisco', 'CA', '941007', '2019-05-31 17:50:26', '2019-05-31 17:50:26');
INSERT INTO Trucks (businessName, website, cuisine, menu, firstName, lastName, email, phone, address, city, state, zip, createdAt, updatedAt) VALUES ('H', 'https://www.joejuice.com/', 'American', 'https://www.joejuice.com/menu/',  'Mel', 'Powell', 'jerpowel321@gmail.com', '1157289976', '555 Mission', 'San Francisco', 'CA', '941007', '2019-05-31 17:50:26', '2019-05-31 17:50:26');

-- Reviews: id, truckName, userName, rating, comment, userImages, businessOwner, createdAt, updatedAt --
-- Pick & Go Sandwiches --
-- For The Love Of Ice Cream --
-- Burrito Heaven --
-- A Night In Paris --
-- Fit For A King Soup --
-- Golden Palace --
-- Jimmy's Pho-nomenal Pho --
-- Burger Boss --
-- Noah's Fried Dough-a --
-- Rare Meats --
-- Mel's Tesla Hunter --
-- Cyrus' Truck --
-- Denis Hut Jr's --
-- Jen's Pizza --
-- Mice-Cream Truck --


-- User Review Business Information --

-- Pick & Go Sandwiches --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Pick & Go Sandwiches", "Maxwell" 1, "Who makes a BLT without bacon? This business apparently!", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Pick & Go Sandwiches", "Nick" 4, "Quick Service. Short lines. Great when you need something fast for lunch.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Pick & Go Sandwiches", "Eric" 3, "It's not my favorite place but it's convenient.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");


-- For The Love Of Ice Cream --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("For the Love Of Ice Cream", "Calvin" 5, "Worth the wait!", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("For the Love Of Ice Cream", "Carlos" 5, "Vanilla bean is exceptional.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("For the Love Of Ice Cream", "Denis" 5, "AMAZING ICE CREAM SANDWICHES!", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Burrito Heaven --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Burrito Heaven", "Amber" 2, "The portions are so small. I will still hungry after eating my super size burrito.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Burrito Heaven", "Liam" 1, "So disapointed. I ordered Tacos and got a burrito. Told them they messed up my order and was told I'd have to wait another 30 minutes for them to fix it.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Burrito Heaven", "Tod" 3, "They should really change their name to Burrito Disaster. Serious question, how are they still in business?", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- A Night In Paris --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Burrito Heaven", "Amber" 2, "The portions are so small. I will still hungry after eating my super size burrito.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Burrito Heaven", "Liam" 1, "So disapointed. I ordered Tacos and got a burrito. Told them they messed up my order and was told I'd have to wait another 30 minutes for them to fix it.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Burrito Heaven", "Tod" 3, "They should really change their name to Burrito Disaster. Serious question, how are they still in business?", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Fit For A King Soup --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Fit For A King Soup", "Shayan" 5, "This is my new favorite food truck in the city! Ive tried everything on the menu and love how they have so many options.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Fit For A King Soup", "Thor" 3, "The soup here is good but it would be awesome if they had bread bowls.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Fit For A King Soup", "Ryan" 2, "Not a particular fan of the tomato soup. Too much pepper.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Fit For A King Soup", "Louis" 4, "It's damn good soup.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Golden Palace --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Golden Palace", "Robert" 4, "Love their food! Make sure to try the crab ragoons.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Golden Palace", "Keiry" 1, "Not sure if it was the fried rice or kung pao chicken but I got food poisoning. Do not risk it! Eat elsewhere.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Golden Palace", "Suzzie" 5, "Excellent Service and quick food ready to grab and go.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Jimmy's Pho-nomenal Pho --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Jimmy's Pho-nomenal Pho", "Jacob" 4, "The only place I go to get good quality Pho in the city.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Jimmy's Pho-nomenal Pho", "Sajeel" 4, "First experience trying pho and will definitely be coming back.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Jimmy's Pho-nomenal Pho", "Jerome" 5, "You can't go wrong picking anything off the menu. Jimmy makes every dish uniquely flavorful.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Jimmy's Pho-nomenal Pho", "Alex" 4, "Not a big fan a Pho but even I have to admit this place is quite special.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Burger Boss --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Burger Boss", "Nadire" 1, "My veggie burger was so dry I asked them to remake it and the second one came back burnt. DO NOT EAT HERE.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Burger Boss", "Andrew" 2, "I waited in line for 30 minutes and they gave me the wrong order. Apparently someone else took it and so I had to wait another 15 minutes.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Burger Boss", "Helina" 1, "Fries were overcooked. So disapointed in this place.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Noah's Fried Dough-a --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Noah's Fried Dough-a", "Kevin" 5, "The powder sugar donuts are to die for! Ate 5 in one sitting and don't regret it one bit.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Noah's Fried Dough-a", "Samual" 2, "I prefer donuts with less glaze.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Noah's Fried Dough-a", "Sophie" 4, "Perfect for a late afternoon snack.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Rare Meats --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Rare Meats", "James" 5, "Highly recommend trying the veggie rabbit rice plate. One word AMAZING! ", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Rare Meats", "Anca" 4, "It's nice to try exotic food occasionally. Where else will you be able to try Ostrich? Overall good experience.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Rare Meats", "Bart" 2, "Was not a fan of the goat since they use blue cheese on it.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Mel's Tesla Hunter --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Mel's Tesla Hunter", "Sophia" 5, "Escargot, just try it!", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Mel's Tesla Hunter", "Emma" 5, "Never knew there was such a thing as quick french food but this place is great! Will be back soon.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Mel's Tesla Hunter", "Lucas" 4, "I never knew you could sell food out of a Tesla but its an amazing business strategy", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Cyrus' Truck --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Cyrus' Truck", "Riley" 5, "Great mediterranean food.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Cyrus' Truck", "Amelia" 5, "Took my coworkers here and the next 30 minutes I couldn't get them to stop talking about how amazing their food was.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Cyrus' Truck", "Aria" 1, "The food just didn't taste right.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Denis Hut Jr's --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Denis Hut Jr's", "Logan" 4, "Ice Cream is a perfect blend of creamy and sweetness.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Denis Hut Jr's", "Ethan" 4, "I like how they have so many topping choices.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Denis Hut Jr's", "Owen" 5, "They found a way to reinvent sundaes and I love it!", "2019-06-02 18:50:40", "2019-06-02 18:50:40");

-- Jen's Pizza --
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Jen's Pizza", "Nikita" 5, "I'm very picky when it comes to pizza but I was shocked and happy to see how many veggie pizza options they offered. Will come back soon.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Jen's Pizza", "Anush" 1, "Pizza was good just wish they had more drink options. They ran out of Sprite! :'( ", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Jen's Pizza", "Deepak" 2, "I prefer Soma Pizza.")

--Mice-Cream Truck--
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Mice-Cream Truck", "Charles" 3, "Surprisingly their mint ice cream is not so bad.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Mice-Cream Truck", "Sam" 1, "Not sure if it was the fried rice or kung pao chicken but I got food poisoning. Do not risk it! Eat elsewhere.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");
INSERT INTO Reviews (truckName, userName, rating, comment, createdAt, updatedAt) VALUES ("Mice-Cream Truck", "Tod" 2, "Their ice cream is great, but not worth a 50 minute wait.", "2019-06-02 18:50:40", "2019-06-02 18:50:40");