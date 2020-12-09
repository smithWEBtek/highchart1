User.create(username: 'jon', email: 'jon@abc.com', password: 'password')
User.create(username: 'jane', email: 'jane@abc.com', password: 'password')
User.create(username: 'joe', email: 'joe@abc.com', password: 'password')

Source.create(name: 'google news', url: 'https://news.google.com')
Source.create(name: 'yahoo news', url: 'https://news.yahoo.com')
Source.create(name: 'cnn news', url: 'https://cnn.com')

UserSource.create(user_id: 1, source_id: 1)
UserSource.create(user_id: 2, source_id: 2)
UserSource.create(user_id: 3, source_id: 3)